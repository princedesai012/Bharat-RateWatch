import React, { useEffect, useRef } from 'react';

const AdsterraBanner: React.FC = () => {
  const bannerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Check karein ki script pehle se toh nahi lagi hai
    if (bannerRef.current && !bannerRef.current.querySelector('script[src*="effectivegatecpm"]')) {
      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.src = '//pl28179288.effectivegatecpm.com/05cedd82d5ee60c662685e7c58b1d6ae/invoke.js';
      script.async = true;
      script.dataset.cfasync = "false";

      bannerRef.current.appendChild(script);
    }
  }, []);

  return (
    <div className="flex justify-center items-center my-8">
      {/* Container wrapper for styling */}
      <div 
        ref={bannerRef} 
        className="min-h-[250px] min-w-[300px] flex justify-center items-center bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-100 dark:border-gray-700"
      >
        {/* Adsterra Container ID */}
        <div id="container-05cedd82d5ee60c662685e7c58b1d6ae"></div>
      </div>
    </div>
  );
};

export default AdsterraBanner;
