import apiClient from '../client';
import type { StrapiCollectionResponse, StrapiSingleResponse, Advisor } from '../../types/strapi';

export const getAdvisors = async (): Promise<StrapiCollectionResponse<Advisor>> => {
  const response = await apiClient.get<StrapiCollectionResponse<Advisor>>('/api/advisors', {
    params: { populate: 'photo', sort: 'order:asc' },
  });
  return response.data;
};

export const getAdvisor = async (id: string | number): Promise<StrapiSingleResponse<Advisor>> => {
  const response = await apiClient.get<StrapiSingleResponse<Advisor>>(`/api/advisors/${id}`, {
    params: { populate: 'photo' },
  });
  return response.data;
};
