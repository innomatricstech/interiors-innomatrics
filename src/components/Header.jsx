import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Added Link import
import logo from "../assets/img/logo.png";

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
        { name: '90° Shower Partition', href: '/services?id=1' },
        { name: 'Frameless Shower Partitions', href: '/services?id=8' },
        { name: 'UPVC Windows & Glazing', href: '/services?id=2' },
        { name: 'Glass Railings & Balcony', href: '/services?id=3' },
        { name: 'Toughened Glass Dealer', href: '/services?id=4' },
        { name: 'Glass & Mirrors Wholesale', href: '/services?id=5' },
        { name: 'Lacquered Glass', href: '/services?id=6' },
        { name: 'LED Mirrors', href: '/services?id=7' },
        { name: 'Spider Fittings Glass', href: '/services?id=9' }
      ]
    },
    { name: 'Gallery', href: '/gallery', icon: '' },
    { name: 'Contact', href: '/contact', icon: '' },
  ];

  const socialLinks = [
    { name: 'Facebook', href: '#', icon: 'facebook', color: 'bg-blue-700' },
    { name: 'Instagram', href: '#', icon: 'instagram', color: 'bg-gradient-to-r from-purple-500 to-pink-500' },
    { name: 'WhatsApp', href: 'https://wa.me/9141621820', icon: 'whatsapp', color: 'bg-green-600' },
    { name: 'YouTube', href: '#', icon: 'youtube', color: 'bg-red-600' },
  ];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.pageYOffset > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const renderSocialIcon = (iconName) => {
    const icons = {
      facebook: <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>,
      instagram: <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>,
      whatsapp: <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.76.982.998-3.668-.236-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.9 6.994c-.004 5.45-4.438 9.88-9.888 9.88m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.333 .157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.333 11.893-11.893 0-3.18-1.24-6.162-3.495-8.411"/></svg>,
      youtube: <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
    };
    return icons[iconName] || null;
  };

  return (
    <header className={`sticky top-0 z-50 ${isScrolled ? 'shadow-lg' : ''}`}>
      <div className="bg-gradient-to-r from-blue-900/90 via-blue-800/90 to-amber-700/90 text-white py-4 px-7 backdrop-blur-sm ">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center gap-6 text-sm">
            <div className="flex items-center gap-2">
              <span className="font-bold">+91 91416 21820</span>
              <span className="font-bold">+91 94810 16006</span>
            </div>
            <span className="hidden md:inline font-medium">info@ayyapanglass.com</span>
          </div>
          <div className="hidden md:flex space-x-2">
            {socialLinks.map((s) => (
              <a key={s.name} href={s.href} className={`w-8 h-8 rounded-full ${s.color} flex items-center justify-center`}>
                {renderSocialIcon(s.icon)}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="backdrop-blur-xl bg-white/95 border-b border-gray-200">
        <div className="container mx-auto px-4 flex items-center justify-between py-4">
          <div className="flex items-center space-x-3">
            <img src={logo} alt="Logo" className="h-16 w-auto" />
            <div className="hidden sm:block leading-tight">
              <h1 className="text-xl font-black bg-gradient-to-r from-blue-900 to-amber-600 bg-clip-text text-transparent uppercase">Sri Ayyappan Glass</h1>
              <p className="text-[10px] text-gray-500 font-bold tracking-widest uppercase">Premium Glass Solutions</p>
            </div>
          </div>

          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <div key={item.name} className="relative group">
                {/* Main Link used Link instead of <a> */}
                <Link to={item.href} className="px-4 py-2 text-sm font-bold text-gray-800 hover:text-blue-700 flex items-center gap-1 uppercase tracking-wider">
                  {item.name}
                  {item.dropdown && <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>}
                </Link>
                
                {item.dropdown && (
                  <div className="absolute left-0 top-full mt-1 w-64 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                    <div className="bg-white rounded-xl shadow-2xl border border-gray-100 p-2 overflow-hidden">
                      {item.dropdown.map((sub) => (
                        /* Dropdown items also used Link */
                        <Link 
                            key={sub.name} 
                            to={sub.href} 
                            className="block px-4 py-3 text-xs font-bold text-gray-700 hover:bg-blue-50 hover:text-blue-700 rounded-lg transition-colors uppercase"
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
            <Link to="/contact" className="ml-4 bg-gradient-to-r from-blue-900 to-amber-600 text-white px-6 py-2.5 rounded-full text-xs font-black uppercase tracking-widest shadow-lg shadow-blue-900/20">Get Quote</Link>
          </nav>

          <button className="lg:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <div className="w-6 h-0.5 bg-blue-900 mb-1.5"></div>
            <div className="w-6 h-0.5 bg-blue-900 mb-1.5"></div>
            <div className="w-6 h-0.5 bg-blue-900"></div>
          </button>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t p-4 space-y-2">
            {navItems.map(item => (
              <Link key={item.name} to={item.href} className="block py-2 text-sm font-bold text-gray-800 uppercase" onClick={() => setIsMenuOpen(false)}>{item.name}</Link>
            ))}
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;