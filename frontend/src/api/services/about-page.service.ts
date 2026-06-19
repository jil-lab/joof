import apiClient from '../client';
import type { StrapiSingleResponse, AboutPage } from '../../types/strapi';

export const getAboutPage = async (): Promise<StrapiSingleResponse<AboutPage>> => {
  const response = await apiClient.get<StrapiSingleResponse<AboutPage>>('/api/about-page');
  return response.data;
};
