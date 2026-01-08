// src/pages/services/ShowerDoorsInstallation.jsx
import React from 'react';
import { Wrench, Shield, Droplets, Clock, CheckCircle } from 'lucide-react';
import ServiceLayout from './ServicesLayout';
import { images, imageCategories } from '../utils/images';

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

  return (
    <ServiceLayout
      title="Glass Shower Doors Installation"
      category="BATHROOM"
      bannerImage={images.shower90}
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
                className="bg-white/5 border border-white/10 p-5 rounded-2xl"
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

      {/* Time & CTA */}
      <div className="mb-14 bg-gradient-to-r from-blue-900/40 to-cyan-900/40 border border-blue-500/30 rounded-3xl p-8 text-center">
        <h3 className="text-2xl font-black mb-3">
          Installation Time: 4–6 Hours
        </h3>
        <p className="text-gray-300">
          Clean workmanship with no damage and no mess left behind.
        </p>
      </div>

      {/* Gallery Section */}
      <div className="mt-14">
        <h2 className="text-2xl md:text-3xl font-black uppercase mb-8 text-center">
          Shower Door Installation Works
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {imageCategories.shower.slice(0, 6).map((img, index) => (
            <div key={index} className="aspect-[4/3] overflow-hidden rounded-2xl">
              <img
                src={img}
                alt={`Shower Door Installation ${index + 1}`}
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
          ))}
        </div>
      </div>

    </ServiceLayout>
  );
};

export default ShowerDoorsInstallation;
