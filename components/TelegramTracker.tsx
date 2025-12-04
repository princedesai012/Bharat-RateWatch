import React, { useEffect, useRef } from 'react';

const TelegramTracker: React.FC = () => {
  const sentRef = useRef(false); // Double message rokne ke liye

  useEffect(() => {
    // Agar development (localhost) hai toh mat bhejo, taaki testing me spam na ho
    // Agar test karna hai toh is line ko comment kar dena:
    if (import.meta.env.DEV) return;

    // Session check: Agar banda abhi just aaya tha toh wapas message na bheje (Optional)
    const hasNotifiedSession = sessionStorage.getItem('hasNotified');
    if (hasNotifiedSession || sentRef.current) return;

    const notify = async () => {
      try {
        // 1. IP aur Location Data lo
        const ipRes = await fetch('https://ipapi.co/json/');
        const ipData = await ipRes.json();

        // 2. Device detection (Simple logic)
        const ua = navigator.userAgent;
        const isMobile = /Mobi|Android/i.test(ua);
        const deviceType = isMobile ? 'Mobile' : 'Desktop/Laptop';

        // 3. API call (Jo humne step 1 me banayi)
        await fetch('/api/notify', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            city: ipData.city || 'Unknown',
            country: ipData.country_name || 'Unknown',
            ip: ipData.ip,
            device: deviceType,
            os: navigator.platform,
            page: window.location.pathname
          })
        });

        // Flag set karo taaki refresh par wapas message na aaye
        sentRef.current = true;
        sessionStorage.setItem('hasNotified', 'true');

      } catch (error) {
        console.error("Tracking failed", error);
      }
    };

    notify();
  }, []);

  return null; // Yeh component invisible hai
};

export default TelegramTracker;
