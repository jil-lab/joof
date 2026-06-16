import apiClient from '../client';
import type { StrapiCollectionResponse, ImpactStat } from '../../types/strapi';

export const getImpactStats = async (): Promise<StrapiCollectionResponse<ImpactStat>> => {
  const response = await apiClient.get<StrapiCollectionResponse<ImpactStat>>('/api/impact-stats', {
    params: { sort: 'order:asc' },
  });
  return response.data;
};
