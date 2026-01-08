// src/components/services/ServiceLayout.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Phone, MessageSquare, Calendar, CheckCircle } from 'lucide-react';

const ServiceLayout = ({ 
  children, 
  title, 
  category, 
  bannerImage, 
  description,
  features = [],
  stats = { projects: 0, years: 0, rating: 0 }
}) => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#020617] text-white">
      {/* Back Button */}
      <div className="fixed top-24 left-4 md:left-8 z-30">
        <button
          onClick={() => navigate('/services/:id')}
          className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-full p-2 md:p-3 hover:bg-white/20 transition-all group"
        >
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
        </button>
      </div>

      {/* Hero Banner */}
      <div className="relative h-[60vh] md:h-[70vh] overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${bannerImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
        </div>
        
        <div className="relative z-10 h-full flex items-center">
          <div className="container mx-auto px-4 md:px-8">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-500 px-4 py-2 rounded-full mb-4">
                <span className="text-xs font-black uppercase tracking-widest">{category}</span>
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-black uppercase italic leading-tight">
                {title}
              </h1>
              <p className="text-lg md:text-xl text-gray-300 mt-4 max-w-2xl">
                {description}
              </p>
              
              {/* Stats */}
              <div className="flex flex-wrap gap-4 md:gap-6 mt-8">
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-black text-blue-400">{stats.projects}+</div>
                  <div className="text-xs uppercase tracking-widest text-gray-400 mt-1">Projects</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-black text-emerald-400">{stats.years}+</div>
                  <div className="text-xs uppercase tracking-widest text-gray-400 mt-1">Years</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-black text-amber-400">{stats.rating}/5</div>
                  <div className="text-xs uppercase tracking-widest text-gray-400 mt-1">Rating</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 md:px-8 py-12 md:py-16">
        {children}
      </div>

      {/* Features Section */}
      {features.length > 0 && (
        <div className="bg-gradient-to-b from-blue-900/20 to-transparent py-12 md:py-16">
          <div className="container mx-auto px-4 md:px-8">
            <h2 className="text-3xl md:text-4xl font-black uppercase text-center mb-12">
              Key Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-2xl hover:border-blue-500/50 transition-all">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-blue-500 mt-1 flex-shrink-0" size={20} />
                    <div>
                      <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                      <p className="text-gray-400 text-sm">{feature.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <div className="container mx-auto px-4 md:px-8 py-12 md:py-16">
        <div className="bg-gradient-to-r from-blue-900/30 to-cyan-900/30 border border-blue-500/30 rounded-3xl p-8 md:p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-black uppercase mb-4">
            Ready to Transform Your Space?
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Contact us today for a free consultation and quote. Our experts are ready to bring your vision to life.
          </p>
          
          <div className="flex flex-col md:flex-row gap-4 justify-center">
           <button
  onClick={() => navigate('/contact')}
  className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-8 py-4 rounded-full font-black uppercase tracking-widest text-sm hover:scale-105 transition-transform"
>
  <Phone size={20} />
  Contact Us
</button>

            <a
              href="https://wa.me/919141621820"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-emerald-600 to-green-500 text-white px-8 py-4 rounded-full font-black uppercase tracking-widest text-sm hover:scale-105 transition-transform"
            >
              <MessageSquare size={20} />
              WhatsApp
            </a>
            <button
  onClick={() => navigate('/contact')}
  className="inline-flex items-center justify-center gap-2 bg-white/10 border border-white/20 text-white px-8 py-4 rounded-full font-black uppercase tracking-widest text-sm hover:bg-white/20 transition-all"
>
  <Calendar size={20} />
  Book Consultation
</button>

          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceLayout;