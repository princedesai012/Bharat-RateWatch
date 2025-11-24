import React, { useEffect, useState } from 'react';
import { 
  Droplet, Flame, Coins, Zap, ChefHat, MapPin, 
  RotateCcw, Calendar, Loader2 
} from 'lucide-react';
import { fetchPricesForCity } from '../services/geminiService';
import { PriceData, City } from '../types';
import { CITIES } from '../constants';
import PriceCard from '../components/PriceCard';
import AdPlaceholder from '../components/AdPlaceholder';

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
      "price": data.gold_24k, // Example
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
      {/* Hero Section */}
      <div className="bg-brand-600 dark:bg-gray-800 text-white pb-20 pt-10 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Daily Market Rates & Prices
          </h1>
          <p className="text-brand-100 dark:text-gray-400 text-lg mb-8 max-w-2xl">
            Track real-time prices for Gold, Silver, Petrol, Diesel, LPG, and Vegetables in India. Updated daily.
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
        
        {/* Ad Slot Top */}
        <AdPlaceholder slot="top-banner" className="mb-8" label="Sponsored" />

        {/* Last Updated Info */}
        <div className="flex justify-between items-end mb-6">
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

        {loading ? (
          <div className="flex justify-center items-center h-64">
            <Loader2 size={48} className="animate-spin text-brand-600" />
            <span className="ml-3 text-lg text-gray-600 dark:text-gray-300">Fetching live rates...</span>
          </div>
        ) : data ? (
          <>
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

            {/* In-Content Ad */}
            <AdPlaceholder slot="in-content" className="mb-8" />

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
            <div className="text-xs text-gray-400 text-center mt-6">
              Source: {data.source}. Prices are indicative and may vary by local vendor. <br/>
              Last Check: {new Date(data.lastUpdated).toLocaleTimeString()}
            </div>
          </>
        ) : (
          <div className="text-center text-red-500">Failed to load data. Please try again later.</div>
        )}
      </div>

      {/* Sticky Bottom Ad */}
      <div className="fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 shadow-lg z-40 p-2 hidden md:block">
         <div className="max-w-4xl mx-auto h-[90px] flex items-center justify-center bg-gray-100 dark:bg-gray-800 border border-dashed border-gray-300 dark:border-gray-600 rounded">
            <span className="text-xs text-gray-400">Sticky Footer Ad (728x90)</span>
         </div>
      </div>
    </div>
  );
};

export default Home;