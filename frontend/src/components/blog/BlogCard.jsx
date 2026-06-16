import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { formatStrapiDate, getStrapiImageUrl } from '../../utils/formatters';

const BlogCard = ({ post, index = 0 }) => {
  const imageUrl = post.featuredImage
    ? getStrapiImageUrl(post.featuredImage)
    : '/images/blog/default-blog.jpg';

  // Category colors mapping
  const categoryColors = {
    healthcare: 'bg-blue-100 text-blue-800',
    education: 'bg-purple-100 text-purple-800',
    community: 'bg-green-100 text-green-800',
    'impact-stories': 'bg-yellow-100 text-yellow-800',
    news: 'bg-teal-100 text-teal-800',
    events: 'bg-pink-100 text-pink-800',
  };

  // Get category slug and name
  const categorySlug = post.category?.slug || 'news';
  const categoryName = post.category?.name || 'News';
  const categoryColor = categoryColors[categorySlug] || 'bg-gray-100 text-gray-800';

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
    >
      <Link to={`/news/${post?.slug || '#'}`} className="block">
        {/* Featured Image */}
        <div className="relative h-56 overflow-hidden bg-gray-200">
          <img
            src={imageUrl}
            alt={post?.title || 'Blog post'}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            loading="lazy"
          />
          {/* Category Badge */}
          <div className="absolute top-4 left-4">
            <span className={`px-3 py-1 rounded-full text-xs font-semibold ${categoryColor}`}>
              {categoryName.toUpperCase()}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Meta Info */}
          {(post?.publishedAt || post?.readTime) && (
            <div className="flex items-center gap-3 text-sm text-gray-500 mb-3">
              {post.publishedAt && (
                <time dateTime={post.publishedAt}>
                  {formatStrapiDate(post.publishedAt)}
                </time>
              )}
              {post.publishedAt && post.readTime && <span>•</span>}
              {post.readTime && (
                <span>{post.readTime} min read</span>
              )}
            </div>
          )}

          {/* Title */}
          {post?.title && (
            <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-teal-600 transition-colors">
              {post.title}
            </h3>
          )}

          {/* Excerpt */}
          {post?.excerpt && (
            <p className="text-gray-600 line-clamp-3 mb-4">
              {post.excerpt}
            </p>
          )}

          {/* Read More Link */}
          <div className="flex items-center text-teal-600 font-semibold group-hover:text-teal-700 transition-colors">
            Read More
            <svg
              className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </div>
        </div>
      </Link>
    </motion.article>
  );
};

export default BlogCard;
