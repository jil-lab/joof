export default ({ env }) => ({
  cloud: {
    enabled: false,
  },
  upload: {
    config: {
      provider: 'cloudinary',
      providerOptions: {
        cloud_name: env('CLOUDINARY_NAME'),
        api_key: env('CLOUDINARY_KEY'),
        api_secret: env('CLOUDINARY_SECRET'),
      },
      actionOptions: {
        upload: {},
        uploadStream: {},
        delete: {},
      },
    },
  },
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
