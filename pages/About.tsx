import React from 'react';

const About: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">About Us</h1>
      <div className="prose dark:prose-invert max-w-none">
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
          Welcome to <strong>Daily Rates India</strong>, your number one source for all daily commodity prices in India. We're dedicated to giving you the very best of real-time price tracking, with a focus on accuracy, reliability, and speed.
        </p>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          Founded in 2024, Daily Rates India has come a long way from its beginnings. When we first started out, our passion for "Transparancy in Daily Essentials" drove us to do tons of research, so that Daily Rates India can offer you the most comprehensive price tracker for Gold, Fuel, and Vegetables. We now serve customers all over India via this website.
        </p>
        <h2 className="text-xl font-semibold mt-6 mb-3 text-gray-900 dark:text-white">Our Data Sources</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          We aggregate data from various public government APIs, market announcements, and reliable news sources to bring you the most accurate daily average. While we strive for precision, local vendor prices may vary slightly.
        </p>
        <h2 className="text-xl font-semibold mt-6 mb-3 text-gray-900 dark:text-white">Contact Us</h2>
        <p className="text-gray-600 dark:text-gray-400">
          If you have any questions or comments, please don't hesitate to contact us.
        </p>
      </div>
    </div>
  );
};

export default About;