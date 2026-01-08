// src/pages/services/ShowerEnclosures.jsx
import React from 'react';
import { GlassWater, Shield, Magnet, Droplets, Settings, CheckCircle } from 'lucide-react';
import ServiceLayout from './ServicesLayout';
import { images, imageCategories } from '../utils/images';

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

  return (
    <ServiceLayout
      title="Glass Shower Enclosures"
      category="BATHROOM"
      bannerImage={images.shower1}
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
                className="bg-white/5 border border-white/10 p-5 rounded-2xl text-center font-medium"
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

      {/* Gallery Section */}
      <div className="mt-14">
        <h2 className="text-2xl md:text-3xl font-black uppercase mb-8 text-center">
          Shower Enclosure Installations
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {imageCategories.shower.slice(0, 6).map((img, index) => (
            <div key={index} className="aspect-[4/3] overflow-hidden rounded-2xl">
              <img
                src={img}
                alt={`Shower Enclosure ${index + 1}`}
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
          ))}
        </div>
      </div>

    </ServiceLayout>
  );
};

export default ShowerEnclosures;
