import { NextRequest, NextResponse } from "next/server";

export interface ContactFormData {
  name: string;
  email: string;
  company?: string;
  phone?: string;
  service?: string;
  message: string;
}

interface ContactApiResponse {
  success: boolean;
  message?: string;
  error?: string;
  details?: { field: string; message: string }[];
}

function getEnvVar(name: string): string | undefined {
  return process.env[name];
}

function mask(value: string | undefined): string {
  if (!value) return "[NOT SET]";
  if (value.length <= 8) return "***";
  return `${value.slice(0, 3)}...${value.slice(-3)}`;
}

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function sanitizeInput(input: unknown): string | undefined {
  if (input === null || input === undefined) return undefined;
  return String(input).trim();
}

function validateEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function logConfig() {
  const receiver = getEnvVar("CONTACT_RECEIVER");
  const sender = getEnvVar("BREVO_SENDER_EMAIL");

  console.log("[ContactAPI] Brevo configuration:");
  console.log(`  API_KEY: ${mask(getEnvVar("BREVO_API_KEY"))}`);
  console.log(`  SENDER: ${sender || "[NOT SET]"}`);
  console.log(`  RECEIVER: ${receiver || "[NOT SET]"}`);
}

function getBrevoErrorMessage(error: unknown): string {
  if (!(error instanceof Error)) {
    return "An unexpected error occurred while sending the email.";
  }

  const message = error.message.toLowerCase();

  if (message.includes("unauthorized") || message.includes("invalid api key") || message.includes("key not found")) {
    return "Brevo API authentication failed. Please check the API key.";
  }

  if (message.includes("sender") && message.includes("not valid")) {
    return "The sender email is not verified in Brevo. Please verify the sender domain/email.";
  }

  if (message.includes("bad request")) {
    return "The email request was rejected by Brevo. Please check the sender and receiver addresses.";
  }

  return error.message;
}

