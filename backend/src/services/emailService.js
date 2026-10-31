/**
 * Email Service
 * =============
 * Sends contact form enquiries via Nodemailer SMTP.
 *
 * Security practices:
 * - Uses `replyTo` set to the submitter's email instead of spoofing the From address.
 * - Never exposes SMTP credentials to the frontend.
 * - All credentials come from environment variables.
 */

const nodemailer = require("nodemailer");

// ── Create Transporter ──────────────────────────────────────────────
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT) || 587,
  secure: Number(process.env.SMTP_PORT) === 465, // true for port 465, false for others
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
  // Connection pooling for better performance
  pool: true,
  maxConnections: 3,
});

// Verify connection on startup
transporter.verify((error) => {
  if (error) {
    console.error("[EmailService] SMTP connection failed:", error.message);
  } else {
    console.log("[EmailService] SMTP transporter ready");
  }
});

// ── Send Contact Enquiry Email ──────────────────────────────────────
async function sendContactEmail({ name, email, company, phone, service, message }) {
  const receiver = process.env.CONTACT_RECEIVER;
  if (!receiver) {
    throw new Error("CONTACT_RECEIVER environment variable is not set.");
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
          <td style="padding: 8px 0;">${escapeHtml(name)}</td>
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
        <p style="margin: 0; white-space: pre-wrap; line-height: 1.6;">${escapeHtml(message)}</p>
      </div>

      <p style="margin-top: 24px; font-size: 12px; color: #9ca3af;">
        This email was sent from the Expert Power website contact form.
      </p>
    </div>
  `;

  const mailOptions = {
    from: `"Expert Power Website" <${process.env.SMTP_USER}>`,
    to: receiver,
    replyTo: email, // Replies go to the person who submitted the form
    subject: subjectLine,
    html: htmlBody,
    // Plain text fallback
    text: `
New Website Enquiry
===================

Name: ${name}
Email: ${email}
${company ? `Company: ${company}\n` : ""}${phone ? `Phone: ${phone}\n` : ""}${service ? `Service: ${service}\n` : ""}Submitted: ${new Date().toISOString()}

Message:
${message}
    `.trim(),
  };

  const info = await transporter.sendMail(mailOptions);
  console.log(`[EmailService] Email sent: ${info.messageId}`);

  // Log preview URL for Ethereal test accounts (development only)
  const previewUrl = require("nodemailer").getTestMessageUrl(info);
  if (previewUrl) {
    console.log(`[EmailService] Preview URL: ${previewUrl}`);
  }

  return info;
}

// ── HTML Escape Helper ──────────────────────────────────────────────
function escapeHtml(text) {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

module.exports = { sendContactEmail };
