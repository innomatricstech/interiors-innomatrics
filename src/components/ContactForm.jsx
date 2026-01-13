import React, { useState } from 'react';
import { Send, Phone, Mail, MapPin, CheckCircle, Clock, Shield } from 'lucide-react';
import { Link } from "react-router-dom";
import emailjs from "@emailjs/browser";

// Import real images
import gallery1 from "../assets/img/modern-bathroom-with-small-space-contemporary-decor.jpg";
import gallery3 from "../assets/img/glazing works.jpg";
import gallery7 from "../assets/img/beautiful-hotel-insights-details.jpg";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const services = [
    'SHOWER PARTITIONS',
    'UPVC WINDOWS',
    'GLASS RAILINGS',
    'TOUGHENED GLASS',
    'LACQUERED GLASS',
    'LED MIRRORS',
    'FRAMELESS GLASS',
    'SPIDER FITTINGS',
    'CUSTOM SOLUTIONS'
  ];

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6 md:w-8 md:h-8" />,
      title: "PHONE",
      main: "+91 91416 21820",
      sub: "+91 94810 16006",
      color: "text-blue-600"
    },
    {
      icon: <Mail className="w-6 h-6 md:w-8 md:h-8" />,
      title: "EMAIL",
      main: [
         
        "info@sriayyapanglass.com"
      ],
      sub: "Available 24/7",
      color: "text-blue-600"
    },
    {
      icon: <MapPin className="w-6 h-6 md:w-8 md:h-8" />,
      title: "LOCATION",
      main: "No.25, 2nd Mainroad, Munithiyappa Layout, Horamavu Post, Pooja Garden, Kalkere Village, Bangalore, 560 043, Karnataka, India",
      color: "text-blue-600"
    }
  ];

  const benefits = [
    {
      icon: <Clock className="w-6 h-6 md:w-8 md:h-8" />,
      title: "30-MINUTE RESPONSE",
      desc: "We respond within 30 minutes"
    },
    {
      icon: <Shield className="w-6 h-6 md:w-8 md:h-8" />,
      title: "FREE CONSULTATION",
      desc: "Get expert advice for free"
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

    emailjs
      .send(
        "service_1w6e7b8",
        "template_527ixtm",
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          service: formData.service,
          message: formData.message,
          year: new Date().getFullYear(),
        },
        "rKrHOvAx59tAEL0ed"
      )
      .then(
        () => {
          setSubmitted(true);
          setFormData({
            name: "",
            email: "",
            phone: "",
            service: "",
            message: "",
          });
          setTimeout(() => setSubmitted(false), 5000);
        },
        (error) => {
          console.error("EmailJS Error:", error);
          alert("❌ Message not sent. Try again.");
        }
      );
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

        /* ⬜ WHITE CARD */
        .white-card {
          background: white;
          border: 1px solid #dbeafe;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          transition: transform 0.25s ease, box-shadow 0.25s ease;
          color: #1e40af;
        }

        @media (min-width: 768px) {
          .white-card {
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
          }
          
          .white-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
            border-color: #93c5fd;
          }
        }

        /* 🦸 HERO OVERLAY */
        .hero-gradient {
          background: linear-gradient(135deg, 
            rgba(12, 25, 74, 0.85) 0%,    /* dark blue overlay */
            rgba(12, 25, 74, 0.6) 50%,
            rgba(12, 25, 74, 0.4) 100%
          );
        }

        /* 📝 FORM INPUT */
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

        /* 🔘 SUBMIT BUTTON */
        .submit-button {
          background: #3b82f6;
          color: white;
          border: 2px solid #3b82f6;
          transition: all 0.25s ease;
        }

        .submit-button:hover {
          background: #2563eb;
          box-shadow: 0 15px 35px rgba(37, 99, 235, 0.3);
        }

        /* 📊 CONTACT INFO CARDS */
        .contact-info-card {
          background: white;
          border: 1px solid #dbeafe;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }

        @media (min-width: 768px) {
          .contact-info-card {
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
          }
        }

        .contact-info-title {
          color: #64748b;
        }

        .contact-info-main {
          color: #1e40af;
        }

        .contact-info-sub {
          color: #64748b;
        }

        /* 🎖️ BENEFITS SECTION */
        .benefit-icon {
          color: #3b82f6;
        }

        .benefit-title {
          color: #1e40af;
        }

        .benefit-desc {
          color: #64748b;
        }

        /* 📸 GALLERY CONTAINER */
        .gallery-container {
          background: white;
          border-radius: 0.5rem;
          overflow: hidden;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }

        @media (min-width: 768px) {
          .gallery-container {
            border-radius: 1rem;
            box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
          }
        }

        /* 📈 STATS SECTION */
        .stats-value {
          color: white;
        }

        .stats-label {
          color: rgba(255, 255, 255, 0.8);
        }

        /* 🎯 SUCCESS MESSAGE */
        .success-card {
          background: white;
          border: 1px solid #dbeafe;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }

        @media (min-width: 768px) {
          .success-card {
            box-shadow: 0 15px 35px rgba(0, 0, 0, 0.15);
          }
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
      `}</style>

      <div className="dark-blue-bg min-h-screen">
        {/* Hero Section - Large Image */}
        <div className="relative h-[40vh] sm:h-[50vh] md:h-[70vh] min-h-[400px] sm:min-h-[500px] md:min-h-[600px]">
          <img 
            src={gallery1} 
            alt="Contact Us"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 hero-gradient"></div>
          
          <div className="relative z-10 h-full flex items-center justify-center">
            <div className="text-center px-4">
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-white mb-4 sm:mb-6 tracking-tight">
                CONTACT
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white/90">
                GET YOUR FREE QUOTE
              </p>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-8">
          <div className="max-w-[1800px] mx-auto">
            {/* Contact Info Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-12 sm:mb-16 md:mb-20">
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className="contact-info-card p-4 sm:p-6 md:p-8 lg:p-10 rounded-xl sm:rounded-2xl"
                >
                  {/* Icon */}
                  <div className={`${info.color} mb-4 sm:mb-6 flex justify-center`}>
                    {info.icon}
                  </div>

                  {/* Title */}
                  <p className="contact-info-title text-xs sm:text-sm uppercase tracking-wider mb-2 font-medium">
                    {info.title}
                  </p>

                  {/* MAIN VALUE */}
                  {Array.isArray(info.main) ? (
                    <div className="space-y-1 sm:space-y-2">
                      {info.main.map((value, i) => (
                        <p
                          key={i}
                          className="contact-info-main text-sm sm:text-base md:text-lg lg:text-xl font-bold break-words"
                        >
                          {value}
                        </p>
                      ))}
                    </div>
                  ) : (
                    <p className="contact-info-main text-base sm:text-lg md:text-xl lg:text-2xl font-bold mb-1 break-words">
                      {info.main}
                    </p>
                  )}

                  <p className="contact-info-main text-sm sm:text-base md:text-lg lg:text-2xl font-bold mb-1 break-words">
                    {info.sub}
                  </p>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
              {/* Contact Form */}
              <div className="white-card p-4 sm:p-6 md:p-8 lg:p-10 rounded-xl sm:rounded-2xl">
                {submitted ? (
                  <div className="success-card text-center py-8 sm:py-10 md:py-12 rounded-xl sm:rounded-2xl">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full bg-green-50 flex items-center justify-center mx-auto mb-6 sm:mb-8">
                      <CheckCircle className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 success-icon" />
                    </div>
                    <h3 className="success-title text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
                      THANK YOU!
                    </h3>
                    <p className="success-text text-base sm:text-lg md:text-xl mb-2">
                      We've received your message
                    </p>
                    <p className="success-text text-sm sm:text-base md:text-lg">
                      Our team will contact you within 30 minutes
                    </p>
                  </div>
                ) : (
                  <>
                    <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-blue-800 mb-6 sm:mb-8 md:mb-10">
                      SEND MESSAGE
                    </h3>
                    
                    <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                        <div>
                          <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="YOUR NAME"
                            required
                            className="form-input w-full p-3 sm:p-4 md:p-5 rounded-lg sm:rounded-xl focus:outline-none placeholder-gray-500 uppercase tracking-wider text-sm sm:text-base font-medium"
                          />
                        </div>
                        <div>
                          <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="PHONE NUMBER"
                            required
                            className="form-input w-full p-3 sm:p-4 md:p-5 rounded-lg sm:rounded-xl focus:outline-none placeholder-gray-500 uppercase tracking-wider text-sm sm:text-base font-medium"
                          />
                        </div>
                      </div>

                      <div>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="EMAIL ADDRESS"
                          required
                          className="form-input w-full p-3 sm:p-4 md:p-5 rounded-lg sm:rounded-xl focus:outline-none placeholder-gray-500 uppercase tracking-wider text-sm sm:text-base font-medium"
                        />
                      </div>

                      <div>
                        <select
                          name="service"
                          value={formData.service}
                          onChange={handleChange}
                          required
                          className="form-input w-full p-3 sm:p-4 md:p-5 rounded-lg sm:rounded-xl focus:outline-none uppercase tracking-wider text-sm sm:text-base font-medium"
                        >
                          <option value="" className="bg-white text-gray-500">SELECT SERVICE</option>
                          {services.map((service, idx) => (
                            <option key={idx} value={service} className="bg-white text-blue-800 uppercase font-medium">
                              {service}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="PROJECT DETAILS / MESSAGE"
                          rows="4"
                          required
                          className="form-input w-full p-3 sm:p-4 md:p-5 rounded-lg sm:rounded-xl focus:outline-none placeholder-gray-500 uppercase tracking-wider text-sm sm:text-base font-medium"
                        />
                      </div>

                      <button
                        type="submit"
                        className="submit-button w-full py-3 sm:py-4 md:py-5 rounded-lg sm:rounded-xl font-bold text-base sm:text-lg md:text-xl flex items-center justify-center gap-2 sm:gap-3"
                      >
                        <Send className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
                        SEND MESSAGE
                      </button>
                    </form>
                  </>
                )}
              </div>

              {/* Benefits & Gallery */}
              <div className="space-y-8 sm:space-y-10 md:space-y-12">
                {/* Benefits */}
                <div className="white-card p-4 sm:p-6 md:p-8 lg:p-10 rounded-xl sm:rounded-2xl">
                  <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-blue-800 mb-6 sm:mb-8 md:mb-10">
                    WHY CHOOSE US
                  </h3>
                  <div className="space-y-6 sm:space-y-8">
                    {benefits.map((benefit, index) => (
                      <div key={index} className="flex items-start gap-4 sm:gap-6">
                        <div className="benefit-icon mt-0.5 sm:mt-1">
                          {benefit.icon}
                        </div>
                        <div>
                          <h4 className="benefit-title text-base sm:text-lg md:text-xl font-bold mb-1">
                            {benefit.title}
                          </h4>
                          <p className="benefit-desc text-sm sm:text-base">
                            {benefit.desc}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Gallery Preview */}
                <div className="white-card p-4 sm:p-6 md:p-8 lg:p-10 rounded-xl sm:rounded-2xl">
                  <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-blue-800 mb-6 sm:mb-8 md:mb-10">
                    OUR WORK
                  </h3>
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
                    <Link to="/our-works">
                      <div className="gallery-container aspect-square bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center cursor-pointer hover:scale-105 transition">
                        <p className="text-blue-600 text-sm sm:text-base md:text-lg font-medium">
                          VIEW MORE
                        </p>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 mt-12 sm:mt-16 md:mt-20 lg:mt-24">
              <div className="text-center">
                <div className="stats-value text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-1 sm:mb-2">25+</div>
                <p className="stats-label uppercase tracking-wider text-xs sm:text-sm">YEARS</p>
              </div>
              <div className="text-center">
                <div className="stats-value text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-1 sm:mb-2">850+</div>
                <p className="stats-label uppercase tracking-wider text-xs sm:text-sm">PROJECTS</p>
              </div>
              <div className="text-center">
                <div className="stats-value text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-1 sm:mb-2">99%</div>
                <p className="stats-label uppercase tracking-wider text-xs sm:text-sm">CLIENTS</p>
              </div>
              <div className="text-center">
                <div className="stats-value text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-1 sm:mb-2">24/7</div>
                <p className="stats-label uppercase tracking-wider text-xs sm:text-sm">SUPPORT</p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="footer-container py-6 sm:py-8 md:py-10 lg:py-12 px-4 text-center">
          <p className="footer-main text-lg sm:text-xl md:text-2xl lg:text-3xl mb-2 font-medium">SRI AYYAPPAN GLASS</p>
          <p className="footer-sub text-sm sm:text-base">BANGALORE • SINCE 2017</p>
        </div>
      </div>
    </>
  );
};

export default ContactForm;