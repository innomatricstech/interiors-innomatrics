// src/pages/services/ShowerEnclosures.jsx
import React from 'react';
import { GlassWater, Shield, Magnet, Droplets, Settings, CheckCircle } from 'lucide-react';
import ServiceLayout from './ServicesLayout';
import { images } from '../utils/images';

const ShowerEnclosures = () => {

  const types = [
    "Frameless Shower Enclosure",
    "Semi-Frameless Enclosure",
    "Framed Shower Enclosure",
    "Walk-in Shower Enclosure",
    "Corner Shower Enclosure",
    "Neo-Angle Shower Enclosure"
  ];

  const highlights = [
    "10mm toughened safety glass",
    "Leak-proof magnetic sealing",
    "Rust-proof SS hardware",
    "Custom made to size",
    "Easy to clean glass coating",
    "Modern & luxury bathroom look"
  ];

  // Use actual images from your images.js
  const showerImages = [
    images.showerEnclosures[0], // glassShowerEnclosures1
    images.showerEnclosures[1], // glassShowerEnclosures2
    images.showerEnclosures[2], // glassShowerEnclosures3
    images.showerEnclosures[3], // glassShowerEnclosures4
    images.showerEnclosures[4], // glassShowerEnclosures5
    images.showerEnclosures[5], // glassShowerEnclosures6
  ];

  return (
    <ServiceLayout
      title="Glass Shower Enclosures"
      category="BATHROOM"
      bannerImage={images.showerEnclosures[0]}
      description="Premium glass shower enclosure solutions designed for modern bathrooms. Available in frameless, semi-frameless, and custom enclosure designs."
      features={[
        { title: "Frameless & Framed Options", description: "Modern & classic styles" },
        { title: "10mm Toughened Glass", description: "Maximum safety & strength" },
        { title: "Magnetic Sealing", description: "Water-tight performance" },
        { title: "Rust-Proof Hardware", description: "SS 304 / SS 316 fittings" },
        { title: "Custom Sizes", description: "Perfect fit for your bathroom" },
        { title: "Easy Maintenance", description: "Stain-resistant glass coating" }
      ]}
      stats={{ projects: 190, years: 7, rating: 4.8 }}
    >

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-14">

        {/* Left Section */}
        <div>
          <h2 className="text-2xl md:text-3xl font-black uppercase mb-6">
            Why Choose Our Shower Enclosures?
          </h2>

          <div className="space-y-6">
            <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
              <div className="flex items-center gap-3 mb-3">
                <Shield className="text-emerald-500" size={24} />
                <h3 className="text-xl font-bold">Safety & Strength</h3>
              </div>
              <p className="text-gray-300">
                Built with toughened safety glass and premium fittings for long-term durability.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
              <div className="flex items-center gap-3 mb-3">
                <Magnet className="text-cyan-500" size={24} />
                <h3 className="text-xl font-bold">Leak-Proof Design</h3>
              </div>
              <p className="text-gray-300">
                Magnetic seals and precision installation prevent water leakage.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
              <div className="flex items-center gap-3 mb-3">
                <Droplets className="text-blue-500" size={24} />
                <h3 className="text-xl font-bold">Luxury Bathroom Finish</h3>
              </div>
              <p className="text-gray-300">
                Enhances bathroom aesthetics with clean lines and modern glass designs.
              </p>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div>
          <h2 className="text-2xl md:text-3xl font-black uppercase mb-6">
            Shower Enclosure Types
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            {types.map((type, idx) => (
              <div
                key={idx}
                className="bg-white/5 border border-white/10 p-5 rounded-2xl text-center font-medium hover:bg-white/10 transition-colors"
              >
                {type}
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-br from-blue-900/30 to-cyan-900/30 border border-blue-500/30 rounded-2xl p-6">
            <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
              <Settings size={20} />
              Key Highlights
            </h3>
            <ul className="space-y-3">
              {highlights.map((item, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <CheckCircle className="text-blue-400" size={18} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Applications Section */}
      <div className="mt-14">
        <h2 className="text-2xl md:text-3xl font-black uppercase mb-8 text-center">
          Common Applications
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: "Master Bathrooms",
              description: "Luxury frameless enclosures",
              icon: <GlassWater className="text-blue-500" size={24} />
            },
            {
              title: "Guest Bathrooms",
              description: "Semi-frameless modern designs",
              icon: <Shield className="text-emerald-500" size={24} />
            },
            {
              title: "Hotel Bathrooms",
              description: "Commercial-grade enclosures",
              icon: <Droplets className="text-cyan-500" size={24} />
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
            Shower Enclosure Gallery
          </h2>
          <div className="h-1 w-20 bg-blue-600 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {showerImages.map((img, index) => (
            <div key={index} className="group relative aspect-square overflow-hidden rounded-[2rem] border border-white/10 shadow-xl">
              <img
                src={img}
                alt={`Shower Enclosure Installation ${index + 1}`}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                <span className="text-xs font-black uppercase tracking-widest text-blue-400">View Details</span>
              </div>
            </div>
          ))}
        </div>
      </div>

    </ServiceLayout>
  );
};

export default ShowerEnclosures;