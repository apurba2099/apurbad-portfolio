export function generatePortfolioEmail({ name, email, message }) {
  const sanitizedName = String(name || '').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  const sanitizedEmail = String(email || '').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  const sanitizedMessage = String(message || '')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/\n/g, '<br />');

  const receivedAt = new Date().toLocaleString('en-US', {
    timeZone: 'Asia/Kolkata',
    dateStyle: 'medium',
    timeStyle: 'short',
  });

  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Portfolio Message — Apurba Dutta</title>
  <style>
    body {
      margin: 0;
      padding: 0;
      background-color: #050505;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
      color: #ededed;
      -webkit-font-smoothing: antialiased;
    }
    table {
      border-collapse: collapse;
    }
  </style>
</head>
<body style="margin: 0; padding: 0; background-color: #050505; color: #ededed;">
  <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color: #050505; padding: 40px 15px;">
    <tr>
      <td align="center">
        <!-- Main Card Container -->
        <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" style="max-width: 580px; background-color: #0d0d0d; border: 1px solid rgba(255, 255, 255, 0.12); border-radius: 14px; overflow: hidden; box-shadow: 0 12px 40px rgba(0, 0, 0, 0.8);">
          
          <!-- Header Bar -->
          <tr>
            <td style="padding: 32px 32px 24px 32px; border-bottom: 1px solid rgba(255, 255, 255, 0.08); background: linear-gradient(180deg, #141414 0%, #0d0d0d 100%);">
              <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0">
                <tr>
                  <td>
                    <div style="display: inline-block; padding: 4px 10px; border-radius: 9999px; background-color: rgba(37, 99, 235, 0.15); border: 1px solid rgba(59, 130, 246, 0.3); font-size: 11px; font-weight: 600; color: #60a5fa; letter-spacing: 0.05em; text-transform: uppercase; margin-bottom: 12px;">
                      Portfolio Inquiry
                    </div>
                    <h1 style="margin: 0 0 6px 0; font-size: 22px; font-weight: 700; color: #ffffff; letter-spacing: -0.02em;">
                      Apurba Dutta <span style="color: #3b82f6;">—</span> Portfolio
                    </h1>
                    <p style="margin: 0; font-size: 13px; color: #9ca3af; line-height: 1.5;">
                      You have received a new message through the portfolio contact form.
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Sender Details Card -->
          <tr>
            <td style="padding: 24px 32px 16px 32px;">
              <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color: rgba(255, 255, 255, 0.03); border: 1px solid rgba(255, 255, 255, 0.07); border-radius: 10px;">
                <tr>
                  <td style="padding: 16px 20px;">
                    <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0">
                      <tr>
                        <td width="30%" style="font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em; color: #6b7280; padding: 6px 0;">
                          Sender Name
                        </td>
                        <td style="font-size: 14px; font-weight: 600; color: #f3f4f6; padding: 6px 0;">
                          ${sanitizedName}
                        </td>
                      </tr>
                      <tr>
                        <td width="30%" style="font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em; color: #6b7280; padding: 6px 0;">
                          Email Address
                        </td>
                        <td style="font-size: 14px; color: #38bdf8; padding: 6px 0;">
                          <a href="mailto:${sanitizedEmail}" style="color: #38bdf8; text-decoration: none; font-weight: 500;">
                            ${sanitizedEmail}
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td width="30%" style="font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em; color: #6b7280; padding: 6px 0;">
                          Received At
                        </td>
                        <td style="font-size: 13px; color: #9ca3af; padding: 6px 0;">
                          ${receivedAt} (IST)
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Message Body Container -->
          <tr>
            <td style="padding: 0 32px 28px 32px;">
              <div style="font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em; color: #9ca3af; margin-bottom: 8px;">
                Message Content
              </div>
              <div style="padding: 18px 20px; background-color: #121212; border: 1px solid rgba(255, 255, 255, 0.09); border-left: 3px solid #3b82f6; border-radius: 8px; font-size: 14px; line-height: 1.65; color: #e5e7eb; word-break: break-word;">
                ${sanitizedMessage}
              </div>
            </td>
          </tr>

          <!-- Action Button (Reply) -->
          <tr>
            <td align="center" style="padding: 0 32px 30px 32px;">
              <table role="presentation" border="0" cellspacing="0" cellpadding="0">
                <tr>
                  <td align="center" style="border-radius: 8px; background: #2563eb;">
                    <a href="mailto:${sanitizedEmail}?subject=Re:%20Portfolio%20Inquiry%20from%20${encodeURIComponent(sanitizedName)}" target="_blank" style="font-size: 13px; font-weight: 600; color: #ffffff; text-decoration: none; padding: 10px 24px; display: inline-block; border-radius: 8px; letter-spacing: 0.02em;">
                      Reply directly to ${sanitizedName} &rarr;
                    </a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding: 20px 32px; background-color: #080808; border-top: 1px solid rgba(255, 255, 255, 0.06); text-align: center;">
              <p style="margin: 0; font-size: 11px; color: #52525b; line-height: 1.5;">
                This message was securely submitted through <a href="https://apurbadutta.lol" style="color: #71717a; text-decoration: underline;">Apurba Dutta's Portfolio</a>.
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `.trim();
}
