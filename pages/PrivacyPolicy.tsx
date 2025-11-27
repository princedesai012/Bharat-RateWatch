import React from 'react';
import SEO from '../components/SEO';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <SEO 
        title="Privacy Policy" 
        description="Privacy Policy of Daily Rates India regarding the collection, use, and disclosure of personal data." 
      />
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Privacy Policy</h1>
      <div className="prose dark:prose-invert max-w-none text-gray-600 dark:text-gray-400">
        <p className="mb-4">
          At Daily Rates India, accessible from our website, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by Daily Rates India and how we use it.
        </p>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mt-6 mb-2">Log Files</h3>
        <p className="mb-4">
          Daily Rates India follows a standard procedure of using log files. These files log visitors when they visit websites. The information collected by log files includes internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks.
        </p>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mt-6 mb-2">Google DoubleClick DART Cookie</h3>
        <p className="mb-4">
          Google is one of a third-party vendor on our site. It also uses cookies, known as DART cookies, to serve ads to our site visitors based upon their visit to our site and other sites on the internet.
        </p>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mt-6 mb-2">Consent</h3>
        <p className="mb-4">
          By using our website, you hereby consent to our Privacy Policy and agree to its Terms and Conditions.
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;