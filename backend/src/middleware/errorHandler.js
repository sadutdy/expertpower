/**
 * Global Error Handler
 * ====================
 * Catches all unhandled errors and returns safe JSON responses.
 * Never leaks stack traces or internal details in production.
 */

module.exports = function errorHandler(err, _req, res, _next) {
  const isDev = process.env.NODE_ENV !== "production";

  console.error("[ErrorHandler]", err);

  // CORS errors
  if (err.message?.startsWith("CORS blocked")) {
    return res.status(403).json({
      success: false,
      error: "Request blocked by CORS policy.",
    });
  }

  // Validation errors from express-validator
  if (err.status === 400 && err.errors) {
    return res.status(400).json({
      success: false,
      error: "Validation failed",
      details: err.errors,
    });
  }

  // Generic fallback
  res.status(err.status || 500).json({
    success: false,
    error: isDev ? err.message : "Internal server error. Please try again later.",
    ...(isDev && { stack: err.stack }),
  });
};
