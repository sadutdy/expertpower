/**
 * Rate Limiting Middleware
 * ========================
 * Prevents abuse by limiting each IP to 5 submissions per 15 minutes.
 * Uses in-memory store (sufficient for single-instance deployment).
 * For multi-instance or high-traffic, switch to Redis store.
 */

const rateLimit = require("express-rate-limit");

const contactRateLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // Max 5 requests per window per IP
  standardHeaders: true, // Return rate limit info in `RateLimit-*` headers
  legacyHeaders: false, // Disable `X-RateLimit-*` headers
  message: {
    success: false,
    error: "Too many submissions. Please try again after 15 minutes.",
  },
  // Use a custom key generator that respects X-Forwarded-For (for proxies)
  keyGenerator: (req) => {
    return req.headers["x-forwarded-for"]?.split(",")[0]?.trim() || req.ip;
  },
  handler: (req, res, _next, options) => {
    console.warn(`[RateLimit] Blocked IP: ${req.ip} — too many requests`);
    res.status(429).json(options.message);
  },
});

module.exports = { contactRateLimiter };
