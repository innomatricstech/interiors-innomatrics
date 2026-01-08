// src/pages/services/AluminiumGlassPartition.jsx
import React from 'react';
import { Layers, Volume2, Shield, Settings } from 'lucide-react';
import ServiceLayout from './ServicesLayout';
import { images, imageCategories } from '../utils/images';

const AluminiumGlassPartition = () => {

  const specs = [
    { spec: "Frame Material", value: "Aluminium 6063-T5" },
    { spec: "Glass Thickness", value: "6mm / 8mm / 10mm" },
    { spec: "Sound Insulation", value: "Up to 42 dB" },
    { spec: "Maximum Height", value: "Up to 4 Meters" },
    { spec: "Finish Options", value: "Anodized / Powder Coated" },
    { spec: "Maintenance", value: "Low" },
  ];

  const features = [
    {
      title: "Strong Aluminium Frames",
      description: "High-grade aluminium profiles ensuring strength, stability, and long life."
    },
    {
      title: "Sound Insulation",
      description: "Reduces office noise and improves work productivity."
    },
    {
      title: "Privacy Control",
      description: "Clear, frosted, or film glass options available."
    },
    {
      title: "Modern Appearance",
      description: "Sleek and professional look for offices and commercial spaces."
    },
    {
      title: "Quick Installation",
      description: "Prefabricated modular system for fast installation."
    },
    {
      title: "Custom Sizes",
      description: "Designed as per site measurement and layout."
    }
  ];

  return (
    <ServiceLayout
      title="Aluminium Glass Partition"
      category="PARTITIONS"
      bannerImage={images.balcony5}
      description="High-quality aluminium framed glass partitions ideal for offices, cabins, conference rooms, and commercial interiors."
      features={features}
      stats={{ projects: 180, years: 8, rating: 4.7 }}
    >

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-14">

        {/* Left Section */}
        <div>
          <h2 className="text-2xl md:text-3xl font-black uppercase mb-6">
            Why Choose Aluminium Glass Partitions?
          </h2>

          <div className="space-y-6">
            <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
              <div className="flex items-center gap-3 mb-3">
                <Layers className="text-blue-500" size={24} />
                <h3 className="text-xl font-bold">Durable Structure</h3>
              </div>
              <p className="text-gray-300">
                Aluminium frames offer superior strength while remaining lightweight and corrosion-resistant.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
              <div className="flex items-center gap-3 mb-3">
                <Volume2 className="text-emerald-500" size={24} />
                <h3 className="text-xl font-bold">Noise Reduction</h3>
              </div>
              <p className="text-gray-300">
                Acoustic glass options help reduce noise levels, making them ideal for offices and meeting rooms.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
              <div className="flex items-center gap-3 mb-3">
                <Shield className="text-cyan-500" size={24} />
                <h3 className="text-xl font-bold">Safety & Privacy</h3>
              </div>
              <p className="text-gray-300">
                Toughened safety glass with optional frosted or film finishes for enhanced privacy.
              </p>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div>
          <h2 className="text-2xl md:text-3xl font-black uppercase mb-6">
            Technical Specifications
          </h2>

          <div className="bg-gradient-to-br from-blue-900/30 to-cyan-900/30 border border-blue-500/30 rounded-2xl p-6">
            <div className="space-y-4">
              {specs.map((item, idx) => (
                <div
                  key={idx}
                  className="flex justify-between items-center border-b border-white/10 pb-3"
                >
                  <span className="text-gray-300">{item.spec}</span>
                  <span className="font-bold">{item.value}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-white/10">
              <h3 className="text-lg font-bold flex items-center gap-2 mb-4">
                <Settings size={20} />
                Service Includes
              </h3>
              <ul className="space-y-2">
                <li>• Site Measurement</li>
                <li>• Design Consultation</li>
                <li>• Material Selection</li>
                <li>• Professional Installation</li>
                <li>• Post-Installation Support</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Gallery Section */}
      <div className="mt-14">
        <h2 className="text-2xl md:text-3xl font-black uppercase mb-8 text-center">
          Aluminium Glass Partition Works
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {imageCategories.oldGallery.slice(0, 6).map((img, index) => (
            <div key={index} className="aspect-[4/3] overflow-hidden rounded-2xl">
              <img
                src={img}
                alt={`Aluminium Glass Partition ${index + 1}`}
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
          ))}
        </div>
      </div>

    </ServiceLayout>
  );
};

export default AluminiumGlassPartition;
