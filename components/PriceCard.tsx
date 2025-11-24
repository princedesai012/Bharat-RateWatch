import React from 'react';
import { ArrowUp, ArrowDown, Minus } from 'lucide-react';

interface PriceCardProps {
  title: string;
  value: number;
  unit: string;
  trend?: 'up' | 'down' | 'stable';
  colorClass: string;
  icon: React.ReactNode;
}

const PriceCard: React.FC<PriceCardProps> = ({ title, value, unit, trend = 'stable', colorClass, icon }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 p-6 flex flex-col justify-between hover:shadow-md transition-shadow">
      <div className="flex justify-between items-start mb-4">
        <div className={`p-3 rounded-lg ${colorClass} bg-opacity-10 dark:bg-opacity-20`}>
          <div className={`${colorClass.replace('bg-', 'text-')}`}>
            {icon}
          </div>
        </div>
        {/* Trend Indicator (Mock logic for visual) */}
        <div className={`flex items-center text-xs font-medium px-2 py-1 rounded-full ${
          trend === 'up' ? 'text-red-600 bg-red-50 dark:bg-red-900/20' : 
          trend === 'down' ? 'text-green-600 bg-green-50 dark:bg-green-900/20' : 
          'text-gray-500 bg-gray-50 dark:bg-gray-700/50'
        }`}>
          {trend === 'up' && <ArrowUp size={12} className="mr-1" />}
          {trend === 'down' && <ArrowDown size={12} className="mr-1" />}
          {trend === 'stable' && <Minus size={12} className="mr-1" />}
          {trend === 'up' ? '+0.5%' : trend === 'down' ? '-0.2%' : '0%'}
        </div>
      </div>
      
      <div>
        <h3 className="text-gray-500 dark:text-gray-400 text-sm font-medium uppercase tracking-wide mb-1">
          {title}
        </h3>
        <div className="flex items-baseline">
          <span className="text-2xl font-bold text-gray-900 dark:text-white">
            ₹{value.toLocaleString('en-IN')}
          </span>
          <span className="ml-2 text-sm text-gray-400 dark:text-gray-500">
            / {unit}
          </span>
        </div>
      </div>
    </div>
  );
};

export default PriceCard;