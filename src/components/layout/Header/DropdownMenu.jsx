import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const DropdownMenu = ({ items, currentPath }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -6 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -6 }}
      transition={{ duration: 0.15, ease: 'easeOut' }}
      className="absolute top-full left-0 w-48 bg-white rounded-xl shadow-lg border border-gray-100 py-1.5 z-50"
    >
      {items.map((item) => {
        const isActive = currentPath === item.path;
        return (
          <Link
            key={item.path}
            to={item.path}
            className={`block px-4 py-2.5 text-sm transition-colors ${
              isActive
                ? 'text-teal-600 bg-teal-50 font-medium'
                : 'text-gray-700 hover:text-teal-600 hover:bg-gray-50'
            }`}
          >
            {item.label}
          </Link>
        );
      })}
    </motion.div>
  );
};

export default DropdownMenu;
