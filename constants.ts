import { City, PriceData } from './types';

export const CITIES = Object.values(City);

export const DEFAULT_PRICES: PriceData = {
  gold_24k: 72500,
  gold_22k: 66450,
  silver: 88000,
  petrol: 96.72,
  diesel: 89.62,
  lpg: 903,
  onion: 35,
  tomato: 28,
  potato: 24,
  lastUpdated: new Date().toISOString(),
  source: 'Estimated Market Rates'
};

export const CACHE_DURATION_MS = 6 * 60 * 60 * 1000; // 6 hours

export const ADSENSE_CLIENT_ID = 'ca-pub-8056938512195354'; 

export const NAV_ITEMS = [
  { label: 'Home', path: '/' },
  { label: 'Gold Guide', path: '/gold-guide' },
  { label: 'Fuel Info', path: '/fuel-guide' },
  { label: 'About', path: '/about' },
];