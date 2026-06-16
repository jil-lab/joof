import apiClient from '../client';
import type { StrapiCollectionResponse } from '../../types/strapi';

interface Category {
  id: number;
  name: string;
  slug?: string;
}

export const getCategories = async (): Promise<StrapiCollectionResponse<Category>> => {
  const response = await apiClient.get<StrapiCollectionResponse<Category>>('/api/categories', {
    params: { sort: 'name:asc' },
  });
  return response.data;
};
