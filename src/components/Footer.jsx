import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  Clock,
  Award,
  Shield,
  ArrowRight,
  Home,
  Info,
  Briefcase,
  Images,
  MessageCircle,
  Maximize2,
  X,
} from "lucide-react";
import logo from "../assets/img/logo.png";

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [showFullMap, setShowFullMap] = useState(false);

  const navigateWithScroll = (path) => {
    if (location.pathname === path) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      navigate(path);
    }
  };

  const quickLinks = [
    { name: "Home", path: "/", icon: Home },
    { name: "About Us", path: "/about", icon: Info },
    { name: "Services", path: "/services", icon: Briefcase },
    { name: "Gallery", path: "/gallery", icon: Images },
    { name: "Contact", path: "/contact", icon: MessageCircle },
  ];

  const services = [
    { name: "Shower Partition", path: "/services/shower-enclosures" },
    { name: "UPVC Windows", path: "/services/upvc-windows-price" },
    { name: "Glass Railings", path: "/services/balcony-railing" },
    { name: "Lacquered Glass", path: "/services/lacquered-glass" },
    { name: "LED Smart Mirrors", path: "/services/led-smart-mirrors" },
    { name: "Toughened Glass", path: "/services/toughened-glass" },
    { name: "Office Partition", path: "/services/aluminium-glass-partition" },
    { name: "Designer Glass", path: "/services/glass-installation" },
    { name: "Frameless Glass", path: "/services/led-smart-mirrors" },
    { name: "Custom Solutions", path: "/services/glass-partition-company" },
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", color: "hover:bg-blue-600", label: "Facebook" },
    { icon: Instagram, href: "#", color: "hover:bg-pink-600", label: "Instagram" },
    { icon: Twitter, href: "#", color: "hover:bg-sky-500", label: "Twitter" },
    { icon: Linkedin, href: "#", color: "hover:bg-blue-700", label: "LinkedIn" },
  ];

  const contactInfo = [
    {
      icon: MapPin,
      content: "No.25, 2nd Mainroad, Munithiyappa Layout, Horamavu Post, Pooja Garden, Kalkere Village, Bangalore, 560 043.",
      color: "text-amber-400",
      bgColor: "from-amber-500/20 to-transparent",
    },
    {
      icon: Phone,
      content: (
        <>
          +91 91416 21820 <br />
          +91 94810 16006
        </>
      ),
      color: "text-blue-400",
      bgColor: "from-blue-500/20 to-transparent",
    },
    {
      icon: Mail,
      content: (
        <>
          sriayyapanglassandplaywoods@gmail.com <br />
          info@sriayyapanglass.com
        </>
      ),
      color: "text-green-400",
      bgColor: "from-green-500/20 to-transparent",
    },
    {
      icon: Clock,
      content: (
        <>
          <span className="font-medium">Mon - Sat:</span> 10:00 AM - 7:00 PM <br />
          <span className="font-medium">Sunday:</span> Holiday
        </>
      ),
      color: "text-purple-400",
      bgColor: "from-purple-500/20 to-transparent",
    },
  ];

  return (
    <>
      {/* Full Screen Map Modal */}
      {showFullMap && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm">
          <div className="relative w-full max-w-6xl h-[80vh] bg-gray-900 rounded-2xl overflow-hidden border border-amber-500/30">
            {/* Close button */}
            <button
              onClick={() => setShowFullMap(false)}
              className="absolute top-4 right-4 z-10 bg-red-600 hover:bg-red-700 text-white p-2 rounded-full transition"
            >
              <X className="h-6 w-6" />
            </button>
            
            {/* Map title */}
            <div className="absolute top-4 left-4 z-10 bg-black/80 text-white px-4 py-2 rounded-lg">
              <h3 className="font-bold text-lg">Sri Ayyappan Glass - Full Location Map</h3>
              <p className="text-sm text-gray-300">Zoom in/out and explore the area</p>
            </div>
            
            {/* Full screen map */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.919861294861!2d77.65597431532136!3d12.979106818436083!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1164d3c7b5e5%3A0x79c1f8a5f8b1b0f!2sBangalore%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1633084800000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              title="Sri Ayyappan Glass Full Map"
              className="rounded-2xl"
            />
            
            {/* Map controls info */}
            <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center">
              <div className="bg-black/80 text-white px-4 py-2 rounded-lg">
                <p className="text-sm">Use mouse wheel to zoom • Click and drag to pan</p>
              </div>
              <button
                onClick={() => window.open("https://www.google.com/maps?q=No.25,2nd Mainroad,Munithiyappa Layout,Horamavu Post,Pooja Garden,Kalkere Village,Bangalore,560043", "_blank")}
                className="bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition"
              >
                <span>Open in Google Maps</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      )}

      <footer className="relative bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white pt-16 pb-8 overflow-hidden">
        {/* Decorative top border */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent"></div>

        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-20 -left-20 w-60 h-60 rounded-full border border-amber-500/10"></div>
          <div className="absolute -bottom-20 -right-20 w-80 h-80 rounded-full border border-blue-500/10"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Main footer content */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-12">
            {/* Company info - Left section */}
            <div className="lg:col-span-4">
              <div className="flex flex-col items-center lg:items-start mb-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="relative">
                    <div className="absolute -inset-2     to-blue-500 rounded-full opacity-20 blur"></div>
                    <img 
                      src={logo} 
                      alt="Sri Ayyappan Glass Logo" 
                      className="relative h-[250px] w-[250px] object-cover"
                    />
                  </div>
                  <div>
                    <h1 className="text-2xl font-bold bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
                      SRI AYYAPPAN GLASS
                    </h1>
                    <p className="text-lg text-gray-300 font-medium">And Plywoods</p>
                    <div className="flex items-center gap-4 mt-2">
                      <div className="flex items-center text-sm text-amber-400">
                        <Award className="h-4 w-4 mr-1" />
                        <span>Since 2017</span>
                      </div>
                      <div className="h-4 w-px bg-gray-600"></div>
                      <div className="flex items-center text-sm text-blue-400">
                        <Shield className="h-4 w-4 mr-1" />
                        <span>Trusted Quality</span>
                      </div>
                    </div>
                  </div>
                </div>

                <p className="text-gray-300 leading-relaxed text-center lg:text-left mb-8 max-w-md">
                  Transforming spaces with premium interior glass installations. 
                  Perfect finish, low maintenance, and exceptional craftsmanship 
                  since 2017 in Bangalore.
                </p>

                {/* Social media links */}
                <div className="flex items-center gap-4">
                  {socialLinks.map(({ icon: Icon, href, color, label }, index) => (
                    <a
                      key={index}
                      href={href}
                      aria-label={label}
                      className={`
                        group relative p-3 rounded-full bg-gray-800/50 backdrop-blur-sm 
                        ${color} transition-all duration-300 transform hover:scale-110 
                        hover:shadow-lg hover:shadow-amber-500/20
                      `}
                    >
                      <Icon className="h-5 w-5 text-gray-300 group-hover:text-white transition" />
                      <span className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 
                        text-xs text-gray-400 opacity-0 group-hover:opacity-100 transition">
                        {label}
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Quick Links - Middle section */}
            <div className="lg:col-span-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Quick Links */}
                <div>
                  <h3 className="text-lg font-bold mb-6 pb-3 border-b border-amber-500/30 
                    inline-block relative">
                    Quick Links
                    <span className="absolute -bottom-px left-0 w-1/2 h-0.5 bg-gradient-to-r from-amber-500 to-transparent"></span>
                  </h3>
                  <ul className="space-y-3">
                    {quickLinks.map(({ name, path, icon: Icon }) => (
                      <li key={name}>
                        <button
                          onClick={() => navigateWithScroll(path)}
                          className="group flex items-center text-gray-300 hover:text-amber-400"
                        >
                          <Icon className="h-4 w-4 mr-3 opacity-60 group-hover:opacity-100" />
                          <span className="text-sm uppercase tracking-wide">{name}</span>
                          <ArrowRight className="h-3 w-3 ml-auto opacity-0 group-hover:opacity-100 
                            transform -translate-x-2 group-hover:translate-x-0 transition" />
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Services */}
                <div>
                  <h3 className="text-lg font-bold mb-6 pb-3 border-b border-blue-500/30 
                    inline-block relative">
                    Our Services
                    <span className="absolute -bottom-px left-0 w-1/2 h-0.5 bg-gradient-to-r from-blue-500 to-transparent"></span>
                  </h3>
                  <ul className="space-y-2">
                    {services.map(({ name, path }) => (
                      <li key={name}>
                        <button
                          onClick={() => navigateWithScroll(path)}
                          className="group flex items-center text-sm text-gray-300"
                        >
                          <span className="text-amber-500 mr-2 group-hover:scale-125 transition-transform">›</span>
                          <span className="truncate">{name}</span>
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Contact Info - Right section */}
            <div className="lg:col-span-4">
              <h3 className="text-lg font-bold mb-6 pb-3 border-b border-green-500/30 
                inline-block relative">
                Contact Info
                <span className="absolute -bottom-px left-0 w-1/2 h-0.5 bg-gradient-to-r from-green-500 to-transparent"></span>
              </h3>

              <div className="space-y-6 mb-8">
                {contactInfo.map(({ icon: Icon, content, color, bgColor }, index) => (
                  <div key={index} className="flex items-start group">
                    <div className={`
                      mr-4 p-3 rounded-lg bg-gradient-to-br ${bgColor} 
                      group-hover:scale-110 transition-all duration-300
                    `}>
                      <Icon className={`h-5 w-5 ${color}`} />
                    </div>
                    <div className="text-gray-300 group-hover:text-white transition-colors duration-300">
                      {typeof content === 'string' ? (
                        <p className="text-sm leading-relaxed">{content}</p>
                      ) : (
                        <div className="text-sm leading-relaxed">{content}</div>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Google Maps Embed with ZOOM and FULL VIEW */}
              <div className="relative rounded-xl overflow-hidden border border-gray-700 
                hover:border-amber-500/50 transition-all duration-300 group">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.919861294861!2d77.65597431532136!3d12.979106818436083!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1164d3c7b5e5%3A0x79c1f8a5f8b1b0f!2sBangalore%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1633084800000!5m2!1sen!2sin"
                  width="100%"
                  height="200"
                  style={{ border: 0 }}
                  loading="lazy"
                  className="group-hover:scale-105 transition-transform duration-500"
                  title="Sri Ayyappan Glass Location"
                  allowFullScreen
                />
                
                {/* Map Overlay with Controls */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent 
                  opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  
                  {/* Full Screen Button */}
                  <button
                    onClick={() => setShowFullMap(true)}
                    className="absolute top-3 right-3 bg-amber-600 hover:bg-amber-700 text-white 
                      p-2 rounded-lg flex items-center gap-2 transition transform hover:scale-105"
                  >
                    <Maximize2 className="h-4 w-4" />
                    <span className="text-xs font-medium">Full View</span>
                  </button>
                  
                  {/* Zoom Instructions */}
                  <div className="absolute bottom-3 left-3 bg-black/80 px-3 py-1.5 rounded-lg">
                    <p className="text-xs text-amber-400">
                      Scroll to zoom • Click for full map
                    </p>
                  </div>
                </div>
                
                {/* Always visible open in maps button */}
                <div className="absolute bottom-3 right-3">
                  <button
                    onClick={() => window.open("https://www.google.com/maps?q=No.25,2nd Mainroad,Munithiyappa Layout,Horamavu Post,Pooja Garden,Kalkere Village,Bangalore,560043", "_blank")}
                    className="bg-black/80 hover:bg-black text-white px-3 py-1.5 rounded-lg 
                      text-xs flex items-center gap-1 transition"
                  >
                    <MapPin className="h-3 w-3" />
                    <span>Open Maps</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="pt-8 border-t border-gray-700/50">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="text-sm text-gray-400 text-center md:text-left">
                © {new Date().getFullYear()} Sri Ayyappan Glass And Plywoods. 
                <span className="text-amber-500/70 ml-2">All rights reserved.</span>
              </div>
              
              <div className="text-sm text-gray-400">
                <span className="text-amber-500/70">✧</span>
                <span className="mx-2">Premium Glass Solutions Since 2017</span>
                <span className="text-amber-500/70">✧</span>
              </div>

              <div className="text-sm text-gray-400 text-center md:text-right">
                <a className="ml-1 font-medium" href="https://www.innomatricstech.com/"><span className="text-amber-500/70"> Powered by</span>Innomatrics Tech</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;