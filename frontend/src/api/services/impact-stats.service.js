import apiClient from '../client';

/**
 * Impact Stats API Service
 * Handles all API calls related to impact statistics
 */

/**
 * Fetch all impact stats
 * @returns {Promise} Array of impact stats
 */
export const getImpactStats = async () => {
  try {
    const response = await apiClient.get('/api/impact-stats', {
      params: {
        sort: 'order:asc', // Sort by order field
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching impact stats:', error);
    throw error;
  }
};
