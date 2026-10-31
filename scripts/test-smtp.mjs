import nodemailer from "nodemailer";

const requiredVars = ["SMTP_HOST", "SMTP_PORT", "SMTP_USER", "SMTP_PASS", "CONTACT_RECEIVER"];
const missing = requiredVars.filter((v) => !process.env[v]);

if (missing.length > 0) {
  console.error("Missing environment variables:", missing.join(", "));
  console.error("Make sure .env.local exists in the project root.");
  process.exit(1);
}

const host = process.env.SMTP_HOST;
const port = Number(process.env.SMTP_PORT);
const user = process.env.SMTP_USER;
const pass = process.env.SMTP_PASS;
const receiver = process.env.CONTACT_RECEIVER;

function mask(value) {
  if (!value) return "[EMPTY]";
  if (value.length <= 8) return "***";
  return `${value.slice(0, 3)}...${value.slice(-3)}`;
}

console.log("=== SMTP Diagnostic ===");
console.log(`Host:        ${host}`);
console.log(`Port:        ${port}`);
console.log(`User:        ${user}`);
console.log(`Password:    ${mask(pass)}`);
console.log(`Receiver:    ${receiver}`);
console.log("");

const transporter = nodemailer.createTransport({
  host,
  port,
  secure: port === 465,
  auth: { user, pass },
  tls: { rejectUnauthorized: true },
  connectionTimeout: 20000,
  greetingTimeout: 20000,
  socketTimeout: 20000,
  logger: true,
  debug: true,
});

try {
  console.log("Verifying SMTP connection...");
  await transporter.verify();
  console.log("SMTP connection verified successfully.");
} catch (err) {
  console.error("SMTP verification failed:");
  console.error(`Code:    ${err.code || "N/A"}`);
  console.error(`Message: ${err.message}`);
  if (err.response) {
    console.error(`Response: ${err.response}`);
  }

  if (err.code === "EAUTH" || (err.message && err.message.includes("535"))) {
    console.error("\nDiagnosis: Authentication failed.");
    console.error("- If MFA is enabled for this mailbox, use an App Password.");
    console.error("- If MFA is disabled, the regular password may be wrong.");
    console.error("- If SMTP AUTH is disabled for this mailbox, enable it in the Microsoft 365 admin center.");
  } else if (err.code === "ECONNECTION" || err.code === "ENOTFOUND") {
    console.error("\nDiagnosis: Could not connect to SMTP host. Check host/port.");
  } else if (err.message && err.message.includes("SELF_SIGNED_CERT")) {
    console.error("\nDiagnosis: TLS certificate issue.");
  }

  process.exit(1);
}

console.log("\nAttempting to send a test email (not actually queued)...");
try {
  const info = await transporter.sendMail({
    from: `"SMTP Test" <${user}>`,
    to: receiver,
    subject: "SMTP Test",
    text: "This is a test email from the SMTP diagnostic script.",
  });

  console.log("Test email accepted by SMTP server:");
  console.log(`Message ID: ${info.messageId}`);
  console.log(`Accepted:   ${JSON.stringify(info.accepted)}`);
  console.log(`Rejected:   ${JSON.stringify(info.rejected)}`);

  const previewUrl = nodemailer.getTestMessageUrl(info);
  if (previewUrl) {
    console.log(`Preview:    ${previewUrl}`);
  }
} catch (err) {
  console.error("Test email failed:");
  console.error(`Code:    ${err.code || "N/A"}`);
  console.error(`Message: ${err.message}`);
  if (err.response) {
    console.error(`Response: ${err.response}`);
  }
  process.exit(1);
}
