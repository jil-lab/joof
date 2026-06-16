/**
 * Email template service for contact submissions
 * Branded with JOOF Foundation design system
 */

interface ContactSubmissionData {
  name: string;
  email: string;
  subject: string;
  message: string;
  submittedAt: string;
}

interface EmailContent {
  subject: string;
  text: string;
  html: string;
}

export default {
  /**
   * Template for admin notification when contact form is submitted
   * Uses JOOF Foundation branding:
   * - Teal gradient (#0d9488 → #115e59 → #042622)
   * - Poppins for headings, Inter for body
   * - 12px border radius
   * - Card shadows matching website
   */
  contactSubmissionNotification: (data: ContactSubmissionData): EmailContent => {
    const { name, email, subject, message, submittedAt } = data;
    const logoUrl = process.env.EMAIL_LOGO_URL || '';

    // Plain text version for email clients that don't support HTML
    const text = `
New contact form submission received on ${submittedAt}

FROM:
Name: ${name}
Email: ${email}

SUBJECT:
${subject}

MESSAGE:
${message}

---
This is an automated notification from JOOF Foundation website.
To reply, send an email to: ${email}
    `.trim();

    // HTML version with full JOOF Foundation branding
    const html = `
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <meta name="x-apple-disable-message-reformatting">
  <title>New Contact Form Submission - JOOF Foundation</title>
  <!--[if mso]>
  <style type="text/css">
    body, table, td {font-family: Arial, Helvetica, sans-serif !important;}
  </style>
  <![endif]-->
</head>
<body style="margin: 0; padding: 0; font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #f3f4f6; -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale;">
  <!-- Wrapper table for email clients -->
  <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="background-color: #f3f4f6; padding: 40px 20px;">
    <tr>
      <td align="center">
        <!-- Main container -->
        <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="600" style="max-width: 600px; background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);">

          <!-- Header with JOOF branding and teal gradient -->
          <tr>
            <td style="background: linear-gradient(135deg, #0d9488 0%, #115e59 50%, #042622 100%); padding: 30px; text-align: center; border-radius: 12px 12px 0 0;">
              ${logoUrl ? `<img src="${logoUrl}" alt="JOOF Foundation" style="height: 80px; width: auto; margin-bottom: 20px; display: block; margin-left: auto; margin-right: auto;" />` : ''}
              <h1 style="font-family: 'Poppins', sans-serif; color: #ffffff; font-size: 28px; font-weight: 600; margin: ${logoUrl ? '10px' : '0'} 0 5px 0; line-height: 1.2;">New Contact Form Submission</h1>
              <p style="color: #ccfbf1; font-size: 14px; margin: 5px 0 0 0;">Received on ${submittedAt}</p>
            </td>
          </tr>

          <!-- Content section -->
          <tr>
            <td style="padding: 30px; background-color: #ffffff;">

              <!-- From field -->
              <div style="margin-bottom: 20px;">
                <div style="font-weight: 600; color: #0d9488; font-size: 14px; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 6px;">From</div>
                <div style="color: #374151; font-size: 16px; line-height: 1.5;">${escapeHtml(name)}</div>
              </div>

              <!-- Email field -->
              <div style="margin-bottom: 20px;">
                <div style="font-weight: 600; color: #0d9488; font-size: 14px; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 6px;">Email</div>
                <div style="color: #374151; font-size: 16px; line-height: 1.5;">
                  <a href="mailto:${email}" style="color: #0d9488; text-decoration: none;">${escapeHtml(email)}</a>
                </div>
              </div>

              <!-- Subject field -->
              <div style="margin-bottom: 20px;">
                <div style="font-weight: 600; color: #0d9488; font-size: 14px; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 6px;">Subject</div>
                <div style="color: #374151; font-size: 16px; line-height: 1.5;">${escapeHtml(subject)}</div>
              </div>

              <!-- Message field in styled card -->
              <div style="margin-bottom: 30px;">
                <div style="font-weight: 600; color: #0d9488; font-size: 14px; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 6px;">Message</div>
                <div style="background-color: #f9fafb; border-left: 4px solid #0d9488; padding: 20px; border-radius: 8px; margin-top: 10px;">
                  <div style="color: #374151; font-size: 16px; line-height: 1.6; white-space: pre-wrap; word-wrap: break-word;">${escapeHtml(message)}</div>
                </div>
              </div>

              <!-- Reply button with teal gradient -->
              <div style="text-align: center; margin-top: 30px;">
                <a href="mailto:${email}?subject=${encodeURIComponent('Re: ' + subject)}" style="display: inline-block; background: linear-gradient(to right, #0f766e, #115e59); color: #ffffff; font-weight: 600; font-size: 16px; text-decoration: none; padding: 12px 32px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);">Reply to ${escapeHtml(name)}</a>
              </div>

            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color: #f3f4f6; padding: 20px; text-align: center; border-radius: 0 0 12px 12px;">
              <p style="color: #4b5563; font-size: 12px; margin: 0; line-height: 1.5;">
                This is an automated notification from JOOF Foundation website contact form.<br/>
                <span style="color: #6b7280;">John Oyediran Olabisi Foundation</span>
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

    return {
      subject: `New Contact Form Submission: ${subject}`,
      text,
      html,
    };
  },
};

/**
 * Escape HTML special characters to prevent XSS
 */
function escapeHtml(text: string): string {
  const map = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;',
  };
  return text.replace(/[&<>"']/g, (m) => map[m]);
}
