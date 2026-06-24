import { motion } from 'framer-motion';
import { useCategories } from '../../hooks/useApi';

interface CategoryFilterProps {
  selectedCategory: number | null;
  onCategoryChange: (category: number | null) => void;
}

const CategoryFilter = ({ selectedCategory, onCategoryChange }: CategoryFilterProps) => {
  const { data: categoriesData, isLoading } = useCategories();

  // Extract categories from Strapi v5 response (data is not nested under attributes)
  const categories = categoriesData?.data?.map((cat: { id?: number; name?: string; slug?: string; icon?: string; color?: string }) => ({
    id: cat?.id,
    name: cat?.name,
    slug: cat?.slug,
    icon: cat?.icon,
    color: cat?.color,
  })) || [];

  if (isLoading) {
    return (
      <div className="flex justify-center mb-12">
        <div className="animate-pulse flex gap-2">
          {[1, 2, 3, 4].map(i => (
            <div key={i} className="h-10 w-24 bg-gray-200 rounded-full"></div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-wrap items-center justify-center gap-3 mb-12"
    >
      {/* All Posts Button */}
      <button
        onClick={() => onCategoryChange(null)}
        className={`px-4 py-2 rounded-full font-medium transition-all duration-200 flex items-center gap-2 ${
          selectedCategory === null
            ? 'bg-teal-600 text-white shadow-lg scale-105'
            : 'bg-white text-gray-700 hover:bg-teal-50 hover:text-teal-600 shadow-sm'
        }`}
      >
        <span>📰</span>
        <span>All Posts</span>
      </button>

      {/* Category Buttons */}
      {categories.map((category: { id?: number; name?: string; icon?: string }) => (
        category?.id && category?.name && (
          <button
            key={category.id}
            onClick={() => onCategoryChange(category.id!)}
            className={`px-4 py-2 rounded-full font-medium transition-all duration-200 flex items-center gap-2 ${
              selectedCategory === category.id
                ? 'bg-teal-600 text-white shadow-lg scale-105'
                : 'bg-white text-gray-700 hover:bg-teal-50 hover:text-teal-600 shadow-sm'
            }`}
          >
            {category.icon && <span>{category.icon}</span>}
            <span>{category.name}</span>
          </button>
        )
      ))}
    </motion.div>
  );
};

export default CategoryFilter;
