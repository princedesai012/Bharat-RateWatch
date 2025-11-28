import React, { useEffect, useState } from 'react';
import { 
  Droplet, Flame, Coins, Zap, ChefHat, MapPin, 
  RotateCcw, Calendar, Loader2, Info
} from 'lucide-react';
import { fetchPricesForCity } from '../services/geminiService';
import { PriceData, City } from '../types';
import { CITIES } from '../constants';
import PriceCard from '../components/PriceCard';
import AdPlaceholder from '../components/AdPlaceholder';
import SEO from '../components/SEO';

const Home: React.FC = () => {
  const [selectedCity, setSelectedCity] = useState<City>(City.INDIA);
  const [data, setData] = useState<PriceData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const loadData = async (city: City) => {
    setLoading(true);
    const result = await fetchPricesForCity(city);
    setData(result);
    setLoading(false);
  };

  useEffect(() => {
    loadData(selectedCity);
  }, [selectedCity]);

  // Structured Data Schema for SEO
  useEffect(() => {
    if (!data) return;

    const schema = {
      "@context": "https://schema.org",
      "@type": "PriceSpecification",
      "validFrom": new Date().toISOString(),
      "priceCurrency": "INR",
      "price": data.gold_24k,
      "description": `Current market prices in ${selectedCity} for Gold, Silver, Fuel and Vegetables.`
    };
    
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(schema);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, [data, selectedCity]);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pb-20">
      <SEO 
        title={`Today's Rates in ${selectedCity}`}
        description={`Track today's live Gold, Silver, Petrol, Diesel, LPG and Vegetable prices in ${selectedCity}. Real-time updates.`}
      />

      {/* Hero Section */}
      <div className="bg-brand-600 dark:bg-gray-800 text-white pb-20 pt-10 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Daily Market Rates & Prices in India
          </h1>
          <p className="text-brand-100 dark:text-gray-400 text-lg mb-8 max-w-2xl">
            Stay updated with the latest real-time prices for Gold, Silver, Petrol, Diesel, LPG, and essential vegetables across major Indian cities.
          </p>

          {/* Filter Bar */}
          <div className="bg-white dark:bg-gray-700 rounded-lg p-2 shadow-lg inline-flex flex-wrap gap-2 items-center">
            <div className="flex items-center px-3 text-gray-500 dark:text-gray-300">
              <MapPin size={18} className="mr-2" />
              <span className="text-sm font-medium hidden sm:inline">Select City:</span>
            </div>
            {CITIES.map((city) => (
              <button
                key={city}
                onClick={() => setSelectedCity(city)}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                  selectedCity === city
                    ? 'bg-brand-600 text-white shadow-md'
                    : 'bg-transparent text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600'
                }`}
              >
                {city}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10">
        
        {/* Dynamic Content Section */}
        {loading ? (
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-12 flex flex-col justify-center items-center min-h-[300px] mb-8">
            <Loader2 size={48} className="animate-spin text-brand-600 mb-4" />
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Updating Prices for {selectedCity}...</h2>
            <p className="text-gray-500 dark:text-gray-400">Fetching the latest rates from market sources.</p>
          </div>
        ) : data ? (
          <>
            {/* Last Updated Info */}
            <div className="flex justify-between items-end mb-4">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Latest Rates in {selectedCity}
                </h2>
                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mt-1">
                  <Calendar size={14} className="mr-1" />
                  <span>{new Date().toLocaleDateString('en-IN', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</span>
                </div>
              </div>
              <button 
                onClick={() => loadData(selectedCity)} 
                className="flex items-center text-sm text-brand-600 dark:text-brand-400 hover:underline"
                disabled={loading}
              >
                <RotateCcw size={14} className={`mr-1 ${loading ? 'animate-spin' : ''}`} />
                Refresh
              </button>
            </div>
            
            <p className="text-gray-600 dark:text-gray-400 mb-6 text-sm">
              Explore today's market prices for essential commodities. All rates are updated frequently from reliable market data to ensure accuracy for your reference.
            </p>

            {/* Metals Section */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4 flex items-center">
                <Coins size={20} className="mr-2 text-yellow-500" /> Precious Metals
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <PriceCard 
                  title="Gold (24K)" 
                  value={data.gold_24k} 
                  unit="10g" 
                  colorClass="bg-yellow-500" 
                  icon={<Coins size={24} />} 
                  trend="up"
                />
                <PriceCard 
                  title="Gold (22K)" 
                  value={data.gold_22k} 
                  unit="10g" 
                  colorClass="bg-yellow-600" 
                  icon={<Coins size={24} />} 
                  trend="up"
                />
                <PriceCard 
                  title="Silver" 
                  value={data.silver} 
                  unit="1kg" 
                  colorClass="bg-gray-400" 
                  icon={<Coins size={24} />} 
                  trend="down"
                />
              </div>
            </div>

            {/* Top Ad Slot - MOVED HERE */}
            <AdPlaceholder slot="7220504723" className="mb-8" label="Sponsored" />

            {/* Fuel Section */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4 flex items-center">
                <Droplet size={20} className="mr-2 text-blue-500" /> Fuel Prices
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <PriceCard 
                  title="Petrol" 
                  value={data.petrol} 
                  unit="Litre" 
                  colorClass="bg-blue-500" 
                  icon={<Droplet size={24} />} 
                />
                <PriceCard 
                  title="Diesel" 
                  value={data.diesel} 
                  unit="Litre" 
                  colorClass="bg-blue-600" 
                  icon={<Droplet size={24} />} 
                />
                <PriceCard 
                  title="LPG Cylinder" 
                  value={data.lpg} 
                  unit="14.2kg" 
                  colorClass="bg-red-500" 
                  icon={<Flame size={24} />} 
                />
              </div>
            </div>

            {/* In-Content Ad */}
            <AdPlaceholder slot="7220504723" className="mb-8" />

            {/* Vegetables Section */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4 flex items-center">
                <ChefHat size={20} className="mr-2 text-green-500" /> Essential Vegetables
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <PriceCard 
                  title="Onion" 
                  value={data.onion} 
                  unit="kg" 
                  colorClass="bg-purple-500" 
                  icon={<Zap size={24} />} 
                  trend="down"
                />
                <PriceCard 
                  title="Tomato" 
                  value={data.tomato} 
                  unit="kg" 
                  colorClass="bg-red-500" 
                  icon={<Zap size={24} />} 
                  trend="up"
                />
                <PriceCard 
                  title="Potato" 
                  value={data.potato} 
                  unit="kg" 
                  colorClass="bg-yellow-700" 
                  icon={<Zap size={24} />} 
                />
              </div>
            </div>

            {/* Data Source Disclaimer */}
            <div className="text-xs text-gray-400 text-center mt-6 mb-12">
              Source: {data.source}. Prices are indicative and may vary by local vendor. <br/>
              Last Check: {new Date(data.lastUpdated).toLocaleTimeString()}
            </div>
          </>
        ) : (
          <div className="text-center text-red-500 bg-white dark:bg-gray-800 p-8 rounded-lg shadow mb-8">
            <p className="mb-2">We encountered an issue fetching the latest rates.</p>
            <button 
                onClick={() => loadData(selectedCity)} 
                className="text-brand-600 font-medium hover:underline"
              >
                Try Again
              </button>
          </div>
        )}

        {/* STATIC CONTENT - Rendered OUTSIDE loading check */}
        {/* This ensures Google AdSense always sees "Publisher Content" even if API is slow */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 p-8 mb-12">
          <div className="flex items-center mb-6">
            <Info className="text-brand-600 mr-2" />
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Market Insights & FAQs</h2>
          </div>
          
          <div className="space-y-8">
            <section>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Why do Gold rates fluctuate daily?</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Gold prices in India are influenced by international market trends, currency exchange rates (USD to INR), and import duties. 
                Additionally, local factors such as festive demand (weddings, Diwali) and monsoon quality can impact the daily rate of 22K and 24K gold. 
                We track these changes daily to provide you with the most accurate estimates.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">How are Fuel prices determined?</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Petrol and Diesel prices in India are revised daily at 6:00 AM by Oil Marketing Companies (OMCs) like IOCL, BPCL, and HPCL. 
                The pricing formula includes the cost of crude oil in the international market, excise duty levied by the Central Government, 
                Value Added Tax (VAT) by State Governments, and dealer commissions. This is why fuel prices vary significantly between states like Delhi, Karnataka, and Maharashtra.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Understanding Vegetable Market Rates</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Vegetable prices, particularly for staples like Onion, Tomato, and Potato (TOP), are highly volatile. They depend on supply chain conditions, 
                weather affecting crop yields, and transport costs. Our data reflects the wholesale average converted to retail expectations, though 
                local sabzi mandi rates may vary slightly based on freshness and quality.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Difference between 24K and 22K Gold</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                <strong>24K Gold</strong> is the purest form of gold (99.9% pure) and is mostly used for investment purposes like coins and bars. It is too soft for making intricate jewelry. 
                <strong>22K Gold</strong> contains 91.6% gold mixed with other metals like copper or zinc to provide durability, making it the standard for jewelry making in India.
              </p>
            </section>
          </div>
        </div>
      </div>

      {/* Sticky Bottom Ad */}
      {data && !loading && (
        <div className="fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] z-40 p-2 hidden md:block">
           <div className="max-w-[728px] mx-auto">
             <AdPlaceholder slot="7220504723" className="my-0" label="" />
           </div>
        </div>
      )}
    </div>
  );
};

export default Home;