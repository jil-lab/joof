import { useState } from 'react';
import { motion } from 'framer-motion';
import BlogGrid from '../../components/blog/BlogGrid';
import CategoryFilter from '../../components/blog/CategoryFilter';
import Pagination from '../../components/blog/Pagination';
import SEO from '../../components/common/SEO/SEO';
import { useBlogPosts } from '../../hooks/useApi';

const NewsList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const pageSize = 6;

  const { data, isLoading, error } = useBlogPosts({
    page: currentPage,
    pageSize,
    category: selectedCategory,
  });

  // Extract blog posts and pagination meta (Strapi v5 format - data is not nested)
  const blogPosts = data?.data?.map(post => ({
    id: post?.id,
    title: post?.title,
    slug: post?.slug,
    excerpt: post?.excerpt,
    publishedAt: post?.publishedAt,
    readTime: post?.readTime,
    featuredImage: post?.featuredImage,
    category: post?.category,
  })) || [];

  const pagination = data?.meta?.pagination || {
    page: 1,
    pageSize: pageSize,
    pageCount: 1,
    total: 0,
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1); // Reset to page 1 when category changes
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
      <SEO
        title="News & Updates"
        description="Latest stories, impact updates, and news from JOOF Foundation transforming lives through healthcare and education"
        url="/news"
      />

      {/* Hero Section */}
      <div className="relative py-20 md:py-28 bg-gradient-to-br from-teal-600 to-teal-800 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-pattern" />
        </div>
        <div className="relative container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              News & Updates
            </h1>
            <p className="text-lg md:text-xl text-gray-100 leading-relaxed">
              Stories of impact, updates from the field, and insights on transforming lives through healthcare and education
            </p>
          </motion.div>
        </div>
      </div>

      {/* Blog Content */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          {/* Category Filter */}
          <CategoryFilter
            selectedCategory={selectedCategory}
            onCategoryChange={handleCategoryChange}
          />

          {/* Loading State */}
          {isLoading && (
            <div className="text-center py-16">
              <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-teal-500 border-t-transparent"></div>
              <p className="mt-4 text-gray-600">Loading news posts...</p>
            </div>
          )}

          {/* Error State */}
          {error && (
            <div className="text-center py-16">
              <p className="text-red-600">Error loading news posts. Please try again later.</p>
            </div>
          )}

          {/* Blog Grid */}
          {!isLoading && !error && (
            <>
              <BlogGrid posts={blogPosts} />

              {/* Pagination */}
              <Pagination
                currentPage={pagination.page}
                totalPages={pagination.pageCount}
                onPageChange={handlePageChange}
              />

              {/* Results Counter */}
              {blogPosts.length > 0 && (
                <p className="text-center text-gray-600 mt-8">
                  Showing {((pagination.page - 1) * pagination.pageSize) + 1} - {Math.min(pagination.page * pagination.pageSize, pagination.total)} of {pagination.total} posts
                </p>
              )}
            </>
          )}
        </div>
      </section>
    </div>
  );
};

export default NewsList;
