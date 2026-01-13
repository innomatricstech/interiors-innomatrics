// src/pages/services/GlassInstallation.jsx
import React from 'react';
import { Wrench, Shield, Clock, Users, CheckCircle, Ruler, Home, Building } from 'lucide-react';
import ServiceLayout from './ServicesLayout';
import { images } from '../utils/images';

const GlassInstallation = () => {

  const services = [
    "Window Installation",
    "Door Installation",
    "Glass Partition Installation",
    "Shower Cubicle Installation",
    "Balcony & Stair Railing Installation",
    "Mirror Installation",
    "Glass Facade Installation",
    "Skylight Installation"
  ];

  const process = [
    "Site Inspection & Measurement",
    "Material Selection",
    "Safety Preparation",
    "Precision Installation",
    "Final Inspection & Cleanup"
  ];

  // Use actual glass installation images from your images.js
  const installationImages = [
    images.glassInstallation[0], // install1
    images.glassInstallation[1], // install2
    images.glassInstallation[2], // install3
    images.glassInstallation[3], // install4
    images.glassInstallation[4], // install5
    images.gallery[2], // glazing works (as fallback)
  ];

  const toolsEquipment = [
    { tool: "Laser Level", use: "Precision alignment" },
    { tool: "Glass Suction Cups", use: "Safe handling" },
    { tool: "High-Quality Silicone", use: "Weather sealing" },
    { tool: "Safety Gear", use: "Protective equipment" },
    { tool: "Power Tools", use: "Efficient installation" },
    { tool: "Measuring Instruments", use: "Accurate fitting" }
  ];

  return (
    <ServiceLayout
      title="Glass Installation Services"
      category="INSTALLATION"
      bannerImage={images.glassInstallation[0]}
      description="Professional glass installation services with experienced technicians, ensuring safety, precision, and long-lasting results."
      features={[
        { title: "Professional Team", description: "Skilled & certified installers" },
        { title: "Expert Installation", description: "High precision workmanship" },
        { title: "Safety First", description: "Strict safety standards followed" },
        { title: "Clean Finish", description: "Neat & professional output" },
        { title: "On-time Completion", description: "Projects delivered as promised" },
        { title: "After Service Support", description: "Reliable post-installation care" }
      ]}
      stats={{ projects: 680, years: 14, rating: 4.8 }}
    >

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-14">

        {/* Left Section */}
        <div>
          <h2 className="text-2xl md:text-3xl font-black uppercase mb-6">
            Why Choose Our Installation Services?
          </h2>

          <div className="space-y-6">
            <div className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-colors">
              <div className="flex items-center gap-3 mb-3">
                <Users className="text-blue-500" size={24} />
                <h3 className="text-xl font-bold">Experienced Team</h3>
              </div>
              <p className="text-gray-300">
                Our technicians have hands-on experience with residential and commercial glass installations.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-colors">
              <div className="flex items-center gap-3 mb-3">
                <Shield className="text-emerald-500" size={24} />
                <h3 className="text-xl font-bold">Safety & Quality</h3>
              </div>
              <p className="text-gray-300">
                We follow industry safety protocols and use premium-grade installation materials.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-colors">
              <div className="flex items-center gap-3 mb-3">
                <Clock className="text-cyan-500" size={24} />
                <h3 className="text-xl font-bold">Timely Delivery</h3>
              </div>
              <p className="text-gray-300">
                We respect your time and ensure on-schedule project completion without delays.
              </p>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div>
          <h2 className="text-2xl md:text-3xl font-black uppercase mb-6">
            Our Installation Services
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            {services.map((service, idx) => (
              <div
                key={idx}
                className="bg-white/5 border border-white/10 p-4 rounded-xl text-center font-medium hover:bg-white/10 transition-colors"
              >
                {service}
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-br from-blue-900/30 to-cyan-900/30 border border-blue-500/30 rounded-2xl p-6">
            <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
              <Wrench size={20} />
              Installation Process
            </h3>
            <ul className="space-y-3">
              {process.map((step, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <CheckCircle className="text-blue-500" size={18} />
                  <span>{step}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Tools & Equipment Section */}
      <div className="mb-14">
        <h2 className="text-2xl md:text-3xl font-black uppercase mb-8 text-center">
          Professional Tools & Equipment
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {toolsEquipment.map((item, idx) => (
            <div key={idx} className="bg-white/5 border border-white/10 p-4 rounded-xl text-center hover:bg-white/10 transition-colors">
              <Ruler className="text-blue-400 mx-auto mb-2" size={20} />
              <div className="font-bold text-sm mb-1">{item.tool}</div>
              <div className="text-xs text-gray-400">{item.use}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Applications Section */}
      <div className="mb-14">
        <h2 className="text-2xl md:text-3xl font-black uppercase mb-8 text-center">
          Installation Applications
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gradient-to-br from-blue-900/30 to-cyan-900/30 p-6 rounded-2xl">
            <div className="flex items-center gap-3 mb-4">
              <Home className="text-blue-500" size={24} />
              <h3 className="text-xl font-bold">Residential</h3>
            </div>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-center gap-2">
                <CheckCircle className="text-blue-400" size={16} />
                <span>Home windows & doors</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="text-blue-400" size={16} />
                <span>Bathroom shower enclosures</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="text-blue-400" size={16} />
                <span>Balcony glass railings</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="text-blue-400" size={16} />
                <span>Mirror installations</span>
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-emerald-900/30 to-teal-900/30 p-6 rounded-2xl">
            <div className="flex items-center gap-3 mb-4">
              <Building className="text-emerald-500" size={24} />
              <h3 className="text-xl font-bold">Commercial</h3>
            </div>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-center gap-2">
                <CheckCircle className="text-emerald-400" size={16} />
                <span>Office glass partitions</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="text-emerald-400" size={16} />
                <span>Storefront glass</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="text-emerald-400" size={16} />
                <span>Commercial facades</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="text-emerald-400" size={16} />
                <span>Display cabinets</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Gallery Section */}
      <div className="mt-20">
        <div className="flex flex-col items-center mb-10">
          <h2 className="text-2xl md:text-4xl font-black uppercase mb-4 text-center">
            Glass Installation Gallery
          </h2>
          <div className="h-1 w-20 bg-blue-600 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {installationImages.map((img, index) => (
            <div key={index} className="group relative aspect-square overflow-hidden rounded-[2rem] border border-white/10 shadow-xl">
              <img
                src={img}
                alt={`Glass Installation Work ${index + 1}`}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                <span className="text-xs font-black uppercase tracking-widest text-blue-400">View Installation Details</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="mt-12 bg-gradient-to-r from-blue-900/30 to-cyan-900/30 border border-blue-500/30 rounded-3xl p-8 text-center">
        <h3 className="text-2xl font-black mb-3">
          Need Professional Glass Installation?
        </h3>
        <p className="text-gray-300 mb-6">
          Contact us for expert glass installation services with guaranteed quality and precision.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            onClick={() => window.location.href = "tel:+919141621820"}
            className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-full font-bold transition-colors"
          >
            Schedule Installation
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

export default GlassInstallation;