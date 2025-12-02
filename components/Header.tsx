import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, TrendingUp, Gift } from 'lucide-react'; // Gift icon add kiya hai
import DarkModeToggle from './DarkModeToggle';
import { NAV_ITEMS } from '../constants';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);

  // Aapki Smart Link
  const smartLink = "https://www.effectivegatecpm.com/rbh1tbquz?key=af6725f554d2360e67a427f54d4d4b32";

  return (
    <header className="sticky top-0 z-50 w-full bg-white/90 dark:bg-gray-900/90 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="bg-brand-600 p-1.5 rounded-lg text-white">
              <TrendingUp size={24} strokeWidth={2.5} />
            </div>
            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-brand-600 to-brand-400">
              DailyRates<span className="text-gray-700 dark:text-gray-300">India</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-6 items-center">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-medium transition-colors hover:text-brand-600 ${
                  location.pathname === item.path
                    ? 'text-brand-600 dark:text-brand-400'
                    : 'text-gray-600 dark:text-gray-300'
                }`}
              >
                {item.label}
              </Link>
            ))}
            
            {/* 👇 SMART LINK BUTTON ADDED HERE 👇 */}
            <a 
              href={smartLink}
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center space-x-1 bg-green-600 hover:bg-green-700 text-white px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wide animate-pulse transition-all shadow-md hover:shadow-lg"
            >
              <Gift size={14} />
              <span>Special Offer</span>
            </a>

            <DarkModeToggle />
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center space-x-4">
            <DarkModeToggle />
            <button
              onClick={toggleMenu}
              className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  location.pathname === item.path
                    ? 'bg-brand-50 dark:bg-gray-800 text-brand-600 dark:text-brand-400'
                    : 'text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800'
                }`}
              >
                {item.label}
              </Link>
            ))}
            {/* Mobile Menu Smart Link */}
            <a 
              href={smartLink}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-left px-3 py-2 text-base font-bold text-green-600 dark:text-green-400 hover:bg-green-50 dark:hover:bg-green-900/20"
            >
              🎁 Check Special Offer
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