export async function POST(request: NextRequest): Promise<NextResponse<ContactApiResponse>> {
  try {
    // Parse and sanitize body
    const body = (await request.json()) as Record<string, unknown>;

    // Honeypot: a hidden field real users never fill in. Bots that
    // autofill every input will trip it, so silently pretend success.
    if (sanitizeInput(body.website)) {
      return NextResponse.json(
        { success: true, message: "Thank you! Your message has been sent successfully." },
        { status: 200 }
      );
    }

    const name = sanitizeInput(body.name);
    const email = sanitizeInput(body.email)?.toLowerCase();
    const company = sanitizeInput(body.company);
    const phone = sanitizeInput(body.phone);
    const service = sanitizeInput(body.service);
    const message = sanitizeInput(body.message);

    // Validation
    const details: { field: string; message: string }[] = [];

    if (!name || name.length < 2) {
      details.push({ field: "name", message: "Full name is required." });
    } else if (name.length > 100) {
      details.push({ field: "name", message: "Full name must be under 100 characters." });
    }

    if (!email) {
      details.push({ field: "email", message: "Email address is required." });
    } else if (!validateEmail(email)) {
      details.push({ field: "email", message: "Please enter a valid email address." });
    } else if (email.length > 254) {
      details.push({ field: "email", message: "Email address is too long." });
    }

    if (company && company.length > 150) {
      details.push({ field: "company", message: "Company name must be under 150 characters." });
    }

    if (phone && phone.length > 30) {
      details.push({ field: "phone", message: "Phone number must be under 30 characters." });
    }

    if (service && service.length > 100) {
      details.push({ field: "service", message: "Service must be under 100 characters." });
    }

    if (!message || message.length < 10) {
      details.push({ field: "message", message: "Message must be at least 10 characters." });
    } else if (message.length > 5000) {
      details.push({ field: "message", message: "Message must be under 5000 characters." });
    }

    if (details.length > 0) {
      return NextResponse.json(
        { success: false, error: "Validation failed.", details },
        { status: 400 }
      );
    }

    const BREVO_API_KEY = getEnvVar("BREVO_API_KEY");
    const BREVO_SENDER_EMAIL = getEnvVar("BREVO_SENDER_EMAIL");
    const CONTACT_RECEIVER = getEnvVar("CONTACT_RECEIVER");

    // Verify environment configuration
    if (!BREVO_API_KEY || !BREVO_SENDER_EMAIL || !CONTACT_RECEIVER) {
      logConfig();
      console.error("[ContactAPI] Missing one or more required Brevo environment variables.");
      return NextResponse.json(
        { success: false, error: "Server configuration error. Please try again later." },
        { status: 500 }
      );
    }

    if (!validateEmail(BREVO_SENDER_EMAIL)) {
      console.error(`[ContactAPI] Invalid BREVO_SENDER_EMAIL: ${BREVO_SENDER_EMAIL}`);
      return NextResponse.json(
        { success: false, error: "Server configuration error. Invalid sender email." },
        { status: 500 }
      );
    }

    if (!validateEmail(CONTACT_RECEIVER)) {
      console.error(`[ContactAPI] Invalid CONTACT_RECEIVER: ${CONTACT_RECEIVER}`);
      return NextResponse.json(
        { success: false, error: "Server configuration error. Invalid receiver email." },
        { status: 500 }
      );
    }

    const subjectLine = service
      ? `[Website Enquiry] ${service}`
      : "[Website Enquiry] New Message";

    const htmlBody = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; color: #333;">
        <h2 style="color: #DC2626; border-bottom: 2px solid #DC2626; padding-bottom: 8px;">
          New Website Enquiry
        </h2>

        <table style="width: 100%; border-collapse: collapse; margin-top: 16px;">
          <tr>
            <td style="padding: 8px 0; font-weight: bold; width: 120px; vertical-align: top;">Name:</td>
            <td style="padding: 8px 0;">${escapeHtml(name!)}</td>
          </tr>
          <tr style="background: #f9fafb;">
            <td style="padding: 8px 0; font-weight: bold; vertical-align: top;">Email:</td>
            <td style="padding: 8px 0;"><a href="mailto:${email}">${email}</a></td>
          </tr>
          ${company ? `
          <tr>
            <td style="padding: 8px 0; font-weight: bold; vertical-align: top;">Company:</td>
            <td style="padding: 8px 0;">${escapeHtml(company)}</td>
          </tr>` : ""}
          ${phone ? `
          <tr style="background: #f9fafb;">
            <td style="padding: 8px 0; font-weight: bold; vertical-align: top;">Phone:</td>
            <td style="padding: 8px 0;">${escapeHtml(phone)}</td>
          </tr>` : ""}
          ${service ? `
          <tr>
            <td style="padding: 8px 0; font-weight: bold; vertical-align: top;">Service:</td>
            <td style="padding: 8px 0;">${escapeHtml(service)}</td>
          </tr>` : ""}
          <tr style="background: #f9fafb;">
            <td style="padding: 8px 0; font-weight: bold; vertical-align: top;">Submitted:</td>
            <td style="padding: 8px 0;">${new Date().toLocaleString("en-SA", { timeZone: "Asia/Riyadh" })}</td>
          </tr>
        </table>

        <div style="margin-top: 24px; padding: 16px; background: #f3f4f6; border-radius: 8px;">
          <h3 style="margin: 0 0 8px 0; font-size: 14px; color: #6b7280;">Message</h3>
          <p style="margin: 0; white-space: pre-wrap; line-height: 1.6;">${escapeHtml(message!)}</p>
        </div>

        <p style="margin-top: 24px; font-size: 12px; color: #9ca3af;">
          This email was sent from the Expert Power website contact form.
        </p>
      </div>
    `;

    const textBody = `
New Website Enquiry
====================

Name: ${name}
Email: ${email}
${company ? `Company: ${company}\n` : ""}${phone ? `Phone: ${phone}\n` : ""}${service ? `Service: ${service}\n` : ""}Submitted: ${new Date().toISOString()}

Message:
${message}
    `.trim();

    console.log(`[ContactAPI] Sending email via Brevo from ${BREVO_SENDER_EMAIL} to ${CONTACT_RECEIVER}...`);

    const brevoResponse = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "api-key": BREVO_API_KEY,
      },
      body: JSON.stringify({
        sender: {
          name: "Expert Power Website",
          email: BREVO_SENDER_EMAIL,
        },
        to: [
          {
            email: CONTACT_RECEIVER,
          },
        ],
        replyTo: {
          name: name,
          email: email,
        },
        subject: subjectLine,
        htmlContent: htmlBody,
        textContent: textBody,
      }),
    });

    if (!brevoResponse.ok) {
      const errorBody = await brevoResponse.text();
      console.error(`[ContactAPI] Brevo API error ${brevoResponse.status}:`, errorBody);
      throw new Error(`Brevo request failed with status ${brevoResponse.status}: ${errorBody}`);
    }

    const responseData = await brevoResponse.json();
    console.log("[ContactAPI] Brevo send response:", responseData);

    return NextResponse.json(
      {
        success: true,
        message: "Thank you! Your message has been sent successfully.",
      },
      { status: 200 }
    );
  } catch (error) {
    const friendlyMessage = getBrevoErrorMessage(error);
    console.error("[ContactAPI] Submission failed:", error);

    return NextResponse.json(
      { success: false, error: friendlyMessage },
      { status: 500 }
    );
  }
}
