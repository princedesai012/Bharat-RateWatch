export interface PriceData {
  gold_24k: number;
  gold_22k: number;
  silver: number;
  petrol: number;
  diesel: number;
  lpg: number;
  onion: number;
  tomato: number;
  potato: number;
  lastUpdated: string;
  source: string;
}

export enum City {
  INDIA = 'All India',
  MUMBAI = 'Mumbai',
  DELHI = 'Delhi',
  SURAT = 'Surat',
  BENGALURU = 'Bengaluru',
  CHENNAI = 'Chennai',
  KOLKATA = 'Kolkata'
}

export interface AdUnitProps {
  slot: string;
  format?: 'auto' | 'fluid' | 'rectangle';
  className?: string;
  label?: string;
}

export interface NavItem {
  label: string;
  path: string;
}