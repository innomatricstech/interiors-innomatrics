// src/pages/services/GlassPartitionCompany.jsx
import React from 'react';
import { Building, Users, Award, Clock, Shield, CheckCircle } from 'lucide-react';
import ServiceLayout from './ServicesLayout';
import { images, imageCategories } from '../utils/images';

const GlassPartitionCompany = () => {

  const process = [
    "Design Consultation",
    "Site Measurement",
    "Fabrication",
    "Professional Installation",
    "After Sales Support"
  ];

  const features = [
    {
      title: "Custom Design Solutions",
      description: "Tailor-made glass partition designs to suit office layouts and branding."
    },
    {
      title: "End-to-End Project Handling",
      description: "We manage everything from planning to execution without hassles."
    },
    {
      title: "Premium Quality Materials",
      description: "High-grade aluminium and toughened safety glass."
    },
    {
      title: "Timely Project Delivery",
      description: "Well-planned execution ensures projects are completed on time."
    },
    {
      title: "Experienced Team",
      description: "Skilled professionals with years of industry experience."
    },
    {
      title: "Warranty & Support",
      description: "Reliable warranty and prompt after-sales service."
    }
  ];

  return (
    <ServiceLayout
      title="Glass Partition Company"
      category="COMMERCIAL"
      bannerImage={images.gallery7}
      description="A trusted glass partition company delivering complete commercial partition solutions from concept to completion."
      features={features}
      stats={{ projects: 210, years: 9, rating: 4.8 }}
    >

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-14">

        {/* Left Section */}
        <div>
          <h2 className="text-2xl md:text-3xl font-black uppercase mb-6">
            Why Choose Our Glass Partition Company?
          </h2>

          <div className="space-y-6">
            <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
              <div className="flex items-center gap-3 mb-3">
                <Building className="text-blue-500" size={24} />
                <h3 className="text-xl font-bold">Commercial Expertise</h3>
              </div>
              <p className="text-gray-300">
                Specialized in office and commercial glass partition projects of all sizes.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
              <div className="flex items-center gap-3 mb-3">
                <Shield className="text-emerald-500" size={24} />
                <h3 className="text-xl font-bold">Quality & Safety</h3>
              </div>
              <p className="text-gray-300">
                We use certified materials and follow strict safety and installation standards.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
              <div className="flex items-center gap-3 mb-3">
                <Award className="text-cyan-500" size={24} />
                <h3 className="text-xl font-bold">Trusted Service</h3>
              </div>
              <p className="text-gray-300">
                Proven track record with hundreds of successfully completed projects.
              </p>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div>
          <h2 className="text-2xl md:text-3xl font-black uppercase mb-6">
            Our Work Process
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {process.map((step, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-blue-900/30 to-indigo-900/30 border border-blue-500/30 p-5 rounded-2xl"
              >
                <div className="flex items-center gap-3 mb-2">
                  <CheckCircle className="text-blue-400" size={20} />
                  <span className="font-bold">Step {idx + 1}</span>
                </div>
                <p className="text-gray-300">{step}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 bg-white/5 border border-white/10 p-6 rounded-2xl">
            <div className="flex items-center gap-3 mb-3">
              <Clock className="text-blue-400" size={22} />
              <h3 className="text-xl font-bold">Timely Execution</h3>
            </div>
            <p className="text-gray-300">
              Well-defined timelines and dedicated project management ensure on-time delivery.
            </p>
          </div>
        </div>
      </div>

      {/* Gallery Section */}
      <div className="mt-14">
        <h2 className="text-2xl md:text-3xl font-black uppercase mb-8 text-center">
          Our Glass Partition Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {imageCategories.oldGallery.slice(6, 12).map((img, index) => (
            <div key={index} className="aspect-[4/3] overflow-hidden rounded-2xl">
              <img
                src={img}
                alt={`Glass Partition Project ${index + 1}`}
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
          ))}
        </div>
      </div>

    </ServiceLayout>
  );
};

export default GlassPartitionCompany;
