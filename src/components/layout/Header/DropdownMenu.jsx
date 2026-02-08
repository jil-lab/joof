import { Link } from 'react-router-dom';

const DropdownMenu = ({ items, onClose }) => {
  return (
    <div className="absolute top-full left-0 mt-1 w-48 bg-white rounded-lg shadow-lg py-2 animate-slide-down z-50">
      {items.map((item) => (
        <Link
          key={item.path}
          to={item.path}
          onClick={onClose}
          className="block px-4 py-2 text-gray-700 hover:bg-teal-50 hover:text-teal-500 transition-colors"
        >
          {item.label}
        </Link>
      ))}
    </div>
  );
};

export default DropdownMenu;
