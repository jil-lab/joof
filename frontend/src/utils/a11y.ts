import React from 'react';

/**
 * Accessibility Utilities for JOOF Website
 */

/**
 * Generates a unique ID for ARIA attributes
 */
export const generateAriaId = (prefix = 'aria'): string => {
  return `${prefix}-${Math.random().toString(36).substr(2, 9)}`;
};

/**
 * Gets the appropriate role for a clickable element
 */
export const getClickableRole = (isButton = true): string => {
  return isButton ? 'button' : 'link';
};

/**
 * Skip to main content link for keyboard navigation
 */
export const SkipToMainContent = (): React.ReactElement => (
  React.createElement('a', {
    href: '#main-content',
    className: 'sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-teal-500 focus:text-white focus:rounded-md focus:shadow-lg',
    'aria-label': 'Skip to main content',
  }, 'Skip to main content')
);

/**
 * Visually hidden but screen reader accessible text
 */
export const srOnlyClass = 'sr-only';

/**
 * Focus visible styles for keyboard navigation
 */
export const focusVisibleClasses = 'focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2';

/**
 * Announces dynamic content changes to screen readers
 */
export const announceToScreenReader = (message: string, priority: 'polite' | 'assertive' = 'polite'): void => {
  const announcement = document.createElement('div');
  announcement.setAttribute('role', 'status');
  announcement.setAttribute('aria-live', priority);
  announcement.setAttribute('aria-atomic', 'true');
  announcement.className = 'sr-only';
  announcement.textContent = message;

  document.body.appendChild(announcement);

  setTimeout(() => {
    document.body.removeChild(announcement);
  }, 1000);
};

/**
 * Check if user prefers reduced motion
 */
export const prefersReducedMotion = (): boolean => {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

export default {
  generateAriaId,
  getClickableRole,
  SkipToMainContent,
  srOnlyClass,
  focusVisibleClasses,
  announceToScreenReader,
  prefersReducedMotion,
};
