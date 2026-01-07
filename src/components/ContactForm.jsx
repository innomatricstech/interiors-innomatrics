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
      icon: <Phone className="w-8 h-8" />,
      title: "PHONE",
      main: "+91 91416 21820",
      sub: "+91 94810 16006",
      color: "text-blue-600"
    },
    {
  icon: <Mail className="w-8 h-8" />,
  title: "EMAIL",
  main: [
    "sriayyapanglassandplaywoods@gmail.com",
    "info@sriayyapanglass.com"
  ],
  sub: "Available 24/7",
  color: "text-blue-600"
},

     
    {
      icon: <MapPin className="w-8 h-8" />,
      title: "LOCATION",
      main: "Bangalore",
      sub: "Karnataka, India",
      color: "text-blue-600"
    }
  ];

  const benefits = [
    {
      icon: <Clock className="w-8 h-8" />,
      title: "30-MINUTE RESPONSE",
      desc: "We respond within 30 minutes"
    },
    {
      icon: <Shield className="w-8 h-8" />,
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
      "service_1w6e7b8",      // ✅ NEW WORKING SERVICE
      "template_527ixtm",     // ✅ YOUR TEMPLATE
      {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        service: formData.service,
        message: formData.message,
        year: new Date().getFullYear(),
      },
      "rKrHOvAx59tAEL0ed"      // ✅ PUBLIC KEY
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
          border: 1px solid #dbeafe; /* blue-100 */
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
          transition: transform 0.25s ease, box-shadow 0.25s ease;
          will-change: transform;
          color: #1e40af; /* blue-800 */
        }

        .white-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
          border-color: #93c5fd; /* blue-300 */
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

        /* 🔘 SUBMIT BUTTON */
        .submit-button {
          background: #3b82f6; /* blue-500 */
          color: white;
          border: 2px solid #3b82f6;
          transition: all 0.25s ease;
        }

        .submit-button:hover {
          background: #2563eb; /* blue-600 */
          box-shadow: 0 15px 35px rgba(37, 99, 235, 0.3);
        }

        /* 📊 CONTACT INFO CARDS */
        .contact-info-card {
          background: white;
          border: 1px solid #dbeafe;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
        }

        .contact-info-title {
          color: #64748b; /* slate-500 */
        }

        .contact-info-main {
          color: #1e40af; /* blue-800 */
        }

        .contact-info-sub {
          color: #64748b; /* slate-500 */
        }

        /* 🎖️ BENEFITS SECTION */
        .benefit-icon {
          color: #3b82f6; /* blue-500 */
        }

        .benefit-title {
          color: #1e40af; /* blue-800 */
        }

        .benefit-desc {
          color: #64748b; /* slate-500 */
        }

        /* 📸 GALLERY CONTAINER */
        .gallery-container {
          background: white;
          border-radius: 1rem;
          overflow: hidden;
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
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
        <div className="relative h-[70vh] min-h-[600px]">
          <img 
            src={gallery1} 
            alt="Contact Us"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 hero-gradient"></div>
          
          <div className="relative z-10 h-full flex items-center justify-center">
            <div className="text-center px-4">
              <h1 className="text-8xl md:text-9xl font-bold text-white mb-6 tracking-tighter">
                CONTACT
              </h1>
              <p className="text-3xl text-white/90">
                GET YOUR FREE QUOTE
              </p>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="py-24 px-4">
          <div className="max-w-[1800px] mx-auto">
            {/* Contact Info Cards */}
          {/* Contact Info Cards */}
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
  {contactInfo.map((info, index) => (
    <div
      key={index}
      className="contact-info-card p-10 rounded-2xl text-center"
    >
      {/* Icon */}
      <div className={`${info.color} mb-6 flex justify-center`}>
        {info.icon}
      </div>

      {/* Title */}
      <p className="contact-info-title text-sm uppercase tracking-wider mb-2 font-medium">
        {info.title}
      </p>

      {/* MAIN CONTENT (STRING / ARRAY SAFE) */}
   {/* MAIN VALUE */}
{Array.isArray(info.main) ? (
  <div className="space-y-2">
    {info.main.map((value, i) => (
      <p
        key={i}
        className="contact-info-main text-xl font-bold break-words"
      >
        {value}
      </p>
    ))}
  </div>
) : (
  <p className="contact-info-main text-2xl font-bold mb-1 break-words">
    {info.main}
  </p>
)}

<p className="contact-info-sub text-sm mt-2">
  {info.sub}
</p>

    </div>
  ))}
</div>



            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Contact Form */}
              <div className="white-card p-10 rounded-2xl">
                {submitted ? (
                  <div className="success-card text-center py-12 rounded-2xl">
                    <div className="w-24 h-24 rounded-full bg-green-50 flex items-center justify-center mx-auto mb-8">
                      <CheckCircle className="w-12 h-12 success-icon" />
                    </div>
                    <h3 className="success-title text-4xl font-bold mb-4">
                      THANK YOU!
                    </h3>
                    <p className="success-text text-xl mb-2">
                      We've received your message
                    </p>
                    <p className="success-text">
                      Our team will contact you within 30 minutes
                    </p>
                  </div>
                ) : (
                  <>
                    <h3 className="text-5xl font-bold text-blue-800 mb-10">
                      SEND MESSAGE
                    </h3>
                    
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="YOUR NAME"
                            required
                            className="form-input w-full p-5 rounded-xl focus:outline-none placeholder-gray-500 uppercase tracking-wider font-medium"
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
                            className="form-input w-full p-5 rounded-xl focus:outline-none placeholder-gray-500 uppercase tracking-wider font-medium"
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
                          className="form-input w-full p-5 rounded-xl focus:outline-none placeholder-gray-500 uppercase tracking-wider font-medium"
                        />
                      </div>

                      <div>
                        <select
                          name="service"
                          value={formData.service}
                          onChange={handleChange}
                          required
                          className="form-input w-full p-5 rounded-xl focus:outline-none uppercase tracking-wider font-medium"
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
                          rows="5"
                          required
                          className="form-input w-full p-5 rounded-xl focus:outline-none placeholder-gray-500 uppercase tracking-wider font-medium"
                        />
                      </div>

                      <button
                        type="submit"
                        className="submit-button w-full py-5 rounded-xl font-bold text-xl flex items-center justify-center gap-3"
                      >
                        <Send className="w-6 h-6" />
                        SEND MESSAGE
                      </button>
                    </form>
                  </>
                )}
              </div>

              {/* Benefits & Gallery */}
              <div className="space-y-12">
                {/* Benefits */}
                <div className="white-card p-10 rounded-2xl">
                  <h3 className="text-5xl font-bold text-blue-800 mb-10">
                    WHY CHOOSE US
                  </h3>
                  <div className="space-y-8">
                    {benefits.map((benefit, index) => (
                      <div key={index} className="flex items-start gap-6">
                        <div className="benefit-icon mt-1">
                          {benefit.icon}
                        </div>
                        <div>
                          <h4 className="benefit-title text-xl font-bold mb-1">
                            {benefit.title}
                          </h4>
                          <p className="benefit-desc">
                            {benefit.desc}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Gallery Preview */}
                <div className="white-card p-10 rounded-2xl">
                  <h3 className="text-5xl font-bold text-blue-800 mb-10">
                    OUR WORK
                  </h3>
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
                    <Link to="/our-works">
  <div className="gallery-container aspect-square bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center cursor-pointer hover:scale-105 transition">
    <p className="text-blue-600 text-lg font-medium">
      VIEW MORE
    </p>
  </div>
</Link>

                  </div>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-24">
              <div className="text-center">
                <div className="stats-value text-6xl font-bold mb-2">25+</div>
                <p className="stats-label uppercase tracking-wider text-sm">YEARS</p>
              </div>
              <div className="text-center">
                <div className="stats-value text-6xl font-bold mb-2">850+</div>
                <p className="stats-label uppercase tracking-wider text-sm">PROJECTS</p>
              </div>
              <div className="text-center">
                <div className="stats-value text-6xl font-bold mb-2">99%</div>
                <p className="stats-label uppercase tracking-wider text-sm">CLIENTS</p>
              </div>
              <div className="text-center">
                <div className="stats-value text-6xl font-bold mb-2">24/7</div>
                <p className="stats-label uppercase tracking-wider text-sm">SUPPORT</p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="footer-container py-12 px-4 text-center">
          <p className="footer-main text-3xl mb-2 font-medium">SRI AYYAPPAN GLASS</p>
          <p className="footer-sub">BANGALORE • SINCE 2017</p>
        </div>
      </div>
    </>
  );
};

export default ContactForm;