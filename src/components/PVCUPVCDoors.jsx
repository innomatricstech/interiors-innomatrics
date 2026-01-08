// src/pages/services/PVCUPVCDoors.jsx
import React from 'react';
import { DoorOpen, Thermometer, Volume2, Lock, Shield, Settings } from 'lucide-react';
import ServiceLayout from './ServicesLayout';
import { images } from '../utils/images';

const PVCUPVCDoors = () => {
  const features = [
    {
      title: "Thermal Insulation",
      description: "Multi-chamber design provides excellent thermal insulation, keeping interiors cool in summer and warm in winter."
    },
    {
      title: "Sound Proof",
      description: "Excellent sound insulation properties reduce external noise by up to 40dB for peaceful indoor environments."
    },
    {
      title: "Multi-point Locking",
      description: "Advanced multi-point locking systems provide enhanced security for residential and commercial spaces."
    },
    {
      title: "Low Maintenance",
      description: "UV-resistant material doesn't require painting or varnishing. Easy to clean with just soap and water."
    },
    {
      title: "Weather Proof",
      description: "Designed to withstand Chennai's climate - resistant to rain, humidity, and extreme temperatures."
    },
    {
      title: "Custom Sizes",
      description: "Available in standard and custom sizes to fit any architectural requirement perfectly."
    }
  ];

  const specifications = [
    { name: "Material Type", value: "PVC/UPVC" },
    { name: "Profile Thickness", value: "2.5mm - 3.0mm" },
    { name: "Glass Type", value: "Toughened/Double Glazed" },
    { name: "Locking System", value: "Multi-point Lock" },
    { name: "Weather Seal", value: "EPDM Rubber" },
    { name: "Warranty", value: "10 Years" },
    { name: "Colors Available", value: "White/Brown/Wood Finish" },
    { name: "Installation Time", value: "1-2 Days" }
  ];

  const doorTypes = [
    {
      type: "Sliding Doors",
      desc: "Space-saving sliding doors perfect for balconies and patios",
      icon: "←→"
    },
    {
      type: "French Doors",
      desc: "Elegant inward/outward opening doors for classic appeal",
      icon: "↔"
    },
    {
      type: "Folding Doors",
      desc: "Bi-fold doors that create wide openings for seamless indoor-outdoor living",
      icon: "⇆"
    },
    {
      type: "Main Entrance",
      desc: "Secure and stylish main entrance doors with enhanced security features",
      icon: "🏠"
    }
  ];

  return (
    <ServiceLayout
      title="PVC & UPVC Doors"
      category="DOORS"
      bannerImage={images.gallery8}
      description="High-quality PVC and UPVC doors for residential and commercial spaces. Energy efficient, durable, and low maintenance solutions that provide excellent insulation and security. Perfect for modern homes, offices, and commercial establishments."
      features={features}
      stats={{ projects: 320, years: 12, rating: 4.8 }}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 mb-12">
        {/* Left Content */}
        <div>
          <h2 className="text-2xl md:text-3xl font-black uppercase mb-6">Why Choose PVC/UPVC Doors?</h2>
          
          <div className="space-y-6">
            <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
              <div className="flex items-center gap-3 mb-3">
                <Thermometer className="text-emerald-500" size={24} />
                <h3 className="text-xl font-bold">Energy Efficient</h3>
              </div>
              <p className="text-gray-300">
                Our PVC/UPVC doors feature multi-chamber profiles and double-glazed glass that provide excellent thermal insulation, reducing your energy bills by up to 30%.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
              <div className="flex items-center gap-3 mb-3">
                <Volume2 className="text-blue-500" size={24} />
                <h3 className="text-xl font-bold">Noise Reduction</h3>
              </div>
              <p className="text-gray-300">
                Special sealing systems and sound-insulating glass reduce external noise by 35-40dB, creating peaceful indoor environments even in busy urban areas.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
              <div className="flex items-center gap-3 mb-3">
                <Shield className="text-amber-500" size={24} />
                <h3 className="text-xl font-bold">Security & Safety</h3>
              </div>
              <p className="text-gray-300">
                Reinforced frames and multi-point locking systems provide superior security. All glass used is toughened safety glass for maximum protection.
              </p>
            </div>
          </div>
        </div>

        {/* Right Content - Technical Specifications */}
        <div>
          <h2 className="text-2xl md:text-3xl font-black uppercase mb-6">Technical Specifications</h2>
          
          <div className="bg-gradient-to-br from-emerald-900/20 to-teal-900/20 border border-emerald-500/30 rounded-2xl p-6">
            <div className="space-y-4">
              {specifications.map((spec, index) => (
                <div key={index} className="flex justify-between items-center border-b border-white/10 pb-3">
                  <span className="text-gray-300">{spec.name}</span>
                  <span className="font-bold text-right">{spec.value}</span>
                </div>
              ))}
            </div>

            {/* Door Types */}
            <div className="mt-8 pt-6 border-t border-white/10">
              <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                <DoorOpen size={20} />
                Available Door Types:
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {doorTypes.map((door, index) => (
                  <div key={index} className="bg-white/5 p-3 rounded-lg">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-lg">{door.icon}</span>
                      <h4 className="font-bold text-sm">{door.type}</h4>
                    </div>
                    <p className="text-xs text-gray-400">{door.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Benefits */}
          <div className="mt-6 grid grid-cols-2 gap-3">
            <div className="bg-white/5 p-3 rounded-lg text-center">
              <div className="text-2xl font-bold text-blue-400">₹0</div>
              <div className="text-xs text-gray-400">Maintenance Cost</div>
            </div>
            <div className="bg-white/5 p-3 rounded-lg text-center">
              <div className="text-2xl font-bold text-emerald-400">-30%</div>
              <div className="text-xs text-gray-400">Energy Savings</div>
            </div>
            <div className="bg-white/5 p-3 rounded-lg text-center">
              <div className="text-2xl font-bold text-amber-400">40dB</div>
              <div className="text-xs text-gray-400">Noise Reduction</div>
            </div>
            <div className="bg-white/5 p-3 rounded-lg text-center">
              <div className="text-2xl font-bold text-red-400">10+</div>
              <div className="text-xs text-gray-400">Years Warranty</div>
            </div>
          </div>
        </div>
      </div>

      {/* Installation Process */}
      <div className="bg-gradient-to-r from-emerald-900/20 to-teal-900/20 border border-emerald-500/30 rounded-2xl p-6 md:p-8 mb-12">
        <h2 className="text-2xl md:text-3xl font-black uppercase mb-6 text-center">Our Installation Process</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="text-center">
            <div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-3">
              <span className="font-bold">1</span>
            </div>
            <h3 className="font-bold mb-2">Site Measurement</h3>
            <p className="text-sm text-gray-300">Precise measurement and assessment</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-3">
              <span className="font-bold">2</span>
            </div>
            <h3 className="font-bold mb-2">Design & Planning</h3>
            <p className="text-sm text-gray-300">Custom design and material selection</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-3">
              <span className="font-bold">3</span>
            </div>
            <h3 className="font-bold mb-2">Fabrication</h3>
            <p className="text-sm text-gray-300">Precision manufacturing at our facility</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-3">
              <span className="font-bold">4</span>
            </div>
            <h3 className="font-bold mb-2">Installation</h3>
            <p className="text-sm text-gray-300">Professional installation & finishing</p>
          </div>
        </div>
      </div>

      {/* Applications */}
      <div className="mb-12">
        <h2 className="text-2xl md:text-3xl font-black uppercase mb-6 text-center">Ideal Applications</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-gradient-to-br from-blue-900/30 to-cyan-900/30 p-6 rounded-2xl">
            <h3 className="text-xl font-bold mb-3">Residential Homes</h3>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span>Main Entrance Doors</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span>Balcony & Terrace Doors</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span>Garden & Patio Doors</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span>Room Partition Doors</span>
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-emerald-900/30 to-teal-900/30 p-6 rounded-2xl">
            <h3 className="text-xl font-bold mb-3">Commercial Spaces</h3>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                <span>Office Entrance Doors</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                <span>Conference Room Doors</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                <span>Shop Fronts</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                <span>Restaurant Entrance</span>
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 p-6 rounded-2xl">
            <h3 className="text-xl font-bold mb-3">Special Applications</h3>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                <span>Soundproof Recording Studios</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                <span>Hospital Wards</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                <span>Hotel Room Doors</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                <span>Laboratory Doors</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Gallery Section */}
      <div className="mt-12">
        <h2 className="text-2xl md:text-3xl font-black uppercase mb-8 text-center">
          Our PVC/UPVC Door Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[images.gallery8, images.gallery1, images.gallery7, images.gallery3, images.balcony1, images.balcony2].map((img, index) => (
            <div key={index} className="aspect-[4/3] overflow-hidden rounded-2xl">
              <img 
                src={img} 
                alt={`PVC/UPVC Door Project ${index + 1}`}
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Price Range (Optional) */}
      <div className="mt-12 bg-gradient-to-r from-emerald-900/20 to-teal-900/20 border border-emerald-500/30 rounded-2xl p-6">
        <h2 className="text-2xl font-black uppercase mb-4 text-center">Price Range</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-black/40 p-4 rounded-xl text-center">
            <h3 className="font-bold text-lg mb-2">Basic</h3>
            <div className="text-3xl font-bold text-emerald-400 mb-2">₹1,500/sq.ft</div>
            <p className="text-sm text-gray-300">Single glazed, standard finish</p>
          </div>
          <div className="bg-black/40 p-4 rounded-xl text-center border-2 border-emerald-500">
            <h3 className="font-bold text-lg mb-2">Standard</h3>
            <div className="text-3xl font-bold text-emerald-400 mb-2">₹2,200/sq.ft</div>
            <p className="text-sm text-gray-300">Double glazed, energy efficient</p>
          </div>
          <div className="bg-black/40 p-4 rounded-xl text-center">
            <h3 className="font-bold text-lg mb-2">Premium</h3>
            <div className="text-3xl font-bold text-emerald-400 mb-2">₹3,000/sq.ft</div>
            <p className="text-sm text-gray-300">Triple glazed, advanced security</p>
          </div>
        </div>
        <p className="text-center text-gray-400 text-sm mt-4">
          *Prices vary based on design complexity, glass type, and additional features
        </p>
      </div>
    </ServiceLayout>
  );
};

export default PVCUPVCDoors;