import apiClient from '../client';
import type { StrapiCollectionResponse, StrapiSingleResponse, BlogPost } from '../../types/strapi';

interface BlogPostFilters {
  page?: number;
  pageSize?: number;
  category?: string | null;
}

const POPULATE_PARAMS = {
  'populate[0]': 'featuredImage',
  'populate[1]': 'category',
};

export const getBlogPosts = async ({
  page = 1,
  pageSize = 6,
  category = null,
}: BlogPostFilters = {}): Promise<StrapiCollectionResponse<BlogPost>> => {
  const params: Record<string, unknown> = {
    ...POPULATE_PARAMS,
    sort: 'publishedAt:desc',
    'pagination[page]': page,
    'pagination[pageSize]': pageSize,
  };
  if (category) params['filters[category][id][$eq]'] = category;

  const response = await apiClient.get<StrapiCollectionResponse<BlogPost>>('/api/blog-posts', { params });
  return response.data;
};

export const getBlogPostBySlug = async (slug: string): Promise<StrapiSingleResponse<BlogPost>> => {
  const response = await apiClient.get<StrapiCollectionResponse<BlogPost>>('/api/blog-posts', {
    params: {
      ...POPULATE_PARAMS,
      'filters[slug][$eq]': slug,
    },
  });
  const item = response.data.data[0];
  return { data: item, meta: response.data.meta };
};

export const getRelatedBlogPosts = async (
  categoryId: string | number,
  excludeId: string | number,
  limit = 3,
): Promise<StrapiCollectionResponse<BlogPost>> => {
  const response = await apiClient.get<StrapiCollectionResponse<BlogPost>>('/api/blog-posts', {
    params: {
      ...POPULATE_PARAMS,
      'filters[category][id][$eq]': categoryId,
      'filters[id][$ne]': excludeId,
      'pagination[pageSize]': limit,
      sort: 'publishedAt:desc',
    },
  });
  return response.data;
};
