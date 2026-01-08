// src/pages/services/GlassInstallation.jsx
import React from 'react';
import { Wrench, Shield, Clock, Users, CheckCircle } from 'lucide-react';
import ServiceLayout from './ServicesLayout';
import { images, imageCategories } from '../utils/images';

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

  return (
    <ServiceLayout
      title="Glass Installation Services"
      category="INSTALLATION"
      bannerImage={images.gallery3}
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
            <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
              <div className="flex items-center gap-3 mb-3">
                <Users className="text-blue-500" size={24} />
                <h3 className="text-xl font-bold">Experienced Team</h3>
              </div>
              <p className="text-gray-300">
                Our technicians have hands-on experience with residential and commercial glass installations.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
              <div className="flex items-center gap-3 mb-3">
                <Shield className="text-emerald-500" size={24} />
                <h3 className="text-xl font-bold">Safety & Quality</h3>
              </div>
              <p className="text-gray-300">
                We follow industry safety protocols and use premium-grade installation materials.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
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
                className="bg-white/5 border border-white/10 p-4 rounded-xl text-center font-medium"
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

      {/* Gallery Section */}
      <div className="mt-14">
        <h2 className="text-2xl md:text-3xl font-black uppercase mb-8 text-center">
          Our Glass Installation Works
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {imageCategories.oldGallery.slice(3, 9).map((img, index) => (
            <div key={index} className="aspect-[4/3] overflow-hidden rounded-2xl">
              <img
                src={img}
                alt={`Glass Installation Work ${index + 1}`}
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
          ))}
        </div>
      </div>

    </ServiceLayout>
  );
};

export default GlassInstallation;
