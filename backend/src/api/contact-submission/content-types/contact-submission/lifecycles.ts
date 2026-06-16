/**
 * Lifecycle hooks for contact-submission content type
 * Sends email notification to admin when a new contact form is submitted
 */

import emailTemplates from '../../services/email-templates';

export default {
  /**
   * Triggered after a new contact submission is created
   * Sends branded email notification to admin
   */
  async afterCreate(event) {
    const { result } = event;

    try {
      // Get admin email from environment variable
      const adminEmail = process.env.EMAIL_ADMIN_RECIPIENT;

      if (!adminEmail) {
        strapi.log.warn(
          'EMAIL_ADMIN_RECIPIENT not configured. Skipping email notification for contact submission.'
        );
        return;
      }

      // Format the submission timestamp
      const submittedAt = new Date().toLocaleString('en-US', {
        dateStyle: 'full',
        timeStyle: 'short',
        timeZone: 'Africa/Lagos', // JOOF Foundation is in Lagos, Nigeria
      });

      // Generate branded email content from template
      const emailContent = emailTemplates.contactSubmissionNotification({
        name: result.name,
        email: result.email,
        subject: result.subject,
        message: result.message,
        submittedAt,
      });

      // Send email using Strapi email plugin
      await strapi.plugins['email'].services.email.send({
        to: adminEmail,
        from: process.env.EMAIL_DEFAULT_FROM,
        replyTo: result.email, // Admin can reply directly to the submitter
        subject: emailContent.subject,
        text: emailContent.text,
        html: emailContent.html,
      });

      strapi.log.info(
        `✓ Contact form notification email sent to ${adminEmail} for submission from ${result.email}`
      );
    } catch (error) {
      // Log error but don't fail the submission
      // This ensures contact forms are saved even if email delivery fails
      strapi.log.error(
        'Failed to send contact form notification email:',
        error.message || error
      );

      // Log additional details for debugging
      if (error.response) {
        strapi.log.error('Email error response:', error.response);
      }
    }
  },
};
