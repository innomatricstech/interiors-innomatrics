// src/components/Gallery.jsx
import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight, Search, Filter } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeFilter, setActiveFilter] = useState('all');

  const galleryItems = [
    {
      id: 1,
      title: 'Modern Office Glass Partition',
      category: 'office',
      image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1200&auto=format&fit=crop',
      description: 'Frameless glass partitions for modern office spaces',
      hdImage: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1920&auto=format&fit=crop'
    },
    {
      id: 2,
      title: 'Luxury Shower Enclosure',
      category: 'shower',
      image: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=1200&auto=format&fit=crop',
      description: 'Custom shower glass partitions with elegant hardware',
      hdImage: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=1920&auto=format&fit=crop'
    },
    {
      id: 3,
      title: 'Commercial Glass Facade',
      category: 'commercial',
      image: 'https://images.unsplash.com/photo-1487956382158-bb926046304a?w=1200&auto=format&fit=crop',
      description: 'Spider glazing for commercial building exterior',
      hdImage: 'https://images.unsplash.com/photo-1487956382158-bb926046304a?w=1920&auto=format&fit=crop'
    },
    {
      id: 4,
      title: 'Designer Glass Wall',
      category: 'designer',
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&auto=format&fit=crop',
      description: 'Custom designed glass panels with artistic patterns',
      hdImage: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1920&auto=format&fit=crop'
    },
    {
      id: 5,
      title: 'Glass Railing Installation',
      category: 'railing',
      image: 'https://images.unsplash.com/photo-1618220179428-22790b461013?w=1200&auto=format&fit=crop',
      description: 'Frameless glass railings for staircase',
      hdImage: 'https://images.unsplash.com/photo-1618220179428-22790b461013?w=1920&auto=format&fit=crop'
    },
    {
      id: 6,
      title: 'Residential Glass Doors',
      category: 'residential',
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&auto=format&fit=crop',
      description: 'Custom glass doors for residential entrance',
      hdImage: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920&auto=format&fit=crop'
    },
    {
      id: 7,
      title: 'LED Mirror Installation',
      category: 'mirror',
      image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=1200&auto=format&fit=crop',
      description: 'Smart LED mirrors with anti-fog technology',
      hdImage: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=1920&auto=format&fit=crop'
    },
    {
      id: 8,
      title: 'Hotel Glass Partition',
      category: 'commercial',
      image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1200&auto=format&fit=crop',
      description: 'Luxury glass partitions for hotel spaces',
      hdImage: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1920&auto=format&fit=crop'
    },
    {
      id: 9,
      title: 'Glass Balcony',
      category: 'railing',
      image: 'https://images.unsplash.com/photo-1545324412-51b3e3556f80?w=1200&auto=format&fit=crop',
      description: 'Clear glass balcony railings with panoramic views',
      hdImage: 'https://images.unsplash.com/photo-1545324412-51b3e3556f80?w=1920&auto=format&fit=crop'
    },
    {
      id: 10,
      title: 'Textured Glass Wall',
      category: 'designer',
      image: 'https://images.unsplash.com/photo-1604014238687-e6cbb6a5e50f?w=1200&auto=format&fit=crop',
      description: 'Textured glass for privacy with style',
      hdImage: 'https://images.unsplash.com/photo-1604014238687-e6cbb6a5e50f?w=1920&auto=format&fit=crop'
    },
    {
      id: 11,
      title: 'Shopping Mall Glass Work',
      category: 'commercial',
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&auto=format&fit=crop',
      description: 'Complete glass installation for retail space',
      hdImage: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1920&auto=format&fit=crop'
    },
    {
      id: 12,
      title: 'Modern Bathroom Glass',
      category: 'shower',
      image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=1200&auto=format&fit=crop',
      description: 'Frameless shower enclosures with minimal hardware',
      hdImage: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=1920&auto=format&fit=crop'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'commercial', name: 'Commercial' },
    { id: 'residential', name: 'Residential' },
    { id: 'office', name: 'Office' },
    { id: 'shower', name: 'Shower Partitions' },
    { id: 'designer', name: 'Designer Glass' },
    { id: 'railing', name: 'Glass Railings' },
    { id: 'mirror', name: 'Mirrors' }
  ];

  const filteredItems = activeFilter === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeFilter);

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Blue Glass Background Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-sky-900/30 to-cyan-900/20">
        {/* Glass overlay effect */}
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519681393784-d120267933ba?w=1920&auto=format&fit=crop')] bg-cover bg-center opacity-10"></div>
        
        {/* Glass texture pattern */}
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(59, 130, 246, 0.1) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
        
        {/* Blue glass refraction effect */}
        <div className="absolute inset-0 bg-gradient-to-t from-blue-600/10 via-transparent to-cyan-500/10 mix-blend-overlay"></div>
        
        {/* Subtle floating elements for glass-like reflections */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
      </div>

      {/* Frosted glass container */}
      <div className="container mx-auto px-4 relative">
        <div className="backdrop-blur-xl bg-gradient-to-b from-white/80 via-white/60 to-white/40 rounded-3xl border border-white/20 shadow-2xl shadow-blue-900/10 p-8 md:p-12">
          
          {/* Section Header with glass effect */}
          <div className="text-center mb-12 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-cyan-600/10 blur-3xl rounded-full"></div>
            
            <div className="relative">
              <div className="inline-block backdrop-blur-sm bg-blue-600/10 border border-blue-500/30 text-blue-700 px-6 py-3 rounded-full text-sm font-semibold mb-6 shadow-lg shadow-blue-500/20">
                <span className="flex items-center justify-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                  Our Premium Portfolio
                </span>
              </div>
              
              <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 bg-gradient-to-r from-blue-900 via-sky-900 to-cyan-900 bg-clip-text text-transparent">
                Gallery of Excellence
              </h2>
              
              <div className="max-w-3xl mx-auto">
                <p className="text-xl text-gray-700 mb-8 leading-relaxed backdrop-blur-sm bg-white/30 rounded-2xl p-6 border border-white/40">
                  Explore our completed projects showcasing quality craftsmanship and innovative 
                  glass solutions for various applications. Each piece reflects our commitment 
                  to excellence in glass artistry.
                </p>
              </div>
            </div>
          </div>

          {/* Filter Buttons with glass effect */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveFilter(category.id)}
                className={`px-7 py-3.5 rounded-xl font-medium transition-all duration-300 backdrop-blur-sm border
                  ${activeFilter === category.id
                    ? 'bg-gradient-to-r from-blue-600/90 to-cyan-600/90 text-white shadow-2xl shadow-blue-500/30 border-blue-400/50 transform scale-105'
                    : 'bg-white/40 text-gray-700 hover:bg-white/60 border-white/50 hover:shadow-lg hover:shadow-blue-200/30'
                  }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Gallery Grid with glass cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="group relative overflow-hidden rounded-2xl cursor-pointer transform transition-all duration-500 hover:-translate-y-2"
                onClick={() => setSelectedImage(item)}
              >
                {/* Glass card effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-md rounded-2xl border border-white/30 shadow-2xl shadow-blue-900/10"></div>
                
                {/* Card content */}
                <div className="relative p-1">
                  <div className="aspect-square overflow-hidden rounded-xl">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      loading="lazy"
                    />
                  </div>
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl">
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600/80 to-cyan-600/80 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-3 border border-white/20">
                        <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></div>
                        {item.category.charAt(0).toUpperCase() + item.category.slice(1)}
                      </div>
                      <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                      <p className="text-gray-200 text-sm leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* View More Button with glass effect */}
          <div className="text-center mt-16">
            <button className="group relative inline-flex items-center justify-center overflow-hidden rounded-xl bg-gradient-to-r from-blue-600/90 to-cyan-600/90 text-white px-10 py-5 font-bold text-lg transition-all duration-300 shadow-2xl shadow-blue-500/30 hover:shadow-3xl hover:shadow-blue-600/40">
              <span className="relative z-10 flex items-center gap-3">
                View Complete Portfolio
                <ChevronRight className="ml-1 h-5 w-5 group-hover:translate-x-2 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-cyan-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              {/* Glass shine effect */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/50 to-transparent group-hover:animate-shine"></div>
            </button>
          </div>
        </div>
      </div>

      {/* Lightbox Modal with glass effect */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop with blue glass effect */}
          <div 
            className="absolute inset-0 bg-gradient-to-br from-blue-900/95 via-sky-900/90 to-cyan-900/95 backdrop-blur-xl"
            onClick={() => setSelectedImage(null)}
          >
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519681393784-d120267933ba?w=1920&auto=format&fit=crop')] bg-cover bg-center opacity-5"></div>
          </div>
          
          {/* Modal content */}
          <div className="relative max-w-6xl w-full backdrop-blur-2xl bg-gradient-to-br from-white/10 to-white/5 rounded-3xl border border-white/20 shadow-2xl shadow-blue-900/30 overflow-hidden">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 z-50 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white hover:text-gray-200 rounded-full p-3 transition-all duration-300 border border-white/30"
            >
              <X className="h-6 w-6" />
            </button>
            
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Image side */}
              <div className="relative aspect-square lg:aspect-auto lg:h-[600px]">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-cyan-600/10 backdrop-blur-sm"></div>
                <img
                  src={selectedImage.hdImage || selectedImage.image}
                  alt={selectedImage.title}
                  className="w-full h-full object-cover"
                />
                {/* Glass overlay effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 via-transparent to-transparent"></div>
              </div>
              
              {/* Content side with glass effect */}
              <div className="p-8 lg:p-12 backdrop-blur-sm bg-gradient-to-br from-white/60 via-white/40 to-white/20">
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 backdrop-blur-sm text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-blue-400/30">
                  <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></div>
                  {selectedImage.category.toUpperCase()}
                </div>
                
                <h3 className="text-4xl font-bold text-gray-900 mb-6 bg-gradient-to-r from-blue-900 to-sky-900 bg-clip-text text-transparent">
                  {selectedImage.title}
                </h3>
                
                <div className="mb-8">
                  <p className="text-gray-700 text-lg mb-6 backdrop-blur-sm bg-white/40 rounded-xl p-4 border border-white/40">
                    {selectedImage.description}
                  </p>
                  
                  <div className="space-y-6">
                    <div className="backdrop-blur-sm bg-white/30 rounded-xl p-5 border border-white/40">
                      <h4 className="font-bold text-gray-900 text-xl mb-3 flex items-center gap-2">
                        <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                        Project Details
                      </h4>
                      <p className="text-gray-700 leading-relaxed">
                        Custom glass installation with precision engineering and premium materials. 
                        This project showcases our expertise in creating functional and aesthetic 
                        glass solutions that blend seamlessly with modern architecture.
                      </p>
                    </div>
                    
                    <div className="backdrop-blur-sm bg-white/30 rounded-xl p-5 border border-white/40">
                      <h4 className="font-bold text-gray-900 text-xl mb-3 flex items-center gap-2">
                        <div className="w-2 h-2 bg-cyan-600 rounded-full"></div>
                        Premium Features
                      </h4>
                      <ul className="space-y-3">
                        {['Tempered safety glass with certification', 'Custom hardware in premium finishes', 
                          'Professional precision installation', 'Extended quality guarantee', 
                          'Energy-efficient glass technology', 'Custom design patterns available'].map((feature, index) => (
                          <li key={index} className="flex items-center gap-3 text-gray-700">
                            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                
                <button className="group w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-4 rounded-xl font-bold text-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-600/40">
                  <span className="flex items-center justify-center gap-2">
                    Request Similar Project
                    <ChevronRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Add custom animation for shine effect */}
      <style jsx>{`
        @keyframes shine {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .animate-shine {
          animation: shine 2s infinite;
        }
      `}</style>
    </section>
  );
};

export default Gallery;