import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Phone, MessageSquare, Calendar, CheckCircle, Star, ShieldCheck, Zap } from 'lucide-react';
import images from "../utils/images";

const ServiceLayout = ({ 
  children, 
  title, 
  category, 
  bannerImage, 
  description,
  features = [],
  stats = { projects: 0, years: 0, rating: 0 }
}) => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#020617] text-white selection:bg-blue-500/30">
      
  {/* BACK NAVIGATION - Modern Floating Style */}
<div className="absolute top-[200px] left-6 z-50">
  <button
    onClick={() => navigate("/services/:id")}
    className="group flex items-center gap-2
      bg-white/5 backdrop-blur-xl
      border border-white/10 hover:border-blue-500/50
      rounded-2xl px-4 py-3
      transition-all duration-500
      hover:bg-white/10 shadow-2xl"
  >
    <ArrowLeft
      size={18}
      className="group-hover:-translate-x-1.5 transition-transform duration-300"
    />
    <span className="text-[10px] font-black uppercase tracking-widest">
      All Services
    </span>
  </button>
</div>



      {/* HERO SECTION with PARALLAX EFFECT */}
      <div 
        className="relative h-[85vh] flex items-end pb-24 overflow-hidden"
        style={{
          backgroundImage: `url(${bannerImage || images.lacquredGlass.images[0]})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        {/* Multilayered Overlays for Depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-[#020617]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#020617] via-transparent to-transparent opacity-80" />
        
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="max-w-5xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-blue-600/20 backdrop-blur-md border border-blue-500/30 px-5 py-2 rounded-full mb-8 animate-fade-in">
              <Zap size={14} className="text-blue-400" />
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-400">{category}</span>
            </div>
            
            {/* Title */}
            <h1 className="text-5xl md:text-8xl font-black uppercase tracking-tighter leading-[0.9] mb-8 drop-shadow-2xl">
              {title}
            </h1>
            
            {/* Description */}
            <p className="text-lg md:text-2xl text-white/70 max-w-3xl leading-relaxed font-light mb-10 border-l-2 border-blue-500 pl-6">
              {description}
            </p>
            
            {/* Stats Panel */}
            <div className="flex flex-wrap gap-4 md:gap-6">
              {[
                { label: "Execution", val: `${stats.projects}+`, icon: ShieldCheck, color: "text-blue-400" },
                { label: "Expertise", val: `${stats.years}+ Years`, icon: Calendar, color: "text-emerald-400" },
                { label: "Trust", val: stats.rating, icon: Star, color: "text-amber-400" },
              ].map((item, idx) => (
                <div key={idx} className="bg-white/5 backdrop-blur-2xl border border-white/10 p-6 rounded-[2rem] min-w-[160px] hover:bg-white/10 transition-colors group">
                   <item.icon size={20} className={`${item.color} mb-3 group-hover:scale-110 transition-transform`} />
                   <div className="text-2xl font-black">{item.val}</div>
                   <div className="text-[9px] uppercase tracking-widest text-white/40 mt-1">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* DYNAMIC CONTENT AREA */}
      <div className="container mx-auto px-6 md:px-12 py-20 relative z-20">
        <div className="grid lg:grid-cols-12 gap-16">
          <div className="lg:col-span-12">
            {children}
          </div>
        </div>
      </div>

      {/* FEATURES GRID */}
      {features.length > 0 && (
        <section className="bg-white/[0.02] border-y border-white/5 py-24">
          <div className="container mx-auto px-6 md:px-12">
            <div className="flex flex-col items-center mb-20 text-center">
              <span className="text-blue-500 font-black uppercase tracking-[0.4em] text-[10px] mb-4">Technical Specs</span>
              <h2 className="text-4xl md:text-6xl font-black uppercase">Service Excellence</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="group bg-white/5 backdrop-blur-sm border border-white/5 p-10 rounded-[2.5rem] hover:bg-white/10 hover:border-blue-500/30 transition-all duration-500">
                  <div className="w-12 h-12 rounded-2xl bg-blue-600/20 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-blue-600 transition-all">
                    <CheckCircle className="text-blue-400 group-hover:text-white" size={24} />
                  </div>
                  <h3 className="text-xl font-bold mb-4 uppercase tracking-tight">{feature.title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FINAL CTA - High Impact */}
      <div className="container mx-auto px-6 md:px-12 py-24">
        <div className="relative rounded-[3rem] overflow-hidden bg-[#0f172a] border border-blue-500/20 p-12 md:p-20 text-center">
          {/* Decorative Background for CTA */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 blur-[100px] rounded-full -mr-48 -mt-48" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-600/10 blur-[100px] rounded-full -ml-48 -mb-48" />

          <div className="relative z-10 max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-7xl font-black uppercase leading-none mb-8">
              Start Your <span className="text-blue-500">Project</span> Today
            </h2>
            <p className="text-white/60 text-lg md:text-xl mb-12 font-light">
              Chennai's leading glass architectural experts are just a click away. Get your free site measurement and estimate now.
            </p>
            
            <div className="flex flex-wrap justify-center gap-6">
              <button
                onClick={() => window.location.href = "tel:+919141621820"}
                className="flex items-center gap-3 bg-white text-black px-10 py-5 rounded-2xl font-black uppercase tracking-widest hover:bg-blue-500 hover:text-white transition-all shadow-2xl"
              >
                <Phone size={20} />
                Call +91 91416 21820
              </button>

              <a
                href="https://wa.me/919141621820"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-emerald-600 hover:bg-emerald-500 text-white px-10 py-5 rounded-2xl font-black uppercase tracking-widest transition-all shadow-2xl shadow-emerald-900/20"
              >
                <MessageSquare size={20} />
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceLayout;