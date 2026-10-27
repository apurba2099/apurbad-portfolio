import nodemailer from 'nodemailer';
import { generatePortfolioEmail } from './emailTemplate.js';

// In-memory rate limiting map for basic spam protection: IP -> timestamps
const rateLimitMap = new Map();
const RATE_LIMIT_WINDOW_MS = 60 * 1000; // 1 minute
const MAX_REQUESTS_PER_WINDOW = 3;

function isRateLimited(ip) {
  const now = Date.now();
  const userTimestamps = rateLimitMap.get(ip) || [];
  const recent = userTimestamps.filter((ts) => now - ts < RATE_LIMIT_WINDOW_MS);

  if (recent.length >= MAX_REQUESTS_PER_WINDOW) {
    return true;
  }

  recent.push(now);
  rateLimitMap.set(ip, recent);
  return false;
}

export default async function handler(req, res) {
  // Only allow POST
  if (req.method !== 'POST') {
    return res.status(405).json({
      success: false,
      message: 'Method not allowed. Only POST requests are accepted.',
    });
  }

  // Rate limiting by client IP
  const headers = req.headers || {};
  const clientIp =
    headers['x-forwarded-for']?.split(',')[0] ||
    req.socket?.remoteAddress ||
    'anonymous';

  if (isRateLimited(clientIp)) {
    return res.status(429).json({
      success: false,
      message: 'Too many requests. Please wait a minute before sending another message.',
    });
  }

  try {
    const { name, email, message } = req.body || {};

    // Validate fields
    if (!name || typeof name !== 'string' || !name.trim()) {
      return res.status(400).json({
        success: false,
        message: 'Name is required.',
      });
    }

    if (!email || typeof email !== 'string' || !email.trim()) {
      return res.status(400).json({
        success: false,
        message: 'Valid email address is required.',
      });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      return res.status(400).json({
        success: false,
        message: 'Please provide a valid email address.',
      });
    }

    if (!message || typeof message !== 'string' || !message.trim()) {
      return res.status(400).json({
        success: false,
        message: 'Message content is required.',
      });
    }

    if (name.trim().length > 100 || message.trim().length > 5000) {
      return res.status(400).json({
        success: false,
        message: 'Message or name exceeds acceptable length limits.',
      });
    }

    // SMTP Configuration from environment variables
    const smtpHost = process.env.SMTP_HOST || 'smtp.gmail.com';
    const smtpPort = parseInt(process.env.SMTP_PORT || '465', 10);
    const smtpSecure = process.env.SMTP_SECURE === 'true' || smtpPort === 465;
    const smtpUser = process.env.SMTP_USER?.trim();
    // Remove spaces from Gmail app password if present
    const smtpPass = process.env.SMTP_PASS?.replace(/\s+/g, '');
    const recipientEmail = process.env.CONTACT_RECIPIENT_EMAIL?.trim() || smtpUser;

    if (!smtpUser || !smtpPass) {
      console.error('Missing SMTP credentials: SMTP_USER or SMTP_PASS not set.');
      return res.status(500).json({
        success: false,
        message: 'Email service is currently unconfigured. Please configure SMTP credentials.',
      });
    }

    // Create Nodemailer Transporter
    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpSecure,
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    // Generate custom dark-themed HTML template
    const htmlBody = generatePortfolioEmail({
      name: name.trim(),
      email: email.trim(),
      message: message.trim(),
    });

    const textBody = `New Contact Message — Apurba Dutta Portfolio\n\nFrom: ${name.trim()} (${email.trim()})\n\nMessage:\n${message.trim()}\n\n---\nSubmitted via https://apurbadutta.lol`;

    // Send Mail
    await transporter.sendMail({
      from: `"Apurba Dutta Portfolio" <${smtpUser}>`,
      to: recipientEmail,
      replyTo: `"${name.trim()}" <${email.trim()}>`,
      subject: `New Contact Message — Apurba Dutta Portfolio`,
      text: textBody,
      html: htmlBody,
    });

    return res.status(200).json({
      success: true,
      message: 'Message sent successfully! ✨',
    });
  } catch (error) {
    console.error('Nodemailer submission error:', error);
    return res.status(500).json({
      success: false,
      message: error.message || 'Failed to send message via email service. Please try again.',
    });
  }
}
