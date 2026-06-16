import apiClient from '../client';

/**
 * Team Member API Service
 * Handles all API calls related to team members
 */

/**
 * Fetch all team members
 * @returns {Promise} Array of team members
 */
export const getTeamMembers = async () => {
  try {
    const response = await apiClient.get('/api/team-members', {
      params: {
        populate: 'photo', // Include photo relation
        sort: 'order:asc', // Sort by order field
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching team members:', error);
    throw error;
  }
};

/**
 * Fetch a single team member by ID
 * @param {string|number} id - Team member ID
 * @returns {Promise} Team member object
 */
export const getTeamMember = async (id) => {
  try {
    const response = await apiClient.get(`/api/team-members/${id}`, {
      params: {
        populate: 'photo',
      },
    });
    return response.data;
  } catch (error) {
    console.error(`Error fetching team member ${id}:`, error);
    throw error;
  }
};
