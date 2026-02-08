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
            <div className="flex items-center space-x-2">
              <div className="w-12 h-12 bg-teal-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">JOOF</span>
              </div>
              <span className="hidden md:block font-heading font-bold text-xl text-gray-900">
                JOOF Foundation
              </span>
            </div>
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
