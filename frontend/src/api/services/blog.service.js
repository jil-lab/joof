import apiClient from '../client';

/**
 * Blog Posts API Service
 * Handles all API calls related to blog posts
 */

/**
 * Fetch blog posts with pagination and filtering
 * @param {Object} options - Query options
 * @param {number} options.page - Page number (default: 1)
 * @param {number} options.pageSize - Items per page (default: 6)
 * @param {string} options.category - Filter by category ID
 * @param {string} options.sort - Sort order (default: 'publishedAt:desc')
 * @returns {Promise} Paginated blog posts with meta
 */
export const getBlogPosts = async ({ page = 1, pageSize = 6, category = null, sort = 'publishedAt:desc' } = {}) => {
  try {
    const params = {
      populate: ['featuredImage', 'category'],
      sort,
      pagination: {
        page,
        pageSize,
      },
    };

    // Add category filter if provided
    if (category) {
      params.filters = {
        category: {
          id: {
            $eq: category,
          },
        },
      };
    }

    const response = await apiClient.get('/api/blog-posts', { params });
    return response.data;
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    throw error;
  }
};

/**
 * Fetch a single blog post by slug
 * @param {string} slug - Blog post slug
 * @returns {Promise} Blog post object
 */
export const getBlogPostBySlug = async (slug) => {
  try {
    const response = await apiClient.get('/api/blog-posts', {
      params: {
        filters: {
          slug: {
            $eq: slug,
          },
        },
        populate: ['featuredImage', 'category'],
      },
    });

    // Return first item (should be unique by slug)
    return response.data?.data?.[0] || null;
  } catch (error) {
    console.error(`Error fetching blog post ${slug}:`, error);
    throw error;
  }
};

/**
 * Fetch related blog posts (same category, exclude current)
 * @param {string} categoryId - Category ID to match
 * @param {string} excludeId - ID to exclude (current post)
 * @param {number} limit - Number of posts to fetch (default: 3)
 * @returns {Promise} Array of related blog posts
 */
export const getRelatedBlogPosts = async (categoryId, excludeId, limit = 3) => {
  try {
    const response = await apiClient.get('/api/blog-posts', {
      params: {
        filters: {
          category: {
            id: {
              $eq: categoryId,
            },
          },
          id: {
            $ne: excludeId,
          },
        },
        populate: ['featuredImage', 'category'],
        sort: 'publishedAt:desc',
        pagination: {
          page: 1,
          pageSize: limit,
        },
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching related blog posts:', error);
    throw error;
  }
};
