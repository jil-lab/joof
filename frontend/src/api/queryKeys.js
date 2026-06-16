/**
 * Query Key Factory
 * Centralized query key management for React Query
 * Provides type-safe and maintainable query keys for all API entities
 */

export const queryKeys = {
  // Team Members
  teamMembers: {
    all: ['teamMembers'],
    lists: () => [...queryKeys.teamMembers.all, 'list'],
    details: () => [...queryKeys.teamMembers.all, 'detail'],
    detail: (id) => [...queryKeys.teamMembers.details(), id],
  },

  // Programs
  programs: {
    all: ['programs'],
    lists: () => [...queryKeys.programs.all, 'list'],
    list: (filters) => [...queryKeys.programs.lists(), { filters }],
    details: () => [...queryKeys.programs.all, 'detail'],
    detail: (id) => [...queryKeys.programs.details(), id],
  },

  // Testimonials
  testimonials: {
    all: ['testimonials'],
    details: () => [...queryKeys.testimonials.all, 'detail'],
    detail: (id) => [...queryKeys.testimonials.details(), id],
  },

  // Impact Stats
  impactStats: {
    all: ['impactStats'],
  },

  // Blog Posts
  blogPosts: {
    all: ['blogPosts'],
    lists: () => [...queryKeys.blogPosts.all, 'list'],
    list: (filters) => [...queryKeys.blogPosts.lists(), { filters }],
    details: () => [...queryKeys.blogPosts.all, 'detail'],
    detail: (slug) => [...queryKeys.blogPosts.details(), slug],
    related: (categoryId, excludeId, limit) => [
      ...queryKeys.blogPosts.all,
      'related',
      { categoryId, excludeId, limit },
    ],
  },

  // Categories
  categories: {
    all: ['categories'],
  },

  // Contact & Newsletter
  contactSubmissions: {
    all: ['contactSubmissions'],
  },
  newsletterSubscriptions: {
    all: ['newsletterSubscriptions'],
  },
};
