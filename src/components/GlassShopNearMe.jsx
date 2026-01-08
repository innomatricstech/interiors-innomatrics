// src/pages/services/GlassShopNearMe.jsx
import React from 'react';
import { Home, Truck, Clock, Shield, Award, Phone, CheckCircle } from 'lucide-react';
import ServiceLayout from './ServicesLayout';
import { images, imageCategories } from '../utils/images';

const GlassShopNearMe = () => {

  const services = [
    "All Types of Glass",
    "Glass Cutting & Shaping",
    "Toughened Glass",
    "Laminated Glass",
    "Mirrors & Designer Glass",
    "Glass Installation & Repair"
  ];

  const benefits = [
    {
      icon: <Truck className="text-blue-500" size={26} />,
      title: "Free Local Delivery",
      desc: "Within nearby service areas"
    },
    {
      icon: <Clock className="text-emerald-500" size={26} />,
      title: "Same Day Service",
      desc: "Emergency glass solutions"
    },
    {
      icon: <Shield className="text-cyan-500" size={26} />,
      title: "Warranty Support",
      desc: "On workmanship & fittings"
    },
    {
      icon: <Award className="text-indigo-500" size={26} />,
      title: "Quality Assurance",
      desc: "ISI certified glass materials"
    }
  ];

  return (
    <ServiceLayout
      title="Glass Shop Near Me"
      category="GLASS SHOP"
      bannerImage={images.gallery1}
      description="Looking for a reliable glass shop near you? We provide complete glass solutions including cutting, toughening, lamination, mirrors, and installation services across Chennai."
      features={[
        { title: "Local Glass Shop", description: "Serving Chennai for 15+ years" },
        { title: "Quick Response", description: "Fast service near your location" },
        { title: "All Glass Solutions", description: "Residential & commercial" },
        { title: "Experienced Team", description: "Skilled glass professionals" },
        { title: "Free Consultation", description: "Expert guidance at no cost" },
        { title: "Emergency Service", description: "Same day support available" }
      ]}
      stats={{ projects: 500, years: 15, rating: 4.9 }}
    >

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-14">

        {/* Left Section */}
        <div>
          <h2 className="text-2xl md:text-3xl font-black uppercase mb-6">
            Trusted Local Glass Shop in Chennai
          </h2>

          <p className="text-gray-300 mb-6">
            We are a well-established glass shop offering high-quality glass products and professional services
            for homes, offices, and commercial spaces.
          </p>

          <div className="grid grid-cols-2 gap-4">
            {services.map((service, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2 bg-white/5 border border-white/10 p-4 rounded-xl"
              >
                <CheckCircle className="text-blue-500" size={18} />
                <span>{service}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Section */}
        <div>
          <h2 className="text-2xl md:text-3xl font-black uppercase mb-6">
            Why Choose Our Glass Shop?
          </h2>

          <div className="grid grid-cols-2 gap-6">
            {benefits.map((benefit, idx) => (
              <div
                key={idx}
                className="bg-white/5 border border-white/10 p-6 rounded-2xl text-center"
              >
                <div className="mb-3 flex justify-center">{benefit.icon}</div>
                <h3 className="font-bold mb-1">{benefit.title}</h3>
                <p className="text-sm text-gray-400">{benefit.desc}</p>
              </div>
            ))}
          </div>

          {/* Call CTA */}
          <div className="mt-8 bg-gradient-to-r from-blue-900/40 to-cyan-900/40 border border-blue-500/30 rounded-2xl p-6 text-center">
            <h3 className="text-xl font-black mb-3">
              Need Glass Work Near You?
            </h3>
            <p className="text-gray-300 mb-4">
              Call us now for quick assistance and free consultation.
            </p>
            <div className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-full font-bold transition">
              <Phone size={18} />
              Call Now
            </div>
          </div>
        </div>
      </div>

      {/* Gallery Section */}
      <div className="mt-14">
        <h2 className="text-2xl md:text-3xl font-black uppercase mb-8 text-center">
          Our Glass Shop Works
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {imageCategories.oldGallery.slice(0, 6).map((img, index) => (
            <div key={index} className="aspect-[4/3] overflow-hidden rounded-2xl">
              <img
                src={img}
                alt={`Glass Shop Work ${index + 1}`}
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
          ))}
        </div>
      </div>

    </ServiceLayout>
  );
};

export default GlassShopNearMe;
