// src/pages/services/UPVCWindowsPrice.jsx
import React from 'react';
import { Shield, Thermometer, Volume2, Zap, Award, CheckCircle } from 'lucide-react';
import ServiceLayout from './ServicesLayout';
import { images } from '../utils/images';

const UPVCWindowsPrice = () => {

  const features = [
    { title: "Transparent Pricing", description: "Clear quotation with no hidden charges" },
    { title: "Quality Guarantee", description: "ISI certified profiles with long-term durability" },
    { title: "Thermal Insulation", description: "Helps reduce heat and improve energy efficiency" },
    { title: "Sound Proofing", description: "Reduces outside noise for peaceful interiors" },
    { title: "UV Protection", description: "Protects interiors from harmful UV rays" },
    { title: "Custom Sizes", description: "Made to measure for perfect fitting" }
  ];

  const windowTypes = [
    "Casement Windows",
    "Sliding Windows",
    "Tilt & Turn Windows",
    "Fixed Windows",
    "Bay Windows",
    "French Windows"
  ];

  const priceFactors = [
    "Window type & design",
    "Glass specification",
    "Profile thickness & brand",
    "Hardware & locking system",
    "Window size & quantity",
    "Installation complexity",
    "Additional features (mesh, grills, color options)"
  ];

  return (
    <ServiceLayout
      title="UPVC Windows Price"
      category="WINDOWS"
      bannerImage={images.gallery3}
      description="UPVC window cost depends on multiple factors such as design, size, glass type, and installation requirements. Contact us for a customized quotation based on your needs."
      features={features}
      stats={{ projects: 420, years: 15, rating: 4.8 }}
    >

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-14">

        {/* Left Section */}
        <div>
          <h2 className="text-2xl md:text-3xl font-black uppercase mb-6">
            Types of UPVC Windows We Offer
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {windowTypes.map((type, idx) => (
              <div
                key={idx}
                className="bg-white/5 border border-white/10 p-5 rounded-2xl text-center font-medium"
              >
                {type}
              </div>
            ))}
          </div>
        </div>

        {/* Right Section */}
        <div>
          <h2 className="text-2xl md:text-3xl font-black uppercase mb-6">
            Factors Affecting UPVC Window Cost
          </h2>

          <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
            <ul className="space-y-3">
              {priceFactors.map((factor, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <CheckCircle className="text-blue-500" size={18} />
                  <span className="text-gray-300">{factor}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
        <div className="bg-white/5 border border-white/10 p-6 rounded-2xl text-center">
          <Thermometer className="mx-auto text-emerald-500 mb-3" size={28} />
          <h3 className="font-bold mb-1">Energy Efficient</h3>
          <p className="text-sm text-gray-400">
            Keeps interiors cool and reduces electricity usage.
          </p>
        </div>

        <div className="bg-white/5 border border-white/10 p-6 rounded-2xl text-center">
          <Volume2 className="mx-auto text-cyan-500 mb-3" size={28} />
          <h3 className="font-bold mb-1">Noise Reduction</h3>
          <p className="text-sm text-gray-400">
            Ideal for homes near traffic and busy areas.
          </p>
        </div>

        <div className="bg-white/5 border border-white/10 p-6 rounded-2xl text-center">
          <Zap className="mx-auto text-yellow-500 mb-3" size={28} />
          <h3 className="font-bold mb-1">Low Maintenance</h3>
          <p className="text-sm text-gray-400">
            No painting or polishing required.
          </p>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-gradient-to-r from-blue-900/40 to-cyan-900/40 border border-blue-500/30 rounded-3xl p-8 text-center">
        <h3 className="text-2xl font-black mb-3">
          Get a Customized UPVC Window Quote
        </h3>
        <p className="text-gray-300 mb-5">
          Contact us for a free site visit and accurate cost estimation based on your requirements.
        </p>
        <div className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-full font-bold transition">
          Request Free Quote
        </div>
      </div>

    </ServiceLayout>
  );
};

export default UPVCWindowsPrice;
