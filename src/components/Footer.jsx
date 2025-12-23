// src/components/Footer.jsx
import React from 'react';
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';
import logo from "../assets/img/logo.jpeg";

const Footer = () => {
  const services = [
    'Commercial Projects',
    'Designer Glass',
    'Office Partition',
    'Innovative Glass',
    'Lacquered Glass',
    'Shower Partition',
    'Glass Glazing',
    'Glass Railing',
    'Designer Mirror',
    'LED Mirror',
    'Residential Projects'
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="flex items-center space-x-3 mb-6">
  <img
    src={logo}
    alt="Sri Venu Glass Logo"
    className="h-10 w-10 object-contain"
  />
  <h2 className="text-2xl font-bold">Shree Ayyappan Glass And Plywoods</h2>
</div>

            </div>
            <p className="text-gray-300 mb-6">
              We are a Glass Manufacturing Company offering quality interior glass installations 
              that are low in maintenance and come with a perfect finish.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-blue-600 p-2 rounded-full hover:bg-blue-700">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="bg-blue-600 p-2 rounded-full hover:bg-blue-700">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="bg-blue-600 p-2 rounded-full hover:bg-blue-700">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="bg-blue-600 p-2 rounded-full hover:bg-blue-700">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="/" className="text-gray-300 hover:text-white transition-colors">Home</a></li>
              <li><a href="/about" className="text-gray-300 hover:text-white transition-colors">About Us</a></li>
              <li><a href="/services" className="text-gray-300 hover:text-white transition-colors">Services</a></li>
              <li><a href="/gallery" className="text-gray-300 hover:text-white transition-colors">Gallery</a></li>
              <li><a href="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-6">Our Services</h3>
            <ul className="space-y-2">
              {services.slice(0, 6).map((service, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-6">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 mt-1 text-blue-400" />
                <p className="text-gray-300">
                  Bangalore, Karnataka<br />
                  India - 560001
                </p>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 mr-3 text-blue-400" />
                <p className="text-gray-300">+91 98765 43210</p>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 mr-3 text-blue-400" />
                <p className="text-gray-300">info@sriAyyappanGlass.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()}Shree Ayyappan Glass And Plywoods. All rights reserved.</p>
          <p className="mt-2 text-sm">12+ Years of experience in the glass industry</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;