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
  MapPin
} from "lucide-react";

const ServiceDetails = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  const service = state?.service;
  const media = useMemo(() => service?.media || [], [service]);

  const [index, setIndex] = useState(0);
  const videoRef = useRef(null);

  // AUTO SLIDER
  useEffect(() => {
    if (!media.length) return;

    const current = media[index];
    let timer;

    if (current.type === "image") {
      timer = setTimeout(nextSlide, 3500);
    }

    if (current.type === "video" && videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(() => {});
    }

    return () => clearTimeout(timer);
  }, [index, media]);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % media.length);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev === 0 ? media.length - 1 : prev - 1));
  };

  if (!service) {
    navigate("/services");
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#020617] via-[#0a0f2b] to-[#020617] text-white">
      
      {/* BACK BUTTON - Modern Design */}
      <div className="max-w-7xl mx-auto px-4 pt-8">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-white/80 hover:text-white bg-white/5 hover:bg-white/10 px-4 py-2 rounded-full border border-white/10 transition-all duration-300 group"
        >
          <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
          <span className="text-sm font-medium">Back to Services</span>
        </button>
      </div>

      {/* MAIN CONTENT CONTAINER */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-2 gap-8">
          
          {/* LEFT COLUMN - SLIDER */}
          <div className="space-y-6">
            {/* SLIDER CONTAINER */}
            <div className="relative w-full h-[400px] rounded-3xl overflow-hidden shadow-2xl">
              {media.map((item, i) => (
                <div
                  key={i}
                  className={`absolute inset-0 transition-all duration-1000 ${
                    i === index 
                      ? "opacity-100 scale-100 z-10" 
                      : "opacity-0 scale-105 z-0"
                  }`}
                >
                  {item.type === "image" ? (
                    <img
                      src={item.src}
                      alt=""
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
              ))}

              {/* GRADIENT OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/30 z-20" />

              {/* ARROWS - Modern Design */}
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-black/60 hover:bg-black/80 backdrop-blur-sm p-3 rounded-full border border-white/20 transition-all hover:scale-110"
              >
                <ChevronLeft size={24} />
              </button>

              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-black/60 hover:bg-black/80 backdrop-blur-sm p-3 rounded-full border border-white/20 transition-all hover:scale-110"
              >
                <ChevronRight size={24} />
              </button>

              {/* SLIDER INDICATORS */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-30 flex gap-2">
                {media.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setIndex(i)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      i === index 
                        ? "bg-white w-8" 
                        : "bg-white/40 hover:bg-white/60"
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* SERVICE STATS CARD */}
            <div className="bg-gradient-to-r from-white/5 to-white/3 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <h3 className="text-lg font-bold mb-4 text-white/90">Service Stats</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center">
                  <div className="flex items-center justify-center gap-2 text-blue-400 mb-1">
                    <Calendar size={16} />
                    <span className="text-2xl font-black">{service.stats?.years || 5}+</span>
                  </div>
                  <p className="text-xs text-white/60 uppercase tracking-wider">Years Experience</p>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center gap-2 text-emerald-400 mb-1">
                    <CheckCircle size={16} />
                    <span className="text-2xl font-black">{service.stats?.projects || 100}+</span>
                  </div>
                  <p className="text-xs text-white/60 uppercase tracking-wider">Projects Done</p>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center gap-2 text-amber-400 mb-1">
                    <Star size={16} />
                    <span className="text-2xl font-black">{service.stats?.rating || 4.8}</span>
                  </div>
                  <p className="text-xs text-white/60 uppercase tracking-wider">Customer Rating</p>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center gap-2 text-purple-400 mb-1">
                    <Clock size={16} />
                    <span className="text-2xl font-black">24/7</span>
                  </div>
                  <p className="text-xs text-white/60 uppercase tracking-wider">Support</p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN - DETAILS */}
          <div className="space-y-8">
            {/* HEADER SECTION */}
            <div>
              {/* BADGE & RATING */}
              <div className="flex items-center justify-between mb-4">
                <span className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white text-xs px-4 py-1.5 rounded-full uppercase font-black tracking-widest shadow-lg">
                  Premium Service
                </span>
                <div className="flex items-center gap-2 bg-white/5 px-3 py-1.5 rounded-full">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={14} fill="currentColor" />
                    ))}
                  </div>
                  <span className="text-sm font-bold">{service.stats?.rating || 4.8}</span>
                </div>
              </div>

              {/* TITLE */}
              <h1 className="text-4xl md:text-5xl font-black uppercase mb-6 leading-tight">
                {service.title}
              </h1>

              {/* DESCRIPTION */}
              <p className="text-white/80 text-lg leading-relaxed mb-8">
                {service.shortDesc || "Professional glass solution with premium quality materials and expert installation."}
              </p>
            </div>

            {/* FEATURES SECTION */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-white/90">Key Features</h3>
              <div className="grid sm:grid-cols-2 gap-3">
                {service.features?.map((f, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 bg-gradient-to-r from-white/5 to-white/3 backdrop-blur-sm p-4 rounded-xl border border-white/10 hover:border-white/20 transition-all group hover:translate-x-1"
                  >
                    <div className="p-2 bg-blue-500/20 rounded-lg">
                      <ShieldCheck size={20} className="text-blue-400" />
                    </div>
                    <span className="font-medium">{f}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* BENEFITS SECTION */}
            <div className="bg-gradient-to-br from-blue-500/10 via-transparent to-cyan-500/5 rounded-2xl p-6 border border-blue-500/20">
              <h3 className="text-xl font-bold mb-4 text-white/90">Why Choose Us</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-3">
                  <Award size={18} className="text-amber-400" />
                  <span className="text-sm">Certified Experts</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock size={18} className="text-emerald-400" />
                  <span className="text-sm">On-Time Delivery</span>
                </div>
                <div className="flex items-center gap-3">
                  <ShieldCheck size={18} className="text-blue-400" />
                  <span className="text-sm">Quality Assurance</span>
                </div>
                <div className="flex items-center gap-3">
                  <Users size={18} className="text-purple-400" />
                  <span className="text-sm">Customer Support</span>
                </div>
              </div>
            </div>

            {/* CTA SECTION */}
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-white/70 text-sm">
                <MapPin size={16} />
                <span>Chennai, India</span>
                <Home size={16} />
                <span>Free Site Visit Available</span>
              </div>
              
              <button
                onClick={() => (window.location.href = "tel:+919141621820")}
                className="
                  w-full
                  bg-gradient-to-r from-blue-600 to-cyan-500
                  hover:from-blue-500 hover:to-cyan-400
                  px-8
                  py-5
                  rounded-xl
                  font-black
                  uppercase
                  tracking-widest
                  flex
                  items-center
                  justify-center
                  gap-3
                  transition-all
                  hover:scale-[1.02]
                  active:scale-[0.98]
                  shadow-2xl
                  shadow-blue-500/30
                  hover:shadow-blue-500/50
                "
              >
                <Phone size={20} />
                <span>Call Expert Now: +91 91416 21820</span>
              </button>

              <p className="text-center text-white/60 text-sm">
                24/7 Available • Free Consultation • No Hidden Charges
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* RELATED SERVICES SECTION (Optional) */}
      <div className="max-w-7xl mx-auto px-4 py-8 mt-8">
        <h3 className="text-2xl font-bold mb-6 text-white/90">Related Services</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {["Glass Partitions", "UPVC Windows", "Shower Enclosures", "Safety Glass"].map((item, i) => (
            <button
              key={i}
              onClick={() => navigate('/services')}
              className="bg-white/5 hover:bg-white/10 p-4 rounded-xl border border-white/10 text-center transition-all hover:border-white/20"
            >
              <span className="text-sm font-medium">{item}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;