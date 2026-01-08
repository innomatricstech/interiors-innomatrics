// src/pages/services/ShowerDoors.jsx
import React from 'react';
import { DoorOpen, Droplets, Settings, Shield, Zap } from 'lucide-react';
import ServiceLayout from './ServicesLayout';
import { images, imageCategories } from '../utils/images';

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

  return (
    <ServiceLayout
      title="Shower Doors"
      category="BATHROOM"
      bannerImage={images.gallery4}
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
                className="bg-gradient-to-br from-violet-900/20 to-purple-900/20 border border-white/10 p-5 rounded-2xl"
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
                  <DoorOpen className="text-violet-400" size={18} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Gallery Section */}
      <div className="mt-14">
        <h2 className="text-2xl md:text-3xl font-black uppercase mb-8 text-center">
          Shower Door Installations
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {imageCategories.shower.slice(0, 6).map((img, index) => (
            <div key={index} className="aspect-[4/3] overflow-hidden rounded-2xl">
              <img
                src={img}
                alt={`Shower Door ${index + 1}`}
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
          ))}
        </div>
      </div>

    </ServiceLayout>
  );
};

export default ShowerDoors;
