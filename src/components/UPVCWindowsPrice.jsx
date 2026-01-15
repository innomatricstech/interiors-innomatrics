// src/pages/services/UPVCWindowsPrice.jsx
import React from 'react';
import { Shield, Thermometer, Volume2, Zap, Award, CheckCircle, Ruler, Palette, Settings, Clock, Home, Building } from 'lucide-react';
import ServiceLayout from './ServicesLayout';
import { images } from '../utils/images';

const UPVCWindowsPrice = () => {

  const features = [
    { 
      title: "Transparent Pricing", 
      description: "Clear quotation with no hidden charges",
      icon: <Shield className="text-blue-500" size={20} />
    },
    { 
      title: "Quality Guarantee", 
      description: "ISI certified profiles with long-term durability",
      icon: <Award className="text-amber-500" size={20} />
    },
    { 
      title: "Thermal Insulation", 
      description: "Helps reduce heat and improve energy efficiency",
      icon: <Thermometer className="text-emerald-500" size={20} />
    },
    { 
      title: "Sound Proofing", 
      description: "Reduces outside noise for peaceful interiors",
      icon: <Volume2 className="text-purple-500" size={20} />
    },
    { 
      title: "UV Protection", 
      description: "Protects interiors from harmful UV rays",
      icon: <Zap className="text-yellow-500" size={20} />
    },
    { 
      title: "Custom Sizes", 
      description: "Made to measure for perfect fitting",
      icon: <Ruler className="text-cyan-500" size={20} />
    }
  ];

  const windowTypes = [
    { 
      type: "Casement Windows",
      desc: "Hinged windows that open outward",
      image: images.upvcWindows[0] || images.gallery[2],
      icon: "↗️"
    },
    { 
      type: "Sliding Windows",
      desc: "Horizontal sliding for easy operation",
      image: images.upvcWindows[1] || images.balconyGlass[0],
      icon: "←→"
    },
    { 
      type: "Tilt & Turn Windows",
      desc: "Versatile opening for ventilation & cleaning",
      image: images.upvcWindows[2] || images.balconyGlass[1],
      icon: "↕️"
    },
    { 
      type: "Fixed Windows",
      desc: "Non-opening windows for maximum view",
      image: images.upvcWindows[3] || images.gallery[6],
      icon: "📐"
    },
    { 
      type: "Bay Windows",
      desc: "Projecting windows creating extra space",
      image: images.upvcWindows[4] || images.gallery[0],
      icon: "🔶"
    },
    { 
      type: "French Windows",
      desc: "Floor-to-ceiling glass panels",
      image: images.upvcDoors[0] || images.gallery[7],
      icon: "🪟"
    }
  ];

  const priceFactors = [
    { 
      factor: "Window type & design",
      icon: <Settings size={18} className="text-blue-400" />
    },
    { 
      factor: "Glass specification",
      icon: <Ruler size={18} className="text-emerald-400" />
    },
    { 
      factor: "Profile thickness & brand",
      icon: <Shield size={18} className="text-amber-400" />
    },
    { 
      factor: "Hardware & locking system",
      icon: <Shield size={18} className="text-amber-400" />
    },
    { 
      factor: "Window size & quantity",
      icon: <Home size={18} className="text-purple-400" />
    },
    { 
      factor: "Installation complexity",
      icon: <Building size={18} className="text-red-400" />
    },
    { 
      factor: "Additional features",
      icon: <Palette size={18} className="text-cyan-400" />
    }
  ];

  // Gallery images for UPVC windows
  const windowGallery = [
    images.upvcWindows[0] || images.gallery[2],
    images.upvcWindows[1] || images.balconyGlass[0],
    images.upvcWindows[2] || images.balconyGlass[1],
    images.upvcWindows[3] || images.balconyGlass[2],
    images.upvcWindows[4] || images.balconyGlass[3],
    images.upvcWindows[5] || images.upvcDoors[4],
    images.upvcDoors[0] || images.gallery[6],
    images.upvcDoors[1] || images.gallery[0]
  ];

  const priceTiers = [
    {
      name: "Basic Series",
      price: "₹850/sq.ft",
      features: ["3-chamber profile", "Single glazing", "Standard hardware", "White color"],
      image: images.upvcWindows[0] || images.balconyGlass[2],
      color: "border-gray-500",
      bgColor: "from-gray-900/30 to-gray-800/30"
    },
    {
      name: "Standard Series",
      price: "₹1,250/sq.ft",
      features: ["5-chamber profile", "Double glazing", "Multi-point locking", "Weather seal", "Energy efficient"],
      image: images.upvcWindows[1] || images.balconyGlass[0],
      color: "border-emerald-500",
      bgColor: "from-emerald-900/30 to-teal-900/30",
      popular: true
    },
    {
      name: "Premium Series",
      price: "₹1,800/sq.ft",
      features: ["6-chamber profile", "Triple glazing", "Premium hardware", "Soundproofing", "UV protection", "Smart features"],
      image: images.upvcWindows[2] || images.gallery[6],
      color: "border-blue-500",
      bgColor: "from-blue-900/30 to-cyan-900/30"
    }
  ];

  return (
    <ServiceLayout
      title="UPVC Windows Price"
      category="WINDOWS"
      bannerImage={images.upvcWindows[0] || images.gallery[2]}
      description="UPVC window cost depends on multiple factors such as design, size, glass type, and installation requirements. Contact us for a customized quotation based on your needs."
      features={features}
      stats={{ projects: 420, years: 15, rating: 4.8 }}
    >

      {/* Window Types Gallery */}
      <div className="mb-12">
        <h2 className="text-2xl md:text-3xl font-black uppercase mb-8 text-center">
          Types of UPVC Windows
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {windowTypes.map((window, idx) => (
            <div 
              key={idx} 
              className="group bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-emerald-500/50 transition-all duration-300"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={window.image} 
                  alt={window.type}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-5">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-2xl">{window.icon}</span>
                  <h3 className="text-lg font-bold">{window.type}</h3>
                </div>
                <p className="text-sm text-gray-400">{window.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Price Tiers */}
       

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 mb-14">
        {/* Left Section - Price Factors */}
        <div>
          <h2 className="text-2xl md:text-3xl font-black uppercase mb-6">
            Factors Affecting UPVC Window Cost
          </h2>

          <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
            <div className="space-y-4">
              {priceFactors.map((factor, idx) => (
                <div key={idx} className="flex items-center gap-3 p-3 bg-white/5 rounded-lg">
                  <div className="flex-shrink-0">
                    {factor.icon}
                  </div>
                  <span className="text-gray-300">{factor.factor}</span>
                </div>
              ))}
            </div>

            {/* Additional Info */}
            <div className="mt-6 pt-6 border-t border-white/10">
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-emerald-900/20 p-3 rounded-lg text-center">
                  <div className="text-lg font-bold text-emerald-400">15+</div>
                  <div className="text-xs text-gray-300">Years Experience</div>
                </div>
                <div className="bg-blue-900/20 p-3 rounded-lg text-center">
                  <div className="text-lg font-bold text-blue-400">420+</div>
                  <div className="text-xs text-gray-300">Projects Completed</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section - Benefits */}
        <div>
          <h2 className="text-2xl md:text-3xl font-black uppercase mb-6">
            Why Choose Our UPVC Windows?
          </h2>

          <div className="space-y-4">
            {features.map((feature, idx) => (
              <div key={idx} className="bg-white/5 border border-white/10 p-5 rounded-xl">
                <div className="flex items-center gap-3 mb-2">
                  {feature.icon}
                  <h3 className="font-bold text-lg">{feature.title}</h3>
                </div>
                <p className="text-gray-300 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>

          {/* Cost Savings */}
          <div className="mt-6 grid grid-cols-3 gap-2">
            <div className="bg-emerald-900/20 p-3 rounded-lg text-center">
              <div className="text-lg font-bold text-emerald-400">-30%</div>
              <div className="text-xs text-gray-300">Energy Bill</div>
            </div>
            <div className="bg-blue-900/20 p-3 rounded-lg text-center">
              <div className="text-lg font-bold text-blue-400">₹0</div>
              <div className="text-xs text-gray-300">Maintenance</div>
            </div>
            <div className="bg-purple-900/20 p-3 rounded-lg text-center">
              <div className="text-lg font-bold text-purple-400">25+</div>
              <div className="text-xs text-gray-300">Years Life</div>
            </div>
          </div>
        </div>
      </div>

      {/* Project Gallery */}
      <div className="mb-12">
        <h2 className="text-2xl md:text-3xl font-black uppercase mb-8 text-center">
          Our UPVC Window Projects
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {windowGallery.map((img, index) => (
            <div 
              key={index} 
              className="group aspect-square overflow-hidden rounded-xl cursor-pointer"
            >
              <img 
                src={img} 
                alt={`UPVC Window Project ${index + 1}`}
                className="w-full h-full object-cover   "
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0  transition-opacity duration-300 flex items-end p-4">
                <span className="text-white font-medium">Project #{index + 1}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Installation Timeline */}
      <div className="bg-gradient-to-r from-blue-900/20 to-cyan-900/20 border border-blue-500/30 rounded-2xl p-6 mb-12">
        <h2 className="text-2xl md:text-3xl font-black uppercase mb-8 text-center">
          Installation Timeline
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="text-center">
            <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-3">
              <span className="font-bold">1</span>
            </div>
            <h3 className="font-bold mb-1">Consultation</h3>
            <p className="text-sm text-gray-300">1-2 Days</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-3">
              <span className="font-bold">2</span>
            </div>
            <h3 className="font-bold mb-1">Measurement</h3>
            <p className="text-sm text-gray-300">1 Day</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-3">
              <span className="font-bold">3</span>
            </div>
            <h3 className="font-bold mb-1">Fabrication</h3>
            <p className="text-sm text-gray-300">3-5 Days</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-3">
              <span className="font-bold">4</span>
            </div>
            <h3 className="font-bold mb-1">Installation</h3>
            <p className="text-sm text-gray-300">1-2 Days</p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="relative overflow-hidden rounded-3xl">
        <img 
          src={images.upvcWindows[3] || images.gallery[0]} 
          alt="UPVC Window Installation"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative bg-gradient-to-r from-black/80 via-black/60 to-transparent p-8 md:p-12">
          <div className="max-w-2xl">
            <h3 className="text-2xl md:text-3xl font-black mb-4">
              Get Your Customized UPVC Window Quote Today!
            </h3>
            <p className="text-gray-300 mb-6">
              Contact us for a free site visit and accurate cost estimation based on your specific requirements.
              We provide transparent pricing with no hidden charges.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => window.location.href = "tel:+919141621820"}
                className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-full font-bold transition-colors text-center"
              >
                Request Free Quote
              </button>
              <button 
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="bg-white/10 hover:bg-white/20 px-8 py-3 rounded-full font-bold transition-colors text-center border border-white/20"
              >
                View More Projects
              </button>
            </div>
          </div>
        </div>
      </div>

    </ServiceLayout>
  );
};

export default UPVCWindowsPrice;