import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { HiChevronDown } from 'react-icons/hi';
import DropdownMenu from './DropdownMenu';

const Navigation = () => {
  const location = useLocation();
  const [activeDropdown, setActiveDropdown] = useState(null);

  const menuItems = [
    { label: 'Home', path: '/' },
    {
      label: 'About',
      path: '/about',
      children: [
        { label: 'About Us', path: '/about' },
        { label: 'Our Team', path: '/about/team' },
        { label: 'Our Story', path: '/about/our-story' },
      ],
    },
    {
      label: 'Programs',
      path: '/programs',
      children: [
        { label: 'All Programs', path: '/programs' },
        { label: 'Healthcare', path: '/programs/healthcare' },
        { label: 'Education', path: '/programs/education' },
        { label: 'Community', path: '/programs/community' },
      ],
    },
    { label: 'News', path: '/news' },
    { label: 'Contact', path: '/contact' },
  ];

  const isActivePath = (path) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  return (
    <nav className="hidden lg:flex items-center space-x-8">
      {menuItems.map((item) => (
        <div
          key={item.label}
          className="relative"
          onMouseEnter={() => item.children && setActiveDropdown(item.label)}
          onMouseLeave={() => setActiveDropdown(null)}
        >
          {item.children ? (
            <>
              <button
                className={`flex items-center space-x-1 font-medium transition-colors ${
                  isActivePath(item.path)
                    ? 'text-teal-600'
                    : 'text-gray-700 hover:text-teal-600'
                }`}
              >
                <span>{item.label}</span>
                <HiChevronDown className="w-4 h-4" />
              </button>
              {activeDropdown === item.label && (
                <DropdownMenu items={item.children} />
              )}
            </>
          ) : (
            <Link
              to={item.path}
              className={`font-medium transition-colors ${
                isActivePath(item.path)
                  ? 'text-teal-600'
                  : 'text-gray-700 hover:text-teal-600'
              }`}
            >
              {item.label}
            </Link>
          )}
        </div>
      ))}
    </nav>
  );
};

export default Navigation;
