// src/pages/services/ShowerDoorsInstallation.jsx
import React from 'react';
import { Wrench, Shield, Droplets, Clock, CheckCircle } from 'lucide-react';
import ServiceLayout from './ServicesLayout';
import { images } from '../utils/images';

const ShowerDoorsInstallation = () => {

  const steps = [
    "Site Measurement",
    "Design & Glass Selection",
    "Fabrication",
    "Professional Installation",
    "Water Leakage Testing",
    "Final Handover"
  ];

  const highlights = [
    "10mm toughened safety glass",
    "Precision leveling & alignment",
    "Leak-proof silicone sealing",
    "Rust-proof stainless fittings",
    "Clean & damage-free installation",
    "Warranty on workmanship"
  ];

  // Use actual images from your images.js
  const installationImages = [
    images.showerInstallation[0], // Glassshowerdoorinstallation1
    images.showerInstallation[1], // Glassshowerdoorinstallation2
    images.showerInstallation[2], // Glassshowerdoorinstallation3
    images.showerInstallation[3], // Glassshowerdoorinstallation4
    images.showerDoors[4], // shower5 (for variety)
    images.showerDoors[7], // shower8 (for variety)
  ];

  return (
    <ServiceLayout
      title="Glass Shower Doors Installation"
      category="BATHROOM"
      bannerImage={images.showerInstallation[0]}
      description="Expert glass shower door installation services with precise fitting, leak-proof sealing, and premium safety glass for modern bathrooms."
      features={[
        { title: "Professional Installation", description: "Certified installers with 8+ years experience" },
        { title: "10mm Safety Glass", description: "High-strength toughened glass" },
        { title: "Leak Proof Finish", description: "Water-tight sealing system" },
        { title: "Custom Fit", description: "Tailored for every bathroom" },
        { title: "Quick Turnaround", description: "Installation within 1–2 days" },
        { title: "Warranty Support", description: "5 years on workmanship" }
      ]}
      stats={{ projects: 280, years: 8, rating: 4.9 }}
    >

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-14">

        {/* Left Section */}
        <div>
          <h2 className="text-2xl md:text-3xl font-black uppercase mb-6">
            Why Choose Our Shower Door Installation?
          </h2>

          <div className="space-y-6">
            <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
              <div className="flex items-center gap-3 mb-3">
                <Shield className="text-emerald-500" size={24} />
                <h3 className="text-xl font-bold">Safety First</h3>
              </div>
              <p className="text-gray-300">
                We use toughened safety glass and follow strict installation standards.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
              <div className="flex items-center gap-3 mb-3">
                <Droplets className="text-cyan-500" size={24} />
                <h3 className="text-xl font-bold">Leak-Proof Guarantee</h3>
              </div>
              <p className="text-gray-300">
                Advanced sealing techniques ensure zero water leakage.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
              <div className="flex items-center gap-3 mb-3">
                <Clock className="text-blue-500" size={24} />
                <h3 className="text-xl font-bold">Fast Installation</h3>
              </div>
              <p className="text-gray-300">
                Most shower door installations are completed within a single day.
              </p>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div>
          <h2 className="text-2xl md:text-3xl font-black uppercase mb-6">
            Installation Process
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            {steps.map((step, idx) => (
              <div
                key={idx}
                className="bg-white/5 border border-white/10 p-5 rounded-2xl hover:bg-white/10 transition-colors"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center font-bold">
                    {idx + 1}
                  </div>
                  <span className="font-bold">{step}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-br from-blue-900/30 to-cyan-900/30 border border-blue-500/30 rounded-2xl p-6">
            <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
              <Wrench size={20} />
              Installation Highlights
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

      {/* Tools & Equipment Section */}
      <div className="mb-14">
        <h2 className="text-2xl md:text-3xl font-black uppercase mb-8 text-center">
          Professional Tools & Equipment
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { name: "Laser Level", description: "Precision alignment" },
            { name: "Glass Suction Cups", description: "Safe glass handling" },
            { name: "High-Quality Silicone", description: "Waterproof sealing" },
            { name: "SS Hardware Kit", description: "Rust-proof fittings" }
          ].map((tool, idx) => (
            <div key={idx} className="bg-white/5 border border-white/10 p-6 rounded-2xl text-center hover:bg-white/10 transition-colors">
              <div className="text-lg font-bold text-blue-400 mb-2">{tool.name}</div>
              <div className="text-sm text-gray-300">{tool.description}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Time & CTA */}
      <div className="mb-14 bg-gradient-to-r from-blue-900/40 to-cyan-900/40 border border-blue-500/30 rounded-3xl p-8 text-center">
        <h3 className="text-2xl font-black mb-3">
          Installation Time: 4–6 Hours
        </h3>
        <p className="text-gray-300 mb-4">
          Clean workmanship with no damage and no mess left behind.
        </p>
        <button 
          onClick={() => window.location.href = "tel:+919141621820"}
          className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-full font-bold transition-colors"
        >
          Schedule Installation
        </button>
      </div>

      {/* Gallery Section */}
      <div className="mt-20">
        <div className="flex flex-col items-center mb-10">
          <h2 className="text-2xl md:text-4xl font-black uppercase mb-4 text-center">
            Installation Gallery
          </h2>
          <div className="h-1 w-20 bg-blue-600 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {installationImages.map((img, index) => (
            <div key={index} className="group relative aspect-square overflow-hidden rounded-[2rem] border border-white/10 shadow-xl">
              <img
                src={img}
                alt={`Shower Door Installation ${index + 1}`}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                <span className="text-xs font-black uppercase tracking-widest text-blue-400">View Installation Details</span>
              </div>
            </div>
          ))}
        </div>
      </div>

    </ServiceLayout>
  );
};

export default ShowerDoorsInstallation;