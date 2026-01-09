import React, { useState, useEffect, useMemo } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { 
  X, CheckCircle2, Phone, ArrowRight, Box, BoxSelect, 
  Video, Image, Home, Building, Bath, 
  Shield, Palette, Diamond, Zap, Briefcase, 
  DoorOpen, Square, Ruler, GlassWater, Sparkles, Layers, 
  DivideSquare, Play
} from "lucide-react";
import { images } from "../utils/images";

const Services = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const navigate = useNavigate();
  
  // 1. Services Array with Correct Paths (Matched with App.jsx)
  const services = useMemo(() => [
    { 
      id: 1, 
      title: "SS Railing Glass for Balcony", 
      path: "/services/balcony-railing",
      category: "RAILINGS", 
      icon: <Shield size={20} />,
      image: images.balcony3,
      color: "from-blue-600 to-cyan-500",
      media: [{ type: 'image', src: images.balcony3 }],
      features: ["SS 316 Grade Fittings", "Laminated Safety Glass"],
      stats: { projects: 275, years: 10, rating: 4.7 }
    },
    { 
      id: 2, 
      title: "Lacquered Glass", 
      path: "/services/lacquered-glass",
      category: "DECORATIVE", 
      icon: <Palette size={20} />,
      image: images.lacquredglass1,
      color: "from-indigo-600 to-purple-500",
      media: [{ type: 'image', src: images.lacquredglass1 }],
      features: ["Custom Colors", "Heat Resistant"],
      stats: { projects: 220, years: 9, rating: 4.7 }
    },
    { 
      id: 3, 
      title: "PVC & UPVC Doors", 
      path: "/services/pvc-upvc-doors",
      category: "DOORS", 
      icon: <DoorOpen size={20} />,
      image: images.gallery8,
      color: "from-emerald-600 to-teal-500",
      media: [{ type: 'image', src: images.gallery8 }],
      features: ["Thermal Insulation", "Sound Proof"],
      stats: { projects: 180, years: 8, rating: 4.8 }
    },
    { 
      id: 4, 
      title: "UPVC Windows Price", 
      path: "/services/upvc-windows-price",
      category: "WINDOWS", 
      icon: <Square size={20} />,
      image: images.upvcWindows,
      color: "from-green-600 to-emerald-500",
      media: [{ type: 'image', src: images.upvcWindows }],
      features: ["Competitive Pricing", "Best Quality"],
      stats: { projects: 320, years: 12, rating: 4.8 }
    },
    { 
      id: 5, 
      title: "Glass Shop Near Me", 
      path: "/services/glass-shop-near-me",
      category: "GLASS SHOP", 
      icon: <Home size={20} />,
      image: images.gallery1,
      color: "from-amber-600 to-orange-500",
      media: [{ type: 'image', src: images.gallery1 }],
      features: ["Local Service", "Quick Delivery"],
      stats: { projects: 500, years: 15, rating: 4.9 }
    },
    { 
      id: 6, 
      title: "Glass Shower Doors Installation", 
      path: "/services/shower-doors-installation",
      category: "SHOWER", 
      icon: <Bath size={20} />,
      image: images.shower90,
      color: "from-blue-600 to-purple-500",
      media: [{ type: 'image', src: images.shower90 }],
      features: ["Professional Installation", "10mm Safety Glass"],
      stats: { projects: 150, years: 8, rating: 4.9 }
    },
    { 
      id: 7, 
      title: "Glass Shower Enclosures", 
      path: "/services/shower-enclosures",
      category: "SHOWER", 
      icon: <GlassWater size={20} />,
      image: images.shower1,
      color: "from-cyan-600 to-blue-500",
      media: [{ type: 'image', src: images.shower1 }],
      features: ["Frameless Design", "10mm Toughened Glass"],
      stats: { projects: 120, years: 7, rating: 4.8 }
    },
    { 
      id: 8, 
      title: "Toughened Glass", 
      path: "/services/toughened-glass",
      category: "SAFETY GLASS", 
      icon: <Shield size={20} />,
      image: images.gallery6,
      color: "from-red-600 to-rose-500",
      media: [{ type: 'image', src: images.gallery6 }],
      features: ["ISI Certified", "Safety Rated"],
      stats: { projects: 420, years: 15, rating: 4.8 }
    },
    { 
      id: 9, 
      title: "Interior Design House Glass", 
      path: "/services/interior-design-house-glass",
      category: "INTERIOR", 
      icon: <Sparkles size={20} />,
      image: images.lacquredglass3,
      color: "from-pink-600 to-rose-500",
      media: [{ type: 'image', src: images.lacquredglass3 }],
      features: ["Custom Designs", "Decorative Finish"],
      stats: { projects: 95, years: 6, rating: 4.7 }
    },
    { 
      id: 10, 
      title: "Glass Installation", 
      path: "/services/glass-installation",
      category: "INSTALLATION", 
      icon: <Ruler size={20} />,
      image: images.gallery3,
      color: "from-teal-600 to-green-500",
      media: [{ type: 'image', src: images.gallery3 }],
      features: ["Professional Team", "Expert Installation"],
      stats: { projects: 450, years: 14, rating: 4.8 }
    },
    { 
      id: 11, 
      title: "Shower Doors", 
      path: "/services/shower-doors",
      category: "SHOWER", 
      icon: <DoorOpen size={20} />,
      image: images.gallery4,
      color: "from-violet-600 to-purple-500",
      media: [{ type: 'image', src: images.gallery4 }],
      features: ["Various Styles", "Easy Operation"],
      stats: { projects: 200, years: 9, rating: 4.8 }
    },
    { 
      id: 12, 
      title: "Aluminium Glass Partition", 
      path: "/services/aluminium-glass-partition",
      category: "PARTITIONS", 
      icon: <Layers size={20} />,
      image: images.balcony5,
      color: "from-slate-600 to-gray-500",
      media: [{ type: 'image', src: images.balcony5 }],
      features: ["Aluminium Frame", "Sound Proof"],
      stats: { projects: 160, years: 8, rating: 4.7 }
    },
    { 
      id: 13, 
      title: "Glass Partition with Door", 
      path: "/services/glass-partition-with-door",
      category: "PARTITIONS", 
      icon: <DivideSquare size={20} />,
      image: images.gallery11,
      color: "from-cyan-600 to-blue-500",
      media: [{ type: 'image', src: images.gallery11 }],
      features: ["Integrated Doors", "Frameless Design"],
      stats: { projects: 130, years: 7, rating: 4.8 }
    },
    { 
      id: 14, 
      title: "Glass Partition Company", 
      path: "/services/glass-partition-company",
      category: "PARTITIONS", 
      icon: <Building size={20} />,
      image: images.gallery7,
      color: "from-blue-600 to-indigo-500",
      media: [{ type: 'image', src: images.gallery7 }],
      features: ["Design Service", "Project Management"],
      stats: { projects: 180, years: 9, rating: 4.8 }
    },
    { 
      id: 15, 
      title: "Glass Partition Price & Cost", 
      path: "/services/glass-partition-company", // அல்லது உரிய path
      category: "PARTITIONS", 
      icon: <Diamond size={20} />,
      image: images.gallery10,
      color: "from-amber-600 to-yellow-500",
      media: [{ type: 'image', src: images.gallery10 }],
      features: ["Competitive Pricing", "Free Quote"],
      stats: { projects: 210, years: 10, rating: 4.7 }
    },
    { 
      id: 16, 
      title: "Wall Glass Partition", 
      path: "/services/aluminium-glass-partition", // அல்லது உரிய path
      category: "PARTITIONS", 
      icon: <Layers size={20} />,
      image: images.gallery2,
      color: "from-purple-600 to-pink-500",
      media: [{ type: 'image', src: images.gallery2 }],
      features: ["Wall Mounted", "Space Division"],
      stats: { projects: 140, years: 8, rating: 4.7 }
    },
    { 
      id: 17, 
      title: "LED Smart Mirrors", 
      path: "/services/led-smart-mirrors",
      category: "LUXURY", 
      icon: <Zap size={20} />,
      image: images.ledglass1,
      color: "from-amber-600 to-orange-500",
      media: [{ type: 'image', src: images.ledglass1 }],
      features: ["Touch Control", "Anti-Fog Tech"],
      stats: { projects: 95, years: 6, rating: 4.9 }
    },
    { 
      id: 18, 
      title: "Spider Glass Facade", 
      path: "/services/spider-glass-fittings",
      category: "COMMERCIAL", 
      icon: <Briefcase size={20} />,
      image: images.spiderFittings,
      color: "from-gray-600 to-slate-500",
      media: [{ type: 'image', src: images.spiderFittings }],
      features: ["SS 316 Fittings", "High Transparency"],
      stats: { projects: 85, years: 7, rating: 4.8 }
    }
  ], []);

  const categories = useMemo(() => {
    return ['all', ...new Set(services.map(s => s.category))];
  }, [services]);

  const filteredServices = useMemo(() => {
    if (selectedCategory === 'all') return services;
    return services.filter(s => s.category === selectedCategory);
  }, [services, selectedCategory]);

  return (
    <div className="bg-[#020617] text-white min-h-screen font-sans pb-20">
      {/* Header */}
      <section className="pt-24 pb-12 px-4 md:px-6 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-black tracking-tight mb-4 uppercase italic">Our Services</h1>
        <p className="text-blue-500 font-bold tracking-[0.3em] uppercase mb-8">Premium Glass Solutions</p>
        
        {/* Categories Filter */}
        <div className="max-w-6xl mx-auto flex flex-wrap justify-center gap-2 md:gap-3 mb-8 px-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full border text-xs font-black tracking-widest transition-all ${
                selectedCategory === cat 
                  ? 'bg-white text-black border-white' 
                  : 'border-white/10 bg-white/5 hover:border-white/30'
              }`}
            >
              {cat.toUpperCase()}
            </button>
          ))}
        </div>
      </section>

      {/* Services Grid */}
      <section className="w-full px-4 md:px-6 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[1400px] mx-auto">
          {filteredServices.map((service) => (
            <div 
              key={service.id}
              onClick={() => navigate(service.path)} // இமேஜ் கிளிக் செய்தால் நேவிகேட் ஆகும்
              className="group cursor-pointer bg-[#0a0f2b] rounded-2xl overflow-hidden border border-white/5 hover:border-blue-500/50 transition-all duration-500 shadow-lg relative"
            >
              {/* Image Container */}
              <div className="aspect-[4/3] overflow-hidden relative">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                
                {/* Category Badge */}
                <div className={`absolute top-3 left-3 text-white text-[9px] font-black uppercase bg-gradient-to-r ${service.color} px-2 py-1 rounded-full flex items-center gap-1`}>
                  {service.icon}
                  <span>{service.category}</span>
                </div>
                
                {/* Title */}
                <div className="absolute bottom-3 left-3 right-3">
                  <h3 className="text-sm md:text-base font-black uppercase tracking-tighter text-white">
                    {service.title}
                  </h3>
                </div>
              </div>

              {/* Service Info */}
              <div className="p-4">
                <div className="flex flex-wrap gap-1 mb-3">
                  {service.features.map((feature, idx) => (
                    <span key={idx} className="text-[8px] font-bold uppercase tracking-wider bg-white/5 px-2 py-0.5 rounded">
                      {feature}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center justify-between border-t border-white/10 pt-3 mb-3">
                  <div className="text-center">
                    <div className="text-xs font-black">{service.stats.projects}+</div>
                    <div className="text-[7px] uppercase tracking-widest text-white/50">Projects</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xs font-black">{service.stats.rating}</div>
                    <div className="text-[7px] uppercase tracking-widest text-white/50">Rating</div>
                  </div>
                </div>
                
                {/* Button */}
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    navigate(service.path);
                  }}
                  className="w-full bg-white/5 hover:bg-blue-600 text-white py-2 rounded-lg border border-white/10 flex items-center justify-center gap-2 transition-all text-[10px] font-black uppercase tracking-widest"
                >
                  <BoxSelect size={12} />
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Services;