# Expert Power — Contact API

Production-ready Node.js/Express API for handling contact form submissions from the Expert Power website.

## Features

- **CORS-enabled** for static frontend hosting
- **Rate limiting** — 5 submissions per IP per 15 minutes
- **Input validation & sanitization** — prevents XSS and injection
- **SMTP email delivery** via Nodemailer
- **CSV logging** with monthly file rotation
- **CAPTCHA-ready** — Cloudflare Turnstile or reCAPTCHA integration prepared
- **Graceful error handling** — never leaks internal details

---

## Quick Start

### 1. Install Dependencies

```bash
cd backend
npm install
```

### 2. Configure Environment

```bash
cp .env.example .env
# Edit .env with your SMTP credentials
```

### 3. Run (Development)

```bash
npm run dev
```

### 4. Run (Production)

```bash
npm start
```

Server runs on port `3001` by default.

---

## Environment Variables

| Variable | Required | Description |
|----------|----------|-------------|
| `PORT` | No | Server port (default: 3001) |
| `NODE_ENV` | No | `production` or `development` |
| `ALLOWED_ORIGINS` | Yes | Comma-separated frontend URLs |
| `SMTP_HOST` | Yes | SMTP server hostname |
| `SMTP_PORT` | Yes | SMTP server port (587 or 465) |
| `SMTP_USER` | Yes | SMTP username |
| `SMTP_PASS` | Yes | SMTP password / app-specific password |
| `CONTACT_RECEIVER` | Yes | Email address that receives enquiries |
| `CAPTCHA_SECRET_KEY` | No | Cloudflare Turnstile or reCAPTCHA secret |
| `CAPTCHA_VERIFY_URL` | No | CAPTCHA verification endpoint |

---

## API Reference

### POST /api/contact

Submit a contact form enquiry.

**Request Body:**

```json
{
  "name": "Ahmed Al-Rashid",
  "email": "ahmed@example.com",
  "company": "Saudi Aramco",
  "phone": "+966 50 123 4567",
  "service": "Calibration Service",
  "message": "We need on-site calibration for 50+ instruments."
}
```

**Required fields:** `name`, `email`, `message`

**Response (Success):**

```json
{
  "success": true,
  "message": "Thank you! Your message has been sent successfully."
}
```

**Response (Validation Error):**

```json
{
  "success": false,
  "error": "Validation failed. Please check your inputs.",
  "details": [
    { "field": "email", "message": "Please provide a valid email address." }
  ]
}
```

**Response (Rate Limited):**

```json
{
  "success": false,
  "error": "Too many submissions. Please try again after 15 minutes."
}
```

### GET /health

Health check endpoint.

**Response:**

```json
{
  "status": "ok",
  "timestamp": "2026-05-29T12:34:56.789Z"
}
```

---

## Deployment

### Option A: VPS / Dedicated Server (Recommended)

1. Clone repo to server
2. `cd backend && npm install`
3. Create `.env` file
4. Run with PM2:
   ```bash
   npm install -g pm2
   pm2 start src/app.js --name expertpower-api
   pm2 startup
   pm2 save
   ```
5. Put behind Nginx reverse proxy with SSL

### Option B: Render.com (Free Tier)

1. Push backend folder to a Git repo
2. Create a new Web Service on Render
3. Set build command: `npm install`
4. Set start command: `npm start`
5. Add environment variables in Render dashboard

### Option C: Railway

1. Push backend folder to a Git repo
2. Connect Railway to the repo
3. Add environment variables in Railway dashboard
4. Deploy

---

## CSV Output

Enquiries are stored in `data/enquiries-YYYY-MM.csv`:

```csv
DateTime,Name,Email,Company,Phone,Service,Message,IPAddress,UserAgent
2026-05-29T12:34:56.789Z,Ahmed Al-Rashid,ahmed@example.com,Saudi Aramco,+966 50 123 4567,Calibration Service,We need on-site calibration...,192.168.1.1,Mozilla/5.0...
```

Files auto-rotate monthly. Old files are never deleted — archive as needed.

---

## Enabling CAPTCHA

1. Sign up for [Cloudflare Turnstile](https://developers.cloudflare.com/turnstile/) or Google reCAPTCHA
2. Add the site key to your frontend contact form
3. Add the secret key to `.env`:
   ```
   CAPTCHA_SECRET_KEY=your-secret-key
   CAPTCHA_VERIFY_URL=https://challenges.cloudflare.com/turnstile/v0/siteverify
   ```
4. In `src/routes/contact.js`, uncomment the `verifyCaptcha` middleware
5. Frontend must send `captchaToken` in the request body

---

## Security Checklist

- [ ] SMTP password is an app-specific password (not your login password)
- [ ] `.env` is in `.gitignore`
- [ ] Server runs behind HTTPS in production
- [ ] Rate limits are appropriate for your traffic
- [ ] CAPTCHA is enabled before public launch
