import React, { useState, useEffect } from 'react';
import logo from "../assets/img/logo.jpeg";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  const navItems = [
    { name: 'Home', href: '/', icon: '' },
    { name: 'About', href: '/about', icon: '' },
    { 
      name: 'Services', 
      href: '/services', 
      icon: '',
      dropdown: [
        { name: 'Tempered Glass', href: '/services/tempered' },
        { name: 'Laminated Glass', href: '/services/laminated' },
        { name: 'Mirror Works', href: '/services/mirrors' },
        { name: 'Glass Partitions', href: '/services/partitions' },
        { name: 'Custom Designs', href: '/services/custom' }
      ]
    },
    { name: 'Gallery', href: '/gallery', icon: '' },
    { 
      name: 'Products', 
      href: '/products', 
      icon: '',
      dropdown: [
        { name: 'Safety Glass', href: '/products/safety' },
        { name: 'Decorative Glass', href: '/products/decorative' },
        { name: 'Energy Efficient', href: '/products/energy' },
        { name: 'Smart Glass', href: '/products/smart' }
      ]
    },
    { name: 'Contact', href: '/contact', icon: '' },
  ];

  const socialLinks = [
    { name: 'Facebook', href: '#', icon: 'fb', color: 'hover:bg-blue-600' },
    { name: 'Instagram', href: '#', icon: 'ig', color: 'hover:bg-pink-600' },
    { name: 'WhatsApp', href: '#', icon: 'wa', color: 'hover:bg-green-500' },
    { name: 'YouTube', href: '#', icon: 'yt', color: 'hover:bg-red-600' },
  ];

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const renderSocialIcons = () => (
    <div className="flex space-x-2">
      {socialLinks.map((social) => (
        <a
          key={social.name}
          href={social.href}
          className={`w-8 h-8 rounded-full bg-gray-800 ${social.color} text-white flex items-center justify-center transition-all duration-300 hover:scale-110`}
          aria-label={social.name}
        >
          {social.icon === 'fb' && 'f'}
          {social.icon === 'ig' && 'ig'}
          {social.icon === 'wa' && 'w'}
          {social.icon === 'yt' && '▶'}
        </a>
      ))}
    </div>
  );

  const renderIcon = (iconName) => {
    const icons = {
      
    };
    return <span className="mr-2">{icons[iconName]}</span>;
  };

  return (
    <header className={`sticky top-0 z-50 transition-all duration-500 ${isScrolled ? 'bg-white shadow-2xl' : 'bg-gradient-to-r from-white to-blue-50 shadow-lg'}`}>
      {/* Top Info Bar with Gradient */}
      <div className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 text-white py-3 px-4 animate-pulse-subtle">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8 mb-3 md:mb-0">
            <div className="flex items-center group">
              <div className="bg-blue-600 p-2 rounded-full mr-3 group-hover:bg-blue-500 transition-all duration-300 group-hover:scale-110">
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <span className="text-xs opacity-80">Call Now</span>
                <p className="font-semibold text-sm md:text-base group-hover:text-blue-200 transition-colors">+91 98765 43210</p>
              </div>
            </div>

            <div className="hidden lg:block">|</div>

            <div className="flex items-center group">
              <div className="bg-blue-600 p-2 rounded-full mr-3 group-hover:bg-blue-500 transition-all duration-300 group-hover:scale-110">
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <span className="text-xs opacity-80">Email Us</span>
                <p className="font-semibold text-sm md:text-base group-hover:text-blue-200 transition-colors">info@sriAyyappanGlass.com</p>
              </div>
            </div>

            <div className="hidden lg:block">|</div>

            <div className="flex items-center group">
              <div className="bg-blue-600 p-2 rounded-full mr-3 group-hover:bg-blue-500 transition-all duration-300 group-hover:scale-110">
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <span className="text-xs opacity-80">Location</span>
                <p className="font-semibold text-sm md:text-base group-hover:text-blue-200 transition-colors">Bangalore, Karnataka</p>
              </div>
            </div>
          </div>

          <div className="hidden md:block">
            {renderSocialIcons()}
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          {/* Logo with Animation */}
          <div className="flex items-center space-x-3 group cursor-pointer">
            <div className="relative">
              <img
                src={logo}
                alt="Sree Ayyappan Glass Logo"
                className="h-16 w-16 object-contain transition-all duration-500 group-hover:scale-110 group-hover:rotate-3"
              />
              <div className="absolute -inset-1 bg-blue-500 rounded-full blur opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
            </div>
            <div className="transition-all duration-500 group-hover:translate-x-1">
              <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-700 to-blue-900 bg-clip-text text-transparent">
                Shree Ayyappan Glass And Plywoods
              </h1>
              <p className="text-sm text-gray-600 flex items-center">
                <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mr-2 animate-pulse"></span>
                Premium Glass Solutions Since 1995
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <div key={item.name} className="relative group">
                <a
                  href={item.href}
                  className="flex items-center px-4 py-3 text-gray-700 hover:text-blue-600 font-medium transition-all duration-300 hover:bg-blue-50 rounded-lg group-hover:scale-105"
                >
                  {renderIcon(item.icon)}
                  {item.name}
                  {item.dropdown && (
                    <svg className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </a>
                
                {/* Dropdown Menu */}
                {item.dropdown && (
                  <div className="absolute left-0 top-full mt-1 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform -translate-y-2 group-hover:translate-y-0">
                    <div className="bg-white shadow-2xl rounded-xl p-2 border border-blue-100">
                      {item.dropdown.map((subItem) => (
                        <a
                          key={subItem.name}
                          href={subItem.href}
                          className="flex items-center px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200 group/item"
                        >
                          <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 opacity-0 group-hover/item:opacity-100 transition-opacity"></span>
                          {subItem.name}
                          <svg className="ml-auto h-4 w-4 text-gray-400 transform -translate-x-2 opacity-0 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
            
            <button className="ml-4 bg-gradient-to-r from-blue-600 to-blue-800 text-white px-8 py-3 rounded-xl hover:from-blue-700 hover:to-blue-900 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl flex items-center group">
              Get Quote
              <svg className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden relative z-50 p-2 rounded-lg bg-blue-50 hover:bg-blue-100 transition-all duration-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="relative w-6 h-6">
              <span className={`absolute left-0 top-1 h-0.5 w-6 bg-blue-700 rounded-full transition-all duration-300 ${isMenuOpen ? 'rotate-45 top-3' : ''}`}></span>
              <span className={`absolute left-0 top-3 h-0.5 w-6 bg-blue-700 rounded-full transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`absolute left-0 top-5 h-0.5 w-6 bg-blue-700 rounded-full transition-all duration-300 ${isMenuOpen ? '-rotate-45 top-3' : ''}`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`lg:hidden overflow-hidden transition-all duration-500 ${isMenuOpen ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="mt-6 pb-4 border-t pt-6">
            <div className="space-y-2">
              {navItems.map((item) => (
                <div key={item.name}>
                  <a
                    href={item.href}
                    className="flex items-center px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg font-medium transition-all duration-200"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {renderIcon(item.icon)}
                    {item.name}
                  </a>
                  {item.dropdown && (
                    <div className="ml-8 mt-1 space-y-1 border-l-2 border-blue-100 pl-4">
                      {item.dropdown.map((subItem) => (
                        <a
                          key={subItem.name}
                          href={subItem.href}
                          className="flex items-center px-4 py-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg text-sm transition-all duration-200"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-3"></span>
                          {subItem.name}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              
              <div className="pt-4 border-t">
                <p className="px-4 py-2 text-sm text-gray-500 mb-2">Follow Us</p>
                <div className="px-4">
                  {renderSocialIcons()}
                </div>
              </div>
              
              <button className="mt-4 w-full bg-gradient-to-r from-blue-600 to-blue-800 text-white px-6 py-4 rounded-xl hover:from-blue-700 hover:to-blue-900 transition-all duration-300 flex items-center justify-center group">
                Request Free Quote
                <svg className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Floating CTA for Mobile */}
      <div className="lg:hidden fixed bottom-6 right-6 z-40">
        <a
          href="tel:+919876543210"
          className="flex items-center justify-center w-14 h-14 bg-green-500 text-white rounded-full shadow-2xl hover:bg-green-600 transition-all duration-300 hover:scale-110 hover:rotate-12 animate-bounce-slow"
        >
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
        </a>
      </div>
    </header>
  );
};

export default Header;