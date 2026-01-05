// src/components/Footer.jsx
import React from "react";
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
} from "lucide-react";
import logo from "../assets/img/logo.png";

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-b from-[#0a0f24] via-[#0b132b] to-[#0a0f24] text-white pt-20 pb-6 overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent"></div>
      <div className="absolute -top-10 left-10 opacity-10">
        <div className="w-40 h-40 border border-amber-500/30 rounded-full"></div>
      </div>
      <div className="absolute bottom-10 right-10 opacity-10">
        <div className="w-32 h-32 border border-blue-500/30 rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* MAIN GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-10">
          {/* COMPANY INFO */}
          <div className="lg:col-span-4">
            <div className="flex items-start gap-4 mb-6">
              <div className="relative">
                <div className="absolute inset-0 bg-amber-500/20 blur-xl rounded-full"></div>
                <img
                  src={logo}
                  alt="Shree Ayyappan Glass"
                  className="relative h-35 w-30 object-contain drop-shadow-lg"
                />
              </div>
              <div>
                <h2 className="text-2xl font-bold bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
                  Shree Ayyappan Glass
                </h2>
                <p className="text-lg text-gray-300 font-medium">And Plywoods</p>
                <div className="flex items-center gap-2 mt-2">
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

            <p className="text-gray-300 leading-relaxed mb-6 pr-6 border-l-2 border-amber-500/50 pl-4">
              Transforming spaces with premium interior glass installations. 
              Perfect finish, low maintenance, and exceptional craftsmanship 
              since 2017.
            </p>

            <div className="flex items-center gap-4">
              {[
                { Icon: Facebook, color: "hover:bg-blue-600" },
                { Icon: Instagram, color: "hover:bg-pink-600" },
                { Icon: Twitter, color: "hover:bg-sky-500" },
                { Icon: Linkedin, color: "hover:bg-blue-700" },
              ].map(({ Icon, color }, i) => (
                <a
                  key={i}
                  href="#"
                  className={`group relative p-3 rounded-full bg-gray-800/50 backdrop-blur-sm 
                  ${color} transition-all duration-300 transform hover:scale-110 
                  hover:shadow-lg hover:shadow-amber-500/20`}
                >
                  <Icon className="h-5 w-5 group-hover:text-white transition" />
                  <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 
                    w-1 h-1 bg-amber-500 rounded-full opacity-0 group-hover:opacity-100 transition"></div>
                </a>
              ))}
            </div>
          </div>

          {/* QUICK LINKS */}
          <div className="lg:col-span-2">
            <h3 className="text-lg font-bold mb-6 pb-2 border-b border-amber-500/30 
              inline-block relative">
              Quick Links
              <span className="absolute -bottom-1 left-0 w-1/2 h-0.5 bg-gradient-to-r from-amber-500 to-transparent"></span>
            </h3>
            <ul className="space-y-3">
              {["Home", "About Us", "Services", "Gallery", "Projects", "Contact"].map((item, i) => (
                <li key={i} className="group">
                  <a
                    href={`/${item.toLowerCase().replace(' ', '-')}`}
                    className="flex items-center text-gray-300 hover:text-amber-400 
                      transition-all duration-300 group-hover:translate-x-2"
                  >
                    <ArrowRight className="h-3 w-3 mr-2 opacity-0 group-hover:opacity-100 
                      transform -translate-x-2 group-hover:translate-x-0 transition" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* SERVICES */}
          <div className="lg:col-span-3">
            <h3 className="text-lg font-bold mb-6 pb-2 border-b border-blue-500/30 
              inline-block relative">
              Our Services
              <span className="absolute -bottom-1 left-0 w-1/2 h-0.5 bg-gradient-to-r from-blue-500 to-transparent"></span>
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {[
                "Commercial Projects", "Designer Glass", "Office Partition",
                "Innovative Glass", "Lacquered Glass", "Shower Partition",
                "Glass Railings", "Glass Doors", "Mirror Walls",
                "Toughened Glass", "Frosted Glass", "Custom Designs"
              ].map((service, i) => (
                <div
                  key={i}
                  className="group p-2 rounded-lg bg-gray-800/30 hover:bg-gradient-to-r 
                    hover:from-amber-500/10 hover:to-transparent border border-gray-700/50 
                    hover:border-amber-500/30 transition-all duration-300 cursor-pointer"
                >
                  <span className="text-sm text-gray-300 group-hover:text-amber-400 transition">
                    {service}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* CONTACT & MAP */}
          <div className="lg:col-span-3">
            <h3 className="text-lg font-bold mb-6 pb-2 border-b border-green-500/30 
              inline-block relative">
              Contact Info
              <span className="absolute -bottom-1 left-0 w-1/2 h-0.5 bg-gradient-to-r from-green-500 to-transparent"></span>
            </h3>

            <div className="space-y-4 mb-6">
              <div className="flex items-start group">
                <div className="mr-3 p-2 rounded-lg bg-gradient-to-br from-amber-500/20 to-transparent 
                  group-hover:from-amber-500/30 transition">
                  <MapPin className="h-5 w-5 text-amber-400" />
                </div>
                <div>
                  <p className="text-gray-300 group-hover:text-amber-400 transition">
                  No.25, 2nd Mainroad, Munithiyappa Layout,Horamavu Post, Pooja Garden, Kalkere Village, Bangalore, 560 043.
                  </p>
                  
                </div>
              </div>

              <div className="flex items-center group">
                <div className="mr-3 p-2 rounded-lg bg-gradient-to-br from-blue-500/20 to-transparent 
                  group-hover:from-blue-500/30 transition">
                  <Phone className="h-5 w-5 text-blue-400" />
                </div>
                <a
                  href="tel:+919876543210"
                  className="text-gray-300 group-hover:text-blue-400 transition font-medium"
                >
                   +91 91416 21820 <br />
                   +91 94810 16006
                </a>
              </div>

              <div className="flex items-center group">
                <div className="mr-3 p-2 rounded-lg bg-gradient-to-br from-green-500/20 to-transparent 
                  group-hover:from-green-500/30 transition">
                  <Mail className="h-5 w-5 text-green-400" />
                </div>
                <a
                  href="mailto:sriayyapanglassandplaywoods@gmail.com, info@sriayyapanglass.com"
                  className="text-gray-300 group-hover:text-green-400 transition"
                >
                  sriayyapanglassandplaywoods@gmail.com
                  info@sriayyapanglass.com
                </a>
              </div>

              <div className="flex items-center group">
                <div className="mr-3 p-2 rounded-lg bg-gradient-to-br from-purple-500/20 to-transparent 
                  group-hover:from-purple-500/30 transition">
                  <Clock className="h-5 w-5 text-purple-400" />
                </div>
                <div>
                  <p className="text-gray-300">Mon - Sat: 9:00 AM - 8:00 PM</p>
                  <p className="text-sm text-gray-400">Sunday: 10:00 AM - 6:00 PM</p>
                </div>
              </div>
            </div>

            {/* MAP */}
            <div className="relative rounded-xl overflow-hidden border border-gray-700/50 
              hover:border-amber-500/50 transition-all duration-500 group">
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent 
                opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d497698.6600767539!2d77.35073608741893!3d12.954517011685933!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="150"
                style={{ border: 0 }}
                loading="lazy"
                className="group-hover:scale-105 transition-transform duration-500"
                title="Shree Ayyappan Glass Location"
                allowFullScreen
              />
              <div className="absolute bottom-2 right-2 bg-black/80 px-2 py-1 rounded text-xs 
                text-amber-400 z-20 opacity-0 group-hover:opacity-100 transition">
                View on Google Maps
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="pt-6 border-t border-gray-800/50 relative">
          <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
            <div className="bg-gradient-to-r from-amber-500 to-blue-500 p-0.5 rounded-full">
              <div className="bg-[#0a0f24] px-4 py-1 rounded-full">
                <span className="text-xs text-gray-400">✦</span>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-gray-400">
              © {new Date().getFullYear()} Shree Ayyappan Glass And Plywoods.
              <span className="text-amber-500/70 ml-2">All rights reserved.</span>
            </div>
            
            <div className="flex items-center gap-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-amber-400 transition">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-amber-400 transition">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-amber-400 transition">
                Sitemap
              </a>
            </div>
            
            <div className="text-xs text-gray-500">
              Crafted with ❤️ for beautiful spaces
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;