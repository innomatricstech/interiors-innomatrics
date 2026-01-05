import React from 'react';
import { ChevronRight, Award, Users, Briefcase, Shield } from 'lucide-react';
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

  const handleGetQuote = () => {
    console.log('Get Free Quote clicked');
    window.location.href = '/contact';
  };

  const handleWatchShowcase = () => {
    console.log('Watch Showcase clicked');
    window.location.href = '/gallery';
  };

  return (
    <section className="relative min-h-[80vh] overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 h-[80vh]">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className="w-full h-full object-cover"
        >
          <source src={homeVideo} type="video/mp4" />
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-slate-800 to-cyan-900"></div>
        </video>

        {/* Light Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-black/10 to-black/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 pt-24 md:pt-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14 items-center">

          {/* Left CTA */}
          <div className="flex justify-center lg:justify-start">
            <div className="bg-white/15 backdrop-blur-md rounded-xl p-4 sm:p-6 border border-white/30 shadow-xl">
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <button 
                  onClick={handleGetQuote}
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-5 sm:px-6 py-2 sm:py-2 rounded-lg font-semibold shadow-lg"
                >
                  Get Free Quote
                  <ChevronRight className="inline ml-2 w-4 h-4" />
                </button>

                <button 
                  onClick={handleWatchShowcase}
                  className="border border-white/40 text-white px-5 sm:px-6 py-2 sm:py-2 rounded-lg backdrop-blur"
                >
                  Watch Showcase
                </button>
              </div>
            </div>
          </div>

          {/* Right Stats Card */}
          <div className="bg-white/15 backdrop-blur-lg rounded-2xl p-4 sm:p-6 border border-white/30 shadow-2xl">
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {stats.map((stat, i) => (
                <div
                  key={i}
                  className="bg-white/10 rounded-xl p-3 sm:p-4 border border-white/20"
                >
                  <div className="flex justify-between items-start mb-2">
                    <div className="text-cyan-300">{stat.icon}</div>
                    <div className="text-lg sm:text-xl font-bold text-white">
                      {stat.value}
                    </div>
                  </div>
                  <div className="text-xs sm:text-sm font-semibold text-white">
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
    </section>
  );
};

export default Hero;