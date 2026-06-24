import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination = ({ currentPage, totalPages, onPageChange }: PaginationProps) => {
  if (totalPages <= 1) return null;

  const pages: ReactNode[] = [];
  const maxVisiblePages = 5;
  let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
  let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

  // Adjust start if we're near the end
  if (endPage - startPage < maxVisiblePages - 1) {
    startPage = Math.max(1, endPage - maxVisiblePages + 1);
  }

  // Previous button
  pages.push(
    <button
      key="prev"
      onClick={() => onPageChange(currentPage - 1)}
      disabled={currentPage === 1}
      className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
        currentPage === 1
          ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
          : 'bg-white text-gray-700 hover:bg-teal-50 hover:text-teal-600 shadow-sm'
      }`}
      aria-label="Previous page"
    >
      Previous
    </button>
  );

  // Page numbers
  for (let i = startPage; i <= endPage; i++) {
    pages.push(
      <button
        key={i}
        onClick={() => onPageChange(i)}
        className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
          i === currentPage
            ? 'bg-teal-600 text-white shadow-md'
            : 'bg-white text-gray-700 hover:bg-teal-50 hover:text-teal-600 shadow-sm'
        }`}
        aria-label={`Page ${i}`}
        aria-current={i === currentPage ? 'page' : undefined}
      >
        {i}
      </button>
    );
  }

  // Next button
  pages.push(
    <button
      key="next"
      onClick={() => onPageChange(currentPage + 1)}
      disabled={currentPage === totalPages}
      className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
        currentPage === totalPages
          ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
          : 'bg-white text-gray-700 hover:bg-teal-50 hover:text-teal-600 shadow-sm'
      }`}
      aria-label="Next page"
    >
      Next
    </button>
  );

  return (
    <motion.nav
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="flex items-center justify-center gap-2 mt-12"
      aria-label="Pagination"
    >
      {pages}
    </motion.nav>
  );
};

export default Pagination;
