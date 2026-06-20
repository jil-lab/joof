import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { queryKeys } from '../api/queryKeys';
import { getTeamMembers, getTeamMember } from '../api/services/team.service';
import { getPrograms, getProgram, getProgramsByType } from '../api/services/programs.service';
import { getTestimonials, getTestimonial } from '../api/services/testimonials.service';
import { getImpactStats } from '../api/services/impact-stats.service';
import { submitContactForm, subscribeNewsletter } from '../api/services/contact.service';
import { getBlogPosts, getBlogPostBySlug, getRelatedBlogPosts } from '../api/services/blog.service';
import { getCategories } from '../api/services/categories.service';
import { getSiteSettings } from '../api/services/site-settings.service';
import { getTimelineMilestones } from '../api/services/timeline.service';
import { getAdvisors, getAdvisor } from '../api/services/advisors.service';
import { getPartners } from '../api/services/partners.service';
import { getCoreValues } from '../api/services/core-values.service';
import { getReports } from '../api/services/reports.service';
import { getAboutPage } from '../api/services/about-page.service';
import type { ContactFormData, NewsletterData } from '../api/services/contact.service';

const STATIC_STALE = Infinity; // never refetch — only changes via deliberate Strapi publish

// ── Team ─────────────────────────────────────────────────────────────────────

export const useTeamMembers = () =>
  useQuery({
    queryKey: queryKeys.teamMembers.all,
    queryFn: getTeamMembers,
    staleTime: STATIC_STALE,
  });

export const useTeamMember = (id: string | number) =>
  useQuery({
    queryKey: queryKeys.teamMembers.detail(id),
    queryFn: () => getTeamMember(id),
    enabled: !!id,
    staleTime: STATIC_STALE,
  });

// ── Programs ─────────────────────────────────────────────────────────────────

export const usePrograms = () =>
  useQuery({
    queryKey: queryKeys.programs.all,
    queryFn: getPrograms,
    staleTime: STATIC_STALE,
  });

export const useProgram = (id: string | number) =>
  useQuery({
    queryKey: queryKeys.programs.detail(id),
    queryFn: () => getProgram(id),
    enabled: !!id,
    staleTime: STATIC_STALE,
  });

export const useProgramsByType = (type: string) =>
  useQuery({
    queryKey: queryKeys.programs.list({ type }),
    queryFn: () => getProgramsByType(type),
    enabled: !!type,
    staleTime: STATIC_STALE,
  });

// ── Testimonials ──────────────────────────────────────────────────────────────

export const useTestimonials = () =>
  useQuery({
    queryKey: queryKeys.testimonials.all,
    queryFn: getTestimonials,
    staleTime: STATIC_STALE,
  });

export const useTestimonial = (id: string | number) =>
  useQuery({
    queryKey: queryKeys.testimonials.detail(id),
    queryFn: () => getTestimonial(id),
    enabled: !!id,
    staleTime: STATIC_STALE,
  });

// ── Impact Stats ─────────────────────────────────────────────────────────────

export const useImpactStats = () =>
  useQuery({
    queryKey: queryKeys.impactStats.all,
    queryFn: getImpactStats,
    staleTime: 90 * 24 * 60 * 60 * 1000, // 3 months
  });

// ── Blog ─────────────────────────────────────────────────────────────────────

export const useBlogPosts = ({
  page = 1,
  pageSize = 6,
  category = null,
}: { page?: number; pageSize?: number; category?: string | null } = {}) =>
  useQuery({
    queryKey: queryKeys.blogPosts.list({ page, pageSize, category }),
    queryFn: () => getBlogPosts({ page, pageSize, category }),
    staleTime: 2 * 60 * 1000,
  });

export const useBlogPostBySlug = (slug: string) =>
  useQuery({
    queryKey: queryKeys.blogPosts.detail(slug),
    queryFn: () => getBlogPostBySlug(slug),
    enabled: !!slug,
    staleTime: 2 * 60 * 1000,
  });

export const useRelatedBlogPosts = (
  categoryId: string | number,
  excludeId: string | number,
  limit = 3,
) =>
  useQuery({
    queryKey: queryKeys.blogPosts.related(categoryId, excludeId, limit),
    queryFn: () => getRelatedBlogPosts(categoryId, excludeId, limit),
    enabled: !!(categoryId && excludeId),
    staleTime: 2 * 60 * 1000,
  });

// ── Categories ────────────────────────────────────────────────────────────────

export const useCategories = () =>
  useQuery({
    queryKey: queryKeys.categories.all,
    queryFn: getCategories,
    staleTime: STATIC_STALE,
  });

// ── Mutations ─────────────────────────────────────────────────────────────────

export const useContactForm = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: ContactFormData) => submitContactForm(data),
    onSuccess: () =>
      queryClient.invalidateQueries({ queryKey: queryKeys.contactSubmissions.all }),
  });
};

export const useNewsletterSubscription = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: NewsletterData) => subscribeNewsletter(data),
    onSuccess: () =>
      queryClient.invalidateQueries({ queryKey: queryKeys.newsletterSubscriptions.all }),
  });
};

// ── Site Settings ─────────────────────────────────────────────────────────────

export const useSiteSettings = () =>
  useQuery({
    queryKey: queryKeys.siteSettings.all,
    queryFn: getSiteSettings,
    staleTime: STATIC_STALE,
    retry: 1,
  });

// ── Timeline ──────────────────────────────────────────────────────────────────

export const useTimelineMilestones = () =>
  useQuery({
    queryKey: queryKeys.timelineMilestones.all,
    queryFn: getTimelineMilestones,
    staleTime: STATIC_STALE,
    retry: 1,
  });

// ── Advisors ──────────────────────────────────────────────────────────────────

export const useAdvisors = () =>
  useQuery({
    queryKey: queryKeys.advisors.all,
    queryFn: getAdvisors,
    staleTime: STATIC_STALE,
    retry: 1,
  });

export const useAdvisor = (id: string | number) =>
  useQuery({
    queryKey: queryKeys.advisors.detail(id),
    queryFn: () => getAdvisor(id),
    enabled: !!id,
    staleTime: STATIC_STALE,
  });

// ── Partners ──────────────────────────────────────────────────────────────────

export const usePartners = () =>
  useQuery({
    queryKey: queryKeys.partners.all,
    queryFn: getPartners,
    staleTime: STATIC_STALE,
    retry: 1,
  });

// ── Core Values ───────────────────────────────────────────────────────────────

export const useCoreValues = () =>
  useQuery({
    queryKey: queryKeys.coreValues.all,
    queryFn: getCoreValues,
    staleTime: STATIC_STALE,
    retry: 1,
  });

// ── Reports ───────────────────────────────────────────────────────────────────

export const useReports = () =>
  useQuery({
    queryKey: queryKeys.reports.all,
    queryFn: getReports,
    staleTime: STATIC_STALE,
    retry: 1,
  });

// ── About Page ────────────────────────────────────────────────────────────────

export const useAboutPage = () =>
  useQuery({
    queryKey: queryKeys.aboutPage.all,
    queryFn: getAboutPage,
    staleTime: STATIC_STALE,
    retry: 1,
  });
