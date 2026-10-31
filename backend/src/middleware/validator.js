/**
 * Input Validation & Sanitization
 * ================================
 * Validates contact form submissions using express-validator.
 * All inputs are trimmed and escaped to prevent XSS/injection.
 */

const { body, validationResult } = require("express-validator");

// ── Validation Rules ────────────────────────────────────────────────
const contactValidationRules = [
  body("name")
    .trim()
    .notEmpty()
    .withMessage("Name is required.")
    .isLength({ min: 2, max: 100 })
    .withMessage("Name must be between 2 and 100 characters.")
    .escape(),

  body("email")
    .trim()
    .notEmpty()
    .withMessage("Email is required.")
    .isEmail()
    .withMessage("Please provide a valid email address.")
    .normalizeEmail()
    .isLength({ max: 254 })
    .withMessage("Email is too long."),

  body("company")
    .optional({ values: "falsy" })
    .trim()
    .isLength({ max: 100 })
    .withMessage("Company name must not exceed 100 characters.")
    .escape(),

  body("phone")
    .optional({ values: "falsy" })
    .trim()
    .isLength({ max: 50 })
    .withMessage("Phone number must not exceed 50 characters.")
    .escape(),

  body("service")
    .optional({ values: "falsy" })
    .trim()
    .isLength({ max: 100 })
    .withMessage("Service interest must not exceed 100 characters.")
    .escape(),

  body("message")
    .trim()
    .notEmpty()
    .withMessage("Message is required.")
    .isLength({ max: 5000 })
    .withMessage("Message must not exceed 5000 characters.")
    .escape(),
];

// ── Validation Result Handler ───────────────────────────────────────
function handleValidationErrors(req, res, next) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      success: false,
      error: "Validation failed. Please check your inputs.",
      details: errors.array().map((e) => ({
        field: e.path,
        message: e.msg,
      })),
    });
  }
  next();
}

module.exports = { contactValidationRules, handleValidationErrors };
