import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 mt-auto">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">DailyRatesIndia</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              India's trusted source for real-time daily commodity prices. Updated every 6 hours from reliable public sources.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white tracking-wider uppercase">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-sm text-gray-500 dark:text-gray-400 hover:text-brand-600">Home</Link></li>
              <li><Link to="/about" className="text-sm text-gray-500 dark:text-gray-400 hover:text-brand-600">About Us</Link></li>
              <li><Link to="/contact" className="text-sm text-gray-500 dark:text-gray-400 hover:text-brand-600">Contact</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white tracking-wider uppercase">Legal</h3>
            <ul className="space-y-2">
              <li><Link to="/privacy-policy" className="text-sm text-gray-500 dark:text-gray-400 hover:text-brand-600">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-sm text-gray-500 dark:text-gray-400 hover:text-brand-600">Terms & Conditions</Link></li>
              <li><Link to="/disclaimer" className="text-sm text-gray-500 dark:text-gray-400 hover:text-brand-600">Disclaimer</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 border-t border-gray-200 dark:border-gray-800 pt-8 text-center">
          <p className="text-sm text-gray-400">
            &copy; {currentYear} DailyRatesIndia. All rights reserved. Data source: Public Government APIs & Google Search Grounding.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;