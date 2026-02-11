import { Link } from 'react-router-dom';
import { useState } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';
import Navigation from './Navigation';
import MobileMenu from './MobileMenu';
import { useAppContext } from '../../../context/AppContext';

const Header = () => {
  const { mobileMenuOpen, setMobileMenuOpen } = useAppContext();

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container-custom">
        <div className="flex items-center justify-between h-20 px-4 md:px-6 lg:px-8">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src="/images/joof-logo.png"
              alt="JOOF Foundation - John Oyediran Olabisi Foundation"
              className="h-16 md:h-20 w-auto object-contain"
              onError={(e) => {
                // Fallback to text logo if image is not found
                e.target.style.display = 'none';
                e.target.nextElementSibling.style.display = 'flex';
              }}
            />
          </Link>

          {/* Desktop Navigation */}
          <Navigation />

          {/* Donate Button (Desktop) */}
          <Link
            to="/donate"
            className="hidden lg:block bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-6 py-2 rounded-lg font-semibold transition-colors"
          >
            Donate
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-gray-900 p-2"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <HiX className="w-6 h-6" />
            ) : (
              <HiMenu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <MobileMenu />
    </header>
  );
};

export default Header;
