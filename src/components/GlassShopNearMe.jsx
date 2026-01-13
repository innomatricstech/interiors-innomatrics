// src/pages/services/GlassShopNearMe.jsx
import React from 'react';
import { Home, Truck, Clock, Shield, Award, Phone, CheckCircle, MapPin, Users, Building } from 'lucide-react';
import ServiceLayout from './ServicesLayout';
import { images } from '../utils/images';

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

  // Use actual glass shop images from your images.js
  const glassShopImages = [
    images.glassShopNearMe[0], // Glassshopnearme1
    images.glassShopNearMe[1], // Glassshopnearme2
    images.glassShopNearMe[2], // Glassshopnearme3
    images.glassShopNearMe[3], // Glassshopnearme4
    images.glassShopNearMe[4], // Glassshopnearme5
    images.gallery[0], // modern-bathroom (as fallback)
  ];

  const serviceAreas = [
   'whole india'
  ];

  return (
    <ServiceLayout
      title="Glass Shop Near Me"
      category="GLASS SHOP"
      bannerImage={images.glassShopNearMe[0]}
      description="Looking for a reliable glass shop near you? We provide complete glass solutions including cutting, toughening, lamination, mirrors, and installation services across whole india."
      features={[
         
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
            Trusted Local Glass Shop in india
          </h2>

          <p className="text-gray-300 mb-6">
            We are a well-established glass shop offering high-quality glass products and professional services
            for homes, offices, and commercial spaces. With over 15 years of experience, we serve customers
            across india with reliable and timely glass solutions.
          </p>

          <div className="grid grid-cols-2 gap-4">
            {services.map((service, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2 bg-white/5 border border-white/10 p-4 rounded-xl hover:bg-white/10 transition-colors"
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
                className="bg-white/5 border border-white/10 p-6 rounded-2xl text-center hover:bg-white/10 transition-colors"
              >
                <div className="mb-3 flex justify-center">{benefit.icon}</div>
                <h3 className="font-bold mb-1">{benefit.title}</h3>
                <p className="text-sm text-gray-400">{benefit.desc}</p>
              </div>
            ))}
          </div>

          {/* Service Areas */}
          <div className="mt-8 bg-white/5 border border-white/10 rounded-2xl p-6">
            <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
              <MapPin className="text-red-500" size={20} />
              Service Areas in india
            </h3>
            <div className="grid grid-cols-2 gap-2">
              {serviceAreas.map((area, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <CheckCircle className="text-green-500" size={14} />
                  <span className="text-sm">{area}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="mb-14">
        <h2 className="text-2xl md:text-3xl font-black uppercase mb-8 text-center">
          Why Customers Trust Us
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="bg-white/5 border border-white/10 p-6 rounded-2xl text-center hover:bg-white/10 transition-colors">
            <Users className="text-blue-500 mx-auto mb-3" size={30} />
            <div className="text-3xl font-bold mb-1">5000+</div>
            <div className="text-sm text-gray-400">Happy Customers</div>
          </div>
          <div className="bg-white/5 border border-white/10 p-6 rounded-2xl text-center hover:bg-white/10 transition-colors">
            <Building className="text-emerald-500 mx-auto mb-3" size={30} />
            <div className="text-3xl font-bold mb-1">15+</div>
            <div className="text-sm text-gray-400">Years Experience</div>
          </div>
          <div className="bg-white/5 border border-white/10 p-6 rounded-2xl text-center hover:bg-white/10 transition-colors">
            <Award className="text-amber-500 mx-auto mb-3" size={30} />
            <div className="text-3xl font-bold mb-1">500+</div>
            <div className="text-sm text-gray-400">Projects Completed</div>
          </div>
          <div className="bg-white/5 border border-white/10 p-6 rounded-2xl text-center hover:bg-white/10 transition-colors">
            <Clock className="text-purple-500 mx-auto mb-3" size={30} />
            <div className="text-3xl font-bold mb-1">24/7</div>
            <div className="text-sm text-gray-400">Emergency Service</div>
          </div>
        </div>
      </div>

      {/* Call CTA */}
      <div className="mt-8 mb-14 bg-gradient-to-r from-blue-900/40 to-cyan-900/40 border border-blue-500/30 rounded-3xl p-8 text-center">
        <h3 className="text-2xl font-black mb-3">
          Need Glass Work Near You?
        </h3>
        <p className="text-gray-300 mb-6">
          Call us now for quick assistance and free consultation. We serve all areas in and around india.
        </p>
        <button 
          onClick={() => window.location.href = "tel:+919141621820"}
          className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-full font-bold transition text-lg"
        >
          <Phone size={20} />
          Call Now: +91 91416 21820
        </button>
        <p className="text-gray-400 text-sm mt-4">
          Available 8:00 AM - 9:00 PM, Monday - Sunday
        </p>
      </div>

      {/* Gallery Section */}
      <div className="mt-20">
        <div className="flex flex-col items-center mb-10">
          <h2 className="text-2xl md:text-4xl font-black uppercase mb-4 text-center">
            Our Glass Shop Gallery
          </h2>
          <div className="h-1 w-20 bg-blue-600 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {glassShopImages.map((img, index) => (
            <div key={index} className="group relative aspect-square overflow-hidden rounded-[2rem] border border-white/10 shadow-xl">
              <img
                src={img}
                alt={`Glass Shop Project ${index + 1}`}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                <span className="text-xs font-black uppercase tracking-widest text-blue-400">Glass Shop Work</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Services Offered Section */}
      <div className="mt-14 bg-white/5 border border-white/10 rounded-3xl p-8">
        <h2 className="text-2xl md:text-3xl font-black uppercase mb-6 text-center">
          Comprehensive Glass Services
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: "Glass Cutting",
              description: "Precision cutting to exact dimensions",
              color: "text-blue-400"
            },
            {
              title: "Toughened Glass",
              description: "Safety glass manufacturing",
              color: "text-emerald-400"
            },
            {
              title: "Mirror Installation",
              description: "Bathroom & wardrobe mirrors",
              color: "text-amber-400"
            },
            {
              title: "Glass Repair",
              description: "Cracked & damaged glass replacement",
              color: "text-red-400"
            },
            {
              title: "Window Glass",
              description: "Residential & commercial windows",
              color: "text-purple-400"
            },
            {
              title: "Custom Designs",
              description: "Special glass requirements",
              color: "text-cyan-400"
            }
          ].map((service, index) => (
            <div key={index} className="bg-white/5 p-6 rounded-2xl hover:bg-white/10 transition-colors">
              <h3 className={`text-xl font-bold mb-2 ${service.color}`}>{service.title}</h3>
              <p className="text-gray-300">{service.description}</p>
            </div>
          ))}
        </div>
      </div>

    </ServiceLayout>
  );
};

export default GlassShopNearMe;