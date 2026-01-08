// src/pages/services/InteriorDesignHouseGlass.jsx
import React from 'react';
import { Sparkles, Palette, Home, Award, Brush, Star } from 'lucide-react';
import ServiceLayout from './ServicesLayout';
import { images, imageCategories } from '../utils/images';

const InteriorDesignHouseGlass = () => {

  const applications = [
    "Feature Glass Walls",
    "Room Dividers",
    "Glass Railings",
    "Skylights",
    "Glass Flooring",
    "Decorative Glass Panels"
  ];

  const highlights = [
    "Custom color matching",
    "Frosted & etched finishes",
    "Printed & back-painted glass",
    "Textured & 3D glass designs",
    "Modern & luxury interiors",
    "Low maintenance materials"
  ];

  return (
    <ServiceLayout
      title="Interior Design House Glass"
      category="INTERIOR"
      bannerImage={images.lacquredglass3}
      description="Premium glass solutions for interior design houses, architects, and luxury homes. We specialize in decorative, designer, and custom interior glass works."
      features={[
        { title: "Custom Glass Designs", description: "Tailored to your interior concept" },
        { title: "Decorative Finishes", description: "Frosted, etched & printed glass" },
        { title: "Modern Aesthetics", description: "Luxury & contemporary styles" },
        { title: "Color Matching", description: "Perfect shade matching" },
        { title: "Textured Glass", description: "3D & patterned options" },
        { title: "Designer Friendly", description: "Ideal for architects & studios" }
      ]}
      stats={{ projects: 120, years: 6, rating: 4.7 }}
    >

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-14">

        {/* Left Section */}
        <div>
          <h2 className="text-2xl md:text-3xl font-black uppercase mb-6">
            Why Choose Interior Glass Solutions?
          </h2>

          <div className="space-y-6">
            <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
              <div className="flex items-center gap-3 mb-3">
                <Sparkles className="text-pink-500" size={24} />
                <h3 className="text-xl font-bold">Luxury Visual Appeal</h3>
              </div>
              <p className="text-gray-300">
                Decorative glass adds elegance, brightness, and premium aesthetics to interiors.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
              <div className="flex items-center gap-3 mb-3">
                <Palette className="text-rose-500" size={24} />
                <h3 className="text-xl font-bold">Design Flexibility</h3>
              </div>
              <p className="text-gray-300">
                Available in multiple colors, textures, and patterns to match any design theme.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
              <div className="flex items-center gap-3 mb-3">
                <Home className="text-fuchsia-500" size={24} />
                <h3 className="text-xl font-bold">Ideal for Homes & Studios</h3>
              </div>
              <p className="text-gray-300">
                Perfect choice for villas, apartments, showrooms, and interior design studios.
              </p>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div>
          <h2 className="text-2xl md:text-3xl font-black uppercase mb-6">
            Interior Glass Applications
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            {applications.map((app, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-pink-900/20 to-rose-900/20 border border-white/10 p-4 rounded-xl text-center font-medium"
              >
                {app}
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-br from-fuchsia-900/30 to-pink-900/30 border border-pink-500/30 rounded-2xl p-6">
            <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
              <Brush size={20} />
              Design Highlights
            </h3>
            <ul className="space-y-3">
              {highlights.map((item, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <Star className="text-pink-400" size={18} />
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
          Interior Glass Design Works
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {imageCategories.lacqueredGlass.slice(0, 6).map((img, index) => (
            <div key={index} className="aspect-[4/3] overflow-hidden rounded-2xl">
              <img
                src={img}
                alt={`Interior Glass Design ${index + 1}`}
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
          ))}
        </div>
      </div>

    </ServiceLayout>
  );
};

export default InteriorDesignHouseGlass;
