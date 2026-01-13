import React from 'react';
import { Phone, Award, Clock, Shield, Star, MapPin, ChevronRight, Target, Eye, Zap, CheckCircle, Users, ThumbsUp } from 'lucide-react';

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
      icon: <Award className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "PREMIUM QUALITY",
      desc: "Premium materials, perfect finish"
    },
    {
      icon: <Shield className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "TRUSTED SERVICE",
      desc: "Reliable since 2017"
    },
    {
      icon: <Clock className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "TIMELY DELIVERY",
      desc: "On-time project completion"
    },
    {
      icon: <Star className="w-6 h-6 sm:w-8 sm:h-8" />,
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
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          transition: transform 0.25s ease, box-shadow 0.25s ease;
          color: #1e40af;
        }
        
        @media (min-width: 768px) {
          .white-card {
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
          }
          
          .white-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 18px 36px rgba(0, 0, 0, 0.2);
          }
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
          border-radius: 1rem;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }
        
        @media (min-width: 768px) {
          .stats-card {
            border-radius: 1.5rem;
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
          }
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
          border-radius: 0.75rem;
          overflow: hidden;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }
        
        @media (min-width: 768px) {
          .gallery-container {
            border-radius: 1.5rem;
            box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
          }
        }
        
        /* 🎖️ VALUES CARD */
        .values-card {
          background: white;
          border-radius: 1rem;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }
        
        @media (min-width: 768px) {
          .values-card {
            border-radius: 1.5rem;
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
          }
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
        
        /* Process Steps */
        .process-step {
          background: white;
          border-radius: 1rem;
          padding: 1.5rem;
          text-align: center;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }
        
        @media (min-width: 768px) {
          .process-step {
            border-radius: 1.5rem;
            padding: 2rem;
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
          }
        }
        
        .process-step-number {
          background: #3b82f6;
          color: white;
          width: 50px;
          height: 50px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.25rem;
          font-weight: bold;
          margin: 0 auto 1rem;
        }
        
        @media (min-width: 768px) {
          .process-step-number {
            width: 60px;
            height: 60px;
            font-size: 1.5rem;
          }
        }
        
        .mission-vision-card {
          background: white;
          border-radius: 1rem;
          padding: 2rem;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }
        
        @media (min-width: 768px) {
          .mission-vision-card {
            border-radius: 1.5rem;
            padding: 3rem;
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
          }
        }
        
        .mission-vision-icon {
          background: #eff6ff;
          border-radius: 50%;
          width: 60px;
          height: 60px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 1rem;
        }
        
        @media (min-width: 768px) {
          .mission-vision-icon {
            width: 80px;
            height: 80px;
            margin: 0 auto 1.5rem;
          }
        }
        
        .mission-vision-icon svg {
          color: #3b82f6;
          width: 30px;
          height: 30px;
        }
        
        @media (min-width: 768px) {
          .mission-vision-icon svg {
            width: 40px;
            height: 40px;
          }
        }
      `}</style>

      <div className="dark-blue-bg min-h-screen">
        {/* Hero Section - Full Screen */}
        <div className="relative h-[60vh] sm:h-[70vh] md:h-[80vh] lg:h-screen min-h-[500px] sm:min-h-[600px] md:min-h-[700px] lg:min-h-[800px]">
          <img 
            src={heroBanner} 
            alt="Sri Ayyappan Glass"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 hero-gradient"></div>
          
          <div className="relative z-10 h-full flex items-center">
            <div className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 max-w-4xl">
              <div className="white-card inline-flex items-center gap-2 px-4 py-2 sm:px-6 sm:py-3 rounded-full mb-4 sm:mb-6 md:mb-8">
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-600 rounded-full"></div>
                <p className="text-blue-800 text-xs sm:text-sm uppercase tracking-wider font-medium">EST. 2017</p>
              </div>
              
             <h1 className="
 text-xl
  font-extrabold tracking-wide text-white
  mb-3 sm:mb-4 leading-tight
">
  SRI AYYAPPAN<br />GLASS
</h1>

<p className="
  text-base sm:text-lg md:text-xl lg:text-2xl
  tracking-widest font-medium text-white/85
  mb-6 sm:mb-8
">
  PREMIUM GLASS SOLUTIONS
</p>

              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                <button 
                  onClick={handleGetConsultation}
                  className="primary-button px-6 py-3 sm:px-8 sm:py-4 md:px-10 md:py-4 lg:px-12 lg:py-5 rounded-full text-base sm:text-lg md:text-xl font-semibold flex items-center justify-center gap-2 sm:gap-3"
                >
                  CONTACT NOW
                </button>
                
                <button 
                  onClick={handleGetConsultation}
                  className="secondary-button px-6 py-3 sm:px-8 sm:py-4 md:px-10 md:py-4 lg:px-12 lg:py-5 rounded-full text-base sm:text-lg md:text-xl font-semibold flex items-center justify-center gap-2 sm:gap-3"
                >
                  GET QUOTE
                  <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* About Content */}
        <div className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-8">
          <div className="max-w-[1600px] mx-auto">
            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 mb-12 sm:mb-16 md:mb-20 lg:mb-24">
              {stats.map((stat, index) => (
                <div key={index} className="stats-card p-4 sm:p-6 md:p-8 lg:p-10 text-center">
                  <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold stats-value mb-1 sm:mb-2">{stat.value}</div>
                  <p className="stats-label uppercase tracking-wider text-xs sm:text-sm font-medium">{stat.label}</p>
                </div>
              ))}
            </div>

            {/* About Story */}
            <div className="white-card rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12 mb-12 sm:mb-16 md:mb-20 lg:mb-24">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-blue-800 mb-6 sm:mb-8 md:mb-10 text-center">
                OUR STORY
              </h2>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16 items-center">
                <div>
                  <p className="text-gray-700 text-base sm:text-lg md:text-xl mb-4 sm:mb-6 md:mb-8 leading-relaxed">
                    Since 2017, Sri Ayyappan Glass has been transforming spaces in Bangalore 
                    with premium glass solutions. Starting as a small workshop, we've grown 
                    to become one of the most trusted names in glass manufacturing and installation.
                  </p>
                  
                  <p className="text-gray-700 text-base sm:text-lg md:text-xl mb-4 sm:mb-6 md:mb-8 leading-relaxed">
                    With over 10 years of expertise, we've completed hundreds of projects 
                    ranging from residential shower partitions to large commercial glass facades. 
                    Our commitment to quality and craftsmanship has remained unchanged.
                  </p>

                  <p className="text-gray-700 text-base sm:text-lg md:text-xl mb-4 sm:mb-6 md:mb-8 leading-relaxed">
                    We specialize in a wide array of high-end glass works including Toughened Glass, 
                    Lacquered Glass, LED Smart Mirrors, and elegant Glass Railings. Every project we 
                    undertake is a blend of modern aesthetics and structural safety, ensuring that 
                    your interiors not only look stunning but also stand the test of time.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6 md:mb-8">
                    <div className="flex items-start gap-2 sm:gap-3">
                      <div className="mt-1 bg-amber-500 rounded-full p-1 text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 sm:h-4 sm:w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <p className="text-gray-800 font-semibold text-sm sm:text-base">ISO Certified Quality Materials</p>
                    </div>
                    <div className="flex items-start gap-2 sm:gap-3">
                      <div className="mt-1 bg-amber-500 rounded-full p-1 text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 sm:h-4 sm:w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <p className="text-gray-800 font-semibold text-sm sm:text-base">Expert Professional Installation</p>
                    </div>
                    <div className="flex items-start gap-2 sm:gap-3">
                      <div className="mt-1 bg-amber-500 rounded-full p-1 text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 sm:h-4 sm:w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <p className="text-gray-800 font-semibold text-sm sm:text-base">Custom Design Consultations</p>
                    </div>
                    <div className="flex items-start gap-2 sm:gap-3">
                      <div className="mt-1 bg-amber-500 rounded-full p-1 text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 sm:h-4 sm:w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <p className="text-gray-800 font-semibold text-sm sm:text-base">Prompt After-Sales Support</p>
                    </div>
                  </div>

                  <p className="text-gray-700 text-base sm:text-lg md:text-xl mb-4 sm:mb-6 md:mb-8 leading-relaxed">
                    At Sri Ayyappan Glass, we don't just install glass; we build transparency and trust. 
                    Our mission is to provide innovative, sustainable, and luxury glass solutions that 
                    enhance the living and working environments of our clients across South India.
                  </p>
                  
                  <div className="flex items-center gap-2 sm:gap-3 md:gap-4 text-blue-600">
                    <MapPin className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
                    <p className="text-sm sm:text-base md:text-lg lg:text-xl font-medium">Bangalore • Since 2017</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-2 sm:gap-3 md:gap-4">
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

            {/* Mission & Vision */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 mb-12 sm:mb-16 md:mb-20 lg:mb-24">
              {/* Vision */}
              <div className="mission-vision-card">
                <div className="mission-vision-icon">
                  <Eye className="w-6 h-6 sm:w-8 sm:h-8" />
                </div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-800 mb-4 sm:mb-6 text-center">
                  OUR VISION
                </h2>
                <p className="text-gray-700 text-base sm:text-lg md:text-xl leading-relaxed text-center">
                  To redefine spaces with innovative glass solutions, combining quality craftsmanship and modern design to create functional and aesthetic environments.
                </p>
              </div>

              {/* Mission */}
              <div className="mission-vision-card">
                <div className="mission-vision-icon">
                  <Target className="w-6 h-6 sm:w-8 sm:h-8" />
                </div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-800 mb-4 sm:mb-6 text-center">
                  OUR MISSION
                </h2>
                <p className="text-gray-700 text-base sm:text-lg md:text-xl leading-relaxed text-center">
                  To deliver exceptional glass interior solutions with a commitment to quality, affordability, and customer satisfaction, transforming spaces with precision and innovation.
                </p>
              </div>
            </div>

            {/* Our Process */}
            <div className="white-card rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12 mb-12 sm:mb-16 md:mb-20 lg:mb-24">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-blue-800 mb-8 sm:mb-12 md:mb-16 text-center">
                OUR PROCESS
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-12">
                {/* Process Steps */}
                <div className="space-y-6 sm:space-y-8">
                  <div className="process-step">
                    <div className="process-step-number">1</div>
                    <h3 className="text-xl sm:text-2xl font-bold text-blue-800 mb-2 sm:mb-3">Reach Us</h3>
                    <p className="text-gray-600 text-sm sm:text-base">Contact us through phone, email, or visit our showroom</p>
                  </div>
                  
                  <div className="process-step">
                    <div className="process-step-number">2</div>
                    <h3 className="text-xl sm:text-2xl font-bold text-blue-800 mb-2 sm:mb-3">Discussion about requirement</h3>
                    <p className="text-gray-600 text-sm sm:text-base">We listen to your needs and provide expert consultation</p>
                  </div>
                </div>
                
                {/* Process Description */}
                <div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-blue-800 mb-4 sm:mb-6">How We Work</h3>
                  <p className="text-gray-700 text-base sm:text-lg md:text-xl mb-4 sm:mb-6 leading-relaxed">
                    Our streamlined process ensures that every project, from initial consultation to final installation, is handled with precision and care.
                  </p>
                  <p className="text-gray-700 text-base sm:text-lg md:text-xl mb-4 sm:mb-6 leading-relaxed">
                    We begin by understanding your vision, followed by detailed planning, precise measurements, expert fabrication, and professional installation.
                  </p>
                  <p className="text-gray-700 text-base sm:text-lg md:text-xl leading-relaxed">
                    Our transparent communication keeps you informed at every stage, ensuring complete satisfaction with the final result.
                  </p>
                </div>
              </div>
            </div>

            {/* Our Values */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-8 sm:mb-12 md:mb-16 text-center">
              OUR VALUES
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 mb-12 sm:mb-16 md:mb-20 lg:mb-24">
              {values.map((value, index) => (
                <div key={index} className="values-card p-4 sm:p-6 md:p-8 text-center">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 values-icon-container flex items-center justify-center mx-auto mb-4 sm:mb-6">
                    <div className="values-icon">
                      {value.icon}
                    </div>
                  </div>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold values-title mb-2 sm:mb-3 md:mb-4">{value.title}</h3>
                  <p className="values-desc text-sm sm:text-base">{value.desc}</p>
                </div>
              ))}
            </div>

            {/* Why Choose Us */}
            <div className="white-card rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-blue-800 mb-8 sm:mb-12 md:mb-16 text-center">
                WHY CHOOSE US
              </h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                <div className="text-center">
                  <div className="flex justify-center mb-4 sm:mb-6">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 bg-blue-100 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-8 h-8 sm:w-10 sm:h-10 text-blue-600" />
                    </div>
                  </div>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-blue-800 mb-2 sm:mb-3">GUARANTEED QUALITY</h3>
                  <p className="text-gray-600 text-sm sm:text-base">Every installation comes with our quality assurance and warranty</p>
                </div>
                
                <div className="text-center">
                  <div className="flex justify-center mb-4 sm:mb-6">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 bg-blue-100 rounded-full flex items-center justify-center">
                      <Users className="w-8 h-8 sm:w-10 sm:h-10 text-blue-600" />
                    </div>
                  </div>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-blue-800 mb-2 sm:mb-3">EXPERT CRAFTSMEN</h3>
                  <p className="text-gray-600 text-sm sm:text-base">Skilled artisans with 10+ years of specialized glass work experience</p>
                </div>
                
                <div className="text-center">
                  <div className="flex justify-center mb-4 sm:mb-6">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 bg-blue-100 rounded-full flex items-center justify-center">
                      <ThumbsUp className="w-8 h-8 sm:w-10 sm:h-10 text-blue-600" />
                    </div>
                  </div>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-blue-800 mb-2 sm:mb-3">SATISFACTION GUARANTEE</h3>
                  <p className="text-gray-600 text-sm sm:text-base">We ensure 100% customer satisfaction with every project</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-8">
          <div className="max-w-[1200px] mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 sm:mb-8 md:mb-10">
              START YOUR PROJECT
            </h2>
            
            <p className="text-white/90 text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 md:mb-10 lg:mb-12">
              Premium glass solutions for your space
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
              <button 
                onClick={handleGetConsultation}
                className="primary-button px-8 py-3 sm:px-10 sm:py-4 md:px-12 md:py-5 rounded-full text-base sm:text-lg md:text-xl font-semibold"
              >
                CONTACT NOW
              </button>
              
              <button 
                onClick={handleViewProjects}
                className="secondary-button px-8 py-3 sm:px-10 sm:py-4 md:px-12 md:py-5 rounded-full text-base sm:text-lg md:text-xl font-semibold"
              >
                VIEW OUR WORK
              </button>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="py-6 sm:py-8 md:py-10 lg:py-12 px-4 text-center border-t border-white/10">
          <p className="text-lg sm:text-xl md:text-2xl text-white/90 font-medium">SRI AYYAPPAN GLASS • BANGALORE</p>
          <p className="text-white/70 mt-1 sm:mt-2 text-sm sm:text-base">SINCE 2017</p>
        </div>
      </div>
    </>
  );
};

export default About;