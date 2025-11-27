import React from 'react';
import SEO from '../components/SEO';

const Disclaimer: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <SEO 
        title="Disclaimer" 
        description="Disclaimer regarding the accuracy of price data on Daily Rates India." 
      />
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Disclaimer</h1>
      <div className="prose dark:prose-invert max-w-none text-gray-600 dark:text-gray-400">
        <p className="mb-4">Last updated: {new Date().toLocaleDateString()}</p>
        <p className="mb-4">
          The information provided by Daily Rates India ("we," "us," or "our") on this website is for general informational purposes only. All information on the Site is provided in good faith, however, we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability, or completeness of any information on the Site.
        </p>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mt-6 mb-2">Price Accuracy</h3>
        <p className="mb-4">
          Prices for commodities like Gold, Silver, Fuel, and Vegetables change frequently due to market dynamics. While we attempt to update prices every 6 hours using automated systems, the actual price at your local vendor may differ. We are not responsible for any financial loss or decision made based on the data provided here.
        </p>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mt-6 mb-2">External Links</h3>
        <p className="mb-4">
          The Site may contain links to other websites or content belonging to or originating from third parties. Such external links are not investigated, monitored, or checked for accuracy, adequacy, validity, reliability, availability, or completeness by us.
        </p>
      </div>
    </div>
  );
};

export default Disclaimer;