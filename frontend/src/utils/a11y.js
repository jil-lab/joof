/**
 * Accessibility Utilities for JOOF Website
 */

/**
 * Generates a unique ID for ARIA attributes
 * @param {string} prefix - Prefix for the ID
 * @returns {string} Unique ID
 */
export const generateAriaId = (prefix = 'aria') => {
  return `${prefix}-${Math.random().toString(36).substr(2, 9)}`;
};

/**
 * Gets the appropriate role for a clickable element
 * @param {boolean} isButton - Whether the element should act as a button
 * @returns {string} ARIA role
 */
export const getClickableRole = (isButton = true) => {
  return isButton ? 'button' : 'link';
};

/**
 * Skip to main content link for keyboard navigation
 * @returns {JSX.Element} Skip link component
 */
export const SkipToMainContent = () => (
  <a
    href="#main-content"
    className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-teal-500 focus:text-white focus:rounded-md focus:shadow-lg"
    aria-label="Skip to main content"
  >
    Skip to main content
  </a>
);

/**
 * Visually hidden but screen reader accessible text
 * Use this class for screen reader only text
 */
export const srOnlyClass = 'sr-only';

/**
 * Focus visible styles for keyboard navigation
 * Tailwind classes for focus states
 */
export const focusVisibleClasses = 'focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2';

/**
 * Announces dynamic content changes to screen readers
 * @param {string} message - Message to announce
 * @param {string} priority - 'polite' or 'assertive'
 */
export const announceToScreenReader = (message, priority = 'polite') => {
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
 * @returns {boolean}
 */
export const prefersReducedMotion = () => {
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
