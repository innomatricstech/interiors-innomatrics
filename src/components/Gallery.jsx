import { useState, useMemo, useRef, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Maximize2, Boxes, LayoutGrid, Video } from 'lucide-react';
import { images } from "../utils/images";
import { servicesData } from "../utils/servicesdata";

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFullView, setIsFullView] = useState(false);
  const [loadedImages, setLoadedImages] = useState(new Set());
  const containerRef = useRef(null);
  const scrollTimeoutRef = useRef(null);

  // PERFOMANCE OPTIMIZATION: Throttle scroll and animations
  useEffect(() => {
    // Disable smooth scrolling during interactions
    const disableSmoothScroll = () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
    
    const enableSmoothScroll = () => {
      document.documentElement.style.scrollBehavior = 'smooth';
    };

    window.addEventListener('wheel', disableSmoothScroll, { passive: true });
    window.addEventListener('touchmove', disableSmoothScroll, { passive: true });

    return () => {
      window.removeEventListener('wheel', disableSmoothScroll);
      window.removeEventListener('touchmove', disableSmoothScroll);
      enableSmoothScroll();
    };
  }, []);

  // PERFOMANCE: Debounce state updates
  const debouncedSetState = useCallback((setter, value, delay = 50) => {
    if (scrollTimeoutRef.current) {
      clearTimeout(scrollTimeoutRef.current);
    }
    scrollTimeoutRef.current = setTimeout(() => {
      setter(value);
    }, delay);
  }, []);

  const galleryItems = useMemo(() => {
    const seen = new Set();
    const items = [];

    servicesData.forEach(service => {
      if (!Array.isArray(service.images)) return;

      service.images.forEach(img => {
        if (!img || seen.has(img)) return;
        seen.add(img);
        
        items.push({
          id: img,
          image: img,
          title: service.title,
          category: service.category,
          type: typeof img === "string" && img.endsWith(".mp4") ? "video" : "image",
        });
      });
    });

    return items;
  }, []);

  const categories = useMemo(() => [
    { id: "all", name: "All Collection" },
    ...Array.from(new Set(servicesData.map(service => service.category)))
      .map(cat => ({ id: cat, name: cat })),
    { id: "video", name: "Videos" }
  ], []);

  const filteredItems = useMemo(() => {
    if (activeCategory === 'all') return galleryItems;
    return galleryItems.filter(item => 
      activeCategory === 'video' 
        ? item.type === 'video'
        : item.category === activeCategory
    );
  }, [activeCategory, galleryItems]);

  // PERFOMANCE: Optimized next/prev with requestAnimationFrame
  const nextSlide = useCallback((e) => {
    e?.stopPropagation();
    requestAnimationFrame(() => {
      setCurrentIndex((prev) => (prev === galleryItems.length - 1 ? 0 : prev + 1));
    });
  }, [galleryItems.length]);

  const prevSlide = useCallback((e) => {
    e?.stopPropagation();
    requestAnimationFrame(() => {
      setCurrentIndex((prev) => (prev === 0 ? galleryItems.length - 1 : prev - 1));
    });
  }, [galleryItems.length]);

  // PERFOMANCE: Lazy load images with Intersection Observer
  useEffect(() => {
    if (!containerRef.current || isFullView) return;

    const observerOptions = {
      rootMargin: '100px',
      threshold: 0.1
    };

    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          const src = img.dataset.src;
          if (src) {
            img.src = src;
            img.removeAttribute('data-src');
            setLoadedImages(prev => new Set([...prev, src]));
          }
          imageObserver.unobserve(img);
        }
      });
    }, observerOptions);

    // Observe only visible images
    const images = containerRef.current.querySelectorAll('img[data-src]');
    images.forEach(img => imageObserver.observe(img));

    return () => {
      images.forEach(img => imageObserver.unobserve(img));
      imageObserver.disconnect();
    };
  }, [filteredItems, isFullView]);

  // PERFOMANCE: Pause videos when not in view
  useEffect(() => {
    if (!isFullView) {
      const videos = document.querySelectorAll('video');
      videos.forEach(video => {
        if (!video.paused) {
          video.pause();
        }
      });
    }
  }, [isFullView]);

  // PERFOMANCE: Simplified 3D transforms for better performance
  const getTransformStyle = useCallback((index) => {
    const diff = Math.abs(index - currentIndex);
    
    if (index === currentIndex) {
      return {
        transform: 'translateZ(0px) scale(1)',
        opacity: 1,
        zIndex: 50,
        filter: 'none'
      };
    } else if (diff === 1) {
      const translateX = index < currentIndex ? '-65%' : '65%';
      return {
        transform: `translateX(${translateX}) translateZ(-50px) scale(0.85)`,
        opacity: 0.3,
        zIndex: 30,
        filter: 'blur(2px)'
      };
    } else {
      return {
        transform: 'translateZ(-100px) scale(0.7)',
        opacity: 0,
        zIndex: 10,
        filter: 'blur(4px)'
      };
    }
  }, [currentIndex]);

  return (
    <div className="bg-[#020617] min-h-screen text-white pb-32 font-sans" ref={containerRef}>
      
      {/* --- HEADER --- */}
      <div 
        className="pt-24 pb-12 px-6 text-center relative overflow-hidden min-h-[60vh] flex items-center justify-center"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(2, 6, 23, 0.85) 0%, rgba(30, 58, 138, 0.6) 100%), url(${images.ledglass1})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        
        <div className="relative z-10">
          <h1 className="text-5xl md:text-6xl font-black text-white tracking-wider uppercase">Gallery</h1>
          <div className="flex items-center justify-center gap-4 mt-4">
            <div className="h-px w-8 bg-blue-500"></div>
            <span className="text-blue-300 font-bold tracking-widest text-sm uppercase">
              Signature Gallery
            </span>
            <div className="h-px w-8 bg-blue-500"></div>
          </div>
        </div>
      </div>

      {/* --- CATEGORIES --- */}
      <div className="max-w-7xl mx-auto mb-12 px-6">
        <div className="flex justify-center gap-3 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                setActiveCategory(cat.id);
                setIsFullView(false);
              }}
              className={`px-6 py-2 rounded-xl border text-xs font-bold transition-colors ${
                activeCategory === cat.id 
                  ? cat.id === 'video'
                    ? 'bg-red-600 text-white border-red-600'
                    : 'bg-white text-black border-white'
                  : 'border-white/20 bg-white/5 hover:border-white/40'
              }`}
            >
              {cat.name.toUpperCase()}
            </button>
          ))}
        </div>
      </div>

      {/* --- CONTENT AREA --- */}
      <div className="max-w-[1400px] mx-auto px-6 relative min-h-[500px]">
        {!isFullView ? (
          /* GRID VIEW - OPTIMIZED */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => (
              <div 
                key={item.id}
                onClick={() => {
                  const index = galleryItems.findIndex(g => g.id === item.id);
                  setCurrentIndex(index);
                  setIsFullView(true);
                }}
                className="group relative aspect-[3/4] rounded-2xl overflow-hidden cursor-pointer bg-gradient-to-br from-white/5 to-white/10 border border-white/10"
              >
                {item.type === 'video' ? (
                  <div className="relative w-full h-full">
                    <video 
                      className="w-full h-full object-cover"
                      muted
                      loop
                      playsInline
                      preload="metadata"
                    >
                      <source src={item.image} type="video/mp4" />
                    </video>
                    <div className="absolute top-4 right-4 bg-red-600/90 px-3 py-1 rounded-full">
                      <Video size={16} />
                    </div>
                  </div>
                ) : (
                  <>
                    <img 
                      data-src={item.image}
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 1067'%3E%3Crect width='800' height='1067' fill='%231e293b'/%3E%3C/svg%3E"
                      className="w-full h-full object-cover"
                      alt=""
                      loading="lazy"
                    />
                    {!loadedImages.has(item.image) && (
                      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/10 animate-pulse"></div>
                    )}
                  </>
                )}
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
                
                <div className="absolute bottom-6 left-6">
                  <p className="text-blue-500 font-bold text-xs tracking-wider mb-2 uppercase">
                    {item.type === 'video' ? 'VIDEO' : item.category}
                  </p>
                  <h3 className="text-lg font-bold mb-3">{item.title}</h3>
                  <div className="flex items-center gap-2 text-white/50 group-hover:text-white">
                    {item.type === 'video' ? (
                      <>
                        <Video size={16} />
                        <span className="text-xs font-bold">WATCH VIDEO</span>
                      </>
                    ) : (
                      <>
                        <Maximize2 size={16} />
                        <span className="text-xs font-bold">VIEW DETAILS</span>
                      </>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* 3D SHOWCASE - OPTIMIZED */
          <div className="w-full py-10">
            <div className="flex justify-between items-center mb-8">
               <div className="flex items-center gap-3 text-blue-500">
                  <Boxes size={20} />
                  <span className="font-bold tracking-wider text-xs uppercase">Interactive Showcase</span>
               </div>
               <button 
                  onClick={() => setIsFullView(false)}
                  className="bg-white/5 hover:bg-blue-600 px-6 py-2 rounded-full border border-white/10 text-xs font-bold flex items-center gap-2"
               >
                  <LayoutGrid size={16} /> BACK TO GRID
               </button>
            </div>

            <div className="relative w-full h-[400px] md:h-[500px] flex items-center justify-center">
               {galleryItems.map((item, index) => {
                  const style = getTransformStyle(index);
                  
                  return (
                    <div
                      key={item.id}
                      className="absolute w-[85%] max-w-[600px] aspect-video transition-all duration-500 ease-out rounded-2xl overflow-hidden"
                      style={style}
                    >
                      {item.type === 'video' ? (
                        <video 
                          className="w-full h-full object-cover"
                          controls
                          autoPlay
                          muted
                          preload="metadata"
                        >
                          <source src={item.image} type="video/mp4" />
                        </video>
                      ) : (
                        <img 
                          src={item.image} 
                          className="w-full h-full object-cover" 
                          alt="" 
                        />
                      )}
                      
                      {index === currentIndex && (
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent flex flex-col justify-end p-8">
                           <p className="text-blue-500 font-bold text-xs tracking-wider mb-2 uppercase">
                             {item.type === 'video' ? 'VIDEO' : item.category}
                           </p>
                           <h2 className="text-2xl font-bold uppercase">{item.title}</h2>
                        </div>
                      )}
                    </div>
                  );
               })}

               {/* Navigation Controls */}
               <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between px-4 z-50">
                  <button onClick={prevSlide} className="p-4 bg-white text-black rounded-full hover:bg-blue-600 hover:text-white shadow-lg">
                    <ChevronLeft size={24}/>
                  </button>
                  <button onClick={nextSlide} className="p-4 bg-white text-black rounded-full hover:bg-blue-600 hover:text-white shadow-lg">
                    <ChevronRight size={24}/>
                  </button>
               </div>
            </div>

            {/* Pagination dots */}
            <div className="flex justify-center gap-2 mt-8">
               {galleryItems.slice(0, 10).map((item, i) => (
                  <button 
                    key={i} 
                    onClick={() => setCurrentIndex(i)}
                    className={`h-1.5 transition-all duration-300 rounded-full ${
                      i === currentIndex 
                        ? item.type === 'video' ? 'w-12 bg-red-500' : 'w-12 bg-blue-500'
                        : item.type === 'video' ? 'w-4 bg-red-500/30' : 'w-4 bg-white/30'
                    }`} 
                  />
               ))}
            </div>
          </div>
        )}
      </div>

      {/* Stats */}
      <div className="mt-12 text-center">
        <div className="inline-flex items-center gap-6 bg-white/5 border border-white/10 px-8 py-4 rounded-xl">
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-500">{galleryItems.filter(item => item.type === 'image').length}</div>
            <div className="text-xs uppercase">Images</div>
          </div>
          <div className="h-8 w-px bg-white/20"></div>
          <div className="text-center">
            <div className="text-2xl font-bold text-red-500">{galleryItems.filter(item => item.type === 'video').length}</div>
            <div className="text-xs uppercase">Videos</div>
          </div>
          <div className="h-8 w-px bg-white/20"></div>
          <div className="text-center">
            <div className="text-2xl font-bold text-amber-500">{galleryItems.length}</div>
            <div className="text-xs uppercase">Total Media</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;