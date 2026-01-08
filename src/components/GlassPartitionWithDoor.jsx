// src/pages/services/GlassPartitionWithDoor.jsx
import React from 'react';
import { DoorOpen, Layers, Shield, Settings, Users } from 'lucide-react';
import ServiceLayout from './ServicesLayout';
import { images, imageCategories } from '../utils/images';

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

  return (
    <ServiceLayout
      title="Glass Partition with Door"
      category="PARTITIONS"
      bannerImage={images.gallery11}
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
            <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
              <div className="flex items-center gap-3 mb-3">
                <DoorOpen className="text-blue-500" size={24} />
                <h3 className="text-xl font-bold">Seamless Door Integration</h3>
              </div>
              <p className="text-gray-300">
                Doors are perfectly aligned with glass partitions for a clean and modern appearance.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
              <div className="flex items-center gap-3 mb-3">
                <Shield className="text-emerald-500" size={24} />
                <h3 className="text-xl font-bold">Safety & Strength</h3>
              </div>
              <p className="text-gray-300">
                Made using toughened safety glass with reliable door hardware for long-term use.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
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
                className="bg-white/5 border border-white/10 p-4 rounded-xl text-center font-medium"
              >
                {type}
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-br from-blue-900/30 to-cyan-900/30 border border-blue-500/30 rounded-2xl p-6">
            <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
              <Settings size={20} />
              Key Highlights
            </h3>
            <ul className="space-y-3">
              {highlights.map((item, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <Layers className="text-blue-400" size={18} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Gallery Section */}
      <div className="mt-14">
        <h2 className="text-2xl md:text-3xl font-black uppercase mb-8 text-center">
          Glass Partition with Door Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {imageCategories.oldGallery.slice(8, 14).map((img, index) => (
            <div key={index} className="aspect-[4/3] overflow-hidden rounded-2xl">
              <img
                src={img}
                alt={`Glass Partition With Door ${index + 1}`}
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
          ))}
        </div>
      </div>

    </ServiceLayout>
  );
};

export default GlassPartitionWithDoor;
