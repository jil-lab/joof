import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import {
  getTeamMembers,
  getTeamMember,
} from '../api/services/team.service';
import {
  getPrograms,
  getProgram,
  getProgramsByType,
} from '../api/services/programs.service';
import {
  getTestimonials,
  getTestimonial,
} from '../api/services/testimonials.service';
import { getImpactStats } from '../api/services/impact-stats.service';
import {
  submitContactForm,
  subscribeNewsletter,
} from '../api/services/contact.service';
import {
  getBlogPosts,
  getBlogPostBySlug,
  getRelatedBlogPosts,
} from '../api/services/blog.service';
import { getCategories } from '../api/services/categories.service';

/**
 * Custom React Query hooks for API calls
 * These hooks provide data fetching, caching, and state management
 */

// ============================================
// TEAM MEMBERS HOOKS
// ============================================

/**
 * Hook to fetch all team members
 * @returns {Object} Query result with team members data
 */
export const useTeamMembers = () => {
  return useQuery({
    queryKey: ['teamMembers'],
    queryFn: getTeamMembers,
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
};

/**
 * Hook to fetch a single team member
 * @param {string|number} id - Team member ID
 * @returns {Object} Query result with team member data
 */
export const useTeamMember = (id) => {
  return useQuery({
    queryKey: ['teamMember', id],
    queryFn: () => getTeamMember(id),
    enabled: !!id, // Only run if ID is provided
    staleTime: 5 * 60 * 1000,
  });
};

// ============================================
// PROGRAMS HOOKS
// ============================================

/**
 * Hook to fetch all programs
 * @returns {Object} Query result with programs data
 */
export const usePrograms = () => {
  return useQuery({
    queryKey: ['programs'],
    queryFn: getPrograms,
    staleTime: 5 * 60 * 1000,
  });
};

/**
 * Hook to fetch a single program
 * @param {string|number} id - Program ID
 * @returns {Object} Query result with program data
 */
export const useProgram = (id) => {
  return useQuery({
    queryKey: ['program', id],
    queryFn: () => getProgram(id),
    enabled: !!id,
    staleTime: 5 * 60 * 1000,
  });
};

/**
 * Hook to fetch programs by type
 * @param {string} type - Program type (healthcare, education, community)
 * @returns {Object} Query result with programs data
 */
export const useProgramsByType = (type) => {
  return useQuery({
    queryKey: ['programs', type],
    queryFn: () => getProgramsByType(type),
    enabled: !!type,
    staleTime: 5 * 60 * 1000,
  });
};

// ============================================
// TESTIMONIALS HOOKS
// ============================================

/**
 * Hook to fetch all testimonials
 * @returns {Object} Query result with testimonials data
 */
export const useTestimonials = () => {
  return useQuery({
    queryKey: ['testimonials'],
    queryFn: getTestimonials,
    staleTime: 5 * 60 * 1000,
  });
};

/**
 * Hook to fetch a single testimonial
 * @param {string|number} id - Testimonial ID
 * @returns {Object} Query result with testimonial data
 */
export const useTestimonial = (id) => {
  return useQuery({
    queryKey: ['testimonial', id],
    queryFn: () => getTestimonial(id),
    enabled: !!id,
    staleTime: 5 * 60 * 1000,
  });
};

// ============================================
// IMPACT STATS HOOKS
// ============================================

/**
 * Hook to fetch all impact stats
 * @returns {Object} Query result with impact stats data
 */
export const useImpactStats = () => {
  return useQuery({
    queryKey: ['impactStats'],
    queryFn: getImpactStats,
    staleTime: 5 * 60 * 1000,
  });
};

// ============================================
// CONTACT & NEWSLETTER MUTATIONS
// ============================================

/**
 * Hook to submit contact form
 * @returns {Object} Mutation object with mutate function
 */
export const useContactForm = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: submitContactForm,
    onSuccess: () => {
      // Invalidate and refetch any relevant queries if needed
      queryClient.invalidateQueries({ queryKey: ['contactSubmissions'] });
    },
  });
};

/**
 * Hook to subscribe to newsletter
 * @returns {Object} Mutation object with mutate function
 */
export const useNewsletterSubscription = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: subscribeNewsletter,
    onSuccess: () => {
      // Invalidate and refetch any relevant queries if needed
      queryClient.invalidateQueries({ queryKey: ['newsletterSubscriptions'] });
    },
  });
};

// ============================================
// BLOG POSTS HOOKS
// ============================================

/**
 * Hook to fetch blog posts with pagination and filtering
 * @param {Object} options - Query options
 * @param {number} options.page - Page number
 * @param {number} options.pageSize - Items per page
 * @param {string} options.category - Category ID filter
 * @returns {Object} Query result with blog posts data
 */
export const useBlogPosts = ({ page = 1, pageSize = 6, category = null } = {}) => {
  return useQuery({
    queryKey: ['blogPosts', page, pageSize, category],
    queryFn: () => getBlogPosts({ page, pageSize, category }),
    staleTime: 5 * 60 * 1000,
    keepPreviousData: true, // Keep previous data while fetching new page
  });
};

/**
 * Hook to fetch a single blog post by slug
 * @param {string} slug - Blog post slug
 * @returns {Object} Query result with blog post data
 */
export const useBlogPostBySlug = (slug) => {
  return useQuery({
    queryKey: ['blogPost', slug],
    queryFn: () => getBlogPostBySlug(slug),
    enabled: !!slug,
    staleTime: 5 * 60 * 1000,
  });
};

/**
 * Hook to fetch related blog posts
 * @param {string} categoryId - Category ID to match
 * @param {string} excludeId - ID to exclude
 * @param {number} limit - Number of posts
 * @returns {Object} Query result with related posts
 */
export const useRelatedBlogPosts = (categoryId, excludeId, limit = 3) => {
  return useQuery({
    queryKey: ['relatedBlogPosts', categoryId, excludeId, limit],
    queryFn: () => getRelatedBlogPosts(categoryId, excludeId, limit),
    enabled: !!(categoryId && excludeId),
    staleTime: 5 * 60 * 1000,
  });
};

// ============================================
// CATEGORIES HOOKS
// ============================================

/**
 * Hook to fetch all categories
 * @returns {Object} Query result with categories data
 */
export const useCategories = () => {
  return useQuery({
    queryKey: ['categories'],
    queryFn: getCategories,
    staleTime: 5 * 60 * 1000,
  });
};
