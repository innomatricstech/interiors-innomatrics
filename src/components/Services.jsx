import React, { useState, useMemo, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { 
  BoxSelect, Home, Building, Bath, 
  Shield, Palette, Diamond, Zap, Briefcase, 
  DoorOpen, Square, Ruler, GlassWater, Sparkles, Layers, 
  DivideSquare
} from "lucide-react";
import { images } from "../utils/images";

const Services = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [loadedImages, setLoadedImages] = useState(new Set());
  const navigate = useNavigate();
  const containerRef = useRef(null);
  const observerRef = useRef(null);
  
  /* ================= SCROLL PERFORMANCE ================= */
  useEffect(() => {
    // Disable smooth scroll during interactions
    const disableSmoothScroll = () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
    
    const enableSmoothScroll = () => {
      setTimeout(() => {
        document.documentElement.style.scrollBehavior = 'smooth';
      }, 100);
    };

    window.addEventListener('wheel', disableSmoothScroll, { passive: true });
    window.addEventListener('touchmove', disableSmoothScroll, { passive: true });

    return () => {
      window.removeEventListener('wheel', disableSmoothScroll);
      window.removeEventListener('touchmove', disableSmoothScroll);
      enableSmoothScroll();
    };
  }, []);

  // Services Array
  const services = useMemo(() => [
    { 
      id: 1, 
      title: "SS Railing Glass for Balcony", 
      path: "/services/balcony-railing",
      category: "RAILINGS", 
      icon: <Shield size={20} />,
      image: images.balcony3,
      color: "from-blue-600 to-cyan-500",
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
      features: ["Design Service", "Project Management"],
      stats: { projects: 180, years: 9, rating: 4.8 }
    },
    { 
      id: 15, 
      title: "Glass Partition Price & Cost", 
      path: "/services/glass-partition-company",
      category: "PARTITIONS", 
      icon: <Diamond size={20} />,
      image: images.gallery10,
      color: "from-amber-600 to-yellow-500",
      features: ["Competitive Pricing", "Free Quote"],
      stats: { projects: 210, years: 10, rating: 4.7 }
    },
    { 
      id: 16, 
      title: "Wall Glass Partition", 
      path: "/services/aluminium-glass-partition",
      category: "PARTITIONS", 
      icon: <Layers size={20} />,
      image: images.gallery2,
      color: "from-purple-600 to-pink-500",
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
      features: ["SS 316 Fittings", "High Transparency"],
      stats: { projects: 85, years: 7, rating: 4.8 }
    }
  ], []);

  /* ================= LAZY LOAD IMAGES ================= */
  useEffect(() => {
    if (!containerRef.current) return;

    if (observerRef.current) {
      observerRef.current.disconnect();
    }

    const imageObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const img = entry.target;
            const src = img.dataset.src;
            if (src && !loadedImages.has(src)) {
              img.src = src;
              setLoadedImages(prev => new Set([...prev, src]));
              imageObserver.unobserve(img);
            }
          }
        });
      },
      { rootMargin: "100px", threshold: 0.01 }
    );

    const images = containerRef.current.querySelectorAll('img[data-src]');
    images.forEach(img => imageObserver.observe(img));

    observerRef.current = imageObserver;

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [services, loadedImages]);

  const categories = useMemo(() => {
    return ['all', ...new Set(services.map(s => s.category))];
  }, [services]);

  const filteredServices = useMemo(() => {
    if (selectedCategory === 'all') return services;
    return services.filter(s => s.category === selectedCategory);
  }, [services, selectedCategory]);

  return (
    <div className="bg-[#020617] text-white min-h-screen font-sans pb-20" ref={containerRef}>
      {/* HERO SECTION - REMOVED fixed attachment */}
      <div 
        className="pt-24 pb-16 px-6 text-center relative overflow-hidden min-h-[70vh] flex items-center justify-center"
        style={{
          backgroundImage: `url(${images.ledglass11})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          // REMOVED fixed attachment
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/60"></div>
        
        <div className="relative z-10">
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-6 uppercase text-white">
            Our Services
          </h1>
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-px w-12 bg-blue-500"></div>
            <span className="text-blue-300 font-bold tracking-widest text-sm uppercase">
              Premium Glass Solutions
            </span>
            <div className="h-px w-12 bg-blue-500"></div>
          </div>
        </div>
      </div>

      {/* Categories Filter */}
      <section className="py-10 px-4 md:px-6 text-center bg-gradient-to-b from-transparent to-blue-900/10">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap justify-center gap-3 mb-6 px-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-6 py-3 rounded-full border text-xs font-bold tracking-wider transition-all ${
                  selectedCategory === cat 
                    ? 'bg-white text-black border-white shadow-lg' 
                    : 'border-white/20 bg-white/5 hover:border-white/40'
                }`}
              >
                {cat.toUpperCase()}
              </button>
            ))}
          </div>
          <p className="text-white/70 text-sm tracking-wider">
            Showing <span className="text-blue-400 font-bold">{filteredServices.length}</span> of <span className="font-bold">{services.length}</span> Services
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="w-full px-4 md:px-6 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[1400px] mx-auto">
          {filteredServices.map((service) => (
            <div 
              key={service.id}
              onClick={() => navigate(service.path)}
              className="group cursor-pointer bg-gradient-to-b from-[#0f172a] to-[#1e293b] rounded-2xl overflow-hidden border border-white/10 hover:border-blue-500/50 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
            >
              {/* Image Container with Lazy Loading */}
              <div className="aspect-[4/3] overflow-hidden relative">
                <img 
                  data-src={service.image}
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 600'%3E%3Crect width='800' height='600' fill='%231e293b'/%3E%3C/svg%3E"
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                
                {/* Loading Placeholder */}
                {!loadedImages.has(service.image) && (
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/10 animate-pulse"></div>
                )}
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
                
                {/* Category Badge */}
                <div className={`absolute top-4 left-4 text-white text-xs font-bold uppercase bg-gradient-to-r ${service.color} px-3 py-2 rounded-full flex items-center gap-2 shadow-md`}>
                  {service.icon}
                  <span>{service.category}</span>
                </div>
              </div>

              {/* Service Info */}
              <div className="p-6">
                <h3 className="text-lg font-bold uppercase tracking-tight text-white mb-4">
                  {service.title}
                </h3>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {service.features.map((feature, idx) => (
                    <span key={idx} className="text-[9px] font-bold uppercase tracking-wider bg-white/10 hover:bg-white/20 px-3 py-1.5 rounded transition-all">
                      {feature}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center justify-between border-t border-white/10 pt-4 mb-4">
                  <div className="text-center">
                    <div className="text-sm font-bold">{service.stats.projects}+</div>
                    <div className="text-[8px] uppercase tracking-widest text-white/60">Projects</div>
                  </div>
                  <div className="text-center">
                    <div className="text-sm font-bold">{service.stats.years}+</div>
                    <div className="text-[8px] uppercase tracking-widest text-white/60">Years</div>
                  </div>
                  <div className="text-center">
                    <div className="text-sm font-bold">{service.stats.rating}</div>
                    <div className="text-[8px] uppercase tracking-widest text-white/60">Rating</div>
                  </div>
                </div>
                
                {/* Button */}
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    navigate(service.path);
                  }}
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-500 hover:to-blue-700 text-white py-3 rounded-xl border border-blue-500/30 flex items-center justify-center gap-2 transition-all text-xs font-bold uppercase tracking-wider shadow-md"
                >
                  <BoxSelect size={14} />
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