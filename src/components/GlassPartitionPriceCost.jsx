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

  // Use actual glass partition price images from your images.js
  const priceImages = [
    images.glassPartitionPriceCost[0], // Glasspartitionpricecost1
    images.glassPartitionPriceCost[1], // Glasspartitionpricecost2
    images.glassPartitionPriceCost[2], // Glasspartitionpricecost3
    images.glassPartitionPriceCost[3], // Glasspartitionpricecost4
    images.glassPartitionPriceCost[4], // Glasspartitionpricecost5
    images.gallery[9], // service frame (as fallback)
  ];

  return (
    <ServiceLayout
      title="Glass Partition Price & Cost"
      category="COMMERCIAL"
      bannerImage={images.glassPartitionPriceCost[0]}
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
            <div className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-colors">
              <div className="flex items-center gap-3 mb-3">
                <Shield className="text-emerald-500" size={24} />
                <h3 className="text-xl font-bold">No Hidden Charges</h3>
              </div>
              <p className="text-gray-300">
                Complete transparency in quotation with clear scope of work.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-colors">
              <div className="flex items-center gap-3 mb-3">
                <Award className="text-cyan-500" size={24} />
                <h3 className="text-xl font-bold">Quality Materials</h3>
              </div>
              <p className="text-gray-300">
                Premium glass and aluminium profiles ensuring durability and safety.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-colors">
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

      {/* Gallery Section */}
      <div className="mt-20">
        <div className="flex flex-col items-center mb-10">
          <h2 className="text-2xl md:text-4xl font-black uppercase mb-4 text-center">
            Glass Partition Gallery
          </h2>
          <div className="h-1 w-20 bg-blue-600 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {priceImages.map((img, index) => (
            <div key={index} className="group relative aspect-square overflow-hidden rounded-[2rem] border border-white/10 shadow-xl">
              <img
                src={img}
                alt={`Glass Partition Project ${index + 1}`}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                <span className="text-xs font-black uppercase tracking-widest text-blue-400">View Project Details</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Process Section */}
      <div className="mt-14 mb-14">
        <h2 className="text-2xl md:text-3xl font-black uppercase mb-8 text-center">
          Our Pricing Process
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              step: "01",
              title: "Free Site Visit",
              description: "We visit your location to understand requirements",
              icon: <Calculator className="text-blue-500" size={24} />
            },
            {
              step: "02",
              title: "Detailed Quotation",
              description: "Transparent breakdown of all costs",
              icon: <Award className="text-emerald-500" size={24} />
            },
            {
              step: "03",
              title: "Final Agreement",
              description: "Clear scope of work and timeline",
              icon: <Shield className="text-cyan-500" size={24} />
            }
          ].map((item, index) => (
            <div 
              key={index} 
              className="bg-white/5 border border-white/10 p-8 rounded-2xl text-center hover:bg-white/10 transition-colors"
            >
              <div className="text-4xl font-bold text-blue-500 mb-2">{item.step}</div>
              <div className="flex justify-center mb-4">{item.icon}</div>
              <h3 className="text-xl font-bold mb-3">{item.title}</h3>
              <p className="text-gray-300">{item.description}</p>
            </div>
          ))}
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
        <button 
          onClick={() => window.location.href = "tel:+919141621820"}
          className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-full font-bold transition text-lg"
        >
          <Calculator size={20} />
          Request Free Quote
        </button>
      </div>

    </ServiceLayout>
  );
};

export default GlassPartitionPriceCost;