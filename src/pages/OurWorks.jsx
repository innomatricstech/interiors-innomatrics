import React, { useState, useMemo } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Maximize2,
  X,
  Download,
  Boxes,
  LayoutGrid,
  Home,
  Building,
  Shield,
  Palette,
  Zap,
  DoorClosed,
  Square,
  Image,
  GalleryVerticalEnd,
  Frame
} from "lucide-react";
import { images } from "../utils/images";
import { servicesData } from "../utils/servicesdata";


const OurWorks = () => {
  const [selectedWork, setSelectedWork] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [isFullView, setIsFullView] = useState(false);

  /* =======================
     CATEGORIES WITH VALID ICONS
  ======================= */
  const categories = [
    { id: "all", name: "All Works", icon: <Boxes size={16} /> },
    { id: "shower", name: "Shower", icon: <Zap size={16} /> },
    { id: "windows", name: "Windows", icon: <Square size={16} /> }, // Changed from Window to Square
    { id: "railings", name: "Railings", icon: <Shield size={16} /> },
    { id: "lacquered", name: "Lacquered", icon: <Palette size={16} /> },
    { id: "mirrors", name: "Mirrors", icon: <Image size={16} /> }, // Changed from Home to Image
    { id: "partitions", name: "Partitions", icon: <Frame size={16} /> }, // Changed from Building to Frame
    { id: "doors", name: "Doors", icon: <DoorClosed size={16} /> }
  ];

  /* =======================
     ALL REAL IMAGES FROM YOUR FILES
  ======================= */
const allImages = useMemo(() => {
  return servicesData.flatMap(service =>
    (service.images || [])
      .filter(img => img) // 🔥 IMAGE ILLA NA AUTO REMOVE
      .filter(img => typeof img === "string" && !img.endsWith(".mp4")) // 🔥 VIDEO REMOVE (optional)
      .map((img, index) => ({
        id: `${service.id}-${index}`,
        src: img,
        title: service.title,
        category: service.category,
        type: "image",
      }))
  );
}, []);



  /* =======================
     FILTER IMAGES BY CATEGORY
  ======================= */
  const filteredImages = useMemo(() => {
    if (selectedCategory === "all") return allImages;
    return allImages.filter(img => img.category === selectedCategory);
  }, [selectedCategory, allImages]);

  /* =======================
     IMAGE NAVIGATION
  ======================= */
  const navigateImage = (dir) => {
    if (!selectedWork) return;
    
    let i = dir === "next" ? currentImageIndex + 1 : currentImageIndex - 1;
    if (i >= filteredImages.length) i = 0;
    if (i < 0) i = filteredImages.length - 1;
    
    setCurrentImageIndex(i);
    setSelectedWork(filteredImages[i]);
  };

  /* =======================
     DOWNLOAD IMAGE
  ======================= */
  const downloadImage = () => {
    if (!selectedWork) return;
    
    const link = document.createElement('a');
    link.href = selectedWork.src;
    link.download = `sri-ayyappan-glass-${selectedWork.title.toLowerCase().replace(/\s+/g, '-')}.jpg`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="bg-[#020617] text-white min-h-screen font-sans">
      
      {/* HEADER */}
      <header className="pt-20 md:pt-24 px-4 text-center">
        <h1 className="text-3xl md:text-6xl lg:text-7xl font-black tracking-tight mb-4 uppercase opacity-90">
          Our Works
        </h1>
        <p className="text-blue-400 font-bold tracking-[0.2em] md:tracking-[0.3em] uppercase text-xs md:text-sm">
          Premium Gallery
        </p>
      </header>

      {/* CATEGORIES - Mobile Horizontal Scroll */}
      <div className="sticky top-20 z-30 bg-[#020617]/90 backdrop-blur-md border-b border-white/10 py-4">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex overflow-x-auto pb-2 space-x-2 md:space-x-3">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => {
                  setSelectedCategory(cat.id);
                  setIsFullView(false);
                }}
                className={`flex-shrink-0 flex items-center gap-2 px-4 py-2 rounded-full border text-xs font-medium transition-all ${
                  selectedCategory === cat.id 
                    ? 'bg-blue-500 text-white border-blue-500' 
                    : 'border-white/10 hover:border-white/30 bg-white/5'
                }`}
              >
                {cat.icon}
                <span>{cat.name}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* IMAGE GRID */}
      <div className="max-w-[1600px] mx-auto px-4 md:px-6 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {filteredImages.map((item, index) => (
            <div 
              key={index}
              onClick={() => {
                setSelectedWork(item);
                setCurrentImageIndex(index);
                setIsFullView(true);
              }}
              className="group relative aspect-square rounded-xl md:rounded-2xl overflow-hidden cursor-pointer border border-white/5 bg-gradient-to-b from-gray-900 to-black hover:border-blue-500/50 transition-all duration-300 hover:scale-[1.02]"
            >
              {/* Main Image */}
              <img 
                src={item.src} 
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                loading="lazy"
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>
              
              {/* Content Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-xs md:text-sm font-bold text-blue-300 uppercase tracking-wider">
                      {item.category}
                    </span>
                    <h3 className="text-sm md:text-lg font-bold mt-1 line-clamp-1">
                      {item.title}
                    </h3>
                  </div>
                  <div className="bg-blue-500/20 backdrop-blur-sm p-2 rounded-lg border border-blue-500/30 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Maximize2 size={16} className="text-blue-300" />
                  </div>
                </div>
              </div>
              
              {/* Hover Indicator */}
              <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity">
                View
              </div>
            </div>
          ))}
        </div>
        
        {/* No Images Message */}
        {filteredImages.length === 0 && (
          <div className="text-center py-16">
            <div className="text-gray-400 text-lg">No images found for this category</div>
            <button 
              onClick={() => setSelectedCategory("all")}
              className="mt-4 text-blue-400 hover:text-blue-300"
            >
              View all works →
            </button>
          </div>
        )}
        
        {/* Image Count */}
        <div className="text-center mt-8 text-sm text-gray-400">
          Showing {filteredImages.length} images
        </div>
      </div>

      {/* FULL VIEW MODAL */}
      {selectedWork && isFullView && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex flex-col">
          {/* Header Bar */}
          <div className="flex items-center justify-between p-4 md:p-6 border-b border-white/10 bg-black/50">
            <div>
              <h2 className="text-xl md:text-2xl font-bold">{selectedWork.title}</h2>
              <p className="text-sm text-gray-400">{selectedWork.category.toUpperCase()}</p>
            </div>
            
            <div className="flex items-center gap-2 md:gap-4">
              <button
                onClick={downloadImage}
                className="p-2 md:p-3 bg-white/10 hover:bg-white/20 rounded-lg transition-colors"
                title="Download"
              >
                <Download size={20} className="md:size-6" />
              </button>
              
              <button
                onClick={() => setIsFullView(false)}
                className="p-2 md:p-3 bg-white/10 hover:bg-white/20 rounded-lg transition-colors"
              >
                <X size={20} className="md:size-6" />
              </button>
            </div>
          </div>

          {/* Main Image View */}
          <div className="flex-1 relative overflow-hidden">
            {/* Navigation Buttons */}
            <button
              onClick={() => navigateImage("prev")}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-3 md:p-4 bg-black/50 hover:bg-black/70 rounded-full backdrop-blur-sm z-10"
            >
              <ChevronLeft size={24} className="md:size-8" />
            </button>
            
            <button
              onClick={() => navigateImage("next")}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-3 md:p-4 bg-black/50 hover:bg-black/70 rounded-full backdrop-blur-sm z-10"
            >
              <ChevronRight size={24} className="md:size-8" />
            </button>

            {/* Current Image */}
            <div className="w-full h-full flex items-center justify-center p-4">
              <img
                src={selectedWork.src}
                alt={selectedWork.title}
                className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
              />
            </div>

            {/* Image Counter */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 backdrop-blur-sm px-4 py-2 rounded-full text-sm">
              {currentImageIndex + 1} / {filteredImages.length}
            </div>
          </div>

          {/* Thumbnail Strip */}
          <div className="p-4 border-t border-white/10 bg-black/50">
            <div className="flex overflow-x-auto space-x-2 pb-2">
              {filteredImages.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setCurrentImageIndex(idx);
                    setSelectedWork(img);
                  }}
                  className={`flex-shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-lg overflow-hidden border-2 transition-all ${
                    idx === currentImageIndex
                      ? "border-blue-500 scale-105"
                      : "border-white/10 hover:border-white/30 opacity-60 hover:opacity-100"
                  }`}
                >
                  <img
                    src={img.src}
                    alt={`Thumbnail ${idx + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default OurWorks;