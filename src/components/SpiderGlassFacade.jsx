// src/pages/services/SpiderGlassFacade.jsx
import React from 'react';
import { Briefcase, Shield, Wind, Award, Settings, Zap, CheckCircle } from 'lucide-react';
import ServiceLayout from './ServicesLayout';
import { images, imageCategories } from '../utils/images';

const SpiderGlassFacade = () => {

  const specs = [
    { item: "Glass Thickness", value: "12mm – 19mm Toughened / Laminated" },
    { item: "Fitting Type", value: "SS 316 Spider Fittings" },
    { item: "Wind Load Resistance", value: "Up to 150 kmph" },
    { item: "Maximum Height", value: "Unlimited (Structure Dependent)" },
    { item: "Glass Type", value: "Clear / Tinted / Reflective" },
    { item: "Application", value: "Commercial & Architectural Facades" }
  ];

  const highlights = [
    "Frameless glass facade system",
    "High wind-load structural stability",
    "SS 316 corrosion-resistant fittings",
    "Maximum daylight & visibility",
    "Modern architectural appearance",
    "Custom engineered solutions"
  ];

  return (
    <ServiceLayout
      title="Spider Glass Facade"
      category="COMMERCIAL"
      bannerImage={images.spiderFittings}
      description="High-performance spider glass facade systems designed for commercial buildings, showrooms, malls, and modern architectural structures."
      features={[
        { title: "SS 316 Spider Fittings", description: "Marine-grade stainless steel" },
        { title: "High Transparency Glass", description: "Maximum daylight entry" },
        { title: "Architectural Grade", description: "Commercial & structural use" },
        { title: "Wind Load Stability", description: "Designed for high-rise buildings" },
        { title: "Engineered Support System", description: "Precision structural design" },
        { title: "Modern Facade Look", description: "Frameless contemporary appearance" }
      ]}
      stats={{ projects: 95, years: 7, rating: 4.8 }}
    >

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-14">

        {/* Left Section */}
        <div>
          <h2 className="text-2xl md:text-3xl font-black uppercase mb-6">
            Why Choose Spider Glass Facade?
          </h2>

          <div className="space-y-6">
            <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
              <div className="flex items-center gap-3 mb-3">
                <Briefcase className="text-blue-500" size={24} />
                <h3 className="text-xl font-bold">Commercial Expertise</h3>
              </div>
              <p className="text-gray-300">
                Ideal solution for corporate buildings, malls, showrooms, and airports.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
              <div className="flex items-center gap-3 mb-3">
                <Wind className="text-cyan-500" size={24} />
                <h3 className="text-xl font-bold">High Wind Resistance</h3>
              </div>
              <p className="text-gray-300">
                Engineered to withstand heavy wind loads and external pressure.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
              <div className="flex items-center gap-3 mb-3">
                <Shield className="text-emerald-500" size={24} />
                <h3 className="text-xl font-bold">Safety & Durability</h3>
              </div>
              <p className="text-gray-300">
                Uses toughened and laminated safety glass with SS 316 fittings.
              </p>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div>
          <h2 className="text-2xl md:text-3xl font-black uppercase mb-6">
            Technical Specifications
          </h2>

          <div className="bg-gradient-to-br from-blue-900/30 to-cyan-900/30 border border-blue-500/30 rounded-2xl p-6 mb-8">
            <div className="space-y-4">
              {specs.map((spec, idx) => (
                <div
                  key={idx}
                  className="flex justify-between items-center border-b border-white/10 pb-3"
                >
                  <span className="text-gray-300">{spec.item}</span>
                  <span className="font-bold">{spec.value}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
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
          Spider Glass Facade Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {imageCategories.oldGallery.slice(5, 11).map((img, index) => (
            <div key={index} className="aspect-[4/3] overflow-hidden rounded-2xl">
              <img
                src={img}
                alt={`Spider Glass Facade ${index + 1}`}
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
          ))}
        </div>
      </div>

    </ServiceLayout>
  );
};

export default SpiderGlassFacade;
