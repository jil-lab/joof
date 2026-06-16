import apiClient from '../client';

/**
 * Contact API Service
 * Handles all API calls related to contact form submissions
 */

/**
 * Submit contact form
 * @param {Object} data - Contact form data
 * @param {string} data.name - Sender's name
 * @param {string} data.email - Sender's email
 * @param {string} data.subject - Message subject
 * @param {string} data.message - Message content
 * @returns {Promise} Submission response
 */
export const submitContactForm = async (data) => {
  try {
    const response = await apiClient.post('/api/contact-submissions', {
      data: {
        name: data.name,
        email: data.email,
        subject: data.subject,
        message: data.message,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error submitting contact form:', error);
    throw error;
  }
};

/**
 * Subscribe to newsletter
 * @param {string} email - Subscriber's email
 * @returns {Promise} Subscription response
 */
export const subscribeNewsletter = async (email) => {
  try {
    const response = await apiClient.post('/api/newsletter-subscriptions', {
      data: {
        email,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error subscribing to newsletter:', error);
    throw error;
  }
};
