import React, { useEffect, useState, useCallback } from 'react';
import { 
  Droplet, Flame, Coins, Zap, ChefHat, MapPin, 
  RotateCcw, Calendar, Loader2, Info
} from 'lucide-react';
import { fetchPricesForCity } from '../services/geminiService';
import { PriceData, City } from '../types';
import { CITIES, DEFAULT_PRICES } from '../constants';
import PriceCard from '../components/PriceCard';
import SEO from '../components/SEO';
import AdsterraBanner from '../components/AdsterraBanner';

const LoadingSpinner: React.FC = () => (
  <div className="flex justify-center items-center py-24">
    <Loader2 size={40} className="animate-spin text-brand-600" />
    <span className="ml-4 text-lg text-gray-600 dark:text-gray-400">Fetching latest rates...</span>
  </div>
);


const Home: React.FC = () => {
  const [selectedCity, setSelectedCity] = useState<City>(City.INDIA);
  const [data, setData] = useState<PriceData>(DEFAULT_PRICES);
  const [isFetching, setIsFetching] = useState<boolean>(true);

  const loadData = useCallback(async (city: City) => {
    setIsFetching(true);
    try {
      const result = await fetchPricesForCity(city);
      setData(result);
    } catch (error) {
      console.error("Failed to fetch prices:", error);
      setData(prev => ({...prev, source: "Error fetching data. Showing estimates."}));
    } finally {
      setIsFetching(false);
    }
  }, []);

  useEffect(() => {
    // Initial load
    loadData(selectedCity);
  }, [selectedCity, loadData]);

  return (
    <div className="bg-gray-50 dark:bg-gray-900 pb-20">
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
                disabled={isFetching}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all disabled:opacity-70 disabled:cursor-not-allowed ${
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
        
        {isFetching ? (
          <LoadingSpinner />
        ) : (
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
                disabled={isFetching}
                className="flex items-center text-sm text-brand-600 dark:text-brand-400 hover:underline disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <RotateCcw size={14} className="mr-1" /> Refresh
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

            <AdsterraBanner />
            
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
            <div className="text-xs text-gray-400 text-center mt-6 mb-12">
              Source: {data.source}. Prices are indicative and may vary by local vendor. <br/>
              Last Check: {new Date(data.lastUpdated).toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' })}
            </div>
        
            {/* Static content is always visible */}
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
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Home;
