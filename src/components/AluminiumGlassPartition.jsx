// src/pages/services/AluminiumGlassPartition.jsx
import React from 'react';
import { Layers, Volume2, Shield, Settings, CheckCircle, Building, Users } from 'lucide-react';
import ServiceLayout from './ServicesLayout';
import { images } from '../utils/images';

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

  // Use actual aluminium glass partition images from your images.js
  const aluminiumPartitionImages = [
    images.aluminiumGlassPartition[0], // aluminiumglass1
    images.aluminiumGlassPartition[1], // aluminiumglass2
    images.aluminiumGlassPartition[2], // aluminiumglass3
    images.aluminiumGlassPartition[3], // aluminiumglass4
    images.aluminiumGlassPartition[4], // aluminiumglass5
    images.gallery[9], // service frame (as fallback)
  ];

  const partitionTypes = [
    {
      type: "Office Partitions",
      description: "Workstation and department dividers",
      icon: <Building className="text-blue-500" size={20} />
    },
    {
      type: "Conference Rooms",
      description: "Meeting room enclosures",
      icon: <Users className="text-emerald-500" size={20} />
    },
    {
      type: "Cabin Partitions",
      description: "Manager and director cabins",
      icon: <Shield className="text-amber-500" size={20} />
    },
    {
      type: "Reception Areas",
      description: "Lobby and reception partitions",
      icon: <Layers className="text-cyan-500" size={20} />
    }
  ];

  return (
    <ServiceLayout
      title="Aluminium Glass Partition"
      category="PARTITIONS"
      bannerImage={images.aluminiumGlassPartition[0]}
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
            <div className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-colors">
              <div className="flex items-center gap-3 mb-3">
                <Layers className="text-blue-500" size={24} />
                <h3 className="text-xl font-bold">Durable Structure</h3>
              </div>
              <p className="text-gray-300">
                Aluminium frames offer superior strength while remaining lightweight and corrosion-resistant.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-colors">
              <div className="flex items-center gap-3 mb-3">
                <Volume2 className="text-emerald-500" size={24} />
                <h3 className="text-xl font-bold">Noise Reduction</h3>
              </div>
              <p className="text-gray-300">
                Acoustic glass options help reduce noise levels, making them ideal for offices and meeting rooms.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-colors">
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
                  className="flex justify-between items-center border-b border-white/10 pb-3 last:border-b-0"
                >
                  <span className="text-gray-300">{item.spec}</span>
                  <span className="font-bold">{item.value}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-white/10">
              <h3 className="text-lg font-bold flex items-center gap-2 mb-4">
                <Settings size={20} />
                Partition Types Available
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {partitionTypes.map((type, index) => (
                  <div key={index} className="bg-white/5 p-3 rounded-lg hover:bg-white/10 transition-colors">
                    <div className="flex items-center gap-2 mb-1">
                      {type.icon}
                      <h4 className="font-bold text-sm">{type.type}</h4>
                    </div>
                    <p className="text-xs text-gray-400">{type.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="mb-14">
        <h2 className="text-2xl md:text-3xl font-black uppercase mb-8 text-center">
          Key Benefits
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { benefit: "Modern Look", icon: <Layers className="text-blue-500" size={24} /> },
            { benefit: "Easy Maintenance", icon: <Shield className="text-emerald-500" size={24} /> },
            { benefit: "Quick Installation", icon: <Settings className="text-amber-500" size={24} /> },
            { benefit: "Customizable", icon: <CheckCircle className="text-cyan-500" size={24} /> }
          ].map((item, idx) => (
            <div key={idx} className="bg-white/5 border border-white/10 p-6 rounded-2xl text-center hover:bg-white/10 transition-colors">
              <div className="flex justify-center mb-3">{item.icon}</div>
              <div className="font-bold">{item.benefit}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Applications Section */}
      <div className="mb-14">
        <h2 className="text-2xl md:text-3xl font-black uppercase mb-8 text-center">
          Common Applications
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: "Corporate Offices",
              description: "Open office layouts and private cabins",
              icon: <Building className="text-blue-500" size={24} />
            },
            {
              title: "Co-working Spaces",
              description: "Flexible workspace dividers",
              icon: <Users className="text-emerald-500" size={24} />
            },
            {
              title: "Educational Institutes",
              description: "Classroom and library partitions",
              icon: <Volume2 className="text-amber-500" size={24} />
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
            Aluminium Glass Partition Gallery
          </h2>
          <div className="h-1 w-20 bg-blue-600 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {aluminiumPartitionImages.map((img, index) => (
            <div key={index} className="group relative aspect-square overflow-hidden rounded-[2rem] border border-white/10 shadow-xl">
              <img
                src={img}
                alt={`Aluminium Glass Partition ${index + 1}`}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                <span className="text-xs font-black uppercase tracking-widest text-blue-400">View Project Details</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="mt-12 bg-gradient-to-r from-blue-900/30 to-cyan-900/30 border border-blue-500/30 rounded-3xl p-8 text-center">
        <h3 className="text-2xl font-black mb-3">
          Transform Your Office Space
        </h3>
        <p className="text-gray-300 mb-6">
          Contact us for a free consultation and quotation for aluminium glass partitions.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            onClick={() => window.location.href = "tel:+919141621820"}
            className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-full font-bold transition-colors"
          >
            Get Free Quote
          </button>
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="bg-white/10 hover:bg-white/20 px-8 py-3 rounded-full font-bold transition-colors border border-white/20"
          >
            View More Designs
          </button>
        </div>
      </div>

    </ServiceLayout>
  );
};

export default AluminiumGlassPartition;