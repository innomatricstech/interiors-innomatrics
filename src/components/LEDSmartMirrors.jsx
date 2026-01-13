// src/pages/services/LEDSmartMirrors.jsx
import React from 'react';
import { Zap, Tv, Bluetooth, Settings, Shield, Award, Sparkles, CheckCircle } from 'lucide-react';
import ServiceLayout from './ServicesLayout';
import { images } from '../utils/images';

const LEDSmartMirrors = () => {

  const smartFeatures = [
    "Touch Control",
    "Anti-Fog Technology",
    "Dimmable LED Lighting",
    "3 Color Light Modes",
    "Bluetooth Speaker",
    "Motion Sensor"
  ];

  const highlights = [
    "Perfect for modern bathrooms",
    "Luxury vanity mirror solution",
    "Energy efficient LED lighting",
    "Safe low-voltage operation",
    "Custom sizes & shapes",
    "Easy wall mounting"
  ];

  // Use actual LED mirror images from your images.js
  const ledMirrorImages = [
    images.ledSmartMirror[0], // led1
    images.ledSmartMirror[1], // led2
    images.ledSmartMirror[2], // led3
    images.ledSmartMirror[3], // led4
    images.ledSmartMirror[4], // led5
    images.ledSmartMirror[5], // led6
  ];

  return (
    <ServiceLayout
      title="LED Smart Mirrors"
      category="LUXURY"
      bannerImage={images.ledSmartMirror[0]}
      description="Premium LED smart mirrors with touch control, anti-fog technology, and intelligent features designed for modern bathrooms, vanity areas, and luxury interiors."
      features={[
        { title: "Touch Control", description: "One-touch smart operation" },
        { title: "Anti-Fog Technology", description: "Clear mirror after shower" },
        { title: "Dimmable LED", description: "Adjust brightness easily" },
        { title: "3 Color Modes", description: "Warm, neutral & cool light" },
        { title: "Bluetooth Audio", description: "Music & hands-free calls" },
        { title: "Smart Sensors", description: "Auto on/off motion detection" }
      ]}
      stats={{ projects: 110, years: 6, rating: 4.9 }}
    >

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-14">

        {/* Left Section */}
        <div>
          <h2 className="text-2xl md:text-3xl font-black uppercase mb-6">
            Why Choose LED Smart Mirrors?
          </h2>

          <div className="space-y-6">
            <div className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-colors">
              <div className="flex items-center gap-3 mb-3">
                <Zap className="text-amber-500" size={24} />
                <h3 className="text-xl font-bold">Smart & Convenient</h3>
              </div>
              <p className="text-gray-300">
                Touch controls and motion sensors make everyday usage effortless and intuitive.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-colors">
              <div className="flex items-center gap-3 mb-3">
                <Shield className="text-orange-500" size={24} />
                <h3 className="text-xl font-bold">Safe & Reliable</h3>
              </div>
              <p className="text-gray-300">
                Built with low-voltage systems and moisture-resistant components for bathroom safety.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-colors">
              <div className="flex items-center gap-3 mb-3">
                <Award className="text-yellow-500" size={24} />
                <h3 className="text-xl font-bold">Luxury Finish</h3>
              </div>
              <p className="text-gray-300">
                Adds a premium and modern touch to bathrooms, vanity spaces, and dressing areas.
              </p>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div>
          <h2 className="text-2xl md:text-3xl font-black uppercase mb-6">
            Smart Features
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            {smartFeatures.map((feature, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-amber-900/20 to-orange-900/20 border border-white/10 p-4 rounded-xl text-center font-medium hover:bg-white/10 transition-colors"
              >
                {feature}
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-br from-orange-900/30 to-amber-900/30 border border-amber-500/30 rounded-2xl p-6">
            <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
              <Sparkles size={20} />
              Product Highlights
            </h3>
            <ul className="space-y-3">
              {highlights.map((item, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <CheckCircle className="text-amber-400" size={18} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Specifications Section */}
      <div className="mb-14">
        <h2 className="text-2xl md:text-3xl font-black uppercase mb-8 text-center">
          Technical Specifications
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { spec: "Power Supply", value: "12V DC" },
            { spec: "LED Color", value: "3000K/4000K/6000K" },
            { spec: "Glass Type", value: "Toughened" },
            { spec: "Control Type", value: "Touch/Motion" },
            { spec: "Anti-Fog", value: "Yes" },
            { spec: "Bluetooth", value: "Version 5.0" },
            { spec: "Warranty", value: "3 Years" },
            { spec: "Water Rating", value: "IP44" }
          ].map((item, idx) => (
            <div key={idx} className="bg-white/5 border border-white/10 p-4 rounded-xl text-center hover:bg-white/10 transition-colors">
              <div className="text-sm text-gray-400 mb-1">{item.spec}</div>
              <div className="font-bold text-white">{item.value}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Applications Section */}
      <div className="mt-14">
        <h2 className="text-2xl md:text-3xl font-black uppercase mb-8 text-center">
          Ideal Applications
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: "Master Bathrooms",
              description: "Luxury smart mirrors with all features",
              icon: <Zap className="text-amber-500" size={24} />
            },
            {
              title: "Vanity Areas",
              description: "Dressing table smart mirrors",
              icon: <Award className="text-yellow-500" size={24} />
            },
            {
              title: "Commercial Spaces",
              description: "Hotel bathrooms and spa rooms",
              icon: <Shield className="text-orange-500" size={24} />
            }
          ].map((app, index) => (
            <div 
              key={index} 
              className="bg-white/5 border border-white/10 p-8 rounded-2xl text-center hover:bg-white/10 transition-colors"
            >
              <div className="flex justify-center mb-4">{app.icon}</div>
              <h3 className="text-xl font-bold mb-3">{app.title}</h3>
              <p className="text-gray-300">{app.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Gallery Section */}
      <div className="mt-20">
        <div className="flex flex-col items-center mb-10">
          <h2 className="text-2xl md:text-4xl font-black uppercase mb-4 text-center">
            LED Smart Mirror Gallery
          </h2>
          <div className="h-1 w-20 bg-amber-600 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ledMirrorImages.map((img, index) => (
            <div key={index} className="group relative aspect-square overflow-hidden rounded-[2rem] border border-white/10 shadow-xl">
              <img
                src={img}
                alt={`LED Smart Mirror ${index + 1}`}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                <span className="text-xs font-black uppercase tracking-widest text-amber-400">View Details</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="mt-12 bg-gradient-to-r from-amber-900/30 to-orange-900/30 border border-amber-500/30 rounded-3xl p-8 text-center">
        <h3 className="text-2xl font-black mb-3">
          Illuminate Your Space with Smart Mirrors!
        </h3>
        <p className="text-gray-300 mb-6">
          Get a free consultation for LED smart mirror installation in your home or commercial space.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            onClick={() => window.location.href = "tel:+919141621820"}
            className="bg-amber-600 hover:bg-amber-700 px-8 py-3 rounded-full font-bold transition-colors"
          >
            Schedule Installation
          </button>
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="bg-white/10 hover:bg-white/20 px-8 py-3 rounded-full font-bold transition-colors border border-white/20"
          >
            View More Designs
          </button>
        </div>
      </div>

    </ServiceLayout>
  );
};

export default LEDSmartMirrors;