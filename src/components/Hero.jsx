// src/components/Hero.jsx
import React from 'react';
import { ChevronRight, Award, Users, Briefcase, Sparkles, Shield, Clock, ThumbsUp } from 'lucide-react';

const Hero = () => {
  const stats = [
    { icon: <Award className="h-6 w-6" />, value: '12+', label: 'Years Excellence', sublabel: 'Industry Leader' },
    { icon: <Briefcase className="h-6 w-6" />, value: '500+', label: 'Projects Delivered', sublabel: 'Nationwide' },
    { icon: <Users className="h-6 w-6" />, value: '100%', label: 'Client Satisfaction', sublabel: 'Guaranteed' },
    { icon: <Shield className="h-6 w-6" />, value: '24/7', label: 'Support', sublabel: 'Always Available' },
  ];

  const solutions = [
    { name: 'Commercial Glass', icon: '🏢', desc: 'Office partitions & facades' },
    { name: 'Residential', icon: '🏡', desc: 'Windows & shower enclosures' },
    { name: 'Designer Glass', icon: '🎨', desc: 'Custom artistic pieces' },
    { name: 'Safety Glass', icon: '🛡️', desc: 'Tempered & laminated' },
    { name: 'Smart Glass', icon: '🔮', desc: 'Privacy & tech-integrated' },
    { name: 'Maintenance', icon: '🔧', desc: 'Repair & restoration' },
  ];

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900 to-gray-950 text-white">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Glass Morphic Layers */}
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=2070')] bg-cover bg-center opacity-20"></div>
        
        {/* Animated Glass Panels */}
        <div className="absolute top-1/4 -left-20 w-96 h-96 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-400/10 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 rounded-full bg-gradient-to-l from-purple-500/20 to-pink-400/10 blur-3xl animate-pulse delay-1000"></div>
        
        {/* Geometric Glass Elements */}
        <div className="absolute top-20 right-40 w-64 h-64 border border-white/10 rounded-3xl backdrop-blur-xl bg-white/5 rotate-12 shadow-2xl"></div>
        <div className="absolute bottom-40 left-20 w-48 h-48 border border-white/10 rounded-2xl backdrop-blur-xl bg-white/5 -rotate-6 shadow-2xl"></div>
        
        {/* Floating Particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white/30 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `float ${3 + Math.random() * 4}s infinite ease-in-out ${Math.random() * 2}s`,
              }}
            ></div>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Hero Content with Glassmorphism */}
          <div className="text-center lg:text-left">
            {/* Premium Badge */}
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600/20 to-cyan-500/20 backdrop-blur-sm px-6 py-3 rounded-full mb-8 border border-white/20">
              <Sparkles className="h-4 w-4 text-cyan-300" />
              <span className="text-cyan-300 font-semibold tracking-wide">PREMIUM GLASS SOLUTIONS SINCE 2012</span>
            </div>
            
            {/* Main Headline */}
            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
              Transform Spaces with
              <span className="block mt-2 bg-gradient-to-r from-cyan-300 via-blue-300 to-cyan-300 bg-clip-text text-transparent">
                Crystal Clear Vision
              </span>
            </h1>
            
            {/* Description with Glass Card */}
            <div className="backdrop-blur-xl bg-white/10 rounded-2xl p-8 border border-white/20 mb-10 shadow-2xl">
              <p className="text-xl text-gray-200 mb-4">
                We blend <span className="text-cyan-300 font-semibold">cutting-edge technology</span> with artistic craftsmanship 
                to deliver glass solutions that redefine modern architecture.
              </p>
              <p className="text-lg text-gray-300">
                From luxurious residential spaces to dynamic commercial environments, 
                our precision-engineered glass installations combine beauty, safety, and innovation.
              </p>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 mb-12">
              <button className="group relative bg-gradient-to-r from-cyan-500 to-blue-600 px-10 py-5 rounded-xl font-bold text-lg hover:shadow-2xl hover:shadow-cyan-500/30 transition-all duration-500 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
                <span className="relative flex items-center justify-center">
                  Get Free Consultation
                  <ChevronRight className="ml-3 h-5 w-5 group-hover:translate-x-2 transition-transform" />
                </span>
              </button>
              
              <button className="group bg-transparent border-2 border-white/30 text-white px-10 py-5 rounded-xl font-bold text-lg hover:bg-white/10 hover:border-white/50 transition-all duration-500 backdrop-blur-sm">
                <span className="flex items-center justify-center">
                  <svg className="mr-3 h-5 w-5 group-hover:rotate-90 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                  Watch Showcase
                </span>
              </button>
            </div>
          </div>

          {/* Interactive Glass Panel */}
          <div className="relative">
            {/* Main Glass Card */}
            <div className="backdrop-blur-2xl bg-gradient-to-br from-white/15 to-white/5 rounded-3xl p-10 border border-white/20 shadow-2xl">
              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-6 mb-10">
                {stats.map((stat, index) => (
                  <div 
                    key={index}
                    className="group bg-gradient-to-br from-white/10 to-white/5 rounded-2xl p-6 border border-white/10 hover:border-cyan-500/30 transition-all duration-500 hover:scale-105"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="p-3 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-xl">
                        <div className="text-cyan-300">{stat.icon}</div>
                      </div>
                      <div className="text-3xl font-bold bg-gradient-to-r from-cyan-300 to-white bg-clip-text text-transparent">
                        {stat.value}
                      </div>
                    </div>
                    <div className="text-lg font-semibold mb-1">{stat.label}</div>
                    <div className="text-sm text-gray-300">{stat.sublabel}</div>
                    <div className="h-1 w-0 group-hover:w-full bg-gradient-to-r from-cyan-500 to-blue-500 transition-all duration-700 mt-3 rounded-full"></div>
                  </div>
                ))}
              </div>
              
              {/* Solutions Showcase */}
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-8 w-1 bg-gradient-to-b from-cyan-500 to-blue-500 rounded-full"></div>
                  <h3 className="text-2xl font-bold">Our Premium Solutions</h3>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  {solutions.map((solution, idx) => (
                    <div
                      key={idx}
                      className="group bg-white/5 rounded-xl p-4 border border-white/10 hover:bg-gradient-to-r hover:from-cyan-500/10 hover:to-blue-500/10 transition-all duration-500"
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">{solution.icon}</span>
                        <div>
                          <div className="font-semibold">{solution.name}</div>
                          <div className="text-sm text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            {solution.desc}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Trust Indicators */}
              <div className="flex items-center justify-between pt-6 border-t border-white/10">
                <div className="flex items-center gap-3">
                  <ThumbsUp className="h-5 w-5 text-green-400" />
                  <span className="text-sm">ISO 9001 Certified</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="h-5 w-5 text-yellow-400" />
                  <span className="text-sm">48-Hr Installation</span>
                </div>
              </div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-2xl rotate-12 backdrop-blur-xl border border-white/20 animate-float"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl -rotate-12 backdrop-blur-xl border border-white/20 animate-float-delayed"></div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
          <div className="flex flex-col items-center animate-bounce">
            <span className="text-sm text-gray-400 mb-2">Explore More</span>
            <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-gradient-to-b from-cyan-300 to-blue-400 rounded-full mt-2"></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Add to your global CSS or Tailwind config */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(-5deg); }
        }
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-float-delayed { animation: float-delayed 7s ease-in-out infinite 1s; }
      `}</style>
    </section>
  );
};

export default Hero;