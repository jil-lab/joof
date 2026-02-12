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
    <nav className="hidden lg:flex items-center space-x-8" aria-label="Main navigation">
      {menuItems.map((item) => (
        <div
          key={item.label}
          className="relative group"
          onMouseEnter={() => item.children && setActiveDropdown(item.label)}
          onMouseLeave={() => item.children && setActiveDropdown(null)}
        >
          {item.children ? (
            <>
              <button
                className={`flex items-center space-x-1 font-medium transition-colors py-2 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 rounded ${
                  isActivePath(item.path)
                    ? 'text-teal-600'
                    : 'text-gray-700 hover:text-teal-600'
                }`}
                aria-expanded={activeDropdown === item.label}
                aria-haspopup="true"
                aria-label={`${item.label} menu`}
              >
                <span>{item.label}</span>
                <HiChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    activeDropdown === item.label ? 'rotate-180' : ''
                  }`}
                  aria-hidden="true"
                />
              </button>
              {activeDropdown === item.label && (
                <DropdownMenu
                  items={item.children}
                  onClose={() => setActiveDropdown(null)}
                />
              )}
            </>
          ) : (
            <Link
              to={item.path}
              className={`font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 rounded px-2 py-1 ${
                isActivePath(item.path)
                  ? 'text-teal-600'
                  : 'text-gray-700 hover:text-teal-600'
              }`}
              aria-current={isActivePath(item.path) ? 'page' : undefined}
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
