export default ({ env }) => ({
  email: {
    config: {
      provider: 'nodemailer',
      providerOptions: {
        host: env('EMAIL_SMTP_HOST', 'smtp.resend.com'),
        port: env.int('EMAIL_SMTP_PORT', 465),
        auth: {
          user: env('EMAIL_SMTP_USER', 'resend'),
          pass: env('EMAIL_SMTP_PASSWORD'),
        },
        secure: true, // Use SSL
      },
      settings: {
        defaultFrom: env('EMAIL_DEFAULT_FROM'),
        defaultReplyTo: env('EMAIL_DEFAULT_REPLY_TO'),
      },
    },
  },
});
