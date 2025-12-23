import React, { useState } from "react";
import { ChevronRight, Zap, X } from "lucide-react";

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    {
      title: "Commercial Projects",
      description:
        "Expert guidance for commercial glass projects from conception through installation.",
      fullDescription: "We provide comprehensive glass solutions for commercial buildings including office complexes, shopping malls, hotels, and corporate headquarters. Our team handles everything from design consultation to professional installation with precision and care.",
      image:
        "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1400&auto=format&fit=crop&q=80",
      features: [
        "Custom commercial glass designs",
        "Large-scale installation expertise",
        "Building code compliance",
        "Project management",
        "Post-installation support"
      ]
    },
    {
      title: "Designer Glass",
      description:
        "Enticing range of Designer Glass Panels used in homes and offices for decorative purposes.",
      fullDescription: "Transform any space with our exquisite designer glass collection. From textured patterns to custom prints, we offer endless possibilities to add elegance and personality to your interiors.",
      image:
        "https://images.unsplash.com/photo-1604014238687-e6cbb6a5e50f?w=1400&auto=format&fit=crop&q=80",
      features: [
        "Custom patterns and designs",
        "Frosted and textured glass",
        "Digital printing options",
        "Various thickness choices",
        "Easy maintenance"
      ]
    },
    {
      title: "Office Partition",
      description:
        "The glass in your workspace is more than function, it's a feature that performs within your budget.",
      fullDescription: "Create modern, open-concept workspaces with our premium office glass partitions. Enhance natural light flow while maintaining privacy and reducing noise.",
      image:
        "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1400&auto=format&fit=crop&q=80",
      features: [
        "Frameless glass partitions",
        "Acoustic glass options",
        "Smart glass technology",
        "Easy reconfiguration",
        "Soundproofing solutions"
      ]
    },
    {
      title: "Innovative Glass",
      description:
        "Unique and innovative glass design for each project with customized solutions.",
      fullDescription: "Push the boundaries of design with our innovative glass solutions. We specialize in creating unique glass installations that become the centerpiece of any space.",
      image:
        "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=1400&auto=format&fit=crop&q=80",
      features: [
        "Custom curved glass",
        "LED integrated glass",
        "Interactive glass surfaces",
        "Sustainable glass options",
        "High-tech finishes"
      ]
    },
    {
      title: "Lacquered Glass",
      description:
        "High quality lacquered glass with durable and resistant coating for decorative applications.",
      fullDescription: "Our lacquered glass combines durability with aesthetic appeal. Perfect for kitchen backsplashes, bathroom walls, and feature walls in commercial spaces.",
      image:
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1400&auto=format&fit=crop&q=80",
      features: [
        "Scratch-resistant coating",
        "Moisture-proof finish",
        "UV resistant colors",
        "Easy to clean surface",
        "Wide color palette"
      ]
    },
    {
      title: "Shower Partition",
      description:
        "Best shower partitions for your bathroom that help retain value and reduce corrosion.",
      fullDescription: "Elevate your bathroom with our premium shower partitions. We offer frameless designs that create a spacious feel while providing excellent water containment.",
      image:
        "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=1400&auto=format&fit=crop&q=80",
      features: [
        "Frameless designs",
        "Tempered safety glass",
        "Custom measurements",
        "Various hardware finishes",
        "Easy maintenance"
      ]
    },
    {
      title: "Glass Glazing for Exterior",
      description:
        "Spider glazing creates designs with vast expanse of glass and frameless entrances.",
      fullDescription: "Create stunning architectural features with our exterior glass glazing solutions. Perfect for storefronts, entrances, and curtain walls.",
      image:
        "https://images.unsplash.com/photo-1487956382158-bb926046304a?w=1400&auto=format&fit=crop&q=80",
      features: [
        "Structural glass facades",
        "Spider fittings systems",
        "Weather-resistant seals",
        "Energy-efficient options",
        "Custom structural support"
      ]
    },
    {
      title: "Glass Railing",
      description:
        "Wide range of patch fitting services using advanced technology for uniform quality.",
      fullDescription: "Combine safety with elegance using our glass railing systems. Ideal for balconies, staircases, and deck areas in both residential and commercial settings.",
      image:
        "https://images.unsplash.com/photo-1618220179428-22790b461013?w=1400&auto=format&fit=crop&q=80",
      features: [
        "Frameless railings",
        "Stainless steel fittings",
        "Tempered safety glass",
        "Custom heights and lengths",
        "Easy installation"
      ]
    },
    {
      title: "Designer Mirror",
      description:
        "Beautifully designed lacquered glass with beautiful designs for color and glamour.",
      fullDescription: "Our designer mirrors combine functionality with artistic flair. Perfect for adding depth, light, and style to any room.",
      image:
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1400&auto=format&fit=crop&q=80",
      features: [
        "Custom shapes and sizes",
        "Bevelled edge options",
        "LED lighting integration",
        "Anti-fog coatings",
        "Various frame styles"
      ]
    },
    {
      title: "LED Mirror",
      description:
        "Expert guidance for commercial mirror projects with LED lighting solutions.",
      fullDescription: "Illuminate your space with our premium LED mirrors. Perfect for bathrooms, dressing rooms, and commercial spaces requiring optimal lighting.",
      image:
        "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=1400&auto=format&fit=crop&q=80",
      features: [
        "Energy-efficient LED strips",
        "Touch sensor controls",
        "Dimmable lighting",
        "Anti-fog technology",
        "Bluetooth speaker options"
      ]
    },
    {
      title: "Custom Measurements",
      description:
        "Precision measurements for perfect fit ensuring every installation matches specifications.",
      fullDescription: "Every space is unique. Our custom measurement service ensures your glass fits perfectly, no matter how unconventional the dimensions.",
      image:
        "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=1400&auto=format&fit=crop&q=80",
      features: [
        "On-site measurements",
        "3D modeling and planning",
        "Precision cutting",
        "Quality assurance",
        "Perfect fit guarantee"
      ]
    },
    {
      title: "Residential Projects",
      description:
        "Complete glass solutions for residential spaces including windows, doors, and partitions.",
      fullDescription: "Transform your home with our residential glass solutions. From windows and doors to room dividers and decorative elements, we enhance both function and beauty.",
      image:
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1400&auto=format&fit=crop&q=80",
      features: [
        "Home window replacement",
        "Glass room dividers",
        "Skylight installation",
        "Energy-efficient solutions",
        "Custom decorative glass"
      ]
    },
  ];

  return (
    <>
      <section className="relative py-20 overflow-hidden">
        {/* Simple Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-50 -z-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-100/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-100/30 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative">
          {/* Container */}
          <div className="bg-white rounded-3xl border border-gray-200 shadow-xl p-8 md:p-12">
            
            {/* Header */}
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Premium Glass Services
              </h2>
              
              <div className="max-w-3xl mx-auto">
                <p className="text-lg text-gray-700 leading-relaxed">
                  We offer a complete range of premium glass solutions for residential and commercial projects, 
                  ensuring exceptional quality, durability, and aesthetic appeal in every installation.
                </p>
              </div>
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-20">
              {services.map((service, index) => (
                <div 
                  key={index} 
                  className="group relative bg-white rounded-2xl border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden"
                >
                  {/* Large Service Image */}
                  <div className="relative h-56 overflow-hidden">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  
                  {/* Service Content */}
                  <div className="p-5">
                    <h3 className="text-lg font-bold text-gray-900 mb-3 text-center transition-colors duration-300 group-hover:text-blue-600">
                      {service.title}
                    </h3>
                    
                    <p className="text-sm text-gray-600 text-center leading-relaxed mb-4">
                      {service.description}
                    </p>
                    
                    {/* Learn More Button */}
                    <button 
                      onClick={() => setSelectedService(service)}
                      className="group w-full flex items-center justify-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-lg font-medium hover:bg-blue-100 transition-all duration-300 border border-blue-200"
                    >
                      <span className="text-sm">Learn More</span>
                      <ChevronRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Section */}
            <div className="relative rounded-3xl overflow-hidden">
              {/* CTA Background */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-900 via-sky-900 to-cyan-900">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519681393784-d120267933ba?w=1920&auto=format&fit=crop')] bg-cover bg-center opacity-10"></div>
              </div>
              
              <div className="relative p-12 md:p-16 text-center">
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Need Custom Glass Solutions?
                </h3>
                
                <p className="text-lg text-gray-200 mb-8 max-w-2xl mx-auto">
                  Every project is unique. We specialize in premium customized glass 
                  solutions tailored to your exact requirements with precision and artistry.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="group relative overflow-hidden bg-white text-blue-900 px-8 py-4 rounded-xl font-bold text-base hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                    <span className="flex items-center justify-center gap-2">
                      <Zap className="h-4 w-4" />
                      Get Your Premium Quote
                      <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </button>
                  
                  <button className="group bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-base hover:bg-white hover:text-blue-900 transition-all duration-300 transform hover:-translate-y-1">
                    <span className="flex items-center justify-center">
                      Book Free Consultation
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modal for Service Details */}
      {selectedService && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in"
          onClick={() => setSelectedService(null)}
        >
          <div 
            className="relative w-full max-w-6xl max-h-[95vh] overflow-y-auto bg-white rounded-3xl shadow-2xl animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-4 right-4 z-10 p-3 bg-white/90 hover:bg-white rounded-full shadow-xl transition-all hover:scale-110"
            >
              <X className="h-6 w-6 text-gray-700" />
            </button>

            {/* Modal Content */}
            <div className="flex flex-col lg:flex-row min-h-[80vh]">
              {/* Image Section - Bigger */}
              <div className="lg:w-3/5">
                <img
                  src={selectedService.image}
                  alt={selectedService.title}
                  className="w-full h-96 lg:h-full min-h-[500px] object-cover rounded-t-3xl lg:rounded-l-3xl lg:rounded-tr-none"
                />
              </div>

              {/* Content Section */}
              <div className="lg:w-2/5 p-8 lg:p-12">
                <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                  {selectedService.title}
                </h3>

                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  {selectedService.fullDescription}
                </p>

                {/* Features */}
                <div className="mb-10">
                  <h4 className="text-xl font-semibold text-gray-900 mb-4">
                    Key Features
                  </h4>
                  <ul className="space-y-3">
                    {selectedService.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="h-2 w-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="flex-1 bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg">
                    Get Quote for This Service
                  </button>
                  <button
                    onClick={() => setSelectedService(null)}
                    className="flex-1 bg-gray-100 text-gray-700 px-6 py-3 rounded-xl font-semibold hover:bg-gray-200 transition-all duration-300"
                  >
                    Close Details
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Animation Styles */}
      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes scale-in {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }

        .animate-scale-in {
          animation: scale-in 0.3s ease-out;
        }
      `}</style>
    </>
  );
};

export default Services;