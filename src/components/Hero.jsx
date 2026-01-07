import React from 'react';
import { ChevronRight, Award, Users, Briefcase, Shield } from 'lucide-react';
import homeVideo from "../assets/videos/homevideo.mp4";

const Hero = () => {
  const stats = [
    {
      icon: <Award className="h-4 w-4 sm:h-5 sm:w-5" />,
      value: "12+",
      label: "Years Excellence",
      sublabel: "Industry Leader",
    },
    {
      icon: <Briefcase className="h-4 w-4 sm:h-5 sm:w-5" />,
      value: "500+",
      label: "Projects Delivered",
      sublabel: "Nationwide",
    },
    {
      icon: <Users className="h-4 w-4 sm:h-5 sm:w-5" />,
      value: "100%",
      label: "Client Satisfaction",
      sublabel: "Guaranteed",
    },
    {
      icon: <Shield className="h-4 w-4 sm:h-5 sm:w-5" />,
      value: "24/7",
      label: "Support",
      sublabel: "Always Available",
    },
  ];

  return (
    <section className="relative min-h-[75vh] sm:min-h-[80vh] overflow-hidden">

      {/* 🎥 Video Background */}
      <div className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className="w-full h-full object-cover"
        >
          <source src={homeVideo} type="video/mp4" />
        </video>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* 📦 Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 pt-24 sm:pt-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">

          {/* 🔘 CTA Buttons */}
          <div className="flex justify-center lg:justify-start">
            <div className="bg-white/15 backdrop-blur-md rounded-xl p-4 sm:p-6 border border-white/30 w-full max-w-md">
              
              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => (window.location.href = "/contact")}
                  className="w-full sm:w-auto bg-gradient-to-r from-cyan-500 to-blue-600 
                  text-white px-6 py-2.5 rounded-lg font-semibold shadow-md text-sm sm:text-base"
                >
                  Get Free Quote
                  <ChevronRight className="inline ml-2 w-4 h-4" />
                </button>

                <button
                  onClick={() => (window.location.href = "/gallery")}
                  className="w-full sm:w-auto border border-white/40 text-white 
                  px-6 py-2.5 rounded-lg backdrop-blur text-sm sm:text-base"
                >
                  Watch Showcase
                </button>
              </div>

            </div>
          </div>

          {/* 📊 Stats */}
          <div className="bg-white/15 backdrop-blur-lg rounded-2xl p-4 sm:p-6 border border-white/30">
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {stats.map((stat, i) => (
                <div
                  key={i}
                  className="bg-white/10 rounded-xl p-3 sm:p-4 border border-white/20"
                >
                  <div className="flex justify-between items-center mb-1">
                    <div className="text-cyan-300">{stat.icon}</div>
                    <div className="text-base sm:text-xl font-bold text-white">
                      {stat.value}
                    </div>
                  </div>
                  <div className="text-xs sm:text-sm font-semibold text-white">
                    {stat.label}
                  </div>
                  <div className="text-[11px] sm:text-xs text-gray-200">
                    {stat.sublabel}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
