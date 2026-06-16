import apiClient from '../client';
import type { StrapiCollectionResponse, StrapiSingleResponse, TeamMember } from '../../types/strapi';

export const getTeamMembers = async (): Promise<StrapiCollectionResponse<TeamMember>> => {
  const response = await apiClient.get<StrapiCollectionResponse<TeamMember>>('/api/team-members', {
    params: { populate: 'photo', sort: 'order:asc' },
  });
  return response.data;
};

export const getTeamMember = async (id: string | number): Promise<StrapiSingleResponse<TeamMember>> => {
  const response = await apiClient.get<StrapiSingleResponse<TeamMember>>(`/api/team-members/${id}`, {
    params: { populate: 'photo' },
  });
  return response.data;
};
