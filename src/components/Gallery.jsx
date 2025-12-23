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
      image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800&auto=format&fit=crop',
      description: 'Frameless glass partitions for modern office spaces'
    },
    {
      id: 2,
      title: 'Luxury Shower Enclosure',
      category: 'shower',
      image: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=800&auto=format&fit=crop',
      description: 'Custom shower glass partitions with elegant hardware'
    },
    {
      id: 3,
      title: 'Commercial Glass Facade',
      category: 'commercial',
      image: 'https://images.unsplash.com/photo-1487956382158-bb926046304a?w=800&auto=format&fit=crop',
      description: 'Spider glazing for commercial building exterior'
    },
    {
      id: 4,
      title: 'Designer Glass Wall',
      category: 'designer',
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&auto=format&fit=crop',
      description: 'Custom designed glass panels with artistic patterns'
    },
    {
      id: 5,
      title: 'Glass Railing Installation',
      category: 'railing',
      image: 'https://images.unsplash.com/photo-1618220179428-22790b461013?w=800&auto=format&fit=crop',
      description: 'Frameless glass railings for staircase'
    },
    {
      id: 6,
      title: 'Residential Glass Doors',
      category: 'residential',
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&auto=format&fit=crop',
      description: 'Custom glass doors for residential entrance'
    },
    {
      id: 7,
      title: 'LED Mirror Installation',
      category: 'mirror',
      image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&auto=format&fit=crop',
      description: 'Smart LED mirrors with anti-fog technology'
    },
    {
      id: 8,
      title: 'Hotel Glass Partition',
      category: 'commercial',
      image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&auto=format&fit=crop',
      description: 'Luxury glass partitions for hotel spaces'
    },
    {
      id: 9,
      title: 'Glass Balcony',
      category: 'railing',
      image: 'https://images.unsplash.com/photo-1545324412-51b3e3556f80?w=800&auto=format&fit=crop',
      description: 'Clear glass balcony railings with panoramic views'
    },
    {
      id: 10,
      title: 'Textured Glass Wall',
      category: 'designer',
      image: 'https://images.unsplash.com/photo-1604014238687-e6cbb6a5e50f?w=800&auto=format&fit=crop',
      description: 'Textured glass for privacy with style'
    },
    {
      id: 11,
      title: 'Shopping Mall Glass Work',
      category: 'commercial',
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&auto=format&fit=crop',
      description: 'Complete glass installation for retail space'
    },
    {
      id: 12,
      title: 'Modern Bathroom Glass',
      category: 'shower',
      image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&auto=format&fit=crop',
      description: 'Frameless shower enclosures with minimal hardware'
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
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Our Portfolio
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Gallery of Excellence
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our completed projects showcasing quality craftsmanship and innovative 
            glass solutions for various applications.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveFilter(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeFilter === category.id
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer"
              onClick={() => setSelectedImage(item)}
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="inline-block bg-blue-600 px-3 py-1 rounded-full text-sm font-medium mb-3">
                    {item.category.charAt(0).toUpperCase() + item.category.slice(1)}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-200">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <button className="inline-flex items-center justify-center bg-gradient-to-r from-blue-600 to-blue-800 text-white px-8 py-4 rounded-lg font-bold text-lg hover:from-blue-700 hover:to-blue-900 transition-all duration-300 shadow-lg hover:shadow-xl">
            View Complete Portfolio
            <ChevronRight className="ml-2 h-5 w-5" />
          </button>
        </div>

        {/* Lightbox Modal */}
        {selectedImage && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
            <div className="relative max-w-6xl w-full">
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 text-white hover:text-gray-300 z-10"
              >
                <X className="h-8 w-8" />
              </button>
              
              <div className="bg-white rounded-2xl overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div className="aspect-square lg:aspect-auto lg:h-[600px]">
                    <img
                      src={selectedImage.image}
                      alt={selectedImage.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-8 lg:p-12">
                    <div className="inline-block bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
                      {selectedImage.category.toUpperCase()}
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-4">
                      {selectedImage.title}
                    </h3>
                    <p className="text-gray-600 text-lg mb-8">
                      {selectedImage.description}
                    </p>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Project Details</h4>
                        <p className="text-gray-600">
                          Custom glass installation with precision engineering and high-quality materials. 
                          This project showcases our expertise in creating functional and aesthetic glass solutions.
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Features</h4>
                        <ul className="list-disc list-inside text-gray-600 space-y-2">
                          <li>Tempered safety glass</li>
                          <li>Custom hardware finish</li>
                          <li>Professional installation</li>
                          <li>Quality guarantee</li>
                        </ul>
                      </div>
                    </div>
                    <button className="mt-8 w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                      Request Similar Project
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;