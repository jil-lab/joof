import apiClient from '../client';

/**
 * Testimonials API Service
 * Handles all API calls related to testimonials
 */

/**
 * Fetch all testimonials
 * @returns {Promise} Array of testimonials
 */
export const getTestimonials = async () => {
  try {
    const response = await apiClient.get('/api/testimonials', {
      params: {
        populate: 'photo', // Include photo relation
        sort: 'order:asc', // Sort by order field
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching testimonials:', error);
    throw error;
  }
};

/**
 * Fetch a single testimonial by ID
 * @param {string|number} id - Testimonial ID
 * @returns {Promise} Testimonial object
 */
export const getTestimonial = async (id) => {
  try {
    const response = await apiClient.get(`/api/testimonials/${id}`, {
      params: {
        populate: 'photo',
      },
    });
    return response.data;
  } catch (error) {
    console.error(`Error fetching testimonial ${id}:`, error);
    throw error;
  }
};
