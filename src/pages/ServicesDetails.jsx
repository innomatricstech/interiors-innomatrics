import React, { useState, useEffect, useMemo, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  ChevronLeft,
  ChevronRight,
  ArrowLeft,
  Phone,
  ShieldCheck,
  Star,
  Calendar,
  CheckCircle,
  Clock,
  Users,
  Award,
  Home,
  MapPin,
  Sparkles,
  Zap
} from "lucide-react";

// Import your services data
import { servicesData } from "../utils/servicesdata";

const ServiceDetails = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  const serviceId = state?.service?.id;
  
  // Find the service by ID from servicesData
  const service = useMemo(() => {
    return servicesData.find(s => s.id === serviceId);
  }, [serviceId]);

  // Prepare media array from service.images
  const media = useMemo(() => {
    if (!service?.images) return [];
    
    return service.images.map(item => {
      // Check if it's a video file (ends with .mp4)
      const isVideo = typeof item === 'string' && item.endsWith('.mp4');
      
      return {
        src: item,
        type: isVideo ? "video" : "image"
      };
    });
  }, [service]);

  const [index, setIndex] = useState(0);
  const videoRef = useRef(null);

  // AUTO SLIDER LOGIC
  useEffect(() => {
    if (!media.length) return;

    const current = media[index];
    let timer;

    if (current.type === "image") {
      timer = setTimeout(nextSlide, 4000);
    }

    if (current.type === "video" && videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(() => {});
    }

    return () => clearTimeout(timer);
  }, [index, media]);

  const nextSlide = () => {
    if (media.length > 0) {
      setIndex((prev) => (prev + 1) % media.length);
    }
  };

  const prevSlide = () => {
    if (media.length > 0) {
      setIndex((prev) => (prev === 0 ? media.length - 1 : prev - 1));
    }
  };

  // If service not found, navigate back
  useEffect(() => {
    if (!service) {
      navigate("/services");
    }
  }, [service, navigate]);

  if (!service) return null;

  // Default features if not provided
  const defaultFeatures = [
    "High-Quality Materials",
    "Professional Installation",
    "Durable & Long-lasting",
    "Custom Design Options",
    "Timely Completion",
    "After-Sales Support"
  ];

  const features = service.features || defaultFeatures;

  return (
    <div className="min-h-screen bg-[#020617] text-white selection:bg-blue-500/30">
      {/* BACKGROUND DECORATION */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 -left-1/4 w-1/2 h-1/2 bg-blue-600/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 -right-1/4 w-1/2 h-1/2 bg-cyan-600/10 blur-[120px] rounded-full" />
      </div>

      {/* TOP NAVIGATION */}
      <nav className="relative z-50 max-w-7xl mx-auto px-6 pt-10">
        <button
          onClick={() => navigate(-1)}
          className="group flex items-center gap-3 text-white/70 hover:text-white bg-white/5 backdrop-blur-md hover:bg-white/10 px-5 py-2.5 rounded-2xl border border-white/10 transition-all duration-500"
        >
          <ArrowLeft size={20} className="group-hover:-translate-x-1.5 transition-transform duration-300" />
          <span className="text-sm font-semibold tracking-wide">Back to Services</span>
        </button>
      </nav>

      {/* MAIN CONTENT */}
      <main className="relative z-10 max-w-7xl mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          
          {/* LEFT: VISUAL SHOWCASE */}
          <div className="sticky top-10 space-y-8">
            <div className="relative group aspect-[4/5] md:aspect-square lg:aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-[0_0_50px_-12px_rgba(0,0,0,0.5)] border border-white/10">
              {media.length > 0 ? (
                media.map((item, i) => (
                  <div
                    key={i}
                    className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                      i === index ? "opacity-100 scale-100 rotate-0" : "opacity-0 scale-110 rotate-1"
                    }`}
                  >
                    {item.type === "image" ? (
                      <img 
                        src={item.src} 
                        alt={`${service.title} - Image ${i + 1}`} 
                        className="w-full h-full object-cover" 
                      />
                    ) : (
                      <video
                        ref={i === index ? videoRef : null}
                        src={item.src}
                        className="w-full h-full object-cover"
                        muted
                        playsInline
                        onEnded={nextSlide}
                      />
                    )}
                  </div>
                ))
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-gray-800/50">
                  <p className="text-white/50">No images available</p>
                </div>
              )}

              {/* OVERLAYS */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent opacity-60" />
              
              {/* NAVIGATION CONTROLS */}
              {media.length > 1 && (
                <div className="absolute inset-x-4 top-1/2 -translate-y-1/2 flex justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <button onClick={prevSlide} className="p-4 rounded-full bg-black/40 backdrop-blur-xl border border-white/20 hover:bg-white/20 transition-all">
                    <ChevronLeft size={24} />
                  </button>
                  <button onClick={nextSlide} className="p-4 rounded-full bg-black/40 backdrop-blur-xl border border-white/20 hover:bg-white/20 transition-all">
                    <ChevronRight size={24} />
                  </button>
                </div>
              )}

              {/* PROGRESS INDICATORS */}
              {media.length > 1 && (
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3">
                  {media.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setIndex(i)}
                      className={`h-1.5 rounded-full transition-all duration-500 ${
                        i === index ? "bg-blue-500 w-10" : "bg-white/30 w-3 hover:bg-white/50"
                      }`}
                    />
                  ))}
                </div>
              )}
            </div>

            {/* QUICK STATS */}
            <div className="grid grid-cols-4 gap-4 p-2">
              {[
                { label: "Experience", val: "5+", color: "text-blue-400", icon: Calendar },
                { label: "Projects", val: "100+", color: "text-emerald-400", icon: CheckCircle },
                { label: "Rating", val: "4.9", color: "text-amber-400", icon: Star },
                { label: "Support", val: "24/7", color: "text-purple-400", icon: Clock },
              ].map((stat, idx) => (
                <div key={idx} className="bg-white/5 backdrop-blur-md rounded-3xl p-4 border border-white/10 text-center hover:bg-white/10 transition-colors">
                  <stat.icon size={18} className={`${stat.color} mx-auto mb-2`} />
                  <div className="text-xl font-black">{stat.val}</div>
                  <div className="text-[10px] uppercase tracking-tighter text-white/50">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: SERVICE INFO */}
          <div className="lg:pt-10 space-y-10">
            <section className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 px-4 py-2 rounded-full">
                <Sparkles size={14} className="text-blue-400" />
                <span className="text-xs font-black uppercase tracking-[0.2em] text-blue-400">
                  {service.category || "Premium Solution"}
                </span>
              </div>

              <h1 className="text-5xl md:text-6xl font-black leading-[1.1] tracking-tight bg-gradient-to-b from-white to-white/60 bg-clip-text text-transparent">
                {service.title}
              </h1>

              <p className="text-white/70 text-xl leading-relaxed font-light">
                {service.description || "We provide high-end glass architectural solutions tailored for modern aesthetics and maximum durability."}
              </p>
            </section>

            {/* FEATURES GRID */}
            <section className="space-y-6">
              <h3 className="text-sm font-black uppercase tracking-[0.3em] text-white/40">Technical Excellence</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {features.map((feature, i) => (
                  <div key={i} className="group flex items-start gap-4 bg-white/5 hover:bg-white/10 p-5 rounded-[2rem] border border-white/10 transition-all duration-500 hover:-translate-y-1">
                    <div className="mt-1 p-2 bg-blue-600/20 rounded-xl group-hover:scale-110 transition-transform">
                      <ShieldCheck size={22} className="text-blue-400" />
                    </div>
                    <span className="text-white/90 font-medium leading-tight">{feature}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* TRUST BANNER */}
            <section className="p-8 rounded-[2.5rem] bg-gradient-to-br from-blue-600/20 to-cyan-600/10 border border-blue-500/20 relative overflow-hidden group">
              <Zap className="absolute -right-8 -top-8 w-32 h-32 text-blue-500/10 rotate-12 group-hover:scale-110 transition-transform duration-700" />
              <h3 className="text-xl font-bold mb-6">Execution Excellence</h3>
              <div className="grid grid-cols-2 gap-6 relative z-10">
                <div className="flex items-center gap-3">
                  <Award className="text-amber-400 shrink-0" size={20} />
                  <span className="text-sm font-medium text-white/80">Certified Quality</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="text-emerald-400 shrink-0" size={20} />
                  <span className="text-sm font-medium text-white/80">Rapid Execution</span>
                </div>
                <div className="flex items-center gap-3">
                  <ShieldCheck className="text-blue-400 shrink-0" size={20} />
                  <span className="text-sm font-medium text-white/80">10-Year Warranty</span>
                </div>
                <div className="flex items-center gap-3">
                  <Users className="text-purple-400 shrink-0" size={20} />
                  <span className="text-sm font-medium text-white/80">Expert Supervision</span>
                </div>
              </div>
            </section>

            {/* ACTION SECTION */}
            <section className="space-y-6">
              <div className="flex flex-wrap items-center gap-6 text-white/50 text-xs font-bold uppercase tracking-widest px-2">
                <div className="flex items-center gap-2"><MapPin size={14} className="text-red-500" /> Chennai & Surrounding</div>
                <div className="flex items-center gap-2"><Home size={14} className="text-blue-500" /> On-site Measurement</div>
              </div>

              <button
                onClick={() => (window.location.href = "tel:+919141621820")}
                className="group w-full relative overflow-hidden bg-white text-black py-6 rounded-3xl font-black uppercase tracking-widest flex items-center justify-center gap-4 transition-all active:scale-[0.98] shadow-[0_20px_40px_-15px_rgba(255,255,255,0.2)]"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <Phone size={24} className="relative z-10 group-hover:text-white transition-colors" />
                <span className="relative z-10 group-hover:text-white transition-colors text-lg">Call Expert: +91 91416 21820</span>
              </button>
              
              <p className="text-center text-white/40 text-sm font-medium">
                Free Estimate • Expert Consultation • Instant Quotation
              </p>
            </section>
          </div>
        </div>
      </main>

      {/* FOOTER RELATED */}
      <footer className="max-w-7xl mx-auto px-6 py-20">
        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-12" />
        <h3 className="text-2xl font-bold mb-8 text-center bg-gradient-to-r from-white to-white/40 bg-clip-text text-transparent">Explore More Categories</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {["Toughened Glass", "UPVC Systems", "Lacquered Art", "Smart Mirrors"].map((item, i) => (
            <button
              key={i}
              onClick={() => navigate('/services')}
              className="bg-white/5 hover:bg-white/10 p-6 rounded-[2rem] border border-white/5 text-center transition-all duration-500 hover:border-blue-500/50 group"
            >
              <span className="text-sm font-bold tracking-wide group-hover:text-blue-400 transition-colors">{item}</span>
            </button>
          ))}
        </div>
      </footer>
    </div>
  );
};

export default ServiceDetails;