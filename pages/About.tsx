import React from 'react';
import { TrendingUp, ShieldCheck, Clock } from 'lucide-react';
import SEO from '../components/SEO';

const About: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <SEO 
        title="About Us" 
        description="Learn about Daily Rates India, our mission to provide transparent commodity pricing, and our data sourcing methodology." 
      />
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden">
        <div className="p-8 md:p-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">About Daily Rates India</h1>
          
          <div className="prose dark:prose-invert max-w-none">
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
              Welcome to <strong>Daily Rates India</strong>, your premier destination for transparent and real-time commodity pricing. 
              In an economy where prices fluctuate by the hour, we believe every consumer deserves access to accurate market data 
              to make informed financial and household decisions.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-12">
              <div className="text-center p-4">
                <div className="bg-brand-50 dark:bg-gray-700 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-brand-600">
                  <TrendingUp size={24} />
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Real-Time Tracking</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">Continuous monitoring of market trends across major Indian metros.</p>
              </div>
              <div className="text-center p-4">
                <div className="bg-brand-50 dark:bg-gray-700 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-brand-600">
                  <ShieldCheck size={24} />
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Verified Sources</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">Data aggregated from government notifications and reputed market indices.</p>
              </div>
              <div className="text-center p-4">
                <div className="bg-brand-50 dark:bg-gray-700 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-brand-600">
                  <Clock size={24} />
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Daily Updates</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">Automated refreshes ensure you never see outdated pricing.</p>
              </div>
            </div>

            <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">Our Mission</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Founded in 2024, our mission is to simplify the complex world of commodity trading for the common man. 
              Whether you are a homemaker budgeting for the week's groceries, an investor tracking gold trends, or a commuter calculating fuel costs, 
              Daily Rates India provides the insights you need in a clean, ad-friendly interface.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">How We Gather Data</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              We utilize advanced technology to aggregate data from multiple public sources:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-400 mb-6">
              <li><strong>Fuel:</strong> Direct feeds from Oil Marketing Companies (OMCs) like IOCL and HPCL.</li>
              <li><strong>Metals:</strong> Real-time bullion market APIs and spot price indicators.</li>
              <li><strong>Vegetables:</strong> Wholesale market (Mandi) averages provided by government agricultural portals.</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">Get in Touch</h2>
            <p className="text-gray-600 dark:text-gray-400">
              We are constantly improving. If you notice a discrepancy or have suggestions for new features, 
              please visit our <a href="/#/contact" className="text-brand-600 hover:underline">Contact page</a>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;