import BlogCard from './BlogCard';

const BlogGrid = ({ posts }) => {
  if (!posts || posts.length === 0) {
    return (
      <div className="text-center py-16">
        <p className="text-gray-600 text-lg">No news posts found. Check back soon for updates!</p>
      </div>
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
