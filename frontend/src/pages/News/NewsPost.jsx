import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import RichTextRenderer from '../../components/blog/RichTextRenderer';
import BlogCard from '../../components/blog/BlogCard';
import SEO from '../../components/common/SEO/SEO';
import { useBlogPostBySlug, useRelatedBlogPosts } from '../../hooks/useApi';
import { formatStrapiDate, getStrapiImageUrl } from '../../utils/formatters';

const NewsPost = () => {
  const { slug } = useParams();
  const { data: postData, isLoading, error } = useBlogPostBySlug(slug);

  // Extract post data (Strapi v5 format - data is not nested under attributes)
  const post = postData ? {
    id: postData?.id,
    title: postData?.title,
    slug: postData?.slug,
    content: postData?.content,
    excerpt: postData?.excerpt,
    author: postData?.author,
    publishedAt: postData?.publishedAt,
    readTime: postData?.readTime,
    tags: postData?.tags,
    featuredImage: postData?.featuredImage,
    category: postData?.category,
  } : null;

  // Fetch related posts
  const { data: relatedData } = useRelatedBlogPosts(
    post?.category?.id,
    post?.id,
    3
  );

  // Transform related posts data (Strapi v5 format)
  const relatedPosts = relatedData?.data?.map(p => ({
    id: p?.id,
    title: p?.title,
    slug: p?.slug,
    excerpt: p?.excerpt,
    publishedAt: p?.publishedAt,
    readTime: p?.readTime,
    featuredImage: p?.featuredImage,
    category: p?.category,
  })) || [];

  // Loading state
  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="flex flex-col items-center space-y-4">
          <div className="w-16 h-16 border-4 border-teal-500 border-t-transparent rounded-full animate-spin"></div>
          <p className="text-gray-600 font-medium">Loading post...</p>
        </div>
      </div>
    );
  }

  // Error or not found
  if (error || !post) {
    return (
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Post Not Found</h1>
          <p className="text-gray-600 mb-8">The news post you're looking for doesn't exist or has been removed.</p>
          <Link
            to="/news"
            className="inline-flex items-center px-6 py-3 bg-teal-600 text-white font-semibold rounded-lg hover:bg-teal-700 transition-colors"
          >
            Back to News
          </Link>
        </div>
      </section>
    );
  }

  const imageUrl = post.featuredImage
    ? getStrapiImageUrl(post.featuredImage)
    : null;

  return (
    <div>
      <SEO
        title={post.title}
        description={post.excerpt}
        image={imageUrl}
        url={`/news/${post.slug}`}
        type="article"
        article={{
          publishedAt: post.publishedAt,
          author: post.author,
          tags: post.tags,
        }}
      />

      {/* Hero Section with Featured Image */}
      <div className="relative py-16 md:py-24 bg-gradient-to-br from-gray-900 to-gray-800 overflow-hidden">
        {imageUrl && (
          <div className="absolute inset-0 opacity-30">
            <img
              src={imageUrl}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
        )}
        <div className="relative container mx-auto px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Breadcrumb */}
            <nav className="mb-6">
              <Link to="/news" className="text-teal-400 hover:text-teal-300 transition-colors">
                ← Back to News
              </Link>
            </nav>

            {/* Category Badge */}
            {post.category && (
              <div className="mb-4">
                <span className="px-3 py-1 bg-teal-500 text-white text-xs font-semibold rounded-full">
                  {post.category.name.toUpperCase()}
                </span>
              </div>
            )}

            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {post.title}
            </h1>

            {/* Meta Info */}
            <div className="flex flex-wrap items-center gap-4 text-gray-300 mb-6">
              <div className="flex items-center gap-2">
                <span className="font-medium">By {post.author || 'JOOF Foundation'}</span>
              </div>
              {post.publishedAt && (
                <>
                  <span>•</span>
                  <time dateTime={post.publishedAt}>
                    {formatStrapiDate(post.publishedAt)}
                  </time>
                </>
              )}
              {post.readTime && (
                <>
                  <span>•</span>
                  <span>{post.readTime} min read</span>
                </>
              )}
            </div>

            {/* Excerpt in Hero */}
            {post.excerpt && (
              <p className="text-lg md:text-xl text-gray-200 leading-relaxed max-w-3xl">
                {post.excerpt}
              </p>
            )}
          </motion.div>
        </div>
      </div>

      {/* Post Content */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="prose prose-lg max-w-none"
          >
            {/* Rich Text Content */}
            <RichTextRenderer content={post.content} />

            {/* Tags */}
            {post.tags && post.tags.length > 0 && (
              <div className="mt-12 pt-8 border-t border-gray-200">
                <h3 className="text-sm font-semibold text-gray-500 mb-3">TAGS</h3>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </motion.article>
        </div>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-16 md:py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Related Articles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {relatedPosts.map((relatedPost, index) => (
                <BlogCard key={relatedPost.id} post={relatedPost} index={index} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-gradient-to-r from-teal-600 to-teal-700">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Want to Stay Updated?
            </h2>
            <p className="text-lg text-teal-50 mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter to receive the latest stories and updates from JOOF Foundation
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-teal-600 font-semibold rounded-lg hover:bg-gray-50 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Subscribe Now
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default NewsPost;
