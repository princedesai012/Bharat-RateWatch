import React from 'react';
import { Coins, ShieldCheck, Award, Info } from 'lucide-react';
import AdPlaceholder from '../components/AdPlaceholder';
import SEO from '../components/SEO';

const GoldGuide: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <SEO 
        title="Gold Buying Guide India: 22K vs 24K" 
        description="Complete guide to buying gold in India. Learn the difference between 22K and 24K gold, BIS Hallmarking standards, and making charges." 
      />
      
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden">
        
        {/* Header Image / Hero */}
        <div className="bg-yellow-50 dark:bg-yellow-900/20 p-8 border-b border-yellow-100 dark:border-yellow-800/30">
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-yellow-500 rounded-lg text-white">
              <Coins size={32} />
            </div>
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                The Ultimate Guide to Buying Gold in India
              </h1>
              <p className="text-gray-600 dark:text-gray-300 mt-2">
                Everything you need to know about Karats, Hallmarking, and Smart Investing.
              </p>
            </div>
          </div>
        </div>

        <div className="p-8 md:p-12 prose dark:prose-invert max-w-none">
          
          <p className="lead text-lg text-gray-700 dark:text-gray-300">
            Gold is not just a metal in India; it's an emotion, a tradition, and a safety net. However, buying gold can be tricky if you don't understand the nuances of purity and pricing. This guide breaks down the essentials.
          </p>

          <AdPlaceholder slot="8923481234" className="my-8" label="Advertisement" />

          <h2 className="flex items-center text-xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
            <Award className="mr-2 text-brand-600" /> 
            Understanding Gold Purity: 24K vs 22K
          </h2>
          <p>
            The purity of gold is measured in Karats (K). The scale ranges from 0 to 24.
          </p>
          <ul className="list-disc pl-6 space-y-3 mb-6">
            <li>
              <strong>24 Karat Gold (99.9% Pure):</strong> This is the purest form of gold available commercially. It is distinctively bright yellow and soft. Because of its softness, it cannot be used to make intricate jewelry as it would lose shape easily. It is primarily used for investment purposes like coins and bars.
            </li>
            <li>
              <strong>22 Karat Gold (91.6% Pure):</strong> This contains 91.6% gold and 8.4% other metals like copper, zinc, nickel, or silver. This alloy makes the metal harder and durable, making it the standard for jewelry making in India.
            </li>
            <li>
              <strong>18 Karat Gold (75.0% Pure):</strong> Used for diamond and stone-studded jewelry. Since diamonds need a stronger mount to hold them in place, 18K gold provides the necessary strength.
            </li>
          </ul>

          <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg my-8 border-l-4 border-blue-500">
            <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-100 mb-2 flex items-center">
              <Info size={20} className="mr-2" /> Pro Tip
            </h3>
            <p className="text-blue-800 dark:text-blue-200">
              Never buy jewelry claiming to be 24K. If a jeweler sells you studded jewelry in 22K, ask for a guarantee on the stone setting, as 22K is often too soft for heavy stones.
            </p>
          </div>

          <h2 className="flex items-center text-xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
            <ShieldCheck className="mr-2 text-brand-600" /> 
            What is BIS Hallmarking?
          </h2>
          <p>
            The Bureau of Indian Standards (BIS) certifies the purity of gold. As of recent regulations, it is mandatory for jewelers to sell only hallmarked gold. A BIS Hallmark consists of three major components:
          </p>
          <ol className="list-decimal pl-6 space-y-3 mb-6">
            <li><strong>BIS Logo:</strong> The official triangular mark.</li>
            <li><strong>Purity Grade:</strong> e.g., "22K916" means 22 Karat gold.</li>
            <li><strong>HUID Code:</strong> A 6-digit alphanumeric code unique to each piece of jewelry, allowing traceability.</li>
          </ol>

          <AdPlaceholder slot="8923481234" className="my-8" label="Advertisement" />

          <h2 className="text-xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
            Understanding "Making Charges"
          </h2>
          <p>
            The gold rate you see on our website is the raw material cost. However, when you buy a necklace or ring, you pay:
            <br />
            <code>Final Price = (Price of Gold × Weight) + Making Charges + GST (3%)</code>
          </p>
          <p className="mt-4">
            Making charges can range from 8% to 25% depending on the intricacy of the design. Machine-made chains have lower making charges compared to hand-crafted antique temple jewelry.
          </p>

          <h2 className="text-xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
            Digital Gold vs. Physical Gold
          </h2>
          <p>
            In the modern era, you don't need a locker to store gold.
          </p>
          <div className="overflow-x-auto mt-4">
            <table className="min-w-full text-left text-sm whitespace-nowrap">
              <thead className="uppercase tracking-wider border-b-2 border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800">
                <tr>
                  <th scope="col" className="px-6 py-4">Feature</th>
                  <th scope="col" className="px-6 py-4">Physical Gold</th>
                  <th scope="col" className="px-6 py-4">Digital Gold / ETFs</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 dark:divide-gray-700">
                <tr>
                  <td className="px-6 py-4 font-medium">Storage</td>
                  <td className="px-6 py-4">Risk of theft, locker charges</td>
                  <td className="px-6 py-4">Secure digital vault, free</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium">Purity</td>
                  <td className="px-6 py-4">Must verify hallmark</td>
                  <td className="px-6 py-4">Guaranteed 24K (99.9%)</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium">Liquidity</td>
                  <td className="px-6 py-4">Sell at jeweler (deductions apply)</td>
                  <td className="px-6 py-4">Instant sell at market rate</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <p className="mt-8 text-sm text-gray-500 italic">
            Disclaimer: This guide is for educational purposes only. Please consult a financial advisor before making large investments.
          </p>
        </div>
      </div>
    </div>
  );
};

export default GoldGuide;