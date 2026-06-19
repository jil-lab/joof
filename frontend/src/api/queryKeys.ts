export const queryKeys = {
  teamMembers: {
    all: ['teamMembers'] as const,
    lists: () => [...queryKeys.teamMembers.all, 'list'] as const,
    details: () => [...queryKeys.teamMembers.all, 'detail'] as const,
    detail: (id: string | number) => [...queryKeys.teamMembers.details(), id] as const,
  },
  programs: {
    all: ['programs'] as const,
    lists: () => [...queryKeys.programs.all, 'list'] as const,
    list: (filters: Record<string, unknown>) =>
      [...queryKeys.programs.lists(), { filters }] as const,
    details: () => [...queryKeys.programs.all, 'detail'] as const,
    detail: (id: string | number) => [...queryKeys.programs.details(), id] as const,
  },
  testimonials: {
    all: ['testimonials'] as const,
    details: () => [...queryKeys.testimonials.all, 'detail'] as const,
    detail: (id: string | number) => [...queryKeys.testimonials.details(), id] as const,
  },
  impactStats: {
    all: ['impactStats'] as const,
  },
  blogPosts: {
    all: ['blogPosts'] as const,
    lists: () => [...queryKeys.blogPosts.all, 'list'] as const,
    list: (filters: Record<string, unknown>) =>
      [...queryKeys.blogPosts.lists(), { filters }] as const,
    details: () => [...queryKeys.blogPosts.all, 'detail'] as const,
    detail: (slug: string) => [...queryKeys.blogPosts.details(), slug] as const,
    related: (categoryId: string | number, excludeId: string | number, limit: number) =>
      [...queryKeys.blogPosts.all, 'related', { categoryId, excludeId, limit }] as const,
  },
  categories: {
    all: ['categories'] as const,
  },
  contactSubmissions: {
    all: ['contactSubmissions'] as const,
  },
  newsletterSubscriptions: {
    all: ['newsletterSubscriptions'] as const,
  },
  siteSettings: {
    all: ['siteSettings'] as const,
  },
  timelineMilestones: {
    all: ['timelineMilestones'] as const,
  },
  advisors: {
    all: ['advisors'] as const,
    details: () => [...queryKeys.advisors.all, 'detail'] as const,
    detail: (id: string | number) => [...queryKeys.advisors.details(), id] as const,
  },
  partners: {
    all: ['partners'] as const,
  },
  coreValues: {
    all: ['coreValues'] as const,
  },
  reports: {
    all: ['reports'] as const,
  },
  aboutPage: {
    all: ['aboutPage'] as const,
  },
};
