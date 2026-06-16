import apiClient from '../client';

/**
 * Categories API Service
 * Handles all API calls related to blog categories
 */

/**
 * Fetch all categories
 * @returns {Promise} Array of categories sorted by order
 */
export const getCategories = async () => {
  try {
    const response = await apiClient.get('/api/categories', {
      params: {
        sort: 'order:asc',
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching categories:', error);
    throw error;
  }
};
