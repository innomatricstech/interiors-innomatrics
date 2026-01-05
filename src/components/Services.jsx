import React, { useState, useEffect, useMemo } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { X, CheckCircle2, Phone, ArrowRight, Box, BoxSelect } from "lucide-react";
import { images } from "../utils/images";
import "@google/model-viewer"; 

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();

  // 1. Data Structure with 3D Model Paths
  const services = useMemo(() => [
    { 
      id: 1, 
      title: "90° Shower Enclosure", 
      category: "SHOWER", 
      image: images.shower90,
      modelPath: "/models/shower_90.glb", 
      shortDesc: "Premium corner enclosures engineered for space efficiency. Features 10mm toughened safety glass and magnetic seals.",
      features: ["10mm Safety Glass", "Magnetic Seals", "Rust-proof Hardware", "Custom Sizes"]
    },
    { 
      id: 2, 
      title: "UPVC Windows", 
      category: "WINDOWS", 
      image: images.upvcWindows,
      modelPath: "/models/window.glb",
      shortDesc: "Superior multi-chambered window profiles designed for maximum thermal and acoustic insulation.",
      features: ["Sound Insulation", "UV Resistant", "Multi-point Locks", "Low Maintenance"]
    },
    { 
      id: 3, 
      title: "Glass Railings", 
      category: "ARCHITECTURE", 
      image: images.glassRailings,
      modelPath: "/models/railing.glb",
      shortDesc: "Bespoke frameless railing systems that offer safety without compromising your view.",
      features: ["Laminated Safety", "SS 316 Grade", "Frameless View", "Weather Proof"]
    },
    { 
        id: 4, 
        title: "LED Smart Mirrors", 
        category: "LUXURY", 
        image: images.ledMirrors,
        modelPath: "/models/led_mirror.glb",
        shortDesc: "Intelligent mirror solutions featuring integrated LED strips and touch-sensor controls.",
        features: ["Touch Control", "Anti-Fog Tech", "Dimmable LED", "3 Color Modes"]
    },
    { 
        id: 5, 
        title: "Spider Glass Facade", 
        category: "COMMERCIAL", 
        image: images.spiderFittings,
        modelPath: "/models/spider.glb",
        shortDesc: "Structural glass systems using high-tensile stainless steel spider fittings for stability.",
        features: ["SS 316 Fittings", "High Transparency", "Architectural Grade", "Wind Stability"]
    },
    { 
        id: 6, 
        title: "Lacquered Glass", 
        category: "INTERIOR", 
        image: images.lacqueredGlass,
        modelPath: "/models/lacquered.glb",
        shortDesc: "Vibrant back-painted glass that brings a modern colorful touch to interiors.",
        features: ["Heat Resistant", "Custom Colors", "Easy to Clean", "Scratch Proof"]
    }
  ], []);

  // 2. Handle URL Sync (Deep Linking)
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const serviceId = params.get('id');
    if (serviceId) {
      const found = services.find(s => s.id === parseInt(serviceId));
      if (found) {
        setSelectedService(found);
      }
    } else {
      setSelectedService(null);
    }
  }, [location.search, services]);

  // 3. Close Handler
  const handleClose = () => {
    setSelectedService(null);
    navigate("/services", { replace: true });
  };

  return (
    <div className="bg-[#020617] text-white min-h-screen font-sans pb-20">
      
      {/* Header */}
      <section className="pt-24 pb-12 px-6 text-center">
        <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-4 uppercase italic">Our Services</h1>
        <p className="text-blue-500 font-bold tracking-[0.3em] uppercase">Interactive 3D Solutions</p>
      </section>

      {/* Grid Layout */}
      <section className="max-w-7xl mx-auto px-6 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {services.map((service) => (
            <div 
              key={service.id}
              onClick={() => navigate(`?id=${service.id}`)}
              className="group cursor-pointer bg-[#070b2d] rounded-[2.5rem] overflow-hidden border border-white/5 hover:border-blue-500/50 transition-all duration-500 shadow-2xl relative"
            >
              <div className="absolute top-6 right-6 z-10 bg-blue-600 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                <BoxSelect size={20} />
              </div>
              <div className="aspect-[3/4] overflow-hidden">
                <img src={service.image} alt={service.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-8">
                <span className="text-blue-500 text-[10px] font-black tracking-widest mb-2 block uppercase">{service.category}</span>
                <h3 className="text-2xl font-bold uppercase tracking-tighter">{service.title}</h3>
                <p className="text-white/30 text-[10px] mt-2 uppercase">Tap to explore 3D</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3D Detail Modal */}
      {selectedService && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 backdrop-blur-xl bg-black/70 animate-in fade-in duration-300">
          {/* Overlay to close */}
          <div className="absolute inset-0" onClick={handleClose}></div>
          
          <div className="relative z-10 w-full max-w-6xl bg-[#0a0f2b] rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl flex flex-col md:flex-row min-h-[80vh] animate-in zoom-in-95 duration-300">
            
            <button onClick={handleClose} className="absolute top-6 right-6 text-white/50 hover:text-white z-50 bg-white/10 p-2 rounded-full backdrop-blur-md">
              <X size={24} />
            </button>

            {/* 3D Viewer Side */}
            <div className="w-full md:w-1/2 h-[350px] md:h-auto bg-gradient-to-b from-[#0f172a] to-black">
              <model-viewer
                src={selectedService.modelPath}
                alt={selectedService.title}
                auto-rotate
                camera-controls
                ar
                shadow-intensity="1"
                environment-image="neutral"
                touch-action="pan-y"
                style={{ width: '100%', height: '100%', outline: 'none' }}
              >
                <div className="absolute bottom-6 left-6 text-xs text-blue-400 font-bold bg-blue-500/10 border border-blue-500/20 px-3 py-1 rounded-full uppercase tracking-widest">
                  3D View Active
                </div>
              </model-viewer>
            </div>

            {/* Content Side */}
            <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center bg-[#0a0f2b]">
              <div className="flex items-center gap-2 text-blue-500 mb-4">
                <Box size={18} />
                <span className="font-black text-[10px] tracking-[0.3em] uppercase">{selectedService.category}</span>
              </div>
              
              <h2 className="text-4xl font-black mb-4 uppercase tracking-tighter">{selectedService.title}</h2>
              <p className="text-slate-400 text-md leading-relaxed mb-8 border-l-2 border-blue-600 pl-4">{selectedService.shortDesc}</p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
                {selectedService.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-3 bg-white/5 p-3 rounded-xl border border-white/5">
                    <CheckCircle2 size={16} className="text-blue-500" />
                    <span className="text-[11px] font-bold uppercase tracking-tight">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-3 mt-auto">
                <button onClick={() => window.location.href = "tel:+919141621820"} className="flex-1 bg-blue-600 hover:bg-blue-500 text-white font-black py-4 rounded-xl flex items-center justify-center gap-2 transition-all uppercase text-sm tracking-widest">
                  <Phone size={18} /> Call Now
                </button>
                <button className="flex-1 bg-white/5 hover:bg-white/10 text-white font-bold py-4 rounded-xl border border-white/10 flex items-center justify-center gap-2 transition-all uppercase text-sm tracking-widest">
                  Inquiry <ArrowRight size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Services;