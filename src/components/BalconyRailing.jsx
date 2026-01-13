// src/pages/services/BalconyRailing.jsx
import React from 'react';
import { Shield, Eye, Thermometer, Wind, Wrench, Award, CheckCircle } from 'lucide-react';
import ServiceLayout from './ServicesLayout';
import { images } from '../utils/images';

const BalconyRailing = () => {

  const features = [
    {
      title: "SS 316 Grade Fittings",
      description: "Premium stainless steel 316 grade fittings for maximum durability and rust resistance in all weather conditions."
    },
    {
      title: "Laminated Safety Glass",
      description: "10-12mm toughened laminated glass that provides maximum safety and impact resistance."
    },
    {
      title: "Weather Proof Design",
      description: "Specially designed to withstand extreme weather conditions including heavy rain and strong winds."
    },
    {
      title: "Crystal Clear Views",
      description: "High transparency glass that maintains unobstructed views while ensuring safety."
    },
    {
      title: "Custom Height & Design",
      description: "Available in various heights and designs to match your architectural requirements."
    },
    {
      title: "Professional Installation",
      description: "Expert installation team with 10+ years of experience in balcony glass installations."
    }
  ];

  // Use actual balcony and SS railing glass images from your images.js
  const balconyImages = [
    images.balconyGlass[0], // balcony1
    images.balconyGlass[1], // balcony2
    images.balconyGlass[2], // balcony3
    images.balconyGlass[3], // balcony4
    images.balconyGlass[4], // balcony5
    images.balconyGlass[5], // balcony6
  ];

  const railingTypes = [
    {
      type: "Frameless Railing",
      description: "Minimalist design with maximum visibility",
      icon: <Eye className="text-blue-500" size={20} />
    },
    {
      type: "SS Railing with Glass",
      description: "Stainless steel posts with glass infill",
      icon: <Shield className="text-emerald-500" size={20} />
    },
    {
      type: "Top Mounted Railing",
      description: "Secure top-mounted installation",
      icon: <Award className="text-amber-500" size={20} />
    },
    {
      type: "Corner Railing",
      description: "For balcony corners and angles",
      icon: <Wind className="text-cyan-500" size={20} />
    }
  ];

  return (
    <ServiceLayout
      title="SS Railing Glass for Balcony"
      category="ARCHITECTURAL"
      bannerImage={images.balconyGlass[0]}
      description="Premium stainless steel railing glass systems for balconies. Our SS railings provide maximum safety with crystal clear views using SS 316 grade fittings and laminated safety glass."
      features={features}
      stats={{ projects: 275, years: 10, rating: 4.7 }}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 mb-12">
        {/* Left Content */}
        <div>
          <h2 className="text-2xl md:text-3xl font-black uppercase mb-6">Why Choose Our Balcony Railings?</h2>
          
          <div className="space-y-6">
            <div className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-colors">
              <div className="flex items-center gap-3 mb-3">
                <Shield className="text-blue-500" size={24} />
                <h3 className="text-xl font-bold">Safety First</h3>
              </div>
              <p className="text-gray-300">
                Our balcony railings are designed with safety as the top priority. We use 10-12mm toughened laminated glass that can withstand significant impact while maintaining structural integrity.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-colors">
              <div className="flex items-center gap-3 mb-3">
                <Eye className="text-cyan-500" size={24} />
                <h3 className="text-xl font-bold">Unobstructed Views</h3>
              </div>
              <p className="text-gray-300">
                Enjoy panoramic views without compromising on safety. The high-transparency glass provides crystal clear visibility while creating a modern, minimalist look.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-colors">
              <div className="flex items-center gap-3 mb-3">
                <Thermometer className="text-emerald-500" size={24} />
                <h3 className="text-xl font-bold">Weather Resistant</h3>
              </div>
              <p className="text-gray-300">
                Designed to withstand Chennai's coastal climate. SS 316 grade fittings are corrosion-resistant and maintain their appearance for years to come.
              </p>
            </div>
          </div>
        </div>

        {/* Right Content */}
        <div>
          <h2 className="text-2xl md:text-3xl font-black uppercase mb-6">Technical Specifications</h2>
          
          <div className="bg-gradient-to-br from-blue-900/30 to-cyan-900/30 border border-blue-500/30 rounded-2xl p-6">
            <div className="space-y-4">
              <div className="flex justify-between items-center border-b border-white/10 pb-3">
                <span className="text-gray-300">Glass Type</span>
                <span className="font-bold">10/12mm Toughened Laminated</span>
              </div>
              <div className="flex justify-between items-center border-b border-white/10 pb-3">
                <span className="text-gray-300">Frame Material</span>
                <span className="font-bold">SS 316 Stainless Steel</span>
              </div>
              <div className="flex justify-between items-center border-b border-white/10 pb-3">
                <span className="text-gray-300">Height Options</span>
                <span className="font-bold">3ft - 5ft (Customizable)</span>
              </div>
              <div className="flex justify-between items-center border-b border-white/10 pb-3">
                <span className="text-gray-300">Installation Time</span>
                <span className="font-bold">2-3 Days</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-300">Maintenance</span>
                <span className="font-bold">Low (Easy Cleaning)</span>
              </div>
            </div>

            {/* Railing Types */}
            <div className="mt-8 pt-6 border-t border-white/10">
              <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                <Wrench size={20} />
                Railing Types Available:
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {railingTypes.map((type, index) => (
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

          {/* Benefits */}
          <div className="mt-6 grid grid-cols-2 gap-3">
            <div className="bg-white/5 p-3 rounded-lg text-center hover:bg-white/10 transition-colors">
              <div className="text-2xl font-bold text-blue-400">SS 316</div>
              <div className="text-xs text-gray-400">Stainless Steel</div>
            </div>
            <div className="bg-white/5 p-3 rounded-lg text-center hover:bg-white/10 transition-colors">
              <div className="text-2xl font-bold text-emerald-400">10+</div>
              <div className="text-xs text-gray-400">Years Life</div>
            </div>
            <div className="bg-white/5 p-3 rounded-lg text-center hover:bg-white/10 transition-colors">
              <div className="text-2xl font-bold text-amber-400">275+</div>
              <div className="text-xs text-gray-400">Projects Done</div>
            </div>
            <div className="bg-white/5 p-3 rounded-lg text-center hover:bg-white/10 transition-colors">
              <div className="text-2xl font-bold text-cyan-400">4.7/5</div>
              <div className="text-xs text-gray-400">Rating</div>
            </div>
          </div>
        </div>
      </div>

      {/* Installation Process */}
      <div className="bg-gradient-to-r from-blue-900/20 to-cyan-900/20 border border-blue-500/30 rounded-2xl p-6 md:p-8 mb-12">
        <h2 className="text-2xl md:text-3xl font-black uppercase mb-6 text-center">Installation Process</h2>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          <div className="text-center">
            <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-3">
              <span className="font-bold">1</span>
            </div>
            <h3 className="font-bold mb-2">Site Visit</h3>
            <p className="text-sm text-gray-300">Measurement & Planning</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-3">
              <span className="font-bold">2</span>
            </div>
            <h3 className="font-bold mb-2">Design</h3>
            <p className="text-sm text-gray-300">Custom Railing Design</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-3">
              <span className="font-bold">3</span>
            </div>
            <h3 className="font-bold mb-2">Fabrication</h3>
            <p className="text-sm text-gray-300">Glass Cutting & Frame</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-3">
              <span className="font-bold">4</span>
            </div>
            <h3 className="font-bold mb-2">Installation</h3>
            <p className="text-sm text-gray-300">Professional Fitting</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-3">
              <span className="font-bold">5</span>
            </div>
            <h3 className="font-bold mb-2">Inspection</h3>
            <p className="text-sm text-gray-300">Quality Check</p>
          </div>
        </div>
      </div>

      {/* Gallery Section */}
      <div className="mt-20">
        <div className="flex flex-col items-center mb-10">
          <h2 className="text-2xl md:text-4xl font-black uppercase mb-4 text-center">
            Balcony Railing Gallery
          </h2>
          <div className="h-1 w-20 bg-blue-600 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {balconyImages.map((img, index) => (
            <div key={index} className="group relative aspect-square overflow-hidden rounded-[2rem] border border-white/10 shadow-xl">
              <img
                src={img}
                alt={`Balcony Railing Project ${index + 1}`}
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
          Secure Your Balcony with Premium Glass Railings
        </h3>
        <p className="text-gray-300 mb-6">
          Contact us for a free site visit and quotation for your balcony glass railing installation.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            onClick={() => window.location.href = "tel:+919141621820"}
            className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-full font-bold transition-colors"
          >
            Get Free Consultation
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

export default BalconyRailing;