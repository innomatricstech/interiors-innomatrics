import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Phone, MessageSquare, Calendar, CheckCircle } from 'lucide-react';
import { images } from "../utils/images";

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
          onClick={() => navigate('/services')}
          className="bg-white/10 backdrop-blur-md border border-white/20 rounded-full p-3 hover:bg-white/20 transition-all group shadow-lg"
        >
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
        </button>
      </div>

      {/* Hero Banner with CLEAR BACKGROUND IMAGE */}
      <div 
        className="relative h-[80vh] overflow-hidden"
        style={{
          backgroundImage: `url(${bannerImage || images.lacquredglass1})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed'
        }}
      >
        {/* Semi-transparent overlay for better text contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-black/10 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent"></div>
        
        <div className="relative z-10 h-full flex items-center">
          <div className="container mx-auto px-4 md:px-8">
            <div className="max-w-4xl">
              {/* Category Badge */}
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-500 px-5 py-2 rounded-full mb-6 shadow-xl">
                <span className="text-sm font-black uppercase tracking-widest">{category}</span>
              </div>
              
              {/* Main Title - Large and Clear */}
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase leading-tight mb-6 text-white drop-shadow-[0_5px_20px_rgba(0,0,0,0.8)]">
                {title}
              </h1>
              
              {/* Description */}
              <p className="text-xl md:text-2xl text-gray-200 mt-6 max-w-3xl leading-relaxed drop-shadow-md">
                {description}
              </p>
              
              {/* Stats */}
              <div className="flex flex-wrap gap-6 md:gap-8 mt-10">
                <div className="text-center bg-white/10 backdrop-blur-sm p-5 rounded-2xl border border-white/20 min-w-[120px]">
                  <div className="text-3xl md:text-4xl font-black text-blue-400">{stats.projects}+</div>
                  <div className="text-xs uppercase tracking-widest text-gray-300 mt-2">Projects</div>
                </div>
                <div className="text-center bg-white/10 backdrop-blur-sm p-5 rounded-2xl border border-white/20 min-w-[120px]">
                  <div className="text-3xl md:text-4xl font-black text-emerald-400">{stats.years}+</div>
                  <div className="text-xs uppercase tracking-widest text-gray-300 mt-2">Years</div>
                </div>
                <div className="text-center bg-white/10 backdrop-blur-sm p-5 rounded-2xl border border-white/20 min-w-[120px]">
                  <div className="text-3xl md:text-4xl font-black text-amber-400">{stats.rating}/5</div>
                  <div className="text-xs uppercase tracking-widest text-gray-300 mt-2">Rating</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 md:px-8 py-16">
        {children}
      </div>

      {/* Features Section */}
      {features.length > 0 && (
        <div className="bg-gradient-to-b from-blue-900/20 to-transparent py-16">
          <div className="container mx-auto px-4 md:px-8">
            <h2 className="text-4xl md:text-5xl font-black uppercase text-center mb-16 drop-shadow-md">
              Key Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-3xl hover:border-blue-500/50 transition-all hover:scale-[1.02] shadow-xl">
                  <div className="flex items-start gap-4">
                    <CheckCircle className="text-blue-500 mt-1 flex-shrink-0" size={24} />
                    <div>
                      <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                      <p className="text-gray-300 text-base">{feature.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <div className="container mx-auto px-4 md:px-8 py-16">
        <div className="bg-gradient-to-r from-blue-900/40 to-cyan-900/40 border border-blue-500/40 rounded-3xl p-10 md:p-12 text-center backdrop-blur-md shadow-2xl">
          <h2 className="text-4xl md:text-5xl font-black uppercase mb-6 drop-shadow-lg">
            Ready to Transform Your Space?
          </h2>
          <p className="text-gray-200 text-lg mb-10 max-w-3xl mx-auto leading-relaxed">
            Contact us today for a free consultation and quote. Our experts are ready to bring your vision to life.
          </p>
          
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => navigate('/contact')}
              className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-10 py-4 rounded-full font-black uppercase tracking-widest text-base hover:scale-105 transition-transform shadow-2xl hover:shadow-blue-500/30 min-w-[200px]"
            >
              <Phone size={22} />
              Contact Us
            </button>

            <a
              href="https://wa.me/919141621820"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-emerald-600 to-green-500 text-white px-10 py-4 rounded-full font-black uppercase tracking-widest text-base hover:scale-105 transition-transform shadow-2xl hover:shadow-emerald-500/30 min-w-[200px]"
            >
              <MessageSquare size={22} />
              WhatsApp
            </a>
            
            <button
              onClick={() => navigate('/contact')}
              className="inline-flex items-center justify-center gap-3 bg-white/10 border border-white/30 text-white px-10 py-4 rounded-full font-black uppercase tracking-widest text-base hover:bg-white/20 transition-all min-w-[200px]"
            >
              <Calendar size={22} />
              Book Consultation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceLayout;