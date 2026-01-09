import React, { useState, useMemo, useEffect, useRef, useCallback } from "react";
import {
  Boxes,
  Shield,
  Palette,
  Zap,
  DoorClosed,
  Square,
  Image as ImageIcon,
  Frame,
  X,
  ChevronRight,
  ChevronLeft,
  ExternalLink,
  Home,
  Filter,
  Maximize2,
  Download,
} from "lucide-react";
import { servicesData } from "../utils/servicesdata";
import { images } from "../utils/images";
import adarsh from "../assets/img/logos/adarsh-group.png";
import homelane from "../assets/img/logos/Homelane.png";
import dsmax from "../assets/img/logos/Ds-Max.png";
import neo from "../assets/img/logos/neo.jpg";
import gateway from "../assets/img/logos/hotel.png";
import eta from "../assets/img/logos/Et-Mall.png";

const OurWorks = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedImage, setSelectedImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [filteredImages, setFilteredImages] = useState([]);
  const [loadedImages, setLoadedImages] = useState(new Set());
  const containerRef = useRef(null);
  const observerRef = useRef(null);

  /* ================= SCROLL PERFORMANCE ================= */
  useEffect(() => {
    // Disable smooth scroll during interactions
    const disableSmoothScroll = () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
    
    const enableSmoothScroll = () => {
      setTimeout(() => {
        document.documentElement.style.scrollBehavior = 'smooth';
      }, 100);
    };

    window.addEventListener('wheel', disableSmoothScroll, { passive: true });
    window.addEventListener('touchmove', disableSmoothScroll, { passive: true });

    return () => {
      window.removeEventListener('wheel', disableSmoothScroll);
      window.removeEventListener('touchmove', disableSmoothScroll);
      enableSmoothScroll();
    };
  }, []);

  /* ================= CLIENT LOGOS ================= */
  const clients = [
    { name: "Adarsh Builders", logo: adarsh },
    { name: "Homelane Interiors", logo: homelane },
    { name: "DS Max (Kryshvi Interiors)", logo: dsmax },
    { name: "Neo Studio", logo: neo },
    { name: "Gateway Hotel", logo: gateway },
    { name: "ETA Mall", logo: eta },
  ];

  /* ================= CATEGORIES ================= */
  const categories = [
    { id: "all", name: "All Works", icon: <Boxes size={16} /> },
    { id: "shower", name: "Shower", icon: <Zap size={16} /> },
    { id: "windows", name: "Windows", icon: <Square size={16} /> },
    { id: "railings", name: "Railings", icon: <Shield size={16} /> },
    { id: "lacquered", name: "Lacquered", icon: <Palette size={16} /> },
    { id: "mirrors", name: "Mirrors", icon: <ImageIcon size={16} /> },
    { id: "partitions", name: "Partitions", icon: <Frame size={16} /> },
    { id: "doors", name: "Doors", icon: <DoorClosed size={16} /> },
  ];

  /* ================= GET ALL IMAGES ================= */
  const allImages = useMemo(() => {
    const imageMap = new Map();
    let idCounter = 1;

    servicesData.forEach((service) => {
      (service.images || [])
        .filter((img) => img && typeof img === "string" && !img.endsWith(".mp4"))
        .forEach((img, index) => {
          if (!imageMap.has(img)) {
            const relatedService = servicesData.find(s => 
              s.images?.includes(img) && s.category === service.category
            );
            
            imageMap.set(img, {
              id: `img-${idCounter++}`,
              src: img,
              title: service.title,
              category: service.category,
              description: service.description,
              serviceId: service.id,
              relatedImages: servicesData
                .filter(s => s.category === service.category && s.id !== service.id)
                .slice(0, 2) // Reduced from 3 to 2
                .map(s => ({
                  id: s.id,
                  title: s.title,
                  image: s.images?.[0] || ""
                })),
              type: "image",
            });
          }
        });
    });

    return Array.from(imageMap.values());
  }, []);

  /* ================= FILTER IMAGES ================= */
  useEffect(() => {
    if (selectedCategory === "all") {
      setFilteredImages(allImages);
    } else {
      const filtered = allImages.filter(img => img.category === selectedCategory);
      setFilteredImages(filtered);
    }
  }, [selectedCategory, allImages]);

  /* ================= LAZY LOAD IMAGES ================= */
  useEffect(() => {
    if (!containerRef.current || isModalOpen) return;

    // Cleanup previous observer
    if (observerRef.current) {
      observerRef.current.disconnect();
    }

    const imageObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const img = entry.target;
            const src = img.dataset.src;
            if (src && !loadedImages.has(src)) {
              img.src = src;
              img.onload = () => {
                setLoadedImages(prev => new Set([...prev, src]));
              };
              imageObserver.unobserve(img);
            }
          }
        });
      },
      { rootMargin: "100px", threshold: 0.01 }
    );

    const images = containerRef.current.querySelectorAll('img[data-src]');
    images.forEach(img => imageObserver.observe(img));

    observerRef.current = imageObserver;

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [filteredImages, isModalOpen, loadedImages]);

  /* ================= MODAL FUNCTIONS ================= */
  const openModal = (image, index) => {
    setSelectedImage(image);
    setCurrentIndex(index);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
    document.body.style.overflow = 'unset';
  };

  const navigateImage = useCallback((direction) => {
    requestAnimationFrame(() => {
      let newIndex;
      if (direction === 'next') {
        newIndex = (currentIndex + 1) % filteredImages.length;
      } else {
        newIndex = (currentIndex - 1 + filteredImages.length) % filteredImages.length;
      }
      
      setCurrentIndex(newIndex);
      setSelectedImage(filteredImages[newIndex]);
    });
  }, [currentIndex, filteredImages]);

  const handleKeyDown = (e) => {
    if (!isModalOpen) return;
    
    if (e.key === 'Escape') closeModal();
    if (e.key === 'ArrowRight') navigateImage('next');
    if (e.key === 'ArrowLeft') navigateImage('prev');
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isModalOpen, navigateImage]);

  /* ================= BREADCRUMB DATA ================= */
  const breadcrumbs = [
    { name: "Home", path: "/", icon: <Home size={14} /> },
    { name: "Gallery", path: "/works" },
    selectedCategory !== "all" && { 
      name: categories.find(c => c.id === selectedCategory)?.name 
    },
  ].filter(Boolean);

  return (
    <div className="bg-[#020617] text-white min-h-screen font-sans" ref={containerRef}>
      {/* ================= HEADER HERO SECTION ================= */}
      <header 
        className="pt-20 md:pt-24 px-4 text-center relative overflow-hidden min-h-[60vh] flex items-center justify-center"
        style={{
          backgroundImage: `
            linear-gradient(135deg, rgba(2, 6, 23, 0.85) 0%, rgba(30, 58, 138, 0.6) 100%),
            url(${images.lacquredglass1})
          `,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          // REMOVED fixed attachment for performance
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/60"></div>
        <div className="relative z-10 py-16 w-full max-w-7xl mx-auto">
          {/* BREADCRUMB NAVIGATION */}
          <div className="absolute top-4 left-4 md:left-8">
            <div className="flex items-center gap-1 md:gap-2 text-sm text-white/80">
              {breadcrumbs.map((crumb, index) => (
                <React.Fragment key={index}>
                  {index > 0 && <ChevronRight size={14} className="text-white/50" />}
                  {crumb.path ? (
                    <a 
                      href={crumb.path} 
                      className="flex items-center gap-1 hover:text-white transition-colors"
                    >
                      {crumb.icon}
                      <span>{crumb.name}</span>
                    </a>
                  ) : (
                    <span className="flex items-center gap-1 text-blue-300 font-medium">
                      {crumb.icon}
                      {crumb.name}
                    </span>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight uppercase leading-tight drop-shadow-2xl mb-4">
            Our Works
          </h1>
          <p className="text-blue-300 font-bold tracking-[0.25em] uppercase text-sm md:text-base drop-shadow-lg mb-8">
            Premium Gallery
          </p>
          
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
            <Filter size={16} />
            <span className="text-sm font-medium">{filteredImages.length} Projects</span>
            <span className="text-white/50">•</span>
            <span className="text-sm text-blue-300">
              {categories.find(c => c.id === selectedCategory)?.name || 'All Categories'}
            </span>
          </div>
        </div>
      </header>

      {/* ================= CLIENTS SECTION ================= */}
      <section className="max-w-7xl mx-auto px-4 md:px-6 py-12 md:py-16">
        <div className="text-center mb-10 md:mb-16">
          <div className="inline-block mb-3">
            <span className="bg-blue-900/30 text-blue-300 px-4 py-1 rounded-full text-xs font-bold tracking-widest uppercase">
              Trusted By
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-black uppercase mb-3">
            Industry Leaders
          </h2>
          <p className="text-blue-400 font-semibold tracking-widest uppercase text-sm md:text-base">
            Our Esteemed Clients
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 md:gap-6">
          {clients.map((client, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-white/5 to-white/0 border border-white/10 rounded-2xl p-4 md:p-6 flex flex-col items-center justify-center hover:border-blue-500/50 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <img
                src={client.logo}
                alt={client.name}
                className="h-12 md:h-16 object-contain group-hover:scale-105 transition-transform duration-300 relative z-10"
                loading="lazy"
              />
              <p className="mt-3 md:mt-4 text-xs md:text-sm font-semibold text-gray-300 group-hover:text-white text-center relative z-10">
                {client.name}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= CATEGORY FILTER BAR ================= */}
      <div className="sticky top-0 md:top-20 z-30 bg-[#020617]/95 backdrop-blur-lg border-y border-white/10 py-3 md:py-4">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <Filter size={18} className="text-blue-400" />
              <span className="text-sm font-medium text-white/80">Filter by:</span>
            </div>
            <span className="text-xs text-blue-300 font-medium">
              {filteredImages.length} items
            </span>
          </div>
          <div className="flex overflow-x-auto pb-2 space-x-2 md:space-x-3 scrollbar-hide">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full border text-xs md:text-sm font-medium transition-all whitespace-nowrap ${
                  selectedCategory === cat.id
                    ? "bg-gradient-to-r from-blue-600 to-blue-400 text-white border-blue-500 shadow-lg shadow-blue-500/20"
                    : "border-white/10 bg-white/5 hover:border-white/30"
                }`}
              >
                {cat.icon}
                {cat.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ================= IMAGE GALLERY ================= */}
      <div className="max-w-[1600px] mx-auto px-4 md:px-6 py-8 md:py-12">
        {filteredImages.length === 0 ? (
          <div className="text-center py-20">
            <div className="inline-block p-6 rounded-full bg-white/5 mb-4">
              <ImageIcon size={48} className="text-white/30" />
            </div>
            <h3 className="text-xl font-bold mb-2">No images found</h3>
            <p className="text-gray-400 mb-6">Try selecting a different category</p>
            <button
              onClick={() => setSelectedCategory("all")}
              className="px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded-full font-medium transition-colors"
            >
              View All Works
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {filteredImages.map((item, index) => (
              <div
                key={item.id}
                className="group relative aspect-square rounded-2xl overflow-hidden border border-white/5 bg-gradient-to-br from-white/5 to-transparent cursor-pointer"
                onClick={() => openModal(item, index)}
              >
                {/* IMAGE - LAZY LOADED */}
                <img
                  data-src={item.src}
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 800'%3E%3Crect width='800' height='800' fill='%231e293b'/%3E%3C/svg%3E"
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />

                {/* Loading placeholder */}
                {!loadedImages.has(item.src) && (
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/10 animate-pulse"></div>
                )}

                {/* OVERLAY GRADIENT - Simplified */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>

                {/* IMAGE INFO */}
                <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs text-blue-300 uppercase font-bold tracking-wider bg-blue-900/30 px-2 py-1 rounded">
                      {item.category}
                    </span>
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                      <Maximize2 size={16} className="text-white" />
                    </div>
                  </div>
                  <h3 className="text-base md:text-lg font-bold line-clamp-1 mb-1">
                    {item.title}
                  </h3>
                  <p className="text-xs text-gray-300 line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    {item.description?.substring(0, 60)}...
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* IMAGE COUNTER */}
        <div className="text-center mt-8 md:mt-12 text-sm text-gray-400">
          Showing <span className="text-blue-300 font-bold">{filteredImages.length}</span> of{" "}
          <span className="text-white font-bold">{allImages.length}</span> images
        </div>
      </div>

      {/* ================= IMAGE MODAL ================= */}
      {isModalOpen && selectedImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6">
          {/* BACKDROP */}
          <div 
            className="absolute inset-0 bg-black/90 backdrop-blur-sm"
            onClick={closeModal}
          />
          
          {/* MODAL CONTENT */}
          <div className="relative w-full max-w-7xl h-[90vh] bg-[#0f172a] rounded-2xl md:rounded-3xl overflow-hidden border border-white/10 shadow-xl">
            {/* MODAL HEADER */}
            <div className="absolute top-0 left-0 right-0 z-20 flex items-center justify-between p-4 md:p-6 bg-gradient-to-b from-black/80 to-transparent">
              {/* BREADCRUMB */}
              <div className="flex items-center gap-2 text-sm">
                <button
                  onClick={closeModal}
                  className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                >
                  <X size={20} />
                </button>
                <span className="text-white/60">/</span>
                <span className="text-blue-300 font-medium">{selectedImage.category}</span>
                <ChevronRight size={16} className="text-white/40" />
                <span className="font-semibold truncate max-w-[200px]">{selectedImage.title}</span>
              </div>

              {/* CONTROLS */}
              <div className="flex items-center gap-2">
                <button
                  onClick={() => navigateImage('prev')}
                  className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                  title="Previous"
                >
                  <ChevronLeft size={20} />
                </button>
                <span className="text-sm font-medium px-2">
                  {currentIndex + 1} / {filteredImages.length}
                </span>
                <button
                  onClick={() => navigateImage('next')}
                  className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                  title="Next"
                >
                  <ChevronRight size={20} />
                </button>
                <a
                  href={selectedImage.src}
                  download
                  className="p-2 hover:bg-white/10 rounded-lg transition-colors ml-2"
                  title="Download"
                >
                  <Download size={20} />
                </a>
              </div>
            </div>

            {/* MAIN IMAGE */}
            <div className="h-full w-full flex items-center justify-center p-4 md:p-8 pt-16 md:pt-20 pb-20 md:pb-24">
              <img
                src={selectedImage.src}
                alt={selectedImage.title}
                className="max-h-full max-w-full object-contain rounded-lg"
                loading="eager"
              />
            </div>

            {/* MODAL FOOTER */}
            <div className="absolute bottom-0 left-0 right-0 z-20 p-4 md:p-6 bg-gradient-to-t from-black/80 to-transparent">
              {/* IMAGE INFO */}
              <div className="mb-4 md:mb-6">
                <h2 className="text-xl md:text-2xl font-bold mb-2">{selectedImage.title}</h2>
                <p className="text-gray-300 text-sm md:text-base mb-4 line-clamp-3">
                  {selectedImage.description}
                </p>
                
                {/* RELATED SERVICES - Simplified */}
                {selectedImage.relatedImages && selectedImage.relatedImages.length > 0 && (
                  <div className="mt-4 pt-4 border-t border-white/10">
                    <h3 className="text-sm font-bold uppercase tracking-wider text-blue-300 mb-3">
                      Related Services
                    </h3>
                    <div className="flex gap-3 overflow-x-auto pb-2">
                      {selectedImage.relatedImages.map((related) => (
                        <a
                          key={related.id}
                          href={`/services/${related.id}`}
                          className="flex-shrink-0 w-32 bg-white/5 rounded-lg p-3 hover:bg-white/10 transition-colors group"
                        >
                          {related.image && (
                            <img
                              src={related.image}
                              alt={related.title}
                              className="w-full h-20 object-cover rounded mb-2"
                              loading="lazy"
                            />
                          )}
                          <p className="text-xs font-medium line-clamp-2">
                            {related.title}
                          </p>
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* ACTION BUTTONS */}
              <div className="flex flex-wrap gap-3">
                <a
                  href={`/services/${selectedImage.serviceId}`}
                  className="inline-flex items-center gap-2 px-4 py-2 md:py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-medium transition-colors"
                >
                  View Service Details
                  <ExternalLink size={16} />
                </a>
                <button
                  onClick={closeModal}
                  className="inline-flex items-center gap-2 px-4 py-2 md:py-3 bg-white/10 hover:bg-white/20 rounded-lg font-medium transition-colors"
                >
                  Close
                </button>
              </div>
            </div>

            {/* NAVIGATION ARROWS */}
            <button
              onClick={() => navigateImage('prev')}
              className="hidden md:block absolute left-4 top-1/2 transform -translate-y-1/2 p-3 bg-black/50 hover:bg-black/70 rounded-full transition-colors z-10"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={() => navigateImage('next')}
              className="hidden md:block absolute right-4 top-1/2 transform -translate-y-1/2 p-3 bg-black/50 hover:bg-black/70 rounded-full transition-colors z-10"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default OurWorks;