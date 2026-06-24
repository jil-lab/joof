import { StrapiMedia } from '../types/strapi';

/**
 * Utility functions for formatting data, especially Strapi media URLs
 */

/**
 * Get the full URL for a Strapi image
 */
export const getStrapiImageUrl = (image: StrapiMedia | null | undefined): string | null => {
  if (!image) return null;

  const strapiUrl = import.meta.env.VITE_STRAPI_URL || 'http://localhost:1337';

  if (image.formats) {
    const format = image.formats.medium || image.formats.small || image.formats.thumbnail;
    if (format) {
      return format.url.startsWith('http') ? format.url : `${strapiUrl}${format.url}`;
    }
  }

  if (image.url) {
    return image.url.startsWith('http') ? image.url : `${strapiUrl}${image.url}`;
  }

  return null;
};

/**
 * Get multiple image URLs from Strapi media collection
 */
export const getStrapiImageUrls = (images: (StrapiMedia | null | undefined)[] | null | undefined): string[] => {
  if (!images || !Array.isArray(images)) return [];
  return images.map(getStrapiImageUrl).filter((url): url is string => url !== null);
};

/**
 * Format Strapi date to readable format
 */
export const formatStrapiDate = (dateString: string | null | undefined): string => {
  if (!dateString) return '';

  const date = new Date(dateString);
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(date);
};

/**
 * Extract data from Strapi v5 response format
 */
export const extractStrapiData = (response: unknown): unknown => {
  if (!response) return null;

  const r = response as Record<string, unknown>;

  if (r.data) {
    if (Array.isArray(r.data)) {
      return (r.data as Record<string, unknown>[]).map(item => ({
        id: item.id,
        ...item.attributes as object,
      }));
    }

    const item = r.data as Record<string, unknown>;
    return {
      id: item.id,
      ...(item.attributes as object),
    };
  }

  return response;
};

/**
 * Format number with commas
 */
export const formatNumber = (num: number | null | undefined): string => {
  if (!num && num !== 0) return '0';
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

/**
 * Truncate text to specified length
 */
export const truncateText = (text: string | null | undefined, maxLength = 100): string => {
  if (!text || text.length <= maxLength) return text || '';
  return text.substring(0, maxLength).trim() + '...';
};
