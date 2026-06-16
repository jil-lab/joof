import apiClient from '../client';
import type { StrapiCollectionResponse, TimelineMilestone } from '../../types/strapi';

export const getTimelineMilestones = async (): Promise<StrapiCollectionResponse<TimelineMilestone>> => {
  const response = await apiClient.get<StrapiCollectionResponse<TimelineMilestone>>(
    '/api/timeline-milestones',
    { params: { sort: 'order:asc', 'pagination[pageSize]': 50 } },
  );
  return response.data;
};
