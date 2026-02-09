import apiClient from '../client';

/**
 * Programs API Service
 * Handles all API calls related to programs
 */

/**
 * Fetch all programs
 * @returns {Promise} Array of programs
 */
export const getPrograms = async () => {
  try {
    const response = await apiClient.get('/api/programs', {
      params: {
        populate: 'images', // Include images relation
        sort: 'order:asc',
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching programs:', error);
    throw error;
  }
};

/**
 * Fetch a single program by ID
 * @param {string|number} id - Program ID
 * @returns {Promise} Program object
 */
export const getProgram = async (id) => {
  try {
    const response = await apiClient.get(`/api/programs/${id}`, {
      params: {
        populate: 'images',
      },
    });
    return response.data;
  } catch (error) {
    console.error(`Error fetching program ${id}:`, error);
    throw error;
  }
};

/**
 * Fetch programs by type
 * @param {string} type - Program type (healthcare, education, community)
 * @returns {Promise} Array of programs
 */
export const getProgramsByType = async (type) => {
  try {
    const response = await apiClient.get('/api/programs', {
      params: {
        filters: {
          type: {
            $eq: type,
          },
        },
        populate: 'images',
      },
    });
    return response.data;
  } catch (error) {
    console.error(`Error fetching programs by type ${type}:`, error);
    throw error;
  }
};
