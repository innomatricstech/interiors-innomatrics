// src/components/Hero.jsx
import React from "react";
import {
  ChevronRight,
  Award,
  Users,
  Briefcase,
  Shield,
} from "lucide-react";
import homeVideo from "../assets/videos/homevideo.mp4";

const Hero = () => {
  const stats = [
    {
      icon: <Award className="h-4 w-4" />,
      value: "12+",
      label: "Years Excellence",
      sublabel: "Industry Leader",
    },
    {
      icon: <Briefcase className="h-4 w-4" />,
      value: "500+",
      label: "Projects Delivered",
      sublabel: "Nationwide",
    },
    {
      icon: <Users className="h-4 w-4" />,
      value: "100%",
      label: "Client Satisfaction",
      sublabel: "Guaranteed",
    },
    {
      icon: <Shield className="h-4 w-4" />,
      value: "24/7",
      label: "Support",
      sublabel: "Always Available",
    },
  ];

  return (
    <section className="relative min-h-[80vh] overflow-hidden">
      
      {/* 🎥 CLEAR & BRIGHT VIDEO */}
      <div className="absolute inset-0 h-[80vh]">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="
            w-full h-full object-cover
            brightness-110 contrast-110 saturate-125
            scale-105
            animate-[zoomSlow_18s_ease-in-out_infinite]
          "
        >
          <source src={homeVideo} type="video/mp4" />
        </video>

        {/* 🔥 LIGHT OVERLAY (not dark) */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-black/10 to-black/30" />
      </div>

      {/* CONTENT */}
      <div className="relative z-10 container mx-auto px-6 pt-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

          {/* LEFT CTA */}
          <div className="flex justify-center lg:justify-start">
            <div className="bg-white/15 backdrop-blur-md rounded-xl p-6 border border-white/30 shadow-xl">
              <div className="flex gap-4">
                <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-2 rounded-lg font-semibold shadow-lg hover:scale-105 transition">
                  Get Free Quote
                  <ChevronRight className="inline ml-2 w-4 h-4" />
                </button>

                <button className="border border-white/40 text-white px-6 py-2 rounded-lg backdrop-blur hover:bg-white/20 transition">
                  Watch Showcase
                </button>
              </div>
            </div>
          </div>

          {/* RIGHT STATS CARD */}
          <div className="bg-white/15 backdrop-blur-lg rounded-2xl p-6 border border-white/30 shadow-2xl">
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, i) => (
                <div
                  key={i}
                  className="bg-white/10 rounded-xl p-4 border border-white/20 hover:bg-white/20 transition"
                >
                  <div className="flex justify-between mb-2">
                    <div className="text-cyan-300">{stat.icon}</div>
                    <div className="text-xl font-bold text-white">
                      {stat.value}
                    </div>
                  </div>
                  <div className="text-sm font-semibold text-white">
                    {stat.label}
                  </div>
                  <div className="text-xs text-gray-200">
                    {stat.sublabel}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* 🎬 ANIMATION */}
      <style>
        {`
          @keyframes zoomSlow {
            0% { transform: scale(1.05); }
            50% { transform: scale(1.12); }
            100% { transform: scale(1.05); }
          }
        `}
      </style>
    </section>
  );
};

export default Hero;
