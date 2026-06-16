import axios from 'axios';

/**
 * Axios instance configured for Strapi API
 * Base URL is set from environment variable
 */
const apiClient = axios.create({
  baseURL: import.meta.env.VITE_STRAPI_URL || 'http://localhost:1337',
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000, // 10 seconds
});

/**
 * Request interceptor
 * Add any global request modifications here (e.g., auth tokens)
 */
apiClient.interceptors.request.use(
  (config) => {
    // You can add auth tokens here if needed in the future
    // config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

/**
 * Response interceptor
 * Handle global response transformations and errors
 */
apiClient.interceptors.response.use(
  (response) => {
    // Extract data from Strapi's response structure
    return response;
  },
  (error) => {
    // Global error handling
    if (error.response) {
      // Server responded with error status
      console.error('API Error:', error.response.data);
    } else if (error.request) {
      // Request made but no response received
      console.error('Network Error:', error.message);
    } else {
      // Something else happened
      console.error('Error:', error.message);
    }
    return Promise.reject(error);
  }
);

export default apiClient;
