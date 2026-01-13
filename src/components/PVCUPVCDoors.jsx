// src/pages/services/PVCUPVCDoors.jsx
import React from 'react';
import { DoorOpen, Thermometer, Volume2, Lock, Shield, Settings, CheckCircle } from 'lucide-react';
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

  // Use actual UPVC door images from your images.js
  const upvcDoorImages = [
    images.upvcDoors[0], // upvcDoors1
    images.upvcDoors[1], // upvcDoors2
    images.upvcDoors[2], // upvcDoors3
    images.upvcDoors[3], // upvcDoors4
    images.upvcDoors[4], // upvcDoors5
    images.gallery[7], // dinner-table-cafe (as fallback)
  ];

  return (
    <ServiceLayout
      title="PVC & UPVC Doors"
      category="DOORS"
      bannerImage={images.upvcDoors[0]}
      description="High-quality PVC and UPVC doors for residential and commercial spaces. Energy efficient, durable, and low maintenance solutions that provide excellent insulation and security. Perfect for modern homes, offices, and commercial establishments."
      features={features}
      stats={{ projects: 320, years: 12, rating: 4.8 }}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 mb-12">
        {/* Left Content */}
        <div>
          <h2 className="text-2xl md:text-3xl font-black uppercase mb-6">Why Choose PVC/UPVC Doors?</h2>
          
          <div className="space-y-6">
            <div className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-colors">
              <div className="flex items-center gap-3 mb-3">
                <Thermometer className="text-emerald-500" size={24} />
                <h3 className="text-xl font-bold">Energy Efficient</h3>
              </div>
              <p className="text-gray-300">
                Our PVC/UPVC doors feature multi-chamber profiles and double-glazed glass that provide excellent thermal insulation, reducing your energy bills by up to 30%.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-colors">
              <div className="flex items-center gap-3 mb-3">
                <Volume2 className="text-blue-500" size={24} />
                <h3 className="text-xl font-bold">Noise Reduction</h3>
              </div>
              <p className="text-gray-300">
                Special sealing systems and sound-insulating glass reduce external noise by 35-40dB, creating peaceful indoor environments even in busy urban areas.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-colors">
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
                <div key={index} className="flex justify-between items-center border-b border-white/10 pb-3 last:border-b-0">
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
                  <div key={index} className="bg-white/5 p-3 rounded-lg hover:bg-white/10 transition-colors">
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
            <div className="bg-white/5 p-3 rounded-lg text-center hover:bg-white/10 transition-colors">
              <div className="text-2xl font-bold text-blue-400">₹0</div>
              <div className="text-xs text-gray-400">Maintenance Cost</div>
            </div>
            <div className="bg-white/5 p-3 rounded-lg text-center hover:bg-white/10 transition-colors">
              <div className="text-2xl font-bold text-emerald-400">-30%</div>
              <div className="text-xs text-gray-400">Energy Savings</div>
            </div>
            <div className="bg-white/5 p-3 rounded-lg text-center hover:bg-white/10 transition-colors">
              <div className="text-2xl font-bold text-amber-400">40dB</div>
              <div className="text-xs text-gray-400">Noise Reduction</div>
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-blue-900/30 to-cyan-900/30 p-6 rounded-2xl hover:bg-white/10 transition-colors">
            <h3 className="text-xl font-bold mb-3">Residential Homes</h3>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-center gap-2">
                <CheckCircle className="text-blue-400" size={16} />
                <span>Main Entrance Doors</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="text-blue-400" size={16} />
                <span>Balcony & Terrace Doors</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="text-blue-400" size={16} />
                <span>Garden & Patio Doors</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="text-blue-400" size={16} />
                <span>Room Partition Doors</span>
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-emerald-900/30 to-teal-900/30 p-6 rounded-2xl hover:bg-white/10 transition-colors">
            <h3 className="text-xl font-bold mb-3">Commercial Spaces</h3>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-center gap-2">
                <CheckCircle className="text-emerald-400" size={16} />
                <span>Office Entrance Doors</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="text-emerald-400" size={16} />
                <span>Conference Room Doors</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="text-emerald-400" size={16} />
                <span>Shop Fronts</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="text-emerald-400" size={16} />
                <span>Restaurant Entrance</span>
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 p-6 rounded-2xl hover:bg-white/10 transition-colors">
            <h3 className="text-xl font-bold mb-3">Special Applications</h3>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-center gap-2">
                <CheckCircle className="text-purple-400" size={16} />
                <span>Soundproof Recording Studios</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="text-purple-400" size={16} />
                <span>Hospital Wards</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="text-purple-400" size={16} />
                <span>Hotel Room Doors</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="text-purple-400" size={16} />
                <span>Laboratory Doors</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Gallery Section */}
      <div className="mt-20">
        <div className="flex flex-col items-center mb-10">
          <h2 className="text-2xl md:text-4xl font-black uppercase mb-4 text-center">
            UPVC Door Gallery
          </h2>
          <div className="h-1 w-20 bg-emerald-600 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {upvcDoorImages.map((img, index) => (
            <div key={index} className="group relative aspect-square overflow-hidden rounded-[2rem] border border-white/10 shadow-xl">
              <img
                src={img}
                alt={`UPVC Door Project ${index + 1}`}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                <span className="text-xs font-black uppercase tracking-widest text-emerald-400">View Project Details</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="mt-12 bg-gradient-to-r from-emerald-900/30 to-teal-900/30 border border-emerald-500/30 rounded-3xl p-8 text-center">
        <h3 className="text-2xl font-black mb-3">
          Get Your Custom UPVC Door Quote Today!
        </h3>
        <p className="text-gray-300 mb-6">
          Contact us for a free site visit and detailed quotation for your PVC/UPVC door requirements.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            onClick={() => window.location.href = "tel:+919141621820"}
            className="bg-emerald-600 hover:bg-emerald-700 px-8 py-3 rounded-full font-bold transition-colors"
          >
            Call for Free Consultation
          </button>
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="bg-white/10 hover:bg-white/20 px-8 py-3 rounded-full font-bold transition-colors border border-white/20"
          >
            View More Projects
          </button>
        </div>
      </div>

    </ServiceLayout>
  );
};

export default PVCUPVCDoors;