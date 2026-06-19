import apiClient from '../client';
import type { StrapiCollectionResponse, Report } from '../../types/strapi';

export const getReports = async (): Promise<StrapiCollectionResponse<Report>> => {
  const response = await apiClient.get<StrapiCollectionResponse<Report>>('/api/reports', {
    params: {
      populate: 'file',
      sort: ['year:desc', 'title:asc'],
      'pagination[pageSize]': 200,
    },
  });
  return response.data;
};
