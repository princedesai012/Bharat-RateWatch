import React, { useEffect, useRef } from 'react';

const TelegramTracker: React.FC = () => {
  const sentRef = useRef(false);

  useEffect(() => {
    if (import.meta.env.DEV) return; // Localhost par mat chalana

    const hasNotifiedSession = sessionStorage.getItem('hasNotified');
    if (hasNotifiedSession || sentRef.current) return;

    const notify = async () => {
      try {
        // 1. Basic IP Data toh chahiye hi
        const ipRes = await fetch('https://ipapi.co/json/');
        const ipData = await ipRes.json();
        
        // Device Info
        const isMobile = /Mobi|Android/i.test(navigator.userAgent);
        const deviceType = isMobile ? 'Mobile' : 'Desktop/Laptop';

        // Data object ready karo
        let payload = {
          city: ipData.city || 'Unknown',
          country: ipData.country_name || 'Unknown',
          ip: ipData.ip,
          device: deviceType,
          os: navigator.platform,
          page: window.location.pathname,
          mapsLink: null as string | null // Pehle null rakho
        };

        // Function jo data bhejega
        const sendData = async (finalPayload: any) => {
          await fetch('/api/notify', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(finalPayload)
          });
          sentRef.current = true;
          sessionStorage.setItem('hasNotified', 'true');
        };

        // 2. Try GPS (Browser Location)
        if ("geolocation" in navigator) {
          navigator.geolocation.getCurrentPosition(
            (position) => {
              // Agar user ne Allow kiya -> Exact Location mil gayi!
              const { latitude, longitude } = position.coords;
              const googleMapsLink = `https://www.google.com/maps?q=${latitude},${longitude}`;
              
              // Payload update karke bhejo
              payload.mapsLink = googleMapsLink;
              sendData(payload);
            },
            (error) => {
              // Agar user ne Block kiya ya Error aaya -> Sirf IP wala bhejo
              console.log("GPS denied/error, sending IP location only");
              sendData(payload);
            }
          );
        } else {
          // Browser me GPS support nahi hai
          sendData(payload);
        }

      } catch (error) {
        console.error("Tracking failed", error);
      }
    };

    notify();
  }, []);

  return null;
};

export default TelegramTracker;
