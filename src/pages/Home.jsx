import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import WhyChooseUs from '../components/WhyChooseUs';
import Gallery from '../components/Gallery';
import ContactForm from '../components/ContactForm';

const Home = () => {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <Hero />
      
      {/* Services Section */}
      <Services />
      
      {/* Why Choose Us Section */}
      <WhyChooseUs />
      
      {/* Gallery Section */}
      <Gallery />
      
      {/* Contact Form Section */}
      <ContactForm />
      
      {/* Call to Action Banner */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your Space?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Contact us today for a free consultation and quote on your glass project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors duration-300">
              Get Free Quote
            </button>
            <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-blue-900 transition-colors duration-300">
              Call Now: +91 98765 43210
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;