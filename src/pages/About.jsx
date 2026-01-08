import React from 'react';
import { Phone, Award, Clock, Shield, Star, MapPin, ChevronRight } from 'lucide-react';

// Import real images from your assets
import gallery1 from "../assets/img/modern-bathroom-with-small-space-contemporary-decor.jpg";
import gallery3 from "../assets/img/glazing works.jpg";
import gallery7 from "../assets/img/beautiful-hotel-insights-details.jpg";
import gallery8 from "../assets/img/dinner-table-cafe.jpg";
import heroBanner from "../assets/img/modern-bathroom-with-small-space-contemporary-decor.jpg";

const About = () => {
  const stats = [
    { value: "25+", label: "YEARS" },
    { value: "850+", label: "PROJECTS" },
    { value: "99%", label: "CLIENTS" },
    { value: "4.9", label: "RATING" }
  ];

  const values = [
    {
      icon: <Award className="w-8 h-8" />,
      title: "PREMIUM QUALITY",
      desc: "Premium materials, perfect finish"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "TRUSTED SERVICE",
      desc: "Reliable since 2017"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "TIMELY DELIVERY",
      desc: "On-time project completion"
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "EXCELLENCE",
      desc: "Perfection in every detail"
    }
  ];

  const handleGetConsultation = () => {
    window.location.href = '/contact';
  };

  const handleViewProjects = () => {
    window.location.href = '/gallery';
  };

   

  return (
    <>
      <style jsx>{`
        /* 🏴‍☠️ MAIN BACKGROUND – Dark Blue */
        .dark-blue-bg {
          background: linear-gradient(135deg, 
            rgba(12, 25, 74, 1) 0%,      /* very dark blue */
            rgba(15, 30, 90, 1) 50%,     /* dark blue */
            rgba(20, 40, 110, 1) 100%    /* medium dark blue */
          );
        }
        
        /* ⬜ WHITE GLASS CARD */
        .white-card {
          background: white;
          border: 1px solid #dbeafe;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
          transition: transform 0.25s ease, box-shadow 0.25s ease;
          will-change: transform;
          color: #1e40af;
        }
        
        .white-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 18px 36px rgba(0, 0, 0, 0.2);
        }
        
        /* 📝 FORM INPUT */
        .form-input {
          background: white;
          border: 1px solid #dbeafe;
          color: #1e40af;
        }
        
        .form-input:focus {
          background: white;
          border-color: #60a5fa;
          outline: none;
          box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.3);
        }
        
        /* 🦸 HERO OVERLAY */
        .hero-gradient {
          background: linear-gradient(135deg, 
            rgba(12, 25, 74, 0.9) 0%,    /* very dark blue with opacity */
            rgba(12, 25, 74, 0.7) 50%,
            rgba(12, 25, 74, 0.5) 100%
          );
        }
        
        /* 🔘 BUTTON STYLES */
        .primary-button {
          background: white;
          color: #1e40af;
          border: 2px solid #3b82f6;
          transition: all 0.25s ease;
        }
        
        .primary-button:hover {
          background: #f8fafc;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
        }
        
        .secondary-button {
          background: transparent;
          color: white;
          border: 2px solid rgba(255, 255, 255, 0.6);
          transition: all 0.25s ease;
        }
        
        .secondary-button:hover {
          background: rgba(255, 255, 255, 0.1);
          border-color: white;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
        }
        
        /* 📊 STATS CARD */
        .stats-card {
          background: white;
          border-radius: 1.5rem;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
        }
        
        .stats-value {
          color: #1e40af;
        }
        
        .stats-label {
          color: #64748b;
        }
        
        /* 📸 GALLERY IMAGE CONTAINERS */
        .gallery-container {
          background: white;
          border-radius: 1.5rem;
          overflow: hidden;
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
        }
        
        /* 🎖️ VALUES CARD */
        .values-card {
          background: white;
          border-radius: 1.5rem;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
        }
        
        .values-icon-container {
          background: #eff6ff;
          border-radius: 50%;
        }
        
        .values-icon {
          color: #3b82f6;
        }
        
        .values-title {
          color: #1e40af;
        }
        
        .values-desc {
          color: #64748b;
        }
      `}</style>

      <div className="dark-blue-bg min-h-screen">
        {/* Hero Section - Full Screen */}
        <div className="relative h-screen min-h-[800px]">
          <img 
            src={heroBanner} 
            alt="Sri Ayyappan Glass"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 hero-gradient"></div>
          
          <div className="relative z-10 h-full flex items-center">
            <div className="px-8 md:px-16 max-w-4xl">
              <div className="white-card inline-flex items-center gap-2 px-6 py-3 rounded-full mb-8">
                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                <p className="text-blue-800 text-sm uppercase tracking-wider font-medium">EST. 2017</p>
              </div>
              
              <h1 className="text-7xl md:text-9xl font-bold text-white mb-6 leading-tight">
                SRI AYYAPPAN<br />GLASS
              </h1>
              
              <p className="text-2xl md:text-3xl text-white/90 mb-12">
                PREMIUM GLASS SOLUTIONS
              </p>
              
              <div className="flex flex-col md:flex-row gap-6">
               <button 
  onClick={handleGetConsultation}
  className="primary-button px-12 py-5 rounded-full text-xl font-semibold flex items-center justify-center gap-3"
>
  CONTACT NOW
</button>

                
                <button 
                  onClick={handleGetConsultation}
                  className="secondary-button px-12 py-5 rounded-full text-xl font-semibold flex items-center justify-center gap-3"
                >
                  GET QUOTE
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* About Content */}
        <div className="py-24 px-4">
          <div className="max-w-[1600px] mx-auto">
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-24">
              {stats.map((stat, index) => (
                <div key={index} className="stats-card p-10 text-center">
                  <div className="text-6xl font-bold stats-value mb-2">{stat.value}</div>
                  <p className="stats-label uppercase tracking-wider text-sm font-medium">{stat.label}</p>
                </div>
              ))}
            </div>

            {/* About Story */}
            <div className="white-card rounded-2xl p-12 mb-24">
              <h2 className="text-6xl md:text-7xl font-bold text-blue-800 mb-10 text-center">
                OUR STORY
              </h2>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div>
                  <p className="text-gray-700 text-xl mb-8 leading-relaxed">
                    Since 2017, Sri Ayyappan Glass has been transforming spaces in Bangalore 
                    with premium glass solutions. Starting as a small workshop, we've grown 
                    to become one of the most trusted names in glass manufacturing and installation.
                  </p>
                  
                  <p className="text-gray-700 text-xl mb-8 leading-relaxed">
                    With over 10 years of expertise, we've completed hundreds of projects 
                    ranging from residential shower partitions to large commercial glass facades. 
                    Our commitment to quality and craftsmanship has remained unchanged.
                  </p>
                  
                  <div className="flex items-center gap-4 text-blue-600">
                    <MapPin className="w-6 h-6" />
                    <p className="text-xl font-medium">Bangalore • Since 2017</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="gallery-container aspect-square">
                    <img 
                      src={gallery3} 
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="gallery-container aspect-square">
                    <img 
                      src={gallery7} 
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="gallery-container aspect-square">
                    <img 
                      src={gallery1} 
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="gallery-container aspect-square">
                    <img 
                      src={gallery8} 
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Our Values */}
            <h2 className="text-6xl md:text-7xl font-bold text-white mb-16 text-center">
              OUR VALUES
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
              {values.map((value, index) => (
                <div key={index} className="values-card p-8 text-center">
                  <div className="w-20 h-20 values-icon-container flex items-center justify-center mx-auto mb-6">
                    <div className="values-icon">
                      {value.icon}
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold values-title mb-4">{value.title}</h3>
                  <p className="values-desc">{value.desc}</p>
                </div>
              ))}
            </div>

            {/* Why Choose Us */}
            <div className="white-card rounded-2xl p-12">
              <h2 className="text-6xl md:text-7xl font-bold text-blue-800 mb-16 text-center">
                WHY CHOOSE US
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-5xl mb-6"></div>
                  <h3 className="text-2xl font-bold text-blue-800 mb-3">PREMIUM QUALITY</h3>
                  <p className="text-gray-600">Best materials, perfect finish</p>
                </div>
                
                <div className="text-center">
                  <div className="text-5xl mb-6"></div>
                  <h3 className="text-2xl font-bold text-blue-800 mb-3">EXPERT TEAM</h3>
                  <p className="text-gray-600">10+ years experience</p>
                </div>
                
                <div className="text-center">
                  <div className="text-5xl mb-6"></div>
                  <h3 className="text-2xl font-bold text-blue-800 mb-3">TRUSTED</h3>
                  <p className="text-gray-600">Since 2017 in Bangalore</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="py-24 px-4">
          <div className="max-w-[1200px] mx-auto text-center">
            <h2 className="text-6xl md:text-7xl font-bold text-white mb-10">
              START YOUR PROJECT
            </h2>
            
            <p className="text-white/90 text-2xl mb-12">
              Premium glass solutions for your space
            </p>
            
            <div className="flex flex-col md:flex-row gap-6 justify-center">
             <button 
  onClick={handleGetConsultation}
  className="primary-button px-12 py-5 rounded-full text-xl font-semibold"
>
  CONTACT NOW
</button>

              
              <button 
                onClick={handleViewProjects}
                className="secondary-button px-12 py-5 rounded-full text-xl font-semibold"
              >
                VIEW OUR WORK
              </button>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="py-12 px-4 text-center border-t border-white/10">
          <p className="text-2xl text-white/90 font-medium">SRI AYYAPPAN GLASS • BANGALORE</p>
          <p className="text-white/70 mt-2">SINCE 2017</p>
        </div>
      </div>
    </>
  );
};

export default About;