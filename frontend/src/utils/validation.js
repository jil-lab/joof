import { z } from 'zod';

/**
 * Validation schema for the contact form
 */
export const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, 'Name must be at least 2 characters')
    .max(100, 'Name must be less than 100 characters')
    .trim(),

  email: z
    .string()
    .email('Please enter a valid email address')
    .trim()
    .toLowerCase(),

  subject: z
    .string()
    .min(3, 'Subject must be at least 3 characters')
    .max(200, 'Subject must be less than 200 characters')
    .trim(),

  message: z
    .string()
    .min(10, 'Message must be at least 10 characters')
    .max(1000, 'Message must be less than 1000 characters')
    .trim(),
});

/**
 * Validation schema for newsletter subscription
 */
export const newsletterSchema = z.object({
  email: z
    .string()
    .email('Please enter a valid email address')
    .trim()
    .toLowerCase(),
});

/**
 * Type exports for TypeScript-like usage
 */
export const contactFormDefaults = {
  name: '',
  email: '',
  subject: '',
  message: '',
};

export const newsletterDefaults = {
  email: '',
};
