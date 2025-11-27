import React from 'react';
import { Droplet, TrendingUp, Landmark, Truck } from 'lucide-react';
import AdPlaceholder from '../components/AdPlaceholder';
import SEO from '../components/SEO';

const FuelGuide: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <SEO 
        title="Petrol & Diesel Price Calculation Formula" 
        description="Understand how fuel prices are calculated in India. Breakdown of Base Price, Excise Duty, VAT, and Dealer Commission for Petrol and Diesel." 
      />
      
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden">
        
        {/* Header Image / Hero */}
        <div className="bg-blue-50 dark:bg-blue-900/20 p-8 border-b border-blue-100 dark:border-blue-800/30">
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-blue-600 rounded-lg text-white">
              <Droplet size={32} />
            </div>
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                How Petrol & Diesel Prices Are Calculated
              </h1>
              <p className="text-gray-600 dark:text-gray-300 mt-2">
                Demystifying the math behind the fuel prices at your local pump.
              </p>
            </div>
          </div>
        </div>

        <div className="p-8 md:p-12 prose dark:prose-invert max-w-none">
          
          <p className="lead text-lg text-gray-700 dark:text-gray-300">
            Have you ever wondered why petrol costs ₹96 in Delhi but ₹102 in Mumbai? Or why the price changes every morning? The price you pay at the pump is significantly higher than the actual cost of the fuel due to a complex structure of taxes and commissions.
          </p>

          <AdPlaceholder slot="8923481234" className="my-8" label="Advertisement" />

          <h2 className="flex items-center text-xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
            <Landmark className="mr-2 text-brand-600" /> 
            The Pricing Formula
          </h2>
          <p>
            The retail selling price of petrol and diesel in India is built up in several stages. Here is a simplified breakdown of how ₹100 worth of petrol is roughly priced (values are indicative estimates):
          </p>
          
          <div className="my-6 bg-gray-50 dark:bg-gray-700/50 p-6 rounded-lg">
            <ul className="space-y-4">
              <li className="flex justify-between items-center border-b border-gray-200 dark:border-gray-600 pb-2">
                <span className="font-medium">1. Base Price (Crude Oil + Refining)</span>
                <span className="font-mono text-gray-600 dark:text-gray-400">~ ₹57.00</span>
              </li>
              <li className="flex justify-between items-center border-b border-gray-200 dark:border-gray-600 pb-2">
                <span className="font-medium">2. Freight & Transportation</span>
                <span className="font-mono text-gray-600 dark:text-gray-400">~ ₹0.20</span>
              </li>
              <li className="flex justify-between items-center border-b border-gray-200 dark:border-gray-600 pb-2">
                <span className="font-medium text-red-600 dark:text-red-400">3. Excise Duty (Central Govt Tax)</span>
                <span className="font-mono text-red-600 dark:text-red-400">~ ₹19.90</span>
              </li>
              <li className="flex justify-between items-center border-b border-gray-200 dark:border-gray-600 pb-2">
                <span className="font-medium">4. Dealer Commission</span>
                <span className="font-mono text-gray-600 dark:text-gray-400">~ ₹3.80</span>
              </li>
              <li className="flex justify-between items-center pb-2">
                <span className="font-medium text-red-600 dark:text-red-400">5. VAT (State Govt Tax)</span>
                <span className="font-mono text-red-600 dark:text-red-400">~ ₹15 - ₹25</span>
              </li>
            </ul>
          </div>
          <p className="text-sm text-gray-500 mt-2">
            *Note: Excise duty and VAT rates change periodically. VAT varies by state, which is why prices differ across India.
          </p>

          <h2 className="flex items-center text-xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
            <TrendingUp className="mr-2 text-brand-600" /> 
            Why Do Prices Change Daily?
          </h2>
          <p>
            Before 2017, fuel prices in India were revised on the 1st and 16th of every month. In June 2017, India moved to a <strong>Daily Dynamic Pricing</strong> model.
          </p>
          <p>
            This system ensures that the benefit of even the smallest reduction in international crude oil prices is passed on to dealers and consumers immediately, rather than waiting for a fortnight. Conversely, if international rates spike, the burden is spread out daily rather than a sudden sharp hike.
          </p>
          <p>
            <strong>Time of Update:</strong> Prices are revised daily at 06:00 AM IST.
          </p>

          <AdPlaceholder slot="8923481234" className="my-8" label="Advertisement" />

          <h2 className="flex items-center text-xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
            <Truck className="mr-2 text-brand-600" /> 
            Factors Influencing Crude Oil Rates
          </h2>
          <p>
            Since India imports over 80% of its crude oil requirements, domestic fuel prices are heavily dependent on global factors:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li><strong>USD/INR Exchange Rate:</strong> Since oil is traded in Dollars, a weaker Rupee makes imports expensive.</li>
            <li><strong>Geopolitical Tensions:</strong> Wars or conflicts in oil-producing nations (like the Middle East or Russia) disrupt supply, driving prices up.</li>
            <li><strong>OPEC Decisions:</strong> The Organization of the Petroleum Exporting Countries controls a large portion of supply and can slash production to keep prices high.</li>
          </ul>

        </div>
      </div>
    </div>
  );
};

export default FuelGuide;