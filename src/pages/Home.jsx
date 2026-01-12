 
import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Phone, Mail, MapPin, Send, CheckCircle, ChevronRight, Play, Pause, Star, Quote, ChevronLeft,Calendar, Briefcase, Smile,  ChevronRight as RightChevron, Building } from 'lucide-react';

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

// Import client logos
import adarsh from "../assets/img/logos/adarsh-group.png";
import homelane from "../assets/img/logos/Homelane.png";
import dsmax from "../assets/img/logos/Ds-Max.png";
import neo from "../assets/img/logos/neo.jpg";
import gateway from "../assets/img/logos/hotel.png";
import eta from "../assets/img/logos/Et-Mall.png";

const Home = () => {
  const navigate = useNavigate();
  const videoRef = useRef(null);
  const reviewsContainerRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);
  const [autoScroll, setAutoScroll] = useState(true);
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

  // Client logos
  const clients = [
    { name: "Adarsh Builders", logo: adarsh },
    { name: "Homelane Interiors", logo: homelane },
    { name: "DS Max (Kryshvi Interiors)", logo: dsmax },
    { name: "Neo Studio", logo: neo },
    { name: "Gateway Hotel", logo: gateway },
    { name: "ETA Mall", logo: eta },
  ];

  // Services with images and paths
  const servicesWithImages = [
    { 
      id: 1, 
      title: "SHOWER PARTITIONS", 
      image: shower90, 
      path: "/services/shower-enclosures" 
    },
    { 
      id: 2, 
      title: "UPVC WINDOWS", 
      image: upvcWindows, 
      path: "/services/upvc-windows-price" 
    },
    { 
      id: 3, 
      title: "GLASS RAILINGS", 
      image: glassRailings, 
      path: "/services/balcony-railing" 
    },
    { 
      id: 4, 
      title: "LACQUERED GLASS", 
      image: lacqueredGlass, 
      path: "/services/lacquered-glass" 
    },
    { 
      id: 5, 
      title: "LED MIRRORS", 
      image: ledMirrors, 
      path: "/services/led-smart-mirrors" 
    },
    { 
      id: 6, 
      title: "TOUGHENED GLASS", 
      image: toughenedGlass, 
      path: "/services/toughened-glass" 
    }
  ];

  const galleryImages = [
    { id: 1, image: gallery1 },
    { id: 2, image: gallery2 },
    { id: 3, image: shower90 },
    { id: 4, image: upvcWindows },
    { id: 5, image: glassRailings },
    { id: 6, image: lacqueredGlass }
  ];

  // Reviews/Testimonials data
  const reviews = [
    {
      id: 1,
      name: "ROHITH VANDANA",
      location: "Chennai",
      rating: 5,
      text: "I had a wonderful experience with Mr. Umeah from DJ Glass interiors, had a great experience for our office partition work with quality material and reasonable price. On time quality work with prompt commitment.",
      date: "2024-02-15"
    },
    {
      id: 2,
      name: "GURU NATH",
      location: "Kerala",
      rating: 5,
      text: "We have contacted DJ Glass for shower cubicle. The response was very quick and within 3-4 working days they have finished work. The service which they have given is wonderful. Done perfectly. Highly recommended.",
      date: "2024-01-20"
    },
    {
      id: 3,
      name: "MARY DELNA",
      location: "Andhra Pradesh",
      rating: 5,
      text: "The service was good. Within the limited time with best cost they do complete the work as well as Umeah gives the best coordination. - SION Semiconductors Pvt. Ltd.",
      date: "2024-03-05"
    },
    {
      id: 4,
      name: "ARUN KUMAR",
      location: "Bangalore",
      rating: 5,
      text: "Excellent workmanship! Installed glass partitions for our corporate office. Professional team, clean work, and completed before deadline. Will definitely work with them again.",
      date: "2024-02-28"
    },
    {
      id: 5,
      name: "PRIYA SHARMA",
      location: "Hyderabad",
      rating: 5,
      text: "Got UPVC windows installed for my new home. Quality materials, perfect fitting, and excellent customer service. The team was very professional and responsive throughout.",
      date: "2024-03-10"
    },
    {
      id: 6,
      name: "VIJAY KUMAR",
      location: "Coimbatore",
      rating: 5,
      text: "Best glass service in Bangalore! Installed balcony railings and shower cubicles. Quality is top-notch and the team was very professional. On-time delivery.",
      date: "2024-03-01"
    },
    {
      id: 7,
      name: "SANDEEP RAO",
      location: "Mumbai",
      rating: 5,
      text: "Outstanding service! The glass railings they installed at my restaurant look magnificent. Great attention to detail and timely completion.",
      date: "2024-02-25"
    }
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

  const scrollNext = () => {
    if (reviewsContainerRef.current) {
      const container = reviewsContainerRef.current;
      const cardWidth = 300; // Fixed width for square cards
      const gap = 24; // gap-6 = 24px
      const scrollAmount = (cardWidth + gap) * 3; // Scroll 3 cards at a time
      container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      
      // Update current index
      setCurrentReviewIndex(prev => Math.min(prev + 3, reviews.length - 3));
    }
  };

  const scrollPrev = () => {
    if (reviewsContainerRef.current) {
      const container = reviewsContainerRef.current;
      const cardWidth = 300; // Fixed width for square cards
      const gap = 24; // gap-6 = 24px
      const scrollAmount = (cardWidth + gap) * 3; // Scroll 3 cards at a time
      container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
      
      // Update current index
      setCurrentReviewIndex(prev => Math.max(prev - 3, 0));
    }
  };

  // Auto scroll effect
  useEffect(() => {
    let interval;
    if (autoScroll && reviewsContainerRef.current) {
      interval = setInterval(() => {
        scrollNext();
        // Reset to first if at end
        if (currentReviewIndex >= reviews.length - 3) {
          setTimeout(() => {
            if (reviewsContainerRef.current) {
              reviewsContainerRef.current.scrollTo({ left: 0, behavior: 'smooth' });
            }
            setCurrentReviewIndex(0);
          }, 1000);
        }
      }, 5000); // Auto scroll every 5 seconds
    }
    return () => clearInterval(interval);
  }, [autoScroll, currentReviewIndex]);

  // Pause auto scroll on hover
  const handleMouseEnter = () => setAutoScroll(false);
  const handleMouseLeave = () => setAutoScroll(true);

  // Render star rating
  const renderStars = (rating) => {
    return (
      <div className="flex gap-1">
        {[...Array(5)].map((_, i) => (
          <Star 
            key={i} 
            className={`w-5 h-5 ${i < rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} 
          />
        ))}
      </div>
    );
  };

  return (
    <div className="relative overflow-hidden">
      {/* CSS Styles */}
      <style jsx>{`
        .dark-blue-bg {
          background: linear-gradient(135deg, 
            rgba(12, 25, 74, 1) 0%,
            rgba(15, 30, 90, 1) 50%,
            rgba(20, 40, 110, 1) 100%
          );
        }

        .white-card {
          background: white;
          border: 1px solid #dbeafe;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
          transition: transform 0.25s ease, box-shadow 0.25s ease;
          will-change: transform;
          color: #1e40af;
        }

        .white-card:hover {
          transform: scale(1.02);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
          border-color: #93c5fd;
        }

        .review-card {
          background: white;
          border: 1px solid #dbeafe;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          transition: transform 0.25s ease, box-shadow 0.25s ease;
          will-change: transform;
          color: #1e40af;
          flex-shrink: 0;
          scroll-snap-align: start;
          width: 300px;
          height: 300px;
        }

        .review-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.15);
          border-color: #93c5fd;
        }

        .reviews-container {
          scroll-behavior: smooth;
          scrollbar-width: none; /* Firefox */
          -ms-overflow-style: none; /* IE and Edge */
          scroll-snap-type: x mandatory;
        }

        .reviews-container::-webkit-scrollbar {
          display: none; /* Chrome, Safari, Opera */
        }

        .scroll-button {
          background: white;
          border: 2px solid #3b82f6;
          transition: all 0.25s ease;
          opacity: 0.9;
        }

        .scroll-button:hover {
          background: #f8fafc;
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
          opacity: 1;
        }

        .scroll-button:disabled {
          opacity: 0.3;
          cursor: not-allowed;
        }

        .indicator-dot {
          transition: all 0.3s ease;
          cursor: pointer;
        }

        .indicator-dot:hover {
          transform: scale(1.2);
        }

        .video-overlay {
          background: linear-gradient(135deg, 
            rgba(12, 25, 74, 0.8) 0%,
            rgba(12, 25, 74, 0.55) 50%,
            rgba(12, 25, 74, 0.35) 100%
          );
        }

        .primary-button {
          background: white;
          color: #1e40af;
          border: 2px solid #3b82f6;
          transition: all 0.25s ease;
        }

        .primary-button:hover {
          background: #f8fafc;
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
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

        .video-control-button {
          background: white;
          border: 2px solid #3b82f6;
          transition: all 0.25s ease;
        }

        .video-control-button:hover {
          background: #f8fafc;
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
        }

        .form-container {
          background: white;
          border: 1px solid #dbeafe;
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
        }

        .form-input {
          background: #f8fafc;
          border: 1px solid #dbeafe;
          color: #1e40af;
          transition: all 0.25s ease;
        }

        .form-input:focus {
          background: white;
          border-color: #60a5fa;
          outline: none;
          box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.3);
        }

        .form-input::placeholder {
          color: #64748b;
        }

        .form-submit-button {
          background: #3b82f6;
          color: white;
          border: 2px solid #3b82f6;
          transition: all 0.25s ease;
        }

        .form-submit-button:hover {
          background: #2563eb;
          box-shadow: 0 15px 35px rgba(37, 99, 235, 0.3);
        }

        .stats-value {
          color: white;
        }

        .stats-label {
          color: rgba(255, 255, 255, 0.8);
        }

        .service-item {
          background: #eff6ff;
          color: #1e40af;
          border: 1px solid #dbeafe;
          transition: all 0.25s ease;
        }

        .service-item:hover {
          background: #dbeafe;
          border-color: #93c5fd;
        }

        .success-card {
          background: white;
          border: 1px solid #dbeafe;
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.15);
        }

        .success-icon {
          color: #10b981;
        }

        .success-title {
          color: #1e40af;
        }

        .success-text {
          color: #64748b;
        }

        .review-avatar {
          background: linear-gradient(135deg, #3b82f6, #1d4ed8);
          color: white;
          font-weight: bold;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .review-name {
          color: #1e40af;
          font-weight: bold;
        }

        .review-location {
          color: #64748b;
        }

        .review-text {
          color: #4b5563;
          line-height: 1.6;
        }

        /* Mobile responsive styles */
        @media (max-width: 768px) {
          .review-card {
            width: 280px;
            height: 280px;
          }
        }

        @media (max-width: 480px) {
          .review-card {
            width: 260px;
            height: 260px;
          }
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
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-wide text-orange-500 mb-4 sm:mb-6 leading-snug">
                SRI AYYAPPAN<br />GLASS
              </h1>

              <p className="text-2xl md:text-3xl text-white/90 mb-12">
                PREMIUM GLASS SOLUTIONS SINCE 2017
              </p>
              
              <div className="flex flex-col md:flex-row gap-6">
                <button
  onClick={() => navigate("/contact")}
  className="primary-button px-12 py-5 rounded-full text-xl font-semibold flex items-center justify-center gap-3"
>
  <Phone className="w-6 h-6" />
  CONTACT US
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

        {/* Services Section */}
        <div className="py-24 px-4">
          <div className="max-w-[1600px] mx-auto">
            <h2 className="text-6xl md:text-7xl font-bold text-white mb-16 text-center">
              SERVICES
            </h2>
            
            {/* Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {servicesWithImages.map((service) => (
                <div 
                  key={service.id}
                  className="white-card rounded-2xl overflow-hidden cursor-pointer aspect-[4/3] relative group"
                  onClick={() => navigate(service.path)}
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

        {/* Client Logos Section */}
        <div className="py-16 md:py-20 px-4 bg-gradient-to-b from-transparent to-blue-900/20">
          <div className="max-w-[1600px] mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-4">
                <Building className="w-5 h-5 text-blue-300" />
                <span className="text-blue-300 font-medium tracking-widest uppercase text-sm">Trusted By</span>
              </div>
              <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
                Our Esteemed Clients
              </h2>
              <p className="text-xl text-white/80 max-w-3xl mx-auto">
                Trusted by leading brands and organizations across India for premium glass solutions
              </p>
            </div>

            {/* Client Logos Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 md:gap-8">
              {clients.map((client, index) => (
                <div
                  key={index}
                  className="group relative bg-gradient-to-br from-white/5 to-white/0 border border-white/10 rounded-2xl p-4 md:p-6 flex flex-col items-center justify-center hover:border-blue-500/50 transition-all duration-300 hover:scale-105"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="h-12 md:h-16 object-contain group-hover:scale-110 transition-transform duration-300 relative z-10"
                    loading="lazy"
                  />
                  <p className="mt-3 md:mt-4 text-xs md:text-sm font-semibold text-gray-300 group-hover:text-white text-center relative z-10">
                    {client.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Gallery Section */}
        <div className="py-24 px-4">
          <div className="max-w-[1600px] mx-auto">
            <h2 className="text-6xl md:text-7xl font-bold text-white mb-16 text-center">
              GALLERY
            </h2>
            
            {/* Gallery Grid */}
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

        {/* Contact Form Section */}
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
                        <p className="text-blue-800 text-xl font-medium">+91 94810 16006</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center">
                        <Mail className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <p className="text-blue-800 text-xl font-medium">info@sriayyappanglass.com</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center">
                        <MapPin className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <p className="text-blue-800 text-xl font-medium">No.25, 2nd Mainroad, Munithiyappa Layout, Horamavu Post, Pooja Garden, Kalkere Village, Bangalore, 560 043.</p>
                        <p className="text-blue-800 text-xl font-medium">Karnataka, India</p>
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
                          className="form-input w-full p-4 rounded-xl placeholder-gray-500"
                        />
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="Email Address"
                          required
                          className="form-input w-full p-4 rounded-xl placeholder-gray-500"
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
                          className="form-input w-full p-4 rounded-xl placeholder-gray-500"
                        />
                        <select
                          name="service"
                          value={formData.service}
                          onChange={handleChange}
                          required
                          className="form-input w-full p-4 rounded-xl"
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
                        className="form-input w-full p-4 rounded-xl placeholder-gray-500"
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
        

<div className="py-16 px-4 bg-gradient-to-r   to-blue-900">

  <div className="max-w-[1200px] mx-auto">
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">

      {/* YEARS */}
      <div className="text-center group">
        <div className="mx-auto mb-4 w-14 h-14 rounded-full bg-blue-600/20 flex items-center justify-center group-hover:scale-110 transition">
          <Calendar className="text-blue-400 w-7 h-7" />
        </div>
        <div className="stats-value text-5xl md:text-6xl font-bold text-white mb-1">
          9<span className="text-blue-400">+</span>
        </div>
        <div className="stats-label text-sm tracking-widest text-gray-400">
          YEARS
        </div>
      </div>

      {/* PROJECTS */}
      <div className="text-center group">
        <div className="mx-auto mb-4 w-14 h-14 rounded-full bg-green-600/20 flex items-center justify-center group-hover:scale-110 transition">
          <Briefcase className="text-green-400 w-7 h-7" />
        </div>
        <div className="stats-value text-5xl md:text-6xl font-bold text-white mb-1">
          850<span className="text-green-400">+</span>
        </div>
        <div className="stats-label text-sm tracking-widest text-gray-400">
          PROJECTS
        </div>
      </div>

      {/* SATISFACTION */}
      <div className="text-center group">
        <div className="mx-auto mb-4 w-14 h-14 rounded-full bg-yellow-600/20 flex items-center justify-center group-hover:scale-110 transition">
          <Smile className="text-yellow-400 w-7 h-7" />
        </div>
        <div className="stats-value text-5xl md:text-6xl font-bold text-white mb-1">
          99<span className="text-yellow-400">%</span>
        </div>
        <div className="stats-label text-sm tracking-widest text-gray-400">
          SATISFACTION
        </div>
      </div>

      {/* RATING */}
      <div className="text-center group">
        <div className="mx-auto mb-4 w-14 h-14 rounded-full bg-pink-600/20 flex items-center justify-center group-hover:scale-110 transition">
          <Star className="text-pink-400 w-7 h-7" />
        </div>
        <div className="stats-value text-5xl md:text-6xl font-bold text-white mb-1">
          4.9
        </div>
        <div className="stats-label text-sm tracking-widest text-gray-400">
          RATING
        </div>
      </div>

    </div>
  </div>
</div>


        {/* Horizontal Scrolling Reviews Section */}
        <div className="py-24 px-4">
          <div className="max-w-[1600px] mx-auto">
            <h2 className="text-6xl md:text-7xl font-bold text-white mb-4 text-center">
              Our Testimonials
            </h2>
            <p className="text-xl text-white/80 text-center mb-12">Hear what our satisfied customers say</p>
            
            {/* Overall Rating Summary */}
            <div className="flex justify-center items-center gap-4 mb-12">
              <div className="flex items-center gap-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-8 h-8 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <div className="text-white text-2xl font-bold">4.9/5.0</div>
              <div className="text-white/80 text-lg">({reviews.length} reviews)</div>
            </div>

            {/* Horizontal Scrolling Reviews Container */}
            <div className="relative" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
              {/* Left Scroll Button */}
              <button 
                onClick={scrollPrev}
                disabled={currentReviewIndex === 0}
                className="scroll-button absolute left-0 md:left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center shadow-lg"
              >
                <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-blue-700" />
              </button>

              {/* Reviews Horizontal Container */}
              <div 
                ref={reviewsContainerRef}
                className="reviews-container flex overflow-x-auto gap-6 px-2 md:px-4 pb-6 snap-x snap-mandatory"
                style={{ 
                  scrollbarWidth: 'none',
                  msOverflowStyle: 'none'
                }}
              >
                {reviews.map((review) => (
                  <div
                    key={review.id}
                    className="review-card rounded-2xl p-6 flex flex-col justify-between"
                  >
                    {/* Quote Icon */}
                    <div className="mb-3">
                      <Quote className="w-8 h-8 md:w-10 md:h-10 text-blue-500 opacity-20" />
                    </div>
                    
                    {/* Rating */}
                    <div className="mb-3">
                      {renderStars(review.rating)}
                    </div>
                    
                    {/* Review Text */}
                    <p className="review-text text-sm md:text-base line-clamp-3 mb-4">
                      {review.text}
                    </p>
                    
                    {/* Client Info */}
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 md:w-12 md:h-12 review-avatar rounded-full text-lg md:text-xl font-bold">
                        {review.name.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div>
                        <h4 className="review-name text-base md:text-lg font-bold">{review.name}</h4>
                        <p className="review-location text-xs md:text-sm">{review.location}</p>
                        <p className="review-location text-xs mt-1">{review.date}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Right Scroll Button */}
              <button 
                onClick={scrollNext}
                disabled={currentReviewIndex >= reviews.length - 3}
                className="scroll-button absolute right-0 md:right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center shadow-lg"
              >
                <RightChevron className="w-5 h-5 md:w-6 md:h-6 text-blue-700" />
              </button>
            </div>

            {/* Scroll Indicators for Desktop */}
            <div className="hidden md:flex justify-center gap-2 mt-8">
              {Array.from({ length: Math.ceil(reviews.length / 3) }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    if (reviewsContainerRef.current) {
                      const scrollAmount = (300 + 24) * 3 * index; // 300px width + 24px gap
                      reviewsContainerRef.current.scrollTo({ left: scrollAmount, behavior: 'smooth' });
                      setCurrentReviewIndex(index * 3);
                    }
                  }}
                  className={`indicator-dot w-3 h-3 rounded-full ${
                    Math.floor(currentReviewIndex / 3) === index 
                      ? 'bg-blue-500 scale-125' 
                      : 'bg-white/50'
                  }`}
                  aria-label={`Go to review group ${index + 1}`}
                />
              ))}
            </div>

            {/* Mobile Scroll Indicator */}
            <div className="md:hidden flex items-center justify-center gap-2 mt-6">
              <div className="text-white/70 text-sm">
                Swipe to see more reviews
              </div>
              <RightChevron className="w-4 h-4 text-white/70 animate-pulse" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
 