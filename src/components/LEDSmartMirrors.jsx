// src/pages/services/LEDSmartMirrors.jsx
import React from 'react';
import { Zap, Tv, Bluetooth, Settings, Shield, Award, Sparkles } from 'lucide-react';
import ServiceLayout from './ServicesLayout';
import { images, imageCategories } from '../utils/images';

const LEDSmartMirrors = () => {

  const smartFeatures = [
    "Touch Control",
    "Anti-Fog Technology",
    "Dimmable LED Lighting",
    "3 Color Light Modes",
    "Bluetooth Speaker",
    "Motion Sensor"
  ];

  const highlights = [
    "Perfect for modern bathrooms",
    "Luxury vanity mirror solution",
    "Energy efficient LED lighting",
    "Safe low-voltage operation",
    "Custom sizes & shapes",
    "Easy wall mounting"
  ];

  return (
    <ServiceLayout
      title="LED Smart Mirrors"
      category="LUXURY"
      bannerImage={images.ledglass1}
      description="Premium LED smart mirrors with touch control, anti-fog technology, and intelligent features designed for modern bathrooms, vanity areas, and luxury interiors."
      features={[
        { title: "Touch Control", description: "One-touch smart operation" },
        { title: "Anti-Fog Technology", description: "Clear mirror after shower" },
        { title: "Dimmable LED", description: "Adjust brightness easily" },
        { title: "3 Color Modes", description: "Warm, neutral & cool light" },
        { title: "Bluetooth Audio", description: "Music & hands-free calls" },
        { title: "Smart Sensors", description: "Auto on/off motion detection" }
      ]}
      stats={{ projects: 110, years: 6, rating: 4.9 }}
    >

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-14">

        {/* Left Section */}
        <div>
          <h2 className="text-2xl md:text-3xl font-black uppercase mb-6">
            Why Choose LED Smart Mirrors?
          </h2>

          <div className="space-y-6">
            <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
              <div className="flex items-center gap-3 mb-3">
                <Zap className="text-amber-500" size={24} />
                <h3 className="text-xl font-bold">Smart & Convenient</h3>
              </div>
              <p className="text-gray-300">
                Touch controls and motion sensors make everyday usage effortless and intuitive.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
              <div className="flex items-center gap-3 mb-3">
                <Shield className="text-orange-500" size={24} />
                <h3 className="text-xl font-bold">Safe & Reliable</h3>
              </div>
              <p className="text-gray-300">
                Built with low-voltage systems and moisture-resistant components for bathroom safety.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
              <div className="flex items-center gap-3 mb-3">
                <Award className="text-yellow-500" size={24} />
                <h3 className="text-xl font-bold">Luxury Finish</h3>
              </div>
              <p className="text-gray-300">
                Adds a premium and modern touch to bathrooms, vanity spaces, and dressing areas.
              </p>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div>
          <h2 className="text-2xl md:text-3xl font-black uppercase mb-6">
            Smart Features
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            {smartFeatures.map((feature, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-amber-900/20 to-orange-900/20 border border-white/10 p-4 rounded-xl text-center font-medium"
              >
                {feature}
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-br from-orange-900/30 to-amber-900/30 border border-amber-500/30 rounded-2xl p-6">
            <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
              <Sparkles size={20} />
              Product Highlights
            </h3>
            <ul className="space-y-3">
              {highlights.map((item, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <Settings className="text-amber-400" size={18} />
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
          LED Smart Mirror Designs
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {imageCategories.ledGlass.slice(0, 6).map((img, index) => (
            <div key={index} className="aspect-[4/3] overflow-hidden rounded-2xl">
              <img
                src={img}
                alt={`LED Smart Mirror ${index + 1}`}
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
          ))}
        </div>
      </div>

    </ServiceLayout>
  );
};

export default LEDSmartMirrors;
