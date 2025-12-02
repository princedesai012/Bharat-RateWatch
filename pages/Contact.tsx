import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import SEO from '../components/SEO';

const Contact: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <SEO 
        title="Contact Us" 
        description="Get in touch with Daily Rates India team for support, feedback, or business inquiries." 
      />
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Contact Us</h1>
      
      <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Get in Touch</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              We value your feedback and are here to help. For any questions, suggestions, or business inquiries, please reach out to us.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center text-gray-600 dark:text-gray-300">
                <Mail className="mr-3 text-brand-600" size={20} />
                <span>support@dailyratesindia.com</span>
              </div>
              <div className="flex items-center text-gray-600 dark:text-gray-300">
                <Phone className="mr-3 text-brand-600" size={20} />
                <span>+91 98765 43210 (Mon-Fri, 10am-6pm IST)</span>
              </div>
              <div className="flex items-center text-gray-600 dark:text-gray-300">
                <MapPin className="mr-3 text-brand-600" size={20} />
                <span>Bangalore, Karnataka, India</span>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Send us an Email</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              The best way to reach us is by email. Click the button below to open your email client. We typically respond within 1-2 business days.
            </p>
            <a 
              href="mailto:support@dailyratesindia.com?subject=Inquiry from DailyRatesIndia Website" 
              className="inline-block w-full text-center bg-brand-600 hover:bg-brand-700 text-white font-medium py-3 px-4 rounded-md transition-colors"
            >
              Email Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
