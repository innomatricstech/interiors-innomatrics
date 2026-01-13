// src/pages/services/LacqueredGlass.jsx
import React from 'react';
import { Palette, Sparkles, ShieldCheck, Layers, Settings, CheckCircle, Home, Utensils } from 'lucide-react';
import ServiceLayout from '../components/ServicesLayout';
import images from '../utils/images';

const LacqueredGlass = () => {

  const specs = [
    { item: "Glass Type", value: "Toughened / Non-Toughened" },
    { item: "Thickness", value: "4mm, 5mm, 6mm, 8mm" },
    { item: "Color Range", value: "RAL Shades & Custom Colors" },
    { item: "Durability", value: "Humidity & UV Resistant" },
    { item: "Coating", value: "High-Quality Eco-friendly Paint" },
    { item: "Application", value: "Interior Wall Cladding" }
  ];

  const highlights = [
    "Durable and long-lasting finish",
    "Easy to clean and maintain",
    "Heat and moisture resistant",
    "Eco-friendly paint technology",
    "Seamless aesthetic look",
    "Adds depth and light to interiors"
  ];

  // Use actual lacquered glass images from your images.js
  const lacqueredGlassImages = [
    images.lacquredGlass[0], // lacqured2
    images.lacquredGlass[1], // lacqured3
    images.lacquredGlass[2], // lacqured4
    images.lacquredGlass[3], // lacqured5
    images.gallery[4], // lacqured-glass (from gallery)
    images.gallery[5], // spider-fitting glass (as fallback)
  ];

  const colorOptions = [
    { name: "Jet Black", hex: "#000000", use: "Modern accents" },
    { name: "Pure White", hex: "#FFFFFF", use: "Bright interiors" },
    { name: "Royal Blue", hex: "#1E40AF", use: "Corporate spaces" },
    { name: "Emerald Green", hex: "#047857", use: "Natural themes" },
    { name: "Ruby Red", hex: "#DC2626", use: "Feature walls" },
    { name: "Sunset Orange", hex: "#EA580C", use: "Warm accents" }
  ];

  return (
    <ServiceLayout
      title="Lacquered Glass"
      category="DECORATIVE"
      bannerImage={images.lacquredGlass[0]}
      description="Lacquered glass is a back-painted glass that brings a vibrant, opaque finish to your interiors. Perfect for modern kitchens, office cabins, and premium wall decor."
      features={[
        { title: "Vibrant Colors", description: "Available in a wide spectrum of RAL shades to match your decor" },
        { title: "Kitchen Splashbacks", description: "Highly resistant to heat and stains, ideal for modern kitchens" },
        { title: "Hygienic Surface", description: "Non-porous surface that doesn't harbor bacteria or mold" },
        { title: "Wardrobe Panels", description: "Upgrade your furniture with premium glass shutters" },
        { title: "Wall Cladding", description: "Seamless and stylish alternative to traditional wall paints" },
        { title: "Custom Finish", description: "Available in both high-gloss and matte finishes" }
      ]}
      stats={{ projects: 120, years: 5, rating: 4.9 }}
    >

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-14">

        {/* Left Section - Use Cases */}
        <div className="animate-fade-in">
          <h2 className="text-2xl md:text-3xl font-black uppercase mb-6">
            Elevate Your Interiors
          </h2>

          <div className="space-y-6">
            <div className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-colors">
              <div className="flex items-center gap-3 mb-3">
                <Utensils className="text-orange-500" size={24} />
                <h3 className="text-xl font-bold">Kitchen Splashbacks</h3>
              </div>
              <p className="text-gray-300">
                Replace old tiles with seamless lacquered glass for a modern, easy-to-clean kitchen area.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-colors">
              <div className="flex items-center gap-3 mb-3">
                <Home className="text-blue-500" size={24} />
                <h3 className="text-xl font-bold">Wall Decor</h3>
              </div>
              <p className="text-gray-300">
                Used in living rooms and office lobbies to create a premium, reflective backdrop.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-colors">
              <div className="flex items-center gap-3 mb-3">
                <Palette className="text-purple-500" size={24} />
                <h3 className="text-xl font-bold">Color Customization</h3>
              </div>
              <p className="text-gray-300">
                We can match any color to ensure the glass perfectly complements your interior theme.
              </p>
            </div>
          </div>
        </div>

        {/* Right Section - Specs & Highlights */}
        <div className="animate-fade-in" style={{ animationDelay: '200ms' }}>
          <h2 className="text-2xl md:text-3xl font-black uppercase mb-6">
            Technical Details
          </h2>

          <div className="bg-gradient-to-br from-purple-900/30 to-blue-900/30 border border-purple-500/30 rounded-2xl p-6 mb-8">
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
              <Settings size={20} className="text-purple-400" />
              Key Features
            </h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {highlights.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <CheckCircle className="text-purple-500 mt-1 flex-shrink-0" size={16} />
                  <span className="text-sm text-gray-200">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Color Options Section */}
      <div className="mb-14">
        <h2 className="text-2xl md:text-3xl font-black uppercase mb-8 text-center">
          Popular Color Options
        </h2>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
          {colorOptions.map((color, idx) => (
            <div 
              key={idx} 
              className="bg-white/5 border border-white/10 p-4 rounded-xl text-center hover:bg-white/10 transition-colors"
            >
              <div 
                className="w-full h-12 rounded-lg mb-2 border border-white/20"
                style={{ backgroundColor: color.hex }}
              ></div>
              <div className="font-bold text-sm mb-1">{color.name}</div>
              <div className="text-xs text-gray-400">{color.hex}</div>
              <div className="text-xs text-gray-500 mt-1">{color.use}</div>
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
              title: "Kitchen Backsplash",
              description: "Heat and stain resistant surface",
              icon: <Utensils className="text-orange-500" size={24} />
            },
            {
              title: "Bathroom Walls",
              description: "Waterproof and easy to clean",
              icon: <Sparkles className="text-blue-500" size={24} />
            },
            {
              title: "Office Partitions",
              description: "Modern corporate interiors",
              icon: <Home className="text-purple-500" size={24} />
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
            Lacquered Glass Gallery
          </h2>
          <div className="h-1 w-20 bg-purple-600 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {lacqueredGlassImages.map((img, index) => (
            <div key={index} className="group relative aspect-square overflow-hidden rounded-[2rem] border border-white/10 shadow-xl">
              <img
                src={img}
                alt={`Lacquered Glass Project ${index + 1}`}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                <span className="text-xs font-black uppercase tracking-widest text-purple-400">Premium Finish</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Video Section (if you have video) */}
      {images.videos && images.videos.lacquredGlassVideo && (
        <div className="mt-12">
          <h2 className="text-2xl md:text-3xl font-black uppercase mb-8 text-center">
            Installation Process Video
          </h2>
          <div className="relative aspect-video rounded-2xl overflow-hidden border border-white/10">
            <video 
              src={images.videos.lacquredGlassVideo}
              controls
              className="w-full h-full object-cover"
              poster={images.lacquredGlass[0]}
            >
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <div className="mt-12 bg-gradient-to-r from-purple-900/30 to-blue-900/30 border border-purple-500/30 rounded-3xl p-8 text-center">
        <h3 className="text-2xl font-black mb-3">
          Transform Your Space with Lacquered Glass
        </h3>
        <p className="text-gray-300 mb-6">
          Get a free consultation and quotation for lacquered glass installation in your home or office.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            onClick={() => window.location.href = "tel:+919141621820"}
            className="bg-purple-600 hover:bg-purple-700 px-8 py-3 rounded-full font-bold transition-colors"
          >
            Request Free Quote
          </button>
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="bg-white/10 hover:bg-white/20 px-8 py-3 rounded-full font-bold transition-colors border border-white/20"
          >
            View More Colors
          </button>
        </div>
      </div>

    </ServiceLayout>
  );
};

export default LacqueredGlass;