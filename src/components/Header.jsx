import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

import { ChevronDown, ChevronUp, Menu, X } from "lucide-react";
import logo from "../assets/img/logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeMobileDropdown, setActiveMobileDropdown] = useState(null);

  // Services dropdown with individual page URLs
  const servicesDropdown = [
    { name: "SS Railing Glass for Balcony", href: "/services/balcony-railing" },
    { name: "Lacquered Glass", href: "/services/lacquered-glass" },
    { name: " UPVC Doors", href: "/services/pvc-upvc-doors" },
    { name: "UPVC Windows Price", href: "/services/upvc-windows-price" },
    { name: "Glass Shop Near Me", href: "/services/glass-shop-near-me" },
    {
      name: "Glass Shower Doors Installation",
      href: "/services/shower-doors-installation",
    },
    { name: "Glass Shower Enclosures", href: "/services/shower-enclosures" },
    { name: "Toughened Glass", href: "/services/toughened-glass" },
     
    { name: "Glass Installation", href: "/services/glass-installation" },
    { name: "Shower Doors", href: "/services/shower-doors" },
    {
      name: "Aluminium Glass Partition",
      href: "/services/aluminium-glass-partition",
    },
    {
      name: "Glass Partition with Door",
      href: "/services/glass-partition-with-door",
    },
    {
      name: "Glass Partition Company",
      href: "/services/glass-partition-company",
    },
    {
      name: "Glass Partition Price & Cost",
      href: "/services/glass-partition-price-cost",
    },
    { name: "Wall Glass Partition", href: "/services/wall-glass-partition" },
    { name: "LED Smart Mirrors", href: "/services/led-smart-mirrors" },
    { name: "Spider Glass Facade", href: "/services/spider-glass-facade" },
  ];

  const navItems = [
    { name: "Home", href: "/", icon: "" },
    { name: "About", href: "/about", icon: "" },
    {
      name: "Services",
      href: "/services",
      icon: "",
      dropdown: servicesDropdown,
    },
    { name: "Our Works", href: "/our-works", icon: "" },
    { name: "Gallery", href: "/gallery", icon: "" },
    { name: "Contact", href: "/contact", icon: "" },
  ];

  const socialLinks = [
    { name: "Facebook", href: "#", icon: "facebook", color: "bg-blue-700" },
    {
      name: "Instagram",
      href: "#",
      icon: "instagram",
      color: "bg-gradient-to-r from-purple-500 to-pink-500",
    },
    {
      name: "WhatsApp",
      href: "https://wa.me/9141621820",
      icon: "whatsapp",
      color: "bg-green-600",
    },
    { name: "YouTube", href: "#", icon: "youtube", color: "bg-red-600" },
  ];
  const location = useLocation();

  const forceScrollTop = (href) => {
    if (location.pathname === href) {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.pageYOffset > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const renderSocialIcon = (iconName) => {
    const icons = {
      facebook: (
        <svg
          className="w-4 h-4 md:w-5 md:h-5"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      ),
      instagram: (
        <svg
          className="w-6 h-6 md:w-7 md:h-7"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            d="M12 2.163c3.204 0 3.584.012 4.85.07 
    3.252.148 4.771 1.691 4.919 4.919.058 
    1.265.069 1.645.069 4.849 0 3.205
    -.012 3.584-.069 4.849-.149 3.225
    -1.664 4.771-4.919 4.919-1.266.058
    -1.644.07-4.85.07-3.204 0-3.584
    -.012-4.849-.07-3.26-.149-4.771
    -1.699-4.919-4.92-.058-1.265-.07
    -1.644-.07-4.849 0-3.204.013
    -3.583.07-4.849.149-3.227 1.664
    -4.771 4.919-4.919 1.266-.057 1.645
    -.069 4.849-.069zm0 3.675a6.162
    6.162 0 1 0 0 12.324 6.162 6.162
    0 0 0 0-12.324zm0 10.162a4
    4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406
    -11.845a1.44 1.44 0 1 0 0 2.88
    1.44 1.44 0 0 0 0-2.88z"
          />
        </svg>
      ),

      whatsapp: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          fill="currentColor"
          className="w-6 h-6 md:w-7 md:h-7"
        >
          <path d="M19.11 17.93c-.29-.14-1.71-.84-1.97-.93-.26-.1-.45-.14-.64.14-.19.29-.74.93-.91 1.12-.17.19-.34.21-.63.07-.29-.14-1.22-.45-2.32-1.44-.86-.77-1.44-1.72-1.61-2.01-.17-.29-.02-.45.13-.59.13-.13.29-.34.43-.51.14-.17.19-.29.29-.48.1-.19.05-.36-.02-.50-.07-.14-.64-1.54-.88-2.11-.23-.55-.46-.48-.64-.49h-.55c-.19 0-.5.07-.76.36-.26.29-1 1-.99 2.44.01 1.44 1.04 2.83 1.19 3.03.14.19 2.04 3.11 4.95 4.36.69.3 1.23.48 1.65.62.69.22 1.32.19 1.82.12.55-.08 1.71-.7 1.95-1.37.24-.67.24-1.25.17-1.37-.07-.12-.26-.19-.55-.33zM16.02 2.67c-7.37 0-13.35 5.98-13.35 13.35 0 2.36.62 4.67 1.8 6.71L2.5 29.33l6.78-1.78c1.97 1.08 4.2 1.65 6.48 1.65h.01c7.37 0 13.35-5.98 13.35-13.35 0-3.57-1.39-6.93-3.92-9.46a13.3 13.3 0 0 0-9.38-3.92zm0 24.02h-.01c-2 0-3.96-.54-5.67-1.56l-.41-.24-4.02 1.05 1.07-3.92-.27-.4a11.23 11.23 0 0 1-1.73-6.01c0-6.19 5.04-11.23 11.23-11.23 3 0 5.82 1.17 7.94 3.29a11.16 11.16 0 0 1 3.29 7.94c0 6.19-5.04 11.23-11.22 11.23z" />
        </svg>
      ),

      youtube: (
        <svg
          className="w-6 h-6 md:w-7 md:h-7"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            d="M23.498 6.186a3.016 3.016 0 0
    0-2.122-2.136C19.505 3.545 12 3.545
    12 3.545s-7.505 0-9.377.505A3.017
    3.017 0 0 0 .502 6.186C0 8.07 0 12
    0 12s0 3.93.502 5.814a3.016 3.016
    0 0 0 2.122 2.136c1.871.505 9.376
    .505 9.376.505s7.505 0 9.377-.505
    a3.016 3.016 0 0 0 2.122-2.136C24
    15.93 24 12 24 12s0-3.93-.502-5.814z
    M9.545 15.568V8.432L15.818 12l-6.273
    3.568z"
          />
        </svg>
      ),
    };
    return icons[iconName] || null;
  };

  return (
    <header className={`sticky top-0 z-50 ${isScrolled ? "shadow-xl" : ""}`}>
      {/* Top Contact Bar */}
      <div className="bg-gradient-to-r from-blue-900/95 via-blue-800/95 to-amber-700/95 text-white py-3 px-4 backdrop-blur-md">
        <div className="max-w-7xl mx-auto flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          {/* Contact Details */}
          <div className="flex flex-col gap-2 md:flex-row md:items-center md:gap-6">
  {/* Phone */}
  <div className="flex flex-wrap items-center gap-2 font-bold text-base md:text-lg">
    <span>+91 91416 21820</span>
    <span></span> {/* Remove hidden class */}
    <span>+91 94810 16006</span> {/* Remove hidden class */}
  </div>

  {/* Email */}
  <div className="flex flex-wrap items-center gap-2 font-bold text-base md:text-lg">
    <span>info@sriayyappanglass.com</span>
    <span className="hidden sm:inline"></span>
    <span>sriyyapanglassandplaywoods@gmail.com</span>
  </div>
</div>

          {/* Social Icons */}
          <div className="flex gap-3 justify-start md:justify-end">
            {socialLinks.map((s) => (
              <a
                key={s.name}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className={`
                w-9 h-9 md:w-10 md:h-10
                rounded-full
                ${s.color}
                flex items-center justify-center
                shadow-md
                hover:scale-110 hover:shadow-lg
                transition-all duration-300
              `}
              >
                {renderSocialIcon(s.icon)}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="backdrop-blur-xl bg-white/95 border-b border-gray-200">
        <div className="container mx-auto px-4 flex items-center justify-between py-3 md:py-4">
          {/* Logo */}
          <div className="flex items-center space-x-3 md:space-x-4">
            <Link
              to="/"
              onClick={() => forceScrollTop("/")}
              className="flex items-center space-x-3 md:space-x-4 cursor-pointer"
            >
              <img
                src={logo}
                alt="Sri Ayyappan Glass Logo"
                className="
        h-[70px]  
        w-[175px]
        object-cover
        -ml-[47px]
        mt-[10px]
      "
              />

              <div className="leading-tight">
                <h1
                  className="
        text-sm sm:text-xl md:text-2xl
        font-semibold
        bg-gradient-to-r from-blue-900 to-amber-600
        bg-clip-text text-transparent
        uppercase
      "
                >
                  Sri Ayyappan Glass
                </h1>

                <p
                  className="
        hidden sm:block
        text-[9px] md:text-xs
        text-gray-500
        font-semibold
        tracking-widest
        uppercase
      "
                >
                  Premium Glass Solutions
                </p>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <div key={item.name} className="relative group">
                {item.dropdown ? (
                  <>
                    <button className="px-3 md:px-4 py-2 text-xs md:text-sm font-bold text-gray-800 hover:text-blue-700 flex items-center gap-1 uppercase tracking-wider transition-colors">
                      {item.name}
                      <ChevronDown className="w-3 h-3 md:w-4 md:h-4" />
                    </button>

                    <div className="absolute left-0 top-full mt-1 w-64 md:w-72 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 shadow-2xl z-50">
                      <div className="bg-white rounded-xl border border-gray-100 p-2 overflow-hidden max-h-[60vh] overflow-y-auto">
                        {/* All Services Link */}
                        <Link
                          to="/services"
                          onClick={() => forceScrollTop("/services")}
                          className="block px-3 md:px-4 py-2 md:py-3 text-xs font-bold bg-blue-50 text-blue-700 hover:bg-blue-100 rounded-lg transition-colors uppercase border-b border-blue-100 mb-1"
                        >
                          View All Services
                        </Link>

                        {item.dropdown.map((sub) => (
                          <Link
                            key={sub.name}
                            to={sub.href}
                            onClick={() => forceScrollTop(sub.href)}
                            className="block px-3 md:px-4 py-2 md:py-3 text-xs font-bold text-gray-700 hover:bg-blue-50 hover:text-blue-700 rounded-lg transition-colors uppercase border-b border-gray-100 last:border-0"
                          >
                            {sub.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </>
                ) : (
                  <Link
                    to={item.href}
                    onClick={() => forceScrollTop(item.href)}
                    className="px-3 md:px-4 py-2 text-xs md:text-sm font-bold text-gray-800 hover:text-blue-700 flex items-center gap-1 uppercase tracking-wider transition-colors"
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
            <Link
              to="/contact"
              onClick={() => forceScrollTop("/contact")}
              className="ml-2 md:ml-4 bg-gradient-to-r from-blue-900 to-amber-600 text-white px-4 md:px-6 py-2 md:py-2.5 rounded-full text-xs font-black uppercase tracking-widest shadow-lg shadow-blue-900/20 hover:shadow-xl transition-shadow"
            >
              Get Quote
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-blue-900"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t">
            <div className="px-4 py-3 space-y-1">
              {navItems.map((item) => (
                <div key={item.name}>
                  {item.dropdown ? (
                    <>
                      <button
                        onClick={() =>
                          setActiveMobileDropdown(
                            activeMobileDropdown === item.name
                              ? null
                              : item.name
                          )
                        }
                        className="w-full flex items-center justify-between py-3 text-sm font-bold text-gray-800 uppercase border-b border-gray-100"
                      >
                        <span>{item.name}</span>
                        {activeMobileDropdown === item.name ? (
                          <ChevronUp size={16} />
                        ) : (
                          <ChevronDown size={16} />
                        )}
                      </button>

                      {activeMobileDropdown === item.name && (
                        <div
                          className="
                          pl-4 pr-2 pb-3
                          space-y-1
                          border-l-4 border-blue-700
                          ml-2
                          max-h-[60vh]
                          overflow-y-auto
                        "
                        >
                          {/* All Services Link */}
                          <Link
                            to="/services"
                            className="block py-2 px-2 text-xs font-bold bg-blue-50 text-blue-700 hover:bg-blue-100 rounded-md uppercase mb-1"
                            onClick={() => {
                              forceScrollTop("/services");
                              setIsMenuOpen(false);
                              setActiveMobileDropdown(null);
                            }}
                          >
                            View All Services
                          </Link>

                          {item.dropdown.map((sub) => (
                            <Link
                              key={sub.name}
                              to={sub.href}
                              className="
    block py-2 px-2
    text-xs font-semibold
    text-gray-700
    hover:text-blue-700
    hover:bg-blue-50
    rounded-md
    uppercase
  "
                              onClick={() => {
                                forceScrollTop(sub.href);
                                setIsMenuOpen(false);
                                setActiveMobileDropdown(null);
                              }}
                            >
                              {sub.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      to={item.href}
                      className="block py-3 text-sm font-bold text-gray-800 uppercase border-b border-gray-100"
                      onClick={() => {
                        forceScrollTop(item.href);
                        setIsMenuOpen(false);
                      }}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}

              {/* Mobile Social Links */}
              <div className="pt-4 border-t border-gray-200">
                <div className="flex justify-center space-x-4 mb-4">
                  {socialLinks.map((s) => (
                    <a
                      key={s.name}
                      href={s.href}
                      className={`w-10 h-10 rounded-full ${s.color} flex items-center justify-center`}
                    >
                      {renderSocialIcon(s.icon)}
                    </a>
                  ))}
                </div>

                <Link
                  to="/contact"
                  className="block w-full bg-gradient-to-r from-blue-900 to-amber-600 text-white text-center py-3 rounded-full text-sm font-black uppercase tracking-widest shadow-lg"
                  onClick={() => {
                    forceScrollTop("/contact");
                    setIsMenuOpen(false);
                  }}
                >
                  Get Free Quote
                </Link>

                {/* Mobile Contact Info */}
                <div className="mt-4 text-center space-y-1">
                  <div className="text-sm font-bold text-blue-900">
                    +91 91416 21820
                  </div>
                  <div className="text-sm font-bold text-blue-900">
                    +91 94810 16006
                  </div>
                  <div className="text-xs text-gray-600">
                    info@ayyapanglass.com
                  </div>
                  <div className="text-xs text-gray-600">
                    sriayyapanglassandplaywoods@gmail.com
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;