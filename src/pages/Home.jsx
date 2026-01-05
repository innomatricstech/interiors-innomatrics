import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Phone, Mail, MapPin, Send, CheckCircle, ChevronRight, Play, Pause } from 'lucide-react';

// Import real images and video
import homeVideo from "../assets/videos/homevideo.mp4";
import shower90 from "../assets/img/frame shower partition.jpg";
import upvcWindows from "../assets/img/glazing works.jpg";
import glassRailings from "../assets/img/spider-fitting glass.jpg";
import lacqueredGlass from "../assets/img/lacqured-glass.jpg";
import ledMirrors from "../assets/img/led galss.jpg";
import toughenedGlass from "../assets/img/modern-bathroom-with-small-space-contemporary-decor.jpg";
import gallery1 from "../assets/img/beautiful-hotel-insights-details.jpg";
import gallery2 from "../assets/img/dinner-table-cafe.jpg";

const Home = () => {
  const navigate = useNavigate();
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const services = [
    'Shower Partitions',
    'UPVC Windows',
    'Glass Railings',
    'Toughened Glass',
    'Lacqured Glass',
    'LED Mirrors',
    'Frameless Glass',
    'Custom Solutions'
  ];

  // Real Services Images
  const servicesWithImages = [
    { id: 1, title: "SHOWER PARTITIONS", image: shower90 },
    { id: 2, title: "UPVC WINDOWS", image: upvcWindows },
    { id: 3, title: "GLASS RAILINGS", image: glassRailings },
    { id: 4, title: "LACQUERED GLASS", image: lacqueredGlass },
    { id: 5, title: "LED MIRRORS", image: ledMirrors },
    { id: 6, title: "TOUGHENED GLASS", image: toughenedGlass }
  ];

  // Real Gallery Images
  const galleryImages = [
    { id: 1, image: gallery1 },
    { id: 2, image: gallery2 },
    { id: 3, image: shower90 },
    { id: 4, image: upvcWindows },
    { id: 5, image: glassRailings },
    { id: 6, image: lacqueredGlass }
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      message: ''
    });
  };

  const handleViewMoreServices = () => navigate('/services');
  const handleViewMoreGallery = () => navigate('/gallery');

  const toggleVideoPlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleVideoEnded = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play();
    }
  };

  return (
    <div className="relative overflow-hidden">
      <style jsx>{`
        /* 🏴‍☠️ MAIN BACKGROUND – Dark Blue */
        .dark-blue-bg {
          background: linear-gradient(135deg, 
            rgba(12, 25, 74, 1) 0%,      /* very dark blue */
            rgba(15, 30, 90, 1) 50%,     /* dark blue */
            rgba(20, 40, 110, 1) 100%    /* medium dark blue */
          );
        }

        /* ⬜ WHITE CARD */
        .white-card {
          background: white;
          border: 1px solid #dbeafe; /* blue-100 */
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
          transition: transform 0.25s ease, box-shadow 0.25s ease;
          will-change: transform;
          color: #1e40af; /* blue-800 */
        }

        .white-card:hover {
          transform: scale(1.02);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
          border-color: #93c5fd; /* blue-300 */
        }

        /* 🎬 VIDEO OVERLAY */
        .video-overlay {
          background: linear-gradient(135deg, 
            rgba(12, 25, 74, 0.8) 0%,     /* dark blue overlay */
            rgba(12, 25, 74, 0.55) 50%,
            rgba(12, 25, 74, 0.35) 100%
          );
        }

        /* 🔘 PRIMARY BUTTON */
        .primary-button {
          background: white;
          color: #1e40af; /* blue-800 */
          border: 2px solid #3b82f6; /* blue-500 */
          transition: all 0.25s ease;
        }

        .primary-button:hover {
          background: #f8fafc; /* blue-50 */
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
        }

        /* 🔘 SECONDARY BUTTON */
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

        /* 🎮 VIDEO CONTROL BUTTON */
        .video-control-button {
          background: white;
          border: 2px solid #3b82f6;
          transition: all 0.25s ease;
        }

        .video-control-button:hover {
          background: #f8fafc;
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
        }

        /* 📝 FORM CONTAINER */
        .form-container {
          background: white;
          border: 1px solid #dbeafe;
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
        }

        .form-input {
          background: #f8fafc; /* blue-50 */
          border: 1px solid #dbeafe; /* blue-100 */
          color: #1e40af; /* blue-800 */
          transition: all 0.25s ease;
        }

        .form-input:focus {
          background: white;
          border-color: #60a5fa; /* blue-400 */
          outline: none;
          box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.3);
        }

        .form-input::placeholder {
          color: #64748b; /* slate-500 */
        }

        /* 🔘 FORM SUBMIT BUTTON */
        .form-submit-button {
          background: #3b82f6; /* blue-500 */
          color: white;
          border: 2px solid #3b82f6;
          transition: all 0.25s ease;
        }

        .form-submit-button:hover {
          background: #2563eb; /* blue-600 */
          box-shadow: 0 15px 35px rgba(37, 99, 235, 0.3);
        }

        /* 📊 STATS SECTION */
        .stats-value {
          color: white;
        }

        .stats-label {
          color: rgba(255, 255, 255, 0.8);
        }

        /* 📱 FOOTER */
        .footer-container {
          border-top: 1px solid rgba(255, 255, 255, 0.1);
        }

        .footer-main {
          color: white;
        }

        .footer-sub {
          color: rgba(255, 255, 255, 0.7);
        }

        /* 💼 SERVICE LIST ITEMS */
        .service-item {
          background: #eff6ff; /* blue-50 */
          color: #1e40af; /* blue-800 */
          border: 1px solid #dbeafe; /* blue-100 */
          transition: all 0.25s ease;
        }

        .service-item:hover {
          background: #dbeafe; /* blue-100 */
          border-color: #93c5fd; /* blue-300 */
        }

        /* 🎯 SUCCESS MESSAGE */
        .success-card {
          background: white;
          border: 1px solid #dbeafe;
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.15);
        }

        .success-icon {
          color: #10b981; /* emerald-500 */
        }

        .success-title {
          color: #1e40af; /* blue-800 */
        }

        .success-text {
          color: #64748b; /* slate-500 */
        }
      `}</style>

      <div className="dark-blue-bg min-h-screen">
        {/* Hero Section with Video */}
        <div className="relative h-screen min-h-[800px] overflow-hidden">
          <div className="absolute inset-0">
            <video
              ref={videoRef}
              autoPlay
              muted
              loop
              playsInline
              onEnded={handleVideoEnded}
              className="absolute inset-0 w-full h-full object-cover"
            >
              <source src={homeVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="absolute inset-0 video-overlay"></div>
          </div>
          
          {/* Video Controls */}
          <button
            onClick={toggleVideoPlay}
            className="video-control-button absolute bottom-8 right-8 p-4 rounded-full z-20"
          >
            {isPlaying ? (
              <Pause className="w-6 h-6 text-blue-700" />
            ) : (
              <Play className="w-6 h-6 text-blue-700" />
            )}
          </button>

          {/* Hero Content */}
          <div className="relative z-10 h-full flex items-center">
            <div className="px-8 md:px-16 max-w-4xl">
              <h1 className="text-7xl md:text-9xl font-bold text-white mb-6 leading-tight">
                SRI AYYAPPAN<br />GLASS
              </h1>
              <p className="text-2xl md:text-3xl text-white/90 mb-12">
                PREMIUM GLASS SOLUTIONS SINCE 2017
              </p>
              
              <div className="flex flex-col md:flex-row gap-6">
                <button 
                  onClick={() => window.location.href = "tel:+919141621820"}
                  className="primary-button px-12 py-5 rounded-full text-xl font-semibold flex items-center justify-center gap-3"
                >
                  <Phone className="w-6 h-6" />
                  CALL: +91 91416 21820
                </button>
                <button 
                  onClick={() => navigate('/contact')}
                  className="secondary-button px-12 py-5 rounded-full text-xl font-semibold flex items-center justify-center gap-3"
                >
                  GET QUOTE
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Services Section - White Cards */}
        <div className="py-24 px-4">
          <div className="max-w-[1600px] mx-auto">
            <h2 className="text-6xl md:text-7xl font-bold text-white mb-16 text-center">
              SERVICES
            </h2>
            
            {/* Services Grid - All 6 Images in Two Rows */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {servicesWithImages.map((service) => (
                <div 
                  key={service.id}
                  className="white-card rounded-2xl overflow-hidden cursor-pointer aspect-[4/3] relative group"
                  onClick={() => navigate('/services')}
                >
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent">
                    <div className="absolute bottom-8 left-8">
                      <p className="text-3xl text-white font-medium">{service.title}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* View More Button */}
            <div className="text-center">
              <button 
                onClick={handleViewMoreServices}
                className="secondary-button px-12 py-4 rounded-full text-lg font-medium"
              >
                VIEW ALL SERVICES →
              </button>
            </div>
          </div>
        </div>

        {/* Gallery Section - White Cards */}
        <div className="py-24 px-4">
          <div className="max-w-[1600px] mx-auto">
            <h2 className="text-6xl md:text-7xl font-bold text-white mb-16 text-center">
              GALLERY
            </h2>
            
            {/* Gallery Grid - Images Only */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {galleryImages.slice(0, 3).map((item) => (
                <div 
                  key={item.id}
                  className="white-card rounded-2xl overflow-hidden cursor-pointer aspect-[4/3]"
                  onClick={() => navigate('/gallery')}
                >
                  <img 
                    src={item.image} 
                    alt="Gallery image"
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                  />
                </div>
              ))}
            </div>
            
            {/* View More Button */}
            <div className="text-center">
              <button 
                onClick={handleViewMoreGallery}
                className="secondary-button px-12 py-4 rounded-full text-lg font-medium"
              >
                VIEW FULL GALLERY →
              </button>
            </div>
          </div>
        </div>

        {/* Contact Form Section - Integrated with White Boxes */}
        <div className="py-24 px-4">
          <div className="max-w-[1200px] mx-auto">
            <h2 className="text-6xl md:text-7xl font-bold text-white mb-16 text-center">
              CONTACT US
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Contact Info */}
              <div className="space-y-8">
                <div className="form-container p-8 rounded-2xl">
                  <h3 className="text-3xl font-bold text-blue-800 mb-6">CONTACT INFO</h3>
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center">
                        <Phone className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <p className="text-blue-800 text-xl font-medium">+91 91416 21820</p>
                        <p className="text-blue-600 text-sm">+91 94810 16006</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center">
                        <Mail className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <p className="text-blue-800 text-xl font-medium">info@sriAyyappanGlass.com</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center">
                        <MapPin className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <p className="text-blue-800 text-xl font-medium">Bangalore</p>
                        <p className="text-blue-600 text-sm">Karnataka, India</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Services List */}
                <div className="form-container p-8 rounded-2xl">
                  <h3 className="text-3xl font-bold text-blue-800 mb-6">OUR SERVICES</h3>
                  <div className="grid grid-cols-2 gap-3">
                    {services.map((service, idx) => (
                      <div key={idx} className="service-item p-3 rounded-lg text-center font-medium">
                        {service}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Contact Form */}
              <div className="lg:col-span-2 form-container p-8 rounded-2xl">
                {submitted ? (
                  <div className="success-card text-center py-12 rounded-2xl">
                    <div className="w-24 h-24 rounded-full bg-green-50 flex items-center justify-center mx-auto mb-8">
                      <CheckCircle className="w-12 h-12 success-icon" />
                    </div>
                    <h4 className="success-title text-4xl font-bold mb-4">THANK YOU!</h4>
                    <p className="success-text text-xl mb-8">We'll contact you within 30 minutes.</p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="secondary-button px-8 py-4 rounded-full text-lg font-medium"
                    >
                      SEND ANOTHER MESSAGE
                    </button>
                  </div>
                ) : (
                  <>
                    <h3 className="text-3xl font-bold text-blue-800 mb-8">GET FREE QUOTE</h3>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Your Name"
                          required
                          className="form-input w-full p-4 rounded-xl focus:outline-none placeholder-gray-500"
                        />
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="Email Address"
                          required
                          className="form-input w-full p-4 rounded-xl focus:outline-none placeholder-gray-500"
                        />
                      </div>
                      
                      <div className="grid md:grid-cols-2 gap-6">
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="Phone Number"
                          required
                          className="form-input w-full p-4 rounded-xl focus:outline-none placeholder-gray-500"
                        />
                        <select
                          name="service"
                          value={formData.service}
                          onChange={handleChange}
                          required
                          className="form-input w-full p-4 rounded-xl focus:outline-none"
                        >
                          <option value="" className="bg-white text-gray-500">Select Service</option>
                          {services.map((service, idx) => (
                            <option key={idx} value={service} className="bg-white text-blue-800">{service}</option>
                          ))}
                        </select>
                      </div>
                      
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Project Details / Message"
                        rows="4"
                        required
                        className="form-input w-full p-4 rounded-xl focus:outline-none placeholder-gray-500"
                      />
                      
                      <button
                        type="submit"
                        className="form-submit-button w-full py-5 rounded-xl font-bold text-xl flex items-center justify-center gap-3"
                      >
                        <Send className="w-6 h-6" />
                        SEND MESSAGE
                      </button>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="py-16 px-4">
          <div className="max-w-[1200px] mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="stats-value text-5xl md:text-6xl font-bold mb-2">9+</div>
                <div className="stats-label text-lg">YEARS</div>
              </div>
              <div className="text-center">
                <div className="stats-value text-5xl md:text-6xl font-bold mb-2">850+</div>
                <div className="stats-label text-lg">PROJECTS</div>
              </div>
              <div className="text-center">
                <div className="stats-value text-5xl md:text-6xl font-bold mb-2">99%</div>
                <div className="stats-label text-lg">SATISFACTION</div>
              </div>
              <div className="text-center">
                <div className="stats-value text-5xl md:text-6xl font-bold mb-2">4.9</div>
                <div className="stats-label text-lg">RATING</div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
         
      </div>
    </div>
  );
};

export default Home;