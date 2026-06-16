import apiClient from '../client';
import type { StrapiSingleResponse, SiteSettings } from '../../types/strapi';

export const getSiteSettings = async (): Promise<StrapiSingleResponse<SiteSettings>> => {
  const response = await apiClient.get<StrapiSingleResponse<SiteSettings>>('/api/site-setting', {
    params: { populate: 'heroImage,missionImage' },
  });
  return response.data;
};
