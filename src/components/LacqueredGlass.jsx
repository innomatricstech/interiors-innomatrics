// src/pages/services/LacqueredGlass.jsx
import React from 'react';
import { Palette, Brush, Shield } from 'lucide-react';
import ServiceLayout from './ServicesLayout';
import { images } from '../utils/images';
import { servicesData } from '../utils/servicesdata';

const LacqueredGlass = () => {
  const service = servicesData.find(s => s.id === 2);

  const features = [
    {
      title: "Custom Colors",
      description: "Available in standard and custom color options to match your interior design."
    },
    {
      title: "Heat Resistant",
      description: "Ideal for kitchens and areas exposed to heat."
    },
    {
      title: "Scratch Resistant",
      description: "Durable glossy finish that lasts for years."
    },
    {
      title: "Easy to Clean",
      description: "Smooth non-porous surface for effortless maintenance."
    },
    {
      title: "UV Stable",
      description: "Colors stay vibrant even under sunlight."
    },
    {
      title: "Moisture Resistant",
      description: "Perfect for bathrooms and wet areas."
    }
  ];

  return (
    <ServiceLayout
      title="Lacquered Glass Works"
      category="DECORATIVE"
      bannerImage={images.lacquredglass1}
      description="Back-painted lacquered glass solutions for modern interiors, kitchens, offices, and commercial spaces."
      features={features}
      stats={{ projects: 220, years: 9, rating: 4.7 }}
    >

      {/* Content Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-14">
        <div>
          <h2 className="text-2xl md:text-3xl font-black uppercase mb-6">
            Transform Your Space
          </h2>

          <p className="text-gray-300 mb-6">
            Lacquered glass enhances interiors with a sleek, glossy finish that reflects light and adds depth.
            Ideal for kitchens, living spaces, offices, and commercial interiors.
          </p>

          <div className="space-y-4">
            <div className="flex items-center gap-3 bg-white/5 p-4 rounded-xl">
              <Palette className="text-indigo-500" size={20} />
              <span>250+ Color Options</span>
            </div>
            <div className="flex items-center gap-3 bg-white/5 p-4 rounded-xl">
              <Brush className="text-pink-500" size={20} />
              <span>Glossy, Matte & Metallic Finishes</span>
            </div>
            <div className="flex items-center gap-3 bg-white/5 p-4 rounded-xl">
              <Shield className="text-emerald-500" size={20} />
              <span>Food-Grade Safe for Kitchens</span>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-2xl md:text-3xl font-black uppercase mb-6">
            Applications
          </h2>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gradient-to-br from-indigo-900/30 to-purple-900/30 p-4 rounded-xl">
              <h3 className="font-bold mb-1">Kitchen Cabinets</h3>
              <p className="text-sm text-gray-300">Stylish & hygienic surfaces</p>
            </div>
            <div className="bg-gradient-to-br from-pink-900/30 to-rose-900/30 p-4 rounded-xl">
              <h3 className="font-bold mb-1">Accent Walls</h3>
              <p className="text-sm text-gray-300">Eye-catching feature walls</p>
            </div>
            <div className="bg-gradient-to-br from-blue-900/30 to-cyan-900/30 p-4 rounded-xl">
              <h3 className="font-bold mb-1">Office Partitions</h3>
              <p className="text-sm text-gray-300">Modern office interiors</p>
            </div>
            <div className="bg-gradient-to-br from-amber-900/30 to-orange-900/30 p-4 rounded-xl">
              <h3 className="font-bold mb-1">Retail Displays</h3>
              <p className="text-sm text-gray-300">Premium commercial spaces</p>
            </div>
          </div>
        </div>
      </div>

      {/* Gallery Section */}
      <div className="mt-14">
        <h2 className="text-2xl md:text-3xl font-black uppercase mb-8 text-center">
          Lacquered Glass Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* 5 Images */}
          {service?.images?.slice(0, 5).map((img, index) => (
            <div key={index} className="group [perspective:1000px]">
              <div
                className="
                  aspect-square
                  overflow-hidden
                  rounded-2xl
                  transform-gpu
                  transition-all
                  duration-500
                  group-hover:scale-[1.05]
                  group-hover:[transform:rotateX(4deg)_rotateY(-4deg)]
                  group-hover:shadow-[0_25px_50px_rgba(0,0,0,0.35)]
                "
              >
                <img
                  src={img}
                  alt={`Lacquered Glass ${index + 1}`}
                  className="
                    w-full
                    h-full
                    object-cover
                    transition-transform
                    duration-700
                    group-hover:scale-110
                  "
                />
              </div>
            </div>
          ))}

          {/* 6th Item – Video */}
          <div className="group [perspective:1000px]">
            <div
              className="
                aspect-square
                overflow-hidden
                rounded-2xl
                transform-gpu
                transition-all
                duration-500
                group-hover:scale-[1.05]
                group-hover:[transform:rotateX(4deg)_rotateY(-4deg)]
                group-hover:shadow-[0_25px_50px_rgba(0,0,0,0.35)]
              "
            >
              <video
                src={images.videolacqured}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              />
            </div>
          </div>

        </div>
      </div>

    </ServiceLayout>
  );
};

export default LacqueredGlass;
