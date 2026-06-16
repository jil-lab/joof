import apiClient from '../client';
import type { StrapiCollectionResponse, Partner } from '../../types/strapi';

export const getPartners = async (): Promise<StrapiCollectionResponse<Partner>> => {
  const response = await apiClient.get<StrapiCollectionResponse<Partner>>('/api/partners', {
    params: { populate: 'logo', sort: 'order:asc' },
  });
  return response.data;
};
