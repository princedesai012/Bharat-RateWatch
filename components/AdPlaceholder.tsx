import React, { useEffect } from 'react'; // useEffect add kiya
import { AdUnitProps } from '../types';
import { ADSENSE_CLIENT_ID } from '../constants';

// TypeScript error fix karne ke liye
declare global {
  interface Window {
    adsbygoogle: any[];
  }
}

const AdPlaceholder: React.FC<AdUnitProps> = ({ slot, format = 'auto', className = '', label = 'Advertisement' }) => {
  
  useEffect(() => {
    try {
      // Check if script is loaded and push the ad
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {
      console.error("AdSense Error", e);
    }
  }, []);

  return (
    <div className={`w-full my-4 flex flex-col items-center justify-center ${className}`}>
      <span className="text-[10px] uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-1">
        {label}
      </span>
      <div className="w-full bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-md overflow-hidden min-h-[100px] text-center">
        
        {/* Actual AdSense Code */}
        <ins className="adsbygoogle"
             style={{ display: 'block' }}
             data-ad-client={ADSENSE_CLIENT_ID}
             data-ad-slot={slot}
             data-ad-format={format}
             data-full-width-responsive="true"></ins>
             
      </div>
    </div>
  );
};

export default AdPlaceholder;