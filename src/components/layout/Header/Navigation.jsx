import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { HiChevronDown } from 'react-icons/hi';
import { AnimatePresence } from 'framer-motion';
import DropdownMenu from './DropdownMenu';

const menuItems = [
  { label: 'Home', path: '/' },
  {
    label: 'About',
    path: '/about',
    children: [
      { label: 'About Us', path: '/about' },
      { label: 'Our Team', path: '/about/team' },
      { label: 'Reports', path: '/about/reports' },
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
  // { label: 'News', path: '/news' },
  { label: 'Contact', path: '/contact' },
];

const Navigation = () => {
  const location = useLocation();
  const [activeDropdown, setActiveDropdown] = useState(null);

  const isActivePath = (path) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <nav className="hidden lg:flex items-center space-x-1" aria-label="Main navigation">
      {menuItems.map((item) => (
        <div
          key={item.label}
          className="relative"
          onMouseEnter={() => item.children && setActiveDropdown(item.label)}
          onMouseLeave={() => item.children && setActiveDropdown(null)}
        >
          <Link
            to={item.path}
            className={`flex items-center gap-1 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
              isActivePath(item.path)
                ? 'text-teal-600'
                : 'text-gray-700 hover:text-teal-600'
            }`}
            aria-current={isActivePath(item.path) && !item.children ? 'page' : undefined}
          >
            {item.label}
            {item.children && (
              <HiChevronDown
                className={`w-4 h-4 transition-transform duration-200 ${
                  activeDropdown === item.label ? 'rotate-180' : ''
                }`}
                aria-hidden="true"
              />
            )}
          </Link>

          {item.children && (
            <AnimatePresence>
              {activeDropdown === item.label && (
                <DropdownMenu
                  items={item.children}
                  currentPath={location.pathname}
                />
              )}
            </AnimatePresence>
          )}
        </div>
      ))}
    </nav>
  );
};

export default Navigation;
