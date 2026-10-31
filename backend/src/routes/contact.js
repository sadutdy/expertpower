/**
 * Contact API Route
 * =================
 * POST /api/contact
 *
 * Handles contact form submissions:
 * 1. Validates & sanitizes input
 * 2. Checks rate limit
 * 3. Sends email via SMTP
 * 4. Logs to CSV
 * 5. Returns success/error response
 *
 * CAPTCHA integration is ready — uncomment the verifyCaptcha
 * middleware and add the CAPTCHA token field when ready.
 */

const express = require("express");
const router = express.Router();

const { contactRateLimiter } = require("../middleware/rateLimiter");
const { contactValidationRules, handleValidationErrors } = require("../middleware/validator");
const { sendContactEmail } = require("../services/emailService");
const { writeEnquiryToCsv } = require("../services/csvService");

// ── CAPTCHA Verification (Ready to Enable) ──────────────────────────
// Uncomment this section when you have a CAPTCHA provider configured.
/*
async function verifyCaptcha(req, res, next) {
  const token = req.body.captchaToken;
  const secret = process.env.CAPTCHA_SECRET_KEY;

  if (!secret) {
    console.warn("[CAPTCHA] Secret key not configured — skipping verification");
    return next();
  }

  if (!token) {
    return res.status(400).json({
      success: false,
      error: "CAPTCHA verification required.",
    });
  }

  try {
    const verifyUrl = process.env.CAPTCHA_VERIFY_URL;
    const response = await fetch(verifyUrl, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({ secret, response: token }),
    });
    const data = await response.json();

    if (!data.success) {
      console.warn("[CAPTCHA] Verification failed:", data);
      return res.status(400).json({
        success: false,
        error: "CAPTCHA verification failed. Please try again.",
      });
    }
    next();
  } catch (err) {
    console.error("[CAPTCHA] Verification error:", err);
    return res.status(500).json({
      success: false,
      error: "CAPTCHA verification error. Please try again.",
    });
  }
}
*/

// ── POST /api/contact ───────────────────────────────────────────────
router.post(
  "/",
  contactRateLimiter,
  // verifyCaptcha, // Uncomment when CAPTCHA is configured
  contactValidationRules,
  handleValidationErrors,
  async (req, res, next) => {
    const { name, email, company, phone, service, message } = req.body;

    // Extract client metadata
    const ipAddress =
      req.headers["x-forwarded-for"]?.split(",")[0]?.trim() || req.ip || "unknown";
    const userAgent = req.headers["user-agent"] || "unknown";

    try {
      // 1. Send email
      await sendContactEmail({ name, email, company, phone, service, message });

      // 2. Log to CSV (non-blocking — don't fail if CSV write fails)
      try {
        writeEnquiryToCsv({
          name,
          email,
          company,
          phone,
          service,
          message,
          ipAddress,
          userAgent,
        });
      } catch (csvErr) {
        console.error("[CSVService] Failed to write enquiry:", csvErr.message);
      }

      // 3. Success response
      console.log(`[ContactAPI] Enquiry received from ${email} (IP: ${ipAddress})`);
      res.status(200).json({
        success: true,
        message: "Thank you! Your message has been sent successfully.",
      });
    } catch (err) {
      console.error("[ContactAPI] Submission failed:", err.message);
      next(err);
    }
  }
);

module.exports = router;
