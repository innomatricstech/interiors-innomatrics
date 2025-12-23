import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import WhyChooseUs from '../components/WhyChooseUs';
import Gallery from '../components/Gallery';
import ContactForm from '../components/ContactForm';

const Home = () => {
  return (
    <div className="relative overflow-hidden">
      {/* Blue Glass Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-sky-900/30 to-cyan-900/20 -z-10">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519681393784-d120267933ba?w=1920&auto=format&fit=crop')] bg-cover bg-center opacity-10"></div>
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(59, 130, 246, 0.1) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
        <div className="absolute inset-0 bg-gradient-to-t from-blue-600/10 via-transparent to-cyan-500/10 mix-blend-overlay"></div>
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
      </div>

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
      
      {/* Premium CTA Banner with Glass Effect */}
      <div className="relative py-24 overflow-hidden">
        {/* Glass Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-sky-900/85 to-cyan-900/90 backdrop-blur-xl">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519681393784-d120267933ba?w=1920&auto=format&fit=crop')] bg-cover bg-center opacity-10"></div>
          {/* Animated gradient overlay */}
          <div className="absolute inset-0 opacity-20" style={{
            background: `linear-gradient(90deg, 
              rgba(59, 130, 246, 0.1) 0%, 
              rgba(14, 165, 233, 0.15) 25%, 
              rgba(6, 182, 212, 0.1) 50%, 
              rgba(14, 165, 233, 0.15) 75%, 
              rgba(59, 130, 246, 0.1) 100%)`,
            backgroundSize: '200% 100%',
            animation: 'gradientShift 8s ease infinite'
          }}></div>
        </div>
        
        {/* Floating glass elements */}
        <div className="absolute top-1/4 left-1/4 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          {/* Glass badge */}
          <div className="inline-flex items-center gap-2 backdrop-blur-sm bg-gradient-to-r from-blue-600/20 to-cyan-600/20 border border-blue-400/30 text-white px-6 py-3 rounded-full text-sm font-semibold mb-8 shadow-lg shadow-blue-500/20">
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
            Transform Your Vision Into Reality
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent">
            Ready to Transform Your Space?
          </h2>
          
          <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto text-gray-200 backdrop-blur-sm bg-white/5 rounded-2xl p-8 border border-white/10 leading-relaxed">
            Contact us today for a free consultation and premium quote on your glass project. 
            Experience the difference of working with glass experts who care about every detail.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            {/* Primary CTA Button with Glass Effect */}
            <button className="group relative overflow-hidden backdrop-blur-sm bg-gradient-to-r from-white to-gray-100 text-blue-900 px-12 py-5 rounded-xl font-bold text-lg hover:shadow-2xl hover:shadow-white/30 transition-all duration-300 transform hover:-translate-y-1">
              <span className="relative z-10 flex items-center justify-center gap-3">
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Get Free Premium Quote
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              {/* Glass shine effect */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/50 to-transparent group-hover:animate-shine"></div>
            </button>
            
            {/* Secondary CTA Button with Glass Border */}
            <button className="group relative overflow-hidden backdrop-blur-sm bg-transparent border-2 border-white text-white px-12 py-5 rounded-xl font-bold text-lg hover:bg-white hover:text-blue-900 transition-all duration-300 transform hover:-translate-y-1">
              <span className="relative z-10 flex items-center justify-center gap-3">
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call Now: +91 98765 43210
              </span>
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </div>
          
          {/* Additional Info */}
          <div className="mt-12 backdrop-blur-sm bg-white/5 rounded-2xl p-6 border border-white/10 max-w-2xl mx-auto">
            <p className="text-gray-300 mb-4">
              <span className="text-white font-semibold">24/7 Support Available</span> • 
              <span className="mx-4">Free On-site Consultation</span> • 
              <span>Transparent Pricing</span>
            </p>
            <p className="text-sm text-gray-400">
              Average response time: 15 minutes | Emergency services available
            </p>
          </div>
        </div>
      </div>

      {/* Trust Indicators */}
      <div className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="backdrop-blur-xl bg-gradient-to-b from-white/80 via-white/60 to-white/40 rounded-3xl border border-white/20 shadow-2xl shadow-blue-900/10 p-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { number: '12+', label: 'Years Experience', icon: '' },
                { number: '500+', label: 'Projects Completed', icon: '' },
                { number: '99%', label: 'Client Satisfaction', icon: '' },
                { number: '4.9/5', label: 'Customer Rating', icon: '' }
              ].map((item, index) => (
                <div key={index} className="text-center group">
                  <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-500">{item.icon}</div>
                  <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-2">
                    {item.number}
                  </div>
                  <div className="text-gray-700 font-medium backdrop-blur-sm bg-white/40 rounded-xl p-3 border border-white/40">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Add custom animations */}
      <style jsx>{`
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        @keyframes shine {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        
        .animate-shine {
          animation: shine 2s infinite;
        }
      `}</style>
    </div>
  );
};

export default Home;