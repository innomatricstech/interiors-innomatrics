import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ArrowLeft,
  Phone,
  MessageSquare,
  Calendar,
  CheckCircle,
  Star,
  ShieldCheck,
  Zap
} from 'lucide-react';
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
    <div className="min-h-screen bg-[#020617] text-white">

      {/* ================= DESKTOP BACK BUTTON ================= */}
      <div className="hidden md:block absolute top-[200px] left-6 z-50">
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

      {/* ================= MOBILE BACK BUTTON ================= */}
      <div className="md:hidden fixed bottom-28 left-4 z-[60]">
        <button
          onClick={() => navigate("/services/:id")}
          className="w-11 h-11 flex items-center justify-center
            rounded-full bg-black/70 backdrop-blur-md
            border border-white/20 shadow-xl
            active:scale-95 transition"
        >
          <ArrowLeft size={20} />
        </button>
      </div>

      {/* ================= HERO SECTION ================= */}
      <div
        className="relative h-[85vh] flex items-end pb-24 overflow-hidden"
        style={{
          backgroundImage: `url(${bannerImage || images.lacquredGlass.images[0]})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-[#020617]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#020617] via-transparent to-transparent opacity-80" />

        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="max-w-5xl">

            <div className="inline-flex items-center gap-2 bg-blue-600/20 backdrop-blur-md border border-blue-500/30 px-5 py-2 rounded-full mb-8">
              <Zap size={14} className="text-blue-400" />
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-400">
                {category}
              </span>
            </div>

            <h1 className="text-5xl md:text-8xl font-black uppercase leading-[0.9] mb-8">
              {title}
            </h1>

            <p className="text-lg md:text-2xl text-white/70 max-w-3xl mb-10 border-l-2 border-blue-500 pl-6">
              {description}
            </p>

            <div className="flex flex-wrap gap-4">
              {[
                { label: "Execution", val: `${stats.projects}+`, icon: ShieldCheck },
                { label: "Expertise", val: `${stats.years}+ Years`, icon: Calendar },
                { label: "Trust", val: stats.rating, icon: Star }
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white/5 border border-white/10 p-6 rounded-2xl min-w-[160px]"
                >
                  <item.icon size={20} className="text-blue-400 mb-2" />
                  <div className="text-2xl font-black">{item.val}</div>
                  <div className="text-[9px] uppercase tracking-widest text-white/40">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>

      {/* ================= CONTENT ================= */}
      <div className="container mx-auto px-6 md:px-12 py-20">
        {children}
      </div>

      {/* ================= FEATURES ================= */}
      {features.length > 0 && (
        <section className="bg-white/[0.02] border-y border-white/5 py-24">
          <div className="container mx-auto px-6 md:px-12">
            <div className="text-center mb-20">
              <span className="text-blue-500 font-black uppercase tracking-[0.4em] text-[10px]">
                Technical Specs
              </span>
              <h2 className="text-4xl md:text-6xl font-black uppercase">
                Service Excellence
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white/5 border border-white/10 p-10 rounded-3xl"
                >
                  <CheckCircle className="text-blue-400 mb-6" size={24} />
                  <h3 className="text-xl font-bold mb-4 uppercase">
                    {feature.title}
                  </h3>
                  <p className="text-white/50 text-sm">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ================= CTA ================= */}
      <div className="container mx-auto px-6 md:px-12 py-24 text-center">
        <h2 className="text-4xl md:text-7xl font-black uppercase mb-8">
          Start Your <span className="text-blue-500">Project</span> Today
        </h2>

        <div className="flex flex-wrap justify-center gap-6">
          <button
            onClick={() => window.location.href = "tel:+919141621820"}
            className="flex items-center gap-3 bg-white text-black px-10 py-5 rounded-2xl font-black uppercase"
          >
            <Phone size={20} />
            Call
          </button>

          <a
            href="https://wa.me/919141621820"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-emerald-600 text-white px-10 py-5 rounded-2xl font-black uppercase"
          >
            <MessageSquare size={20} />
            WhatsApp
          </a>
        </div>
      </div>

    </div>
  );
};

export default ServiceLayout;
