import React from 'react';
import SEO from '../components/SEO';

const Terms: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <SEO 
        title="Terms and Conditions" 
        description="Terms and Conditions for using Daily Rates India website." 
      />
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Terms and Conditions</h1>
      <div className="prose dark:prose-invert max-w-none text-gray-600 dark:text-gray-400">
        <p className="mb-4">
          Welcome to Daily Rates India! These terms and conditions outline the rules and regulations for the use of Daily Rates India's Website.
        </p>
        <p className="mb-4">
          By accessing this website we assume you accept these terms and conditions. Do not continue to use Daily Rates India if you do not agree to take all of the terms and conditions stated on this page.
        </p>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mt-6 mb-2">Cookies</h3>
        <p className="mb-4">
          We employ the use of cookies. By accessing Daily Rates India, you agreed to use cookies in agreement with the Daily Rates India's Privacy Policy.
        </p>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mt-6 mb-2">License</h3>
        <p className="mb-4">
          Unless otherwise stated, Daily Rates India and/or its licensors own the intellectual property rights for all material on Daily Rates India. All intellectual property rights are reserved. You may access this from Daily Rates India for your own personal use subjected to restrictions set in these terms and conditions.
        </p>
      </div>
    </div>
  );
};

export default Terms;