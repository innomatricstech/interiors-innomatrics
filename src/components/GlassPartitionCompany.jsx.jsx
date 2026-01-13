// src/pages/services/GlassPartitionCompany.jsx
import React from 'react';
import { Building, Users, Award, Clock, Shield, CheckCircle } from 'lucide-react';
import ServiceLayout from './ServicesLayout';
import { images } from '../utils/images';

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

  // Use actual glass partition company images from your images.js
  const companyImages = [
    images.glassPartitionCompany[0], // Glasspartitioncompany1
    images.glassPartitionCompany[1], // Glasspartitioncompany2
    images.glassPartitionCompany[2], // Glasspartitioncompany3
    images.glassPartitionCompany[3], // Glasspartitioncompany4
    images.glassPartitionCompany[4], // Glasspartitioncompany5
    images.gallery[6], // beautiful-hotel-insights (as fallback)
  ];

  const stats = [
    { value: "210+", label: "Projects Completed", icon: <Building className="text-blue-500" size={20} /> },
    { value: "9+", label: "Years Experience", icon: <Award className="text-emerald-500" size={20} /> },
    { value: "4.8/5", label: "Client Rating", icon: <Shield className="text-amber-500" size={20} /> },
    { value: "98%", label: "Satisfaction Rate", icon: <Users className="text-purple-500" size={20} /> }
  ];

  return (
    <ServiceLayout
      title="Glass Partition Company"
      category="COMMERCIAL"
      bannerImage={images.glassPartitionCompany[0]}
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
            <div className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-colors">
              <div className="flex items-center gap-3 mb-3">
                <Building className="text-blue-500" size={24} />
                <h3 className="text-xl font-bold">Commercial Expertise</h3>
              </div>
              <p className="text-gray-300">
                Specialized in office and commercial glass partition projects of all sizes.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-colors">
              <div className="flex items-center gap-3 mb-3">
                <Shield className="text-emerald-500" size={24} />
                <h3 className="text-xl font-bold">Quality & Safety</h3>
              </div>
              <p className="text-gray-300">
                We use certified materials and follow strict safety and installation standards.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-colors">
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
                className="bg-gradient-to-br from-blue-900/30 to-indigo-900/30 border border-blue-500/30 p-5 rounded-2xl hover:bg-white/10 transition-colors"
              >
                <div className="flex items-center gap-3 mb-2">
                  <CheckCircle className="text-blue-400" size={20} />
                  <span className="font-bold">Step {idx + 1}</span>
                </div>
                <p className="text-gray-300">{step}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 bg-white/5 border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-colors">
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

      {/* Stats Section */}
      <div className="mb-14">
        <h2 className="text-2xl md:text-3xl font-black uppercase mb-8 text-center">
          Our Company Stats
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, idx) => (
            <div key={idx} className="bg-white/5 border border-white/10 p-6 rounded-2xl text-center hover:bg-white/10 transition-colors">
              <div className="flex justify-center mb-3">{stat.icon}</div>
              <div className="text-3xl font-bold mb-1">{stat.value}</div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Services Section */}
      <div className="mb-14">
        <h2 className="text-2xl md:text-3xl font-black uppercase mb-8 text-center">
          Our Services
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: "Office Partitions",
              description: "Commercial office glass partitions",
              icon: <Building className="text-blue-500" size={24} />
            },
            {
              title: "Conference Rooms",
              description: "Meeting and board room partitions",
              icon: <Users className="text-emerald-500" size={24} />
            },
            {
              title: "Reception Areas",
              description: "Lobby and reception glass walls",
              icon: <Award className="text-amber-500" size={24} />
            }
          ].map((service, index) => (
            <div 
              key={index} 
              className="bg-white/5 border border-white/10 p-8 rounded-2xl text-center hover:bg-white/10 transition-colors"
            >
              <div className="flex justify-center mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-gray-300">{service.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Gallery Section */}
      <div className="mt-20">
        <div className="flex flex-col items-center mb-10">
          <h2 className="text-2xl md:text-4xl font-black uppercase mb-4 text-center">
            Our Glass Partition Projects
          </h2>
          <div className="h-1 w-20 bg-blue-600 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {companyImages.map((img, index) => (
            <div key={index} className="group relative aspect-square overflow-hidden rounded-[2rem] border border-white/10 shadow-xl">
              <img
                src={img}
                alt={`Glass Partition Project ${index + 1}`}
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
      <div className="mt-12 bg-gradient-to-r from-blue-900/30 to-indigo-900/30 border border-blue-500/30 rounded-3xl p-8 text-center">
        <h3 className="text-2xl font-black mb-3">
          Ready to Transform Your Office Space?
        </h3>
        <p className="text-gray-300 mb-6">
          Contact us for a free consultation and customized glass partition solution for your company.
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
            View Portfolio
          </button>
        </div>
      </div>

    </ServiceLayout>
  );
};

export default GlassPartitionCompany;