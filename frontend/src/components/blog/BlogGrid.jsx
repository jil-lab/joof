import { motion } from 'framer-motion';
import BlogCard from './BlogCard';

const BlogGrid = ({ posts }) => {
  if (!posts || posts.length === 0) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center justify-center py-20 px-4"
      >
        {/* Icon */}
        <div className="mb-6 text-gray-300">
          <svg
            className="w-24 h-24 mx-auto"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
            />
          </svg>
        </div>

        {/* Heading */}
        <h3 className="text-2xl font-bold text-gray-900 mb-3">
          Stay Tuned for Updates!
        </h3>

        {/* Message */}
        <p className="text-gray-600 text-lg mb-2 max-w-md text-center">
          We're working on bringing you inspiring stories and updates.
          Check back soon for the latest news from JOOF Foundation!
        </p>

        {/* Decorative element */}
        <div className="mt-8 flex gap-2">
          <div className="w-2 h-2 bg-teal-500 rounded-full animate-pulse"></div>
          <div className="w-2 h-2 bg-teal-400 rounded-full animate-pulse delay-75"></div>
          <div className="w-2 h-2 bg-teal-300 rounded-full animate-pulse delay-150"></div>
        </div>
      </motion.div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {posts.map((post, index) => (
        <BlogCard key={post.id} post={post} index={index} />
      ))}
    </div>
  );
};

export default BlogGrid;
