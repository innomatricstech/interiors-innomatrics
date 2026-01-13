// src/pages/services/WallGlassPartition.jsx
import React from 'react';
import { Layout, Shield, Maximize, Ruler, Settings, CheckCircle, Home, Building2 } from 'lucide-react';
import ServiceLayout from './ServicesLayout';
import images from '../utils/images';

const WallGlassPartition = () => {

  const specs = [
    { item: "Glass Thickness", value: "8mm, 10mm, 12mm Toughened" },
    { item: "Frame Material", value: "Aluminium Slim Profile / Frameless" },
    { item: "Sound Insulation", value: "Up to 35dB - 45dB" },
    { item: "Glass Type", value: "Clear, Frosted, Tinted, Fluted" },
    { item: "Hardware", value: "Dorma / Ozone Premium Fittings" },
    { item: "Finish", value: "Powder Coated / Anodized / Wooden" }
  ];

  const highlights = [
    "Maximizes natural light flow",
    "Space-saving slim designs",
    "Quick installation with minimal mess",
    "Easy to maintain and clean",
    "Customizable acoustic privacy",
    "Modern aesthetic for homes & offices"
  ];

  // Use actual images from your images.js
  const galleryImages = [
    images.wallGlassPartition[0], // wallglasspartition1
    images.wallGlassPartition[1], // wallglasspartition2
    images.wallGlassPartition[2], // wallglasspartition3
    images.wallGlassPartition[3], // wallglasspartition4
    images.wallGlassPartition[4], // wallglasspartition5
    images.gallery[3], // frame shower partition
  ];

  return (
    <ServiceLayout
      title="Wall Glass Partition"
      category="PARTITIONS"
      bannerImage={images.wallGlassPartition[0]}
      description="Modern wall glass partition solutions to divide your space elegantly without losing transparency. Perfect for creating private cabins, meeting rooms, or home study areas."
      features={[
        { title: "Sleek Design", description: "Ultra-slim profiles for a minimalist modern look" },
        { title: "Sound Privacy", description: "Expertly sealed to provide acoustic insulation" },
        { title: "Toughened Safety", description: "ISI certified high-impact safety glass" },
        { title: "Versatile Styles", description: "Choose from clear, frosted, or textured glass" },
        { title: "Durable Tracks", description: "Heavy-duty floor and ceiling mounting systems" },
        { title: "Custom Sizing", description: "Perfectly tailored to fit your specific wall dimensions" }
      ]}
      stats={{ projects: 110, years: 7, rating: 4.7 }}
    >

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-14">

        {/* Left Section - Why Choose */}
        <div className="animate-fade-in">
          <h2 className="text-2xl md:text-3xl font-black uppercase mb-6">
            Transform Your Space
          </h2>

          <div className="space-y-6">
            <div className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-colors">
              <div className="flex items-center gap-3 mb-3">
                <Building2 className="text-blue-500" size={24} />
                <h3 className="text-xl font-bold">Office Partitions</h3>
              </div>
              <p className="text-gray-300">
                Create executive cabins and collaborative workspaces while maintaining an open-office feel.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-colors">
              <div className="flex items-center gap-3 mb-3">
                <Home className="text-emerald-500" size={24} />
                <h3 className="text-xl font-bold">Residential Use</h3>
              </div>
              <p className="text-gray-300">
                Divide living and dining areas or create a noise-free home office with elegant glass walls.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-colors">
              <div className="flex items-center gap-3 mb-3">
                <Maximize className="text-amber-500" size={24} />
                <h3 className="text-xl font-bold">Visual Expansion</h3>
              </div>
              <p className="text-gray-300">
                Glass walls make small rooms appear significantly larger and brighter by allowing light to travel.
              </p>
            </div>
          </div>
        </div>

        {/* Right Section - Specs & Highlights */}
        <div className="animate-fade-in" style={{ animationDelay: '200ms' }}>
          <h2 className="text-2xl md:text-3xl font-black uppercase mb-6">
            Specifications
          </h2>

          <div className="bg-gradient-to-br from-blue-900/30 to-indigo-900/30 border border-blue-500/30 rounded-2xl p-6 mb-8">
            <div className="space-y-4">
              {specs.map((spec, idx) => (
                <div
                  key={idx}
                  className="flex justify-between items-center border-b border-white/10 pb-3 last:border-0"
                >
                  <span className="text-gray-300 text-sm uppercase tracking-wider">{spec.item}</span>
                  <span className="font-bold text-white">{spec.value}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
            <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
              <Settings size={20} className="text-blue-400" />
              Key Advantages
            </h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {highlights.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <CheckCircle className="text-blue-500 mt-1 flex-shrink-0" size={16} />
                  <span className="text-sm text-gray-200">{item}</span>
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
              title: "Office Partitions",
              description: "Executive cabins and meeting rooms",
              icon: <Building2 className="text-blue-500" size={24} />
            },
            {
              title: "Home Dividers",
              description: "Living and dining area separation",
              icon: <Home className="text-emerald-500" size={24} />
            },
            {
              title: "Commercial Spaces",
              description: "Showrooms and retail store partitions",
              icon: <Layout className="text-amber-500" size={24} />
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
            Completed Installations
          </h2>
          <div className="h-1 w-20 bg-blue-600 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((img, index) => (
            <div key={index} className="group relative aspect-square overflow-hidden rounded-[2rem] border border-white/10 shadow-xl">
              <img
                src={img}
                alt={`Wall Partition Project ${index + 1}`}
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

export default WallGlassPartition;