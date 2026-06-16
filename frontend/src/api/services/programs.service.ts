import apiClient from '../client';
import type { StrapiCollectionResponse, StrapiSingleResponse, Program } from '../../types/strapi';

export const getPrograms = async (): Promise<StrapiCollectionResponse<Program>> => {
  const response = await apiClient.get<StrapiCollectionResponse<Program>>('/api/programs', {
    params: { populate: 'featuredImage,images', sort: 'order:asc' },
  });
  return response.data;
};

export const getProgram = async (id: string | number): Promise<StrapiSingleResponse<Program>> => {
  const response = await apiClient.get<StrapiSingleResponse<Program>>(`/api/programs/${id}`, {
    params: { populate: 'featuredImage,images' },
  });
  return response.data;
};

export const getProgramsByType = async (type: string): Promise<StrapiCollectionResponse<Program>> => {
  const response = await apiClient.get<StrapiCollectionResponse<Program>>('/api/programs', {
    params: {
      populate: 'featuredImage,images',
      'filters[type][$eq]': type,
      sort: 'order:asc',
    },
  });
  return response.data;
};
