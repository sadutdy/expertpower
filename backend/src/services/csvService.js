/**
 * CSV Storage Service
 * ===================
 * Stores every enquiry in a monthly-rotated CSV file.
 *
 * Features:
 * - Auto-creates CSV with headers if file doesn't exist
 * - Properly escapes commas, quotes, and newlines (RFC 4180 compliant)
 * - UTF-8 encoding with BOM for Excel compatibility
 * - Monthly rotation: enquiries-YYYY-MM.csv
 */

const fs = require("fs");
const path = require("path");

const DATA_DIR = path.join(__dirname, "../../data");

// Ensure data directory exists
if (!fs.existsSync(DATA_DIR)) {
  fs.mkdirSync(DATA_DIR, { recursive: true });
  console.log(`[CSVService] Created data directory: ${DATA_DIR}`);
}

const CSV_HEADERS = [
  "DateTime",
  "Name",
  "Email",
  "Company",
  "Phone",
  "Service",
  "Message",
  "IPAddress",
  "UserAgent",
];

// ── Get Current Month's CSV File Path ───────────────────────────────
function getCurrentCsvPath() {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  return path.join(DATA_DIR, `enquiries-${year}-${month}.csv`);
}

// ── Escape CSV Field (RFC 4180) ─────────────────────────────────────
function escapeCsvField(field) {
  if (field === null || field === undefined) return "";
  const str = String(field);

  // If field contains comma, quote, or newline → wrap in quotes and escape inner quotes
  if (/[",\n\r]/.test(str)) {
    return `"${str.replace(/"/g, `""`)}"`;
  }
  return str;
}

// ── Write Enquiry to CSV ────────────────────────────────────────────
function writeEnquiryToCsv({ name, email, company, phone, service, message, ipAddress, userAgent }) {
  const filePath = getCurrentCsvPath();
  const now = new Date();

  // ISO 8601 timestamp
  const dateTime = now.toISOString();

  // Create file with headers if it doesn't exist
  const fileExists = fs.existsSync(filePath);
  if (!fileExists) {
    const headerLine = CSV_HEADERS.map(escapeCsvField).join(",") + "\n";
    fs.writeFileSync(filePath, "\uFEFF" + headerLine, { encoding: "utf-8" });
    console.log(`[CSVService] Created new file: ${path.basename(filePath)}`);
  }

  // Build the data row
  const row = [
    dateTime,
    name || "",
    email || "",
    company || "",
    phone || "",
    service || "",
    message || "",
    ipAddress || "",
    userAgent || "",
  ].map(escapeCsvField).join(",") + "\n";

  // Append to file
  fs.appendFileSync(filePath, row, { encoding: "utf-8" });
  console.log(`[CSVService] Appended enquiry from ${email} to ${path.basename(filePath)}`);
}

module.exports = { writeEnquiryToCsv, getCurrentCsvPath };
