// src/pages/services/GlassPartitionWithDoor.jsx
import React from 'react';
import { DoorOpen, Layers, Shield, Settings, Users, CheckCircle } from 'lucide-react';
import ServiceLayout from './ServicesLayout';
import { images } from '../utils/images';

const GlassPartitionWithDoor = () => {

  const doorTypes = [
    "Single Swing Door",
    "Double Swing Door",
    "Sliding Glass Door",
    "Pivot Door",
    "Folding Door"
  ];

  const highlights = [
    "Toughened safety glass",
    "Premium door hardware",
    "Smooth & silent operation",
    "Custom height & width",
    "Office & commercial use",
    "Low maintenance"
  ];

  // Use actual glass partition with door images from your images.js
  const partitionDoorImages = [
    images.glassPartitionWithDoor[0], // Glasspartitionwithdoor1
    images.glassPartitionWithDoor[1], // Glasspartitionwithdoor2
    images.glassPartitionWithDoor[2], // Glasspartitionwithdoor3
    images.glassPartitionWithDoor[3], // Glasspartitionwithdoor4
    images.glassPartitionWithDoor[4], // Glasspartitionwithdoor5
    images.gallery[10], // view-plumber-tool-box (as fallback)
  ];

  const specifications = [
    { spec: "Glass Thickness", value: "8mm/10mm/12mm" },
    { spec: "Door Type", value: "Swing/Sliding/Pivot" },
    { spec: "Hardware", value: "Premium SS Fittings" },
    { spec: "Finish", value: "Clear/Frosted/Tinted" },
    { spec: "Sound Rating", value: "30-40 dB" },
    { spec: "Warranty", value: "5 Years" }
  ];

  return (
    <ServiceLayout
      title="Glass Partition with Door"
      category="PARTITIONS"
      bannerImage={images.glassPartitionWithDoor[0]}
      description="Stylish and functional glass partition systems with integrated doors, ideal for office cabins, meeting rooms, and commercial spaces."
      features={[
        { title: "Integrated Door System", description: "Seamless glass & door integration" },
        { title: "Frameless / Framed Options", description: "Modern & professional look" },
        { title: "Smooth Door Operation", description: "High-quality fittings & hardware" },
        { title: "Safety Glass", description: "Toughened & laminated options" },
        { title: "Space Efficient", description: "Optimized layout usage" },
        { title: "Custom Designs", description: "Made as per requirement" }
      ]}
      stats={{ projects: 150, years: 7, rating: 4.8 }}
    >

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-14">

        {/* Left Section */}
        <div>
          <h2 className="text-2xl md:text-3xl font-black uppercase mb-6">
            Why Choose Glass Partition with Door?
          </h2>

          <div className="space-y-6">
            <div className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-colors">
              <div className="flex items-center gap-3 mb-3">
                <DoorOpen className="text-blue-500" size={24} />
                <h3 className="text-xl font-bold">Seamless Door Integration</h3>
              </div>
              <p className="text-gray-300">
                Doors are perfectly aligned with glass partitions for a clean and modern appearance.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-colors">
              <div className="flex items-center gap-3 mb-3">
                <Shield className="text-emerald-500" size={24} />
                <h3 className="text-xl font-bold">Safety & Strength</h3>
              </div>
              <p className="text-gray-300">
                Made using toughened safety glass with reliable door hardware for long-term use.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-colors">
              <div className="flex items-center gap-3 mb-3">
                <Users className="text-cyan-500" size={24} />
                <h3 className="text-xl font-bold">Ideal for Offices</h3>
              </div>
              <p className="text-gray-300">
                Perfect for cabins, conference rooms, and private office spaces.
              </p>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div>
          <h2 className="text-2xl md:text-3xl font-black uppercase mb-6">
            Door Options Available
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            {doorTypes.map((type, idx) => (
              <div
                key={idx}
                className="bg-white/5 border border-white/10 p-4 rounded-xl text-center font-medium hover:bg-white/10 transition-colors"
              >
                {type}
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-br from-blue-900/30 to-cyan-900/30 border border-blue-500/30 rounded-2xl p-6">
            <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
              <Settings size={20} />
              Technical Specifications
            </h3>
            <div className="space-y-3">
              {specifications.map((item, idx) => (
                <div key={idx} className="flex justify-between items-center">
                  <span className="text-gray-300">{item.spec}</span>
                  <span className="font-bold">{item.value}</span>
                </div>
              ))}
            </div>
          </div>
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
              title: "Office Cabins",
              description: "Executive and manager cabins",
              icon: <Users className="text-blue-500" size={24} />
            },
            {
              title: "Meeting Rooms",
              description: "Conference and board rooms",
              icon: <DoorOpen className="text-emerald-500" size={24} />
            },
            {
              title: "Commercial Spaces",
              description: "Banks, clinics, and showrooms",
              icon: <Shield className="text-cyan-500" size={24} />
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

      {/* Highlights Section */}
      <div className="mb-14 bg-gradient-to-r from-blue-900/20 to-cyan-900/20 border border-blue-500/30 rounded-2xl p-6">
        <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
          <Settings size={20} />
          Key Highlights
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {highlights.map((item, idx) => (
            <div key={idx} className="flex items-center gap-2 p-3 bg-white/5 rounded-lg">
              <CheckCircle className="text-blue-400" size={18} />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Gallery Section */}
      <div className="mt-20">
        <div className="flex flex-col items-center mb-10">
          <h2 className="text-2xl md:text-4xl font-black uppercase mb-4 text-center">
            Glass Partition with Door Gallery
          </h2>
          <div className="h-1 w-20 bg-blue-600 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {partitionDoorImages.map((img, index) => (
            <div key={index} className="group relative aspect-square overflow-hidden rounded-[2rem] border border-white/10 shadow-xl">
              <img
                src={img}
                alt={`Glass Partition with Door ${index + 1}`}
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
          Get Your Glass Partition Quote Today!
        </h3>
        <p className="text-gray-300 mb-6">
          Contact us for a free site visit and detailed quotation for your office or commercial space.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            onClick={() => window.location.href = "tel:+919141621820"}
            className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-full font-bold transition-colors"
          >
            Request Free Consultation
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

export default GlassPartitionWithDoor;