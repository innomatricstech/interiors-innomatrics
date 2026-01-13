// src/pages/services/ShowerDoors.jsx
import React from 'react';
import { DoorOpen, Droplets, Settings, Shield, Zap, CheckCircle } from 'lucide-react';
import ServiceLayout from './ServicesLayout';
import { images } from '../utils/images';

const ShowerDoors = () => {

  const doorTypes = [
    { name: "Pivot Shower Door", desc: "Hinged opening for easy access" },
    { name: "Sliding Shower Door", desc: "Ideal for space-saving bathrooms" },
    { name: "Bi-Fold Shower Door", desc: "Compact & flexible design" },
    { name: "Frameless Shower Door", desc: "Luxury modern appearance" }
  ];

  const highlights = [
    "Toughened safety glass",
    "Rust-proof stainless steel hardware",
    "Leak-proof water sealing",
    "Smooth & silent operation",
    "Custom sizes available",
    "Easy maintenance & cleaning"
  ];

  // Use actual images from your images.js
  const showerDoorImages = [
    images.showerDoors[0], // shower1
    images.showerDoors[1], // shower2
    images.showerDoors[2], // shower3
    images.showerDoors[3], // shower4
    images.showerDoors[4], // shower5
    images.showerDoors[5], // shower6
  ];

  return (
    <ServiceLayout
      title="Shower Doors"
      category="BATHROOM"
      bannerImage={images.showerDoors[0]}
      description="Premium shower doors designed for modern bathrooms. Choose from sliding, pivot, bi-fold, and frameless shower door solutions."
      features={[
        { title: "Multiple Door Styles", description: "Sliding, pivot & frameless options" },
        { title: "Smooth Operation", description: "High-quality rollers & hinges" },
        { title: "Leak Proof Design", description: "Water-tight sealing" },
        { title: "Durable Hardware", description: "Rust & corrosion resistant" },
        { title: "Safety Glass", description: "Toughened glass panels" },
        { title: "Easy Maintenance", description: "Quick & simple cleaning" }
      ]}
      stats={{ projects: 230, years: 9, rating: 4.8 }}
    >

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-14">

        {/* Left Section */}
        <div>
          <h2 className="text-2xl md:text-3xl font-black uppercase mb-6">
            Why Choose Our Shower Doors?
          </h2>

          <div className="space-y-6">
            <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
              <div className="flex items-center gap-3 mb-3">
                <Droplets className="text-cyan-500" size={24} />
                <h3 className="text-xl font-bold">Water-Tight Design</h3>
              </div>
              <p className="text-gray-300">
                Designed to prevent water leakage and keep your bathroom dry and clean.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
              <div className="flex items-center gap-3 mb-3">
                <Shield className="text-emerald-500" size={24} />
                <h3 className="text-xl font-bold">Safety & Strength</h3>
              </div>
              <p className="text-gray-300">
                Made with toughened safety glass and premium fittings for long-term durability.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
              <div className="flex items-center gap-3 mb-3">
                <Zap className="text-violet-500" size={24} />
                <h3 className="text-xl font-bold">Modern Bathroom Look</h3>
              </div>
              <p className="text-gray-300">
                Enhances bathroom aesthetics with sleek, frameless, and stylish designs.
              </p>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div>
          <h2 className="text-2xl md:text-3xl font-black uppercase mb-6">
            Shower Door Types
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            {doorTypes.map((type, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-violet-900/20 to-purple-900/20 border border-white/10 p-5 rounded-2xl hover:bg-white/10 transition-colors"
              >
                <h3 className="font-bold mb-1">{type.name}</h3>
                <p className="text-sm text-gray-300">{type.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-br from-purple-900/30 to-violet-900/30 border border-violet-500/30 rounded-2xl p-6">
            <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
              <Settings size={20} />
              Key Highlights
            </h3>
            <ul className="space-y-3">
              {highlights.map((item, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <CheckCircle className="text-violet-400" size={18} />
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
            { spec: "Glass Thickness", value: "8mm / 10mm" },
            { spec: "Glass Type", value: "Toughened" },
            { spec: "Hardware", value: "SS 304/316" },
            { spec: "Warranty", value: "5 Years" },
            { spec: "Installation Time", value: "4-6 Hours" },
            { spec: "Finish", value: "Clear / Frosted" },
            { spec: "Operation", value: "Sliding / Pivot" },
            { spec: "Water Seal", value: "Silicone" }
          ].map((item, idx) => (
            <div key={idx} className="bg-white/5 border border-white/10 p-4 rounded-xl text-center hover:bg-white/10 transition-colors">
              <div className="text-sm text-gray-400 mb-1">{item.spec}</div>
              <div className="font-bold text-white">{item.value}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Gallery Section */}
      <div className="mt-20">
        <div className="flex flex-col items-center mb-10">
          <h2 className="text-2xl md:text-4xl font-black uppercase mb-4 text-center">
            Shower Door Gallery
          </h2>
          <div className="h-1 w-20 bg-violet-600 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {showerDoorImages.map((img, index) => (
            <div key={index} className="group relative aspect-square overflow-hidden rounded-[2rem] border border-white/10 shadow-xl">
              <img
                src={img}
                alt={`Shower Door Installation ${index + 1}`}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                <span className="text-xs font-black uppercase tracking-widest text-violet-400">View Details</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="mt-12 bg-gradient-to-r from-violet-900/30 to-purple-900/30 border border-violet-500/30 rounded-3xl p-8 text-center">
        <h3 className="text-2xl font-black mb-3">
          Ready for a Modern Shower Door?
        </h3>
        <p className="text-gray-300 mb-6">
          Get a free consultation and quotation for your bathroom shower door installation.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            onClick={() => window.location.href = "tel:+919141621820"}
            className="bg-violet-600 hover:bg-violet-700 px-8 py-3 rounded-full font-bold transition-colors"
          >
            Call for Quote
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

export default ShowerDoors;