/**
 * Expert Power — Contact API Server
 * ==================================
 * Production-ready Express server for handling contact form submissions.
 *
 * Features:
 * - CORS-enabled for static frontend
 * - Rate limiting (5 requests / 15 min per IP)
 * - Input validation & sanitization
 * - SMTP email delivery via Nodemailer
 * - CSV logging with monthly rotation
 * - Graceful error handling
 * - CAPTCHA-ready architecture
 */

require("dotenv").config();

const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");

const contactRoute = require("./routes/contact");
const errorHandler = require("./middleware/errorHandler");

const app = express();
const PORT = process.env.PORT || 3001;

// ── CORS Configuration ──────────────────────────────────────────────
// Allows requests only from configured frontend origins.
// In development, localhost:3456 is auto-allowed.
const allowedOrigins = [
  ...new Set([
    ...(process.env.ALLOWED_ORIGINS || "")
      .split(",")
      .map((o) => o.trim())
      .filter(Boolean),
    ...(process.env.NODE_ENV !== "production"
      ? ["http://localhost:3456", "http://localhost:3000"]
      : []),
  ]),
];

const corsOptions = {
  origin: (origin, callback) => {
    // Allow requests with no origin (e.g., mobile apps, curl)
    if (!origin) return callback(null, true);
    if (allowedOrigins.includes(origin)) return callback(null, true);
    callback(new Error(`CORS blocked: ${origin}`));
  },
  methods: ["POST", "GET", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: false,
};

app.use(cors(corsOptions));
app.options("*", cors(corsOptions));

// ── Security & Logging ──────────────────────────────────────────────
app.use(helmet());
app.use(express.json({ limit: "1mb" }));
app.use(morgan("combined"));

// ── Health Check ────────────────────────────────────────────────────
app.get("/health", (_req, res) => {
  res.status(200).json({ status: "ok", timestamp: new Date().toISOString() });
});

// ── API Routes ──────────────────────────────────────────────────────
app.use("/api/contact", contactRoute);

// ── 404 Handler ─────────────────────────────────────────────────────
app.use((_req, res) => {
  res.status(404).json({ error: "Endpoint not found" });
});

// ── Global Error Handler ────────────────────────────────────────────
app.use(errorHandler);

// ── Start Server ────────────────────────────────────────────────────
app.listen(PORT, () => {
  console.log(`[ExpertPower API] Server running on port ${PORT}`);
  console.log(`[ExpertPower API] Environment: ${process.env.NODE_ENV || "development"}`);
  console.log(`[ExpertPower API] Allowed origins: ${allowedOrigins.join(", ") || "*"}`);
});

module.exports = app;
