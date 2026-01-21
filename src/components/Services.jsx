import React, { useState, useMemo, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { 
  BoxSelect, Home, Building, Bath, 
  Shield, Palette, Diamond, Zap, Briefcase, 
  DoorOpen, Square, Ruler, GlassWater, Sparkles, Layers, 
  DivideSquare, Layout, Scaling, Search, Video
} from "lucide-react";
import images from "../utils/images";

const Services = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [loadedImages, setLoadedImages] = useState(new Set());
  const navigate = useNavigate();
  const containerRef = useRef(null);

  // Service mapping with specific routes - UPDATED WITH VIDEO SUPPORT
  const services = useMemo(() => [
    { 
      id: 1, 
      title: "Balcony Glass", 
      path: "/services/balcony-railing",
      category: "ARCHITECTURAL", 
      icon: <Home size={24} />,
      image: images.balconyGlass[0],
      color: "from-teal-600 to-cyan-500",
      stats: { projects: 215, years: 9, rating: 4.9 }
    },
    { 
      id: 2, 
      title: "SS Railing Glass", 
      path: "/services/balcony-railing",
      category: "ARCHITECTURAL", 
      icon: <Shield size={24} />,
      image: images.ssRailingGlass[0],
      color: "from-blue-600 to-cyan-500",
      stats: { projects: 275, years: 10, rating: 4.8 }
    },
    { 
      id: 3, 
      title: "Lacquered Glass", 
      path: "/services/lacquered-glass",
      category: "DECORATIVE", 
      icon: <Palette size={24} />,
      image: images.lacquredGlass[0],
      color: "from-purple-600 to-pink-500",
      stats: { projects: 120, years: 5, rating: 4.9 }
    },
    { 
      id: 4, 
      title: "LED Smart Mirrors", 
      path: "/services/led-smart-mirrors",
      category: "TECHNOLOGY", 
      icon: <Zap size={24} />,
      image: images.ledSmartMirror[0],
      color: "from-amber-600 to-orange-500",
      stats: { projects: 95, years: 4, rating: 4.9 }
    },
    { 
      id: 5, 
      title: "Shower Doors", 
      path: "/services/shower-doors",
      category: "BATHROOM", 
      icon: <Bath size={24} />,
      image: images.showerDoors[0],
      color: "from-blue-500 to-indigo-500",
      stats: { projects: 150, years: 8, rating: 4.9 }
    },
    { 
      id: 6, 
      title: "Shower Enclosures", 
      path: "/services/shower-enclosures",
      category: "BATHROOM", 
      icon: <GlassWater size={24} />,
      image: images.showerEnclosures[0],
      color: "from-cyan-500 to-blue-600",
      stats: { projects: 180, years: 7, rating: 4.8 }
    },
    { 
      id: 7, 
      title: "Shower Installation", 
      path: "/services/shower-doors-installation",
      category: "BATHROOM", 
      icon: <Ruler size={24} />,
      image: images.showerInstallation[0],
      color: "from-blue-700 to-indigo-500",
      stats: { projects: 140, years: 6, rating: 4.8 }
    },
    { 
      id: 8, 
      title: "Toughened Glass", 
      path: "/services/toughened-glass",
      category: "SAFETY", 
      icon: <Shield size={24} />,
      image: images.toughenedGlass[0],
      color: "from-red-600 to-orange-500",
      stats: { projects: 450, years: 12, rating: 4.9 }
    },
    { 
      id: 9, 
      title: "Spider Glass", 
      path: "/services/spider-glass-facade",
      category: "COMMERCIAL", 
      icon: <Briefcase size={24} />,
      image: images.spiderGlass[0],
      color: "from-slate-600 to-gray-500",
      stats: { projects: 65, years: 9, rating: 4.7 }
    },
     
    { 
      id: 11, 
      title: "Partition with Door", 
      path: "/services/glass-partition-with-door",
      category: "PARTITIONS", 
      icon: <DivideSquare size={24} />,
      image: images.glassPartitionWithDoor[0],
      color: "from-sky-600 to-cyan-400",
      stats: { projects: 140, years: 6, rating: 4.8 }
    },
    { 
      id: 12, 
      title: "Glass Partition Company", 
      path: "/services/glass-partition-company",
      category: "COMMERCIAL", 
      icon: <Building size={24} />,
      image: images.glassPartitionCompany[0],
      color: "from-gray-700 to-slate-500",
      stats: { projects: 125, years: 12, rating: 4.8 }
    },
    { 
      id: 13, 
      title: "Glass Partition Price", 
      path: "/services/glass-partition-price-cost",
      category: "COMMERCIAL", 
      icon: <Diamond size={24} />,
      image: images.glassPartitionPriceCost[0],
      color: "from-rose-600 to-pink-500",
      stats: { projects: 300, years: 10, rating: 4.7 }
    },
    { 
      id: 14, 
      title: "Wall Glass Partition", 
      path: "/services/wall-glass-partition",
      category: "PARTITIONS", 
      icon: <Layout size={24} />,
      image: images.wallGlassPartition[0],
      color: "from-violet-600 to-purple-400",
      stats: { projects: 110, years: 7, rating: 4.7 }
    },
    { 
      id: 15, 
      title: "Glass Installation", 
      path: "/services/glass-installation",
      category: "INSTALLATION", 
      icon: <Ruler size={24} />,
      image: images.glassInstallation[0],
      color: "from-blue-700 to-indigo-500",
      stats: { projects: 550, years: 14, rating: 4.8 }
    },
    { 
      id: 16, 
      title: "Glass Shop Near Me", 
      path: "/services/glass-shop-near-me",
      category: "RETAIL", 
      icon: <Search size={24} />,
      image: images.glassShopNearMe[0],
      color: "from-orange-600 to-amber-500",
      stats: { projects: 800, years: 15, rating: 4.9 }
    },
    { 
      id: 17, 
      title: "UPVC Doors", 
      path: "/services/pvc-upvc-doors",
      category: "WINDOWS", 
      icon: <DoorOpen size={24} />,
      image: images.upvcDoors[0],
      color: "from-green-600 to-emerald-400",
      stats: { projects: 240, years: 10, rating: 4.7 }
    },
    { 
      id: 18, 
      title: "UPVC Windows", 
      path: "/services/upvc-windows-price",
      category: "WINDOWS", 
      icon: <Square size={24} />,
      image: images.upvcWindows[0],
      color: "from-emerald-600 to-teal-500",
      stats: { projects: 310, years: 11, rating: 4.8 }
    },
    { 
      id: 19, 
      title: "Gallery", 
      path: "/gallery",
      category: "GENERAL", 
      icon: <BoxSelect size={24} />,
      image: images.gallery[0],
      color: "from-pink-600 to-rose-500",
      stats: { projects: 1000, years: 15, rating: 4.9 }
    },
    { 
      id: 20, 
      title: "Videos", 
      path: "/services/videos",
      category: "MULTIMEDIA", 
      icon: <Video size={24} />,
      image: images.videos.lacquredGlassVideo,
      color: "from-purple-600 to-violet-500",
      stats: { projects: 50, years: 3, rating: 4.8 }
    }
  ], []);

  // Filter Categories
  const categories = useMemo(() => {
    return ['all', ...new Set(services.map(s => s.category))];
  }, [services]);

  const filteredServices = useMemo(() => {
    if (selectedCategory === 'all') return services;
    return services.filter(s => s.category === selectedCategory);
  }, [services, selectedCategory]);

  // Lazy Load Logic
  useEffect(() => {
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
      { rootMargin: "100px" }
    );

    const targetImages = containerRef.current?.querySelectorAll('img[data-src]');
    targetImages?.forEach(img => imageObserver.observe(img));
    return () => imageObserver.disconnect();
  }, [filteredServices, loadedImages]);

  const handleServiceClick = (service) => {
    navigate(service.path);
  };

  // Check if image is a video
  const isVideo = (src) => {
    return src && (src.endsWith('.mp4') || src.endsWith('.webm') || src.endsWith('.ogg'));
  };

  return (
    <div className="bg-[#020617] text-white min-h-screen font-sans" ref={containerRef}>
      {/* Hero Header */}
      <div 
        className="pt-24 pb-16 px-6 text-center relative overflow-hidden min-h-[50vh] flex items-center justify-center bg-fixed bg-center bg-cover"
        style={{ backgroundImage: `url(${images.gallery[4]})` }}
      >
        <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]"></div>
        <div className="relative z-10">
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-4 uppercase italic">
            Professional <span className="text-blue-500">Solutions</span>
          </h1>
          <p className="text-blue-200 tracking-[0.3em] font-bold text-sm uppercase">20+ Premium Glass Services</p>
        </div>
      </div>

      {/* Filter Tabs */}
      <section className="sticky top-0 z-40 py-6 bg-[#020617]/90 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 overflow-x-auto no-scrollbar">
          <div className="flex justify-start md:justify-center gap-3 min-w-max">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-6 py-3 rounded-full text-xs font-black tracking-wider transition-all uppercase border-2 ${
                  selectedCategory === cat 
                    ? 'bg-blue-600 border-blue-400 text-white shadow-[0_0_20px_rgba(37,99,235,0.6)]' 
                    : 'border-white/10 bg-white/5 text-white/70 hover:bg-white/10 hover:text-white hover:border-white/20'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Grid - BIG SIZE 3 COLUMNS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {filteredServices.map((service) => (
            <div 
              key={service.id}
              onClick={() => handleServiceClick(service)}
              className="group relative bg-gradient-to-b from-[#0f172a] to-[#1e293b] rounded-3xl overflow-hidden border border-white/10 hover:border-blue-500/50 transition-all duration-500 shadow-2xl hover:shadow-[0_0_40px_rgba(37,99,235,0.3)] cursor-pointer hover:-translate-y-2"
            >
              {/* Image/Video Container */}
              <div className="aspect-[16/9] overflow-hidden relative">
                {isVideo(service.image) ? (
                  <div className="relative w-full h-full">
                    <video 
                      src={service.image}
                      className="w-full h-full object-cover"
                      muted
                      playsInline
                      loop
                      autoPlay
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                    <div className="absolute top-6 left-6 flex items-center gap-2 bg-black/50 px-3 py-1.5 rounded-full">
                      <Video size={16} className="text-blue-400" />
                      <span className="text-xs font-bold text-white">Video</span>
                    </div>
                  </div>
                ) : (
                  <>
                    <img 
                      data-src={service.image}
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 600'%3E%3Crect width='800' height='600' fill='%231e293b'/%3E%3C/svg%3E"
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                  </>
                )}
                
                {/* Icon Badge */}
                <div className={`absolute top-6 left-6 p-4 rounded-2xl bg-gradient-to-br ${service.color} shadow-xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                  {service.icon}
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <div className="text-xs font-black tracking-[0.2em] text-blue-400 mb-3 uppercase">{service.category}</div>
                <h3 className="text-2xl font-bold text-white mb-8 leading-tight uppercase group-hover:text-blue-300 transition-colors">
                  {service.title}
                </h3>
                
                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 border-t border-white/10 pt-6">
                  <div className="text-center">
                    <div className="text-2xl font-black">{service.stats.projects}+</div>
                    <div className="text-[10px] uppercase tracking-tight text-white/50 mt-1">Projects</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-black">{service.stats.years}+</div>
                    <div className="text-[10px] uppercase tracking-tight text-white/50 mt-1">Years</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-black text-amber-400">{service.stats.rating}</div>
                    <div className="text-[10px] uppercase tracking-tight text-white/50 mt-1">Rating</div>
                  </div>
                </div>

                {/* Hover View Button */}
                <div className="absolute bottom-8 right-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-blue-600 text-white px-6 py-2.5 rounded-full text-sm font-bold uppercase tracking-wider flex items-center gap-2 shadow-lg">
                    <span>View Details</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Show message if no services found */}
        {filteredServices.length === 0 && (
          <div className="text-center py-20">
            <div className="text-2xl font-bold text-white/50 mb-4">No services found in this category</div>
            <button 
              onClick={() => setSelectedCategory('all')}
              className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-full font-bold transition-colors"
            >
              View All Services
            </button>
          </div>
        )}
      </section>

      {/* Mobile Responsive Adjustments */}
      <style jsx>{`
        @media (max-width: 640px) {
          .grid-cols-1 {
            gap: 1.5rem;
          }
          .p-8 {
            padding: 1.5rem;
          }
          h3 {
            font-size: 1.5rem;
          }
        }
        
        @media (min-width: 641px) and (max-width: 1024px) {
          .grid-cols-2 {
            gap: 2rem;
          }
        }
      `}</style>
    </div>
  );
};

export default Services;