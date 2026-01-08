// src/pages/services/BalconyRailing.jsx
import React from 'react';
import { Shield, Eye, Thermometer, Wind, Wrench, Award } from 'lucide-react';
import ServiceLayout from './ServicesLayout';
import { images } from '../utils/images';
import { servicesData } from '../utils/servicesdata';

const BalconyRailing = () => {
  const service = servicesData.find(s => s.id === 1);
  
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

  return (
    <ServiceLayout
      title="SS Railing Glass for Balcony"
      category="ARCHITECTURAL"
      bannerImage={images.balcony1}
      description="Premium stainless steel railing glass systems for balconies. Our SS railings provide maximum safety with crystal clear views using SS 316 grade fittings and laminated safety glass."
      features={features}
      stats={{ projects: 275, years: 10, rating: 4.7 }}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 mb-12">
        {/* Left Content */}
        <div>
          <h2 className="text-2xl md:text-3xl font-black uppercase mb-6">Why Choose Our Balcony Railings?</h2>
          
          <div className="space-y-6">
            <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
              <div className="flex items-center gap-3 mb-3">
                <Shield className="text-blue-500" size={24} />
                <h3 className="text-xl font-bold">Safety First</h3>
              </div>
              <p className="text-gray-300">
                Our balcony railings are designed with safety as the top priority. We use 10-12mm toughened laminated glass that can withstand significant impact while maintaining structural integrity.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
              <div className="flex items-center gap-3 mb-3">
                <Eye className="text-cyan-500" size={24} />
                <h3 className="text-xl font-bold">Unobstructed Views</h3>
              </div>
              <p className="text-gray-300">
                Enjoy panoramic views without compromising on safety. The high-transparency glass provides crystal clear visibility while creating a modern, minimalist look.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
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
              <div className="flex justify-between items-center border-b border-white/10 pb-3">
                <span className="text-gray-300">Warranty</span>
                <span className="font-bold">5 Years</span>
              </div>
              <div className="flex justify-between items-center pt-3">
                <span className="text-gray-300">Maintenance</span>
                <span className="font-bold">Low (Easy Cleaning)</span>
              </div>
            </div>

            {/* Service Includes */}
            <div className="mt-8 pt-6 border-t border-white/10">
              <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                <Wrench size={20} />
                Service Includes:
              </h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span>Site Measurement & Assessment</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span>Design Consultation</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span>Material Selection</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span>Professional Installation</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span>Post-Installation Support</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Gallery Section */}
      <div className="mt-12">
        <h2 className="text-2xl md:text-3xl font-black uppercase mb-8 text-center">
          Our Balcony Railing Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {service?.images?.slice(0, 6).map((img, index) => (
            <div key={index} className="aspect-[4/3] overflow-hidden rounded-2xl">
              <img 
                src={img} 
                alt={`Balcony Railing Project ${index + 1}`}
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
          ))}
        </div>
      </div>
    </ServiceLayout>
  );
};

export default BalconyRailing;