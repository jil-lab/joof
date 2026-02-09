/**
 * Utility functions for formatting data, especially Strapi media URLs
 */

/**
 * Get the full URL for a Strapi image
 * @param {Object} image - Strapi image object
 * @returns {string|null} Full image URL or null if not found
 */
export const getStrapiImageUrl = (image) => {
  if (!image) return null;

  // Handle both Strapi v4 and v5 formats
  const strapiUrl = import.meta.env.VITE_STRAPI_URL || 'http://localhost:1337';

  // If image has formats (responsive images)
  if (image.formats) {
    // Prefer medium size, fallback to small, then thumbnail, then original
    const format = image.formats.medium || image.formats.small || image.formats.thumbnail;
    if (format) {
      return format.url.startsWith('http') ? format.url : `${strapiUrl}${format.url}`;
    }
  }

  // Use original image
  if (image.url) {
    return image.url.startsWith('http') ? image.url : `${strapiUrl}${image.url}`;
  }

  return null;
};

/**
 * Get multiple image URLs from Strapi media collection
 * @param {Array} images - Array of Strapi image objects
 * @returns {Array} Array of image URLs
 */
export const getStrapiImageUrls = (images) => {
  if (!images || !Array.isArray(images)) return [];
  return images.map(getStrapiImageUrl).filter(Boolean);
};

/**
 * Format Strapi date to readable format
 * @param {string} dateString - ISO date string from Strapi
 * @returns {string} Formatted date
 */
export const formatStrapiDate = (dateString) => {
  if (!dateString) return '';

  const date = new Date(dateString);
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(date);
};

/**
 * Extract data from Strapi v5 response format
 * Strapi v5 wraps data in { data: {...}, meta: {...} }
 * @param {Object} response - Strapi API response
 * @returns {Object|Array} Extracted data
 */
export const extractStrapiData = (response) => {
  if (!response) return null;

  // If response has data property, extract it
  if (response.data) {
    // Handle array of items
    if (Array.isArray(response.data)) {
      return response.data.map(item => ({
        id: item.id,
        ...item.attributes,
      }));
    }

    // Handle single item
    return {
      id: response.data.id,
      ...response.data.attributes,
    };
  }

  // Return as-is if already extracted
  return response;
};

/**
 * Format number with commas
 * @param {number} num - Number to format
 * @returns {string} Formatted number
 */
export const formatNumber = (num) => {
  if (!num && num !== 0) return '0';
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

/**
 * Truncate text to specified length
 * @param {string} text - Text to truncate
 * @param {number} maxLength - Maximum length
 * @returns {string} Truncated text
 */
export const truncateText = (text, maxLength = 100) => {
  if (!text || text.length <= maxLength) return text;
  return text.substring(0, maxLength).trim() + '...';
};
