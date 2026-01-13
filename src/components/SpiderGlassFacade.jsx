// src/pages/services/SpiderGlassFacade.jsx
import React from 'react';
import { Briefcase, Shield, Wind, Award, Settings, Zap, CheckCircle } from 'lucide-react';
import ServiceLayout from './ServicesLayout';
import { images } from '../utils/images';

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

  // Use actual images from your images.js
  const spiderImages = [
    images.spiderGlass[0], // spider1
    images.spiderGlass[1], // spider2
    images.spiderGlass[2], // spider3
    images.spiderGlass[3], // spider4
    images.gallery[5], // spider-fitting glass
    images.gallery[2], // glazing works
  ];

  return (
    <ServiceLayout
      title="Spider Glass Facade"
      category="COMMERCIAL"
      bannerImage={images.spiderGlass[0]}
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
                  className="flex justify-between items-center border-b border-white/10 pb-3 last:border-b-0"
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

      {/* Applications Section */}
      <div className="mt-14">
        <h2 className="text-2xl md:text-3xl font-black uppercase mb-8 text-center">
          Common Applications
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: "Corporate Buildings",
              description: "Modern office facades and entrances",
              icon: <Briefcase className="text-blue-500" size={24} />
            },
            {
              title: "Shopping Malls",
              description: "Grand entrance facades and showrooms",
              icon: <Award className="text-amber-500" size={24} />
            },
            {
              title: "Hotels & Resorts",
              description: "Luxury glass exteriors and lobbies",
              icon: <Shield className="text-emerald-500" size={24} />
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
            Spider Glass Projects
          </h2>
          <div className="h-1 w-20 bg-blue-600 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {spiderImages.map((img, index) => (
            <div key={index} className="group relative aspect-square overflow-hidden rounded-[2rem] border border-white/10 shadow-xl">
              <img
                src={img}
                alt={`Spider Glass Facade Project ${index + 1}`}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                <span className="text-xs font-black uppercase tracking-widest text-blue-400">View Project Details</span>
              </div>
            </div>
          ))}
        </div>
      </div>

    </ServiceLayout>
  );
};

export default SpiderGlassFacade;