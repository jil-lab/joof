import apiClient from '../client';

export interface ContactFormData {
  name: string;
  email: string;
  subject?: string;
  message: string;
}

export interface NewsletterData {
  email: string;
  name?: string;
}

export const submitContactForm = async (data: ContactFormData): Promise<{ data: unknown }> => {
  const response = await apiClient.post('/api/contact-submissions', { data });
  return response.data;
};

export const subscribeNewsletter = async (data: NewsletterData): Promise<{ data: unknown }> => {
  const response = await apiClient.post('/api/newsletter-subscriptions', { data });
  return response.data;
};
