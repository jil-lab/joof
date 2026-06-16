import apiClient from '../client';
import type { StrapiCollectionResponse, CoreValue } from '../../types/strapi';

export const getCoreValues = async (): Promise<StrapiCollectionResponse<CoreValue>> => {
  const response = await apiClient.get<StrapiCollectionResponse<CoreValue>>('/api/core-values', {
    params: { sort: 'order:asc' },
  });
  return response.data;
};
