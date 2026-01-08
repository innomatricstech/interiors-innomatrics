// src/pages/services/GlassPartitionPriceCost.jsx
import React from 'react';
import { Calculator, Shield, Award, CheckCircle, Zap } from 'lucide-react';
import ServiceLayout from './ServicesLayout';
import { images } from '../utils/images';

const GlassPartitionPriceCost = () => {

  const priceFactors = [
    "Type of Glass (Clear / Frosted / Laminated)",
    "Frame Type (Aluminium / Frameless)",
    "Glass Thickness",
    "Height & Area of Partition",
    "Door Type & Hardware",
    "Soundproof / Special Requirements",
  ];

  return (
    <ServiceLayout
      title="Glass Partition Price & Cost"
      category="COMMERCIAL"
      bannerImage={images.gallery10}
      description="Glass partition pricing depends on multiple factors like design, material, size, and installation requirements. Contact us for a customized quote."
      features={[
        { title: "Transparent Pricing", description: "No hidden charges" },
        { title: "Free Site Visit", description: "Accurate cost estimation" },
        { title: "Custom Solutions", description: "As per your requirement" },
        { title: "Value for Money", description: "Quality workmanship" },
        { title: "Flexible Options", description: "Budget-friendly choices" },
        { title: "Trusted Service", description: "Commercial experts" }
      ]}
      stats={{ projects: 250, years: 10, rating: 4.7 }}
    >

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-14">

        {/* Left Section */}
        <div>
          <h2 className="text-2xl md:text-3xl font-black uppercase mb-6">
            What Affects Glass Partition Cost?
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

        {/* Right Section */}
        <div>
          <h2 className="text-2xl md:text-3xl font-black uppercase mb-6">
            Why Our Pricing Is Fair
          </h2>

          <div className="space-y-6">
            <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
              <div className="flex items-center gap-3 mb-3">
                <Shield className="text-emerald-500" size={24} />
                <h3 className="text-xl font-bold">No Hidden Charges</h3>
              </div>
              <p className="text-gray-300">
                Complete transparency in quotation with clear scope of work.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
              <div className="flex items-center gap-3 mb-3">
                <Award className="text-cyan-500" size={24} />
                <h3 className="text-xl font-bold">Quality Materials</h3>
              </div>
              <p className="text-gray-300">
                Premium glass and aluminium profiles ensuring durability and safety.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
              <div className="flex items-center gap-3 mb-3">
                <Zap className="text-blue-500" size={24} />
                <h3 className="text-xl font-bold">Customized Quotes</h3>
              </div>
              <p className="text-gray-300">
                Pricing tailored based on your office layout and functional needs.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Call To Action */}
      <div className="mt-10 bg-gradient-to-r from-blue-900/40 to-cyan-900/40 border border-blue-500/30 rounded-3xl p-8 text-center">
        <h3 className="text-2xl font-black mb-3">
          Get a Customized Quote for Your Project
        </h3>
        <p className="text-gray-300 mb-6">
          Contact us today for a free site visit and detailed cost estimation.
        </p>
        <div className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-full font-bold transition">
          <Calculator size={18} />
          Request Free Quote
        </div>
      </div>

    </ServiceLayout>
  );
};

export default GlassPartitionPriceCost;
