import React from 'react';
import { TrendingUp, ShieldCheck, Database, Target } from 'lucide-react';
import SEO from '../components/SEO';
import { Link } from 'react-router-dom';

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
              Welcome to <strong>Daily Rates India</strong>. In an economy where prices for essential commodities can change overnight, we believe every consumer deserves free and easy access to transparent, accurate, and up-to-date market data.
            </p>
            
            <div className="bg-brand-50 dark:bg-gray-700/50 p-6 rounded-lg my-8 border-l-4 border-brand-500">
                <h2 className="text-2xl font-bold mt-0 mb-4 text-gray-900 dark:text-white flex items-center">
                    <Target className="mr-3 text-brand-600" /> Our Mission
                </h2>
                <p className="text-gray-700 dark:text-gray-300">
                    Our mission is to empower Indian consumers and small businesses by democratizing financial information. We aim to be the most reliable, user-friendly platform for tracking daily-use commodity prices, helping you make informed decisions—whether you're managing household budgets, investing in precious metals, or simply staying aware of economic trends.
                </p>
            </div>

            <h2 className="text-2xl font-bold mt-12 mb-4 text-gray-900 dark:text-white flex items-center">
              <Database className="mr-3 text-brand-600" /> Our Data Sourcing Philosophy
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Transparency is at the core of what we do. The prices you see on our platform are not arbitrary; they are the result of a rigorous, technology-driven process. Here’s how we ensure our data is as reliable as possible:
            </p>
            <ul className="list-disc pl-6 space-y-3 text-gray-600 dark:text-gray-400 mb-6">
              <li>
                <strong>AI-Powered Aggregation:</strong> We utilize Google's powerful Gemini AI model with Search Grounding capabilities. This allows us to scan and aggregate real-time data from hundreds of reputable public sources, including official news outlets, government portals, and financial market websites.
              </li>
              <li>
                <strong>Public APIs:</strong> For certain commodities, we tap into official public APIs provided by government bodies and major corporations (like Oil Marketing Companies) to get the most direct and accurate price feeds.
              </li>
              <li>
                <strong>Cross-Verification:</strong> Data from multiple sources is cross-referenced to identify and filter out anomalies. Our system flags significant deviations, ensuring that a temporary error on one source doesn't affect the final price displayed.
              </li>
               <li>
                <strong>Regular Updates:</strong> Our entire data pipeline is automated to refresh every few hours, ensuring the prices reflect the latest market conditions.
              </li>
            </ul>

            <h2 className="text-2xl font-bold mt-12 mb-4 text-gray-900 dark:text-white flex items-center">
              <ShieldCheck className="mr-3 text-brand-600" /> Our Commitment to Accuracy
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              While we strive for 100% accuracy, it's important for our users to understand that the prices displayed are indicative market averages. Prices can vary slightly from city to city, and even from one vendor to another. We are not a financial advisory service. Our goal is to provide a reliable snapshot of the market to help with your planning and analysis. For a detailed breakdown of our data usage, please read our <Link to="/disclaimer" className="text-brand-600 hover:underline">Disclaimer</Link>.
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-4 text-gray-900 dark:text-white">Join Us on Our Journey</h2>
            <p className="text-gray-600 dark:text-gray-400">
              Daily Rates India was built for the community. We are constantly working to add new features, track more commodities, and improve our data accuracy. If you have any feedback or suggestions, we would love to hear from you. Please get in touch via our <Link to="/contact" className="text-brand-600 hover:underline">Contact page</Link>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;