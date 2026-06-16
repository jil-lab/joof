import apiClient from '../client';
import type { StrapiCollectionResponse, StrapiSingleResponse, Testimonial } from '../../types/strapi';

export const getTestimonials = async (): Promise<StrapiCollectionResponse<Testimonial>> => {
  const response = await apiClient.get<StrapiCollectionResponse<Testimonial>>('/api/testimonials', {
    params: { populate: 'image', sort: 'order:asc' },
  });
  return response.data;
};

export const getTestimonial = async (id: string | number): Promise<StrapiSingleResponse<Testimonial>> => {
  const response = await apiClient.get<StrapiSingleResponse<Testimonial>>(`/api/testimonials/${id}`, {
    params: { populate: 'image' },
  });
  return response.data;
};
