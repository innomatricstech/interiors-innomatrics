// src/pages/services/ToughenedGlass.jsx
import React from 'react';
import { Shield, Thermometer, Hammer, Award, CheckCircle, Zap } from 'lucide-react';
import ServiceLayout from './ServicesLayout';
import { images, imageCategories } from '../utils/images';

const ToughenedGlass = () => {

  const thickness = [
    { mm: "4mm", use: "Small partitions & shelves" },
    { mm: "6mm", use: "Windows & display glass" },
    { mm: "8mm", use: "Shower doors & interiors" },
    { mm: "10mm", use: "Balcony railings & partitions" },
    { mm: "12mm", use: "Structural glazing" },
    { mm: "15mm", use: "Commercial facades" }
  ];

  const highlights = [
    "ISI / BIS certified toughened glass",
    "5x stronger than normal annealed glass",
    "Breaks into blunt pebble-like pieces",
    "High heat & thermal resistance",
    "Precision edge polishing",
    "Custom cut to size"
  ];

  return (
    <ServiceLayout
      title="Toughened Glass"
      category="SAFETY GLASS"
      bannerImage={images.gallery6}
      description="High-quality toughened safety glass manufactured and installed for residential and commercial applications. Designed for strength, safety, and durability."
      features={[
        { title: "ISI Certified Quality", description: "BIS approved safety standards" },
        { title: "High Safety Rating", description: "Breaks into non-sharp pieces" },
        { title: "Heat Resistant", description: "Withstands temperature variations" },
        { title: "Impact Resistant", description: "Much stronger than normal glass" },
        { title: "Multiple Thickness Options", description: "From 4mm to 19mm" },
        { title: "Quality Assurance", description: "Tested & verified materials" }
      ]}
      stats={{ projects: 850, years: 15, rating: 4.8 }}
    >

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-14">

        {/* Left Section */}
        <div>
          <h2 className="text-2xl md:text-3xl font-black uppercase mb-6">
            Why Choose Toughened Glass?
          </h2>

          <div className="space-y-6">
            <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
              <div className="flex items-center gap-3 mb-3">
                <Shield className="text-emerald-500" size={24} />
                <h3 className="text-xl font-bold">Enhanced Safety</h3>
              </div>
              <p className="text-gray-300">
                Designed to minimize injury risk by breaking into small, blunt fragments.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
              <div className="flex items-center gap-3 mb-3">
                <Thermometer className="text-red-500" size={24} />
                <h3 className="text-xl font-bold">Heat & Thermal Resistance</h3>
              </div>
              <p className="text-gray-300">
                Suitable for high-temperature areas and environments with thermal stress.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
              <div className="flex items-center gap-3 mb-3">
                <Hammer className="text-orange-500" size={24} />
                <h3 className="text-xl font-bold">High Impact Strength</h3>
              </div>
              <p className="text-gray-300">
                Much stronger than ordinary glass, ideal for safety-critical applications.
              </p>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div>
          <h2 className="text-2xl md:text-3xl font-black uppercase mb-6">
            Available Thickness & Usage
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            {thickness.map((item, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-red-900/20 to-rose-900/20 border border-white/10 p-5 rounded-2xl text-center"
              >
                <div className="text-2xl font-black text-red-400 mb-1">
                  {item.mm}
                </div>
                <div className="text-sm text-gray-300">
                  {item.use}
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-br from-rose-900/30 to-red-900/30 border border-red-500/30 rounded-2xl p-6">
            <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
              <Zap size={20} />
              Key Highlights
            </h3>
            <ul className="space-y-3">
              {highlights.map((item, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <CheckCircle className="text-red-400" size={18} />
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
          Toughened Glass Applications
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {imageCategories.oldGallery.slice(2, 8).map((img, index) => (
            <div key={index} className="aspect-[4/3] overflow-hidden rounded-2xl">
              <img
                src={img}
                alt={`Toughened Glass Application ${index + 1}`}
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
          ))}
        </div>
      </div>

    </ServiceLayout>
  );
};

export default ToughenedGlass;
