import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { HiChevronDown, HiChevronUp } from 'react-icons/hi';
import { motion, AnimatePresence } from 'framer-motion';
import { useAppContext } from '../../../context/AppContext';

const MobileMenu = () => {
  const { mobileMenuOpen, setMobileMenuOpen } = useAppContext();
  const [expandedItem, setExpandedItem] = useState(null);
  const location = useLocation();

  const menuItems = [
    { label: 'Home', path: '/' },
    {
      label: 'About',
      path: '/about',
      children: [
        { label: 'About Us', path: '/about' },
        { label: 'Our Team', path: '/about/team' },
        { label: 'Board of Advisors', path: '/about/advisors' },
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
    { label: 'News', path: '/news' },
    { label: 'Contact', path: '/contact' },
    { label: 'Donate', path: '/donate' },
  ];

  const isActivePath = (path) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
    setExpandedItem(null);
  };

  const toggleExpanded = (label) => {
    setExpandedItem(expandedItem === label ? null : label);
  };

  return (
    <AnimatePresence>
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="lg:hidden bg-white border-t border-gray-200 overflow-hidden"
        >
          <nav className="py-4 px-4">
            {menuItems.map((item) => (
              <div key={item.label} className="mb-2">
                {item.children ? (
                  <>
                    <button
                      onClick={() => toggleExpanded(item.label)}
                      className={`w-full flex items-center justify-between py-3 px-4 rounded-lg font-medium transition-colors ${
                        isActivePath(item.path)
                          ? 'bg-teal-50 text-teal-500'
                          : 'text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      <span>{item.label}</span>
                      {expandedItem === item.label ? (
                        <HiChevronUp className="w-5 h-5" />
                      ) : (
                        <HiChevronDown className="w-5 h-5" />
                      )}
                    </button>
                    <AnimatePresence>
                      {expandedItem === item.label && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="overflow-hidden ml-4 mt-2 space-y-1"
                        >
                          {item.children.map((child) => (
                            <Link
                              key={child.path}
                              to={child.path}
                              onClick={handleLinkClick}
                              className={`block py-2 px-4 rounded-lg transition-colors ${
                                location.pathname === child.path
                                  ? 'bg-teal-50 text-teal-500 font-medium'
                                  : 'text-gray-600 hover:bg-gray-50'
                              }`}
                            >
                              {child.label}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </>
                ) : (
                  <Link
                    to={item.path}
                    onClick={handleLinkClick}
                    className={`block py-3 px-4 rounded-lg font-medium transition-colors ${
                      isActivePath(item.path)
                        ? 'bg-teal-50 text-teal-500'
                        : 'text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
