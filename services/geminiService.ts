import { GoogleGenAI } from "@google/genai";
import { PriceData, City } from "../types";
import { DEFAULT_PRICES } from "../constants";

// Helper to validate price data
const isValidPriceData = (data: any): data is PriceData => {
  return (
    typeof data === 'object' &&
    typeof data.gold_24k === 'number' &&
    typeof data.onion === 'number'
  );
};

export const fetchPricesForCity = async (city: City): Promise<PriceData> => {
  const apiKey = process.env.API_KEY;

  // 1. Check Local Storage Cache
  const cacheKey = `price_data_${city}`;
  const cached = localStorage.getItem(cacheKey);
  
  if (cached) {
    const { data, timestamp } = JSON.parse(cached);
    const age = Date.now() - timestamp;
    // Cache valid for 6 hours
    if (age < 6 * 60 * 60 * 1000) {
      console.log(`Using cached data for ${city}`);
      return data;
    }
  }

  // 2. If no API Key, return mock data with slight randomization to simulate live updates
  if (!apiKey) {
    console.warn("No API Key found. Using mock data.");
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    const variance = () => 1 + (Math.random() * 0.1 - 0.05); // +/- 5%
    const mockData: PriceData = {
      gold_24k: Math.round(DEFAULT_PRICES.gold_24k * variance()),
      gold_22k: Math.round(DEFAULT_PRICES.gold_22k * variance()),
      silver: Math.round(DEFAULT_PRICES.silver * variance()),
      petrol: Number((DEFAULT_PRICES.petrol * variance()).toFixed(2)),
      diesel: Number((DEFAULT_PRICES.diesel * variance()).toFixed(2)),
      lpg: Math.round(DEFAULT_PRICES.lpg * variance()),
      onion: Math.round(DEFAULT_PRICES.onion * variance()),
      tomato: Math.round(DEFAULT_PRICES.tomato * variance()),
      potato: Math.round(DEFAULT_PRICES.potato * variance()),
      lastUpdated: new Date().toISOString(),
      source: 'Market Estimation (Demo Mode)'
    };
    
    localStorage.setItem(cacheKey, JSON.stringify({ data: mockData, timestamp: Date.now() }));
    return mockData;
  }

  // 3. Fetch Real Data via Gemini with Google Search Grounding
  try {
    const ai = new GoogleGenAI({ apiKey });
    
    // We want a strict JSON response.
    const prompt = `
      Find the current market prices in ${city}, India for the following items today.
      
      Items to find:
      1. Gold 24K per 10 grams
      2. Gold 22K per 10 grams
      3. Silver per 1 kg
      4. Petrol per liter
      5. Diesel per liter
      6. LPG Cylinder (14.2kg) domestic
      7. Onion per kg
      8. Tomato per kg
      9. Potato per kg

      Return ONLY a raw JSON object with these keys:
      {
        "gold_24k": number,
        "gold_22k": number,
        "silver": number,
        "petrol": number,
        "diesel": number,
        "lpg": number,
        "onion": number,
        "tomato": number,
        "potato": number
      }
      Do not include any markdown formatting like \`\`\`json. Just the raw JSON string.
    `;

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
      config: {
        tools: [{ googleSearch: {} }],
        // Note: Cannot use responseMimeType: 'application/json' with googleSearch tool currently,
        // so we must parse the text manually.
      }
    });

    const text = response.text || "{}";
    
    // Attempt to extract JSON if wrapped in markdown
    const jsonMatch = text.match(/\{[\s\S]*\}/);
    const jsonString = jsonMatch ? jsonMatch[0] : text;
    
    const parsed = JSON.parse(jsonString);

    const result: PriceData = {
      gold_24k: Number(parsed.gold_24k) || DEFAULT_PRICES.gold_24k,
      gold_22k: Number(parsed.gold_22k) || DEFAULT_PRICES.gold_22k,
      silver: Number(parsed.silver) || DEFAULT_PRICES.silver,
      petrol: Number(parsed.petrol) || DEFAULT_PRICES.petrol,
      diesel: Number(parsed.diesel) || DEFAULT_PRICES.diesel,
      lpg: Number(parsed.lpg) || DEFAULT_PRICES.lpg,
      onion: Number(parsed.onion) || DEFAULT_PRICES.onion,
      tomato: Number(parsed.tomato) || DEFAULT_PRICES.tomato,
      potato: Number(parsed.potato) || DEFAULT_PRICES.potato,
      lastUpdated: new Date().toISOString(),
      source: 'Google Search (Real-time)'
    };

    // Cache the result
    localStorage.setItem(cacheKey, JSON.stringify({ data: result, timestamp: Date.now() }));
    
    return result;

  } catch (error) {
    console.error("Gemini API Error:", error);
    // Fallback to default if API fails
    return { ...DEFAULT_PRICES, source: 'Offline Fallback' };
  }
};