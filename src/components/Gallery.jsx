import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight, Maximize2, Boxes, LayoutGrid } from 'lucide-react';

// Import local images (Unga imports...)
import gallery1 from "../assets/img/modern-bathroom-with-small-space-contemporary-decor.jpg";
import gallery2 from "../assets/img/led galss.jpg";
import gallery3 from "../assets/img/glazing works.jpg";
import gallery4 from "../assets/img/frame shower partition.jpg";
import gallery5 from "../assets/img/lacqured-glass.jpg";
import gallery6 from "../assets/img/spider-fitting glass.jpg";
import gallery7 from "../assets/img/beautiful-hotel-insights-details.jpg";
import gallery8 from "../assets/img/dinner-table-cafe.jpg";
import gallery9 from "../assets/img/bathroom-interior-design-zoom-calls.jpg";
import gallery10 from "../assets/img/service frame.jpg";
import gallery11 from "../assets/img/view-plumber-tool-box-ready-fixing-problems-bathroom.jpg";
import gallery12 from "../assets/img/90showerportion.jpg";

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFullView, setIsFullView] = useState(false);

  const galleryItems = [
    { id: 1, category: 'Residential', image: gallery1, title: "Modern Bathroom" },
    { id: 2, category: 'Technology', image: gallery2, title: "LED Smart Glass" },
    { id: 3, category: 'Commercial', image: gallery3, title: "Structural Glazing" },
    { id: 4, category: 'Bathroom', image: gallery4, title: "Shower Partition" },
    { id: 5, category: 'Decorative', image: gallery5, title: "Lacquered Finishes" },
    { id: 6, category: 'Architectural', image: gallery6, title: "Spider Fitting Glass" },
    { id: 7, category: 'Commercial', image: gallery7, title: "Hotel Interiors" },
    { id: 8, category: 'Residential', image: gallery8, title: "Dining Glass Table" },
    { id: 9, category: 'Bathroom', image: gallery9, title: "Luxury Bath Setup" },
    { id: 10, category: 'Technology', image: gallery10, title: "Service Frames" },
    { id: 11, category: 'Technology', image: gallery11, title: "Professional Fitting" },
    { id: 12, category: 'Bathroom', image: gallery12, title: "90° Corner Enclosure" }
  ];

  const categories = [
    { id: 'all', name: 'All Collection' },
    { id: 'Residential', name: 'Home' },
    { id: 'Commercial', name: 'Office' },
    { id: 'Bathroom', name: 'Bath' },
    { id: 'Architectural', name: 'Design' },
  ];

  const filteredItems = activeCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  const nextSlide = (e) => {
    e?.stopPropagation();
    setCurrentIndex((prev) => (prev === galleryItems.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = (e) => {
    e?.stopPropagation();
    setCurrentIndex((prev) => (prev === 0 ? galleryItems.length - 1 : prev - 1));
  };

  return (
    <div className="bg-[#020617] min-h-screen text-white pb-32 font-sans overflow-x-hidden">
      
      {/* --- HEADER --- */}
      <div className="pt-24 pb-12 px-6 text-center">
        <h1 className="text-6xl md:text-8xl font-black tracking-tighter opacity-10 mb-4 uppercase">Portfolio</h1>
        <div className="flex items-center justify-center gap-4">
           <div className="h-px w-8 bg-blue-500"></div>
           <span className="text-blue-500 font-bold tracking-[0.4em] text-sm uppercase">Signature Gallery</span>
           <div className="h-px w-8 bg-blue-500"></div>
        </div>
      </div>

      {/* --- CATEGORIES --- */}
      <div className="max-w-7xl mx-auto mb-16 px-6">
        <div className="flex justify-center gap-3 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                setActiveCategory(cat.id);
                setIsFullView(false); // Category mathuna thirumba grid-ke vanthurum
              }}
              className={`px-8 py-3 rounded-2xl border text-xs font-black tracking-widest transition-all ${
                activeCategory === cat.id ? 'bg-white text-black border-white shadow-[0_0_20px_rgba(255,255,255,0.2)]' : 'border-white/10 hover:border-white/30 bg-white/5'
              }`}
            >
              {cat.name.toUpperCase()}
            </button>
          ))}
        </div>
      </div>

      {/* --- CONTENT AREA (Grid or 3D) --- */}
      <div className="max-w-[1400px] mx-auto px-6 relative min-h-[500px]">
        
        {!isFullView ? (
          /* GRID VIEW */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 animate-in fade-in duration-500">
            {filteredItems.map((item) => (
              <div 
                key={item.id}
                onClick={() => {
                  setCurrentIndex(galleryItems.findIndex(g => g.id === item.id));
                  setIsFullView(true);
                }}
                className="group relative aspect-[3/4] rounded-[2.5rem] overflow-hidden cursor-pointer border border-white/5 shadow-2xl"
              >
                <img src={item.image} className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110" alt="" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-70 group-hover:opacity-100 transition-opacity"></div>
                <div className="absolute bottom-10 left-10 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                  <p className="text-blue-500 font-black text-[10px] tracking-[0.3em] mb-2 uppercase">{item.category}</p>
                  <h3 className="text-2xl font-bold tracking-tight mb-4">{item.title}</h3>
                  <div className="flex items-center gap-2 text-white/50 group-hover:text-white transition-colors">
                    <Maximize2 size={16} />
                    <span className="text-xs font-bold tracking-widest">3D INTERACTIVE</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* 3D SHOWCASE (NO FIXED OVERLAY - FLOWS WITH PAGE) */
          <div className="w-full py-10 animate-in zoom-in-95 duration-700">
            <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-6">
               <div className="flex items-center gap-4 text-blue-500">
                  <Boxes size={24} />
                  <span className="font-black tracking-[0.3em] text-xs uppercase italic">Interactive 3D Showcase</span>
               </div>
               <button 
                  onClick={() => setIsFullView(false)}
                  className="bg-white/5 hover:bg-blue-600 px-8 py-3 rounded-full border border-white/10 transition-all text-xs font-black tracking-widest flex items-center gap-2"
               >
                  <LayoutGrid size={16} /> BACK TO GRID
               </button>
            </div>

            <div className="relative w-full h-[400px] md:h-[600px] flex items-center justify-center" style={{ perspective: '1500px' }}>
               {galleryItems.map((item, index) => {
                  let pos = "opacity-0 scale-50 translate-z-[-500px]";
                  let z = 0;
                  
                  if (index === currentIndex) {
                    pos = "opacity-100 scale-100 translate-z-[250px]";
                    z = 50;
                  } else if (index === (currentIndex - 1 + galleryItems.length) % galleryItems.length) {
                    pos = "opacity-20 scale-75 -translate-x-[65%] -rotate-y-[40deg] blur-sm";
                    z = 30;
                  } else if (index === (currentIndex + 1) % galleryItems.length) {
                    pos = "opacity-20 scale-75 translate-x-[65%] rotate-y-[40deg] blur-sm";
                    z = 30;
                  }

                  return (
                    <div
                      key={item.id}
                      className={`absolute w-[90%] md:w-[650px] aspect-video transition-all duration-1000 cubic-bezier(0.23, 1, 0.32, 1) rounded-[3rem] overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.6)] ${pos}`}
                      style={{ zIndex: z, transformStyle: 'preserve-3d' }}
                    >
                      <img src={item.image} className="w-full h-full object-cover" alt="" />
                      {index === currentIndex && (
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent flex flex-col justify-end p-8 md:p-12">
                           <p className="text-blue-500 font-bold tracking-[0.5em] text-[10px] mb-2 uppercase">{item.category}</p>
                           <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter leading-none">{item.title}</h2>
                        </div>
                      )}
                    </div>
                  );
               })}

               {/* Navigation Controls */}
               <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between z-[100] px-2 md:px-0">
                  <button onClick={prevSlide} className="p-5 md:p-6 bg-white text-black rounded-full hover:bg-blue-600 hover:text-white transition-all shadow-2xl active:scale-90 md:-translate-x-12"><ChevronLeft size={32}/></button>
                  <button onClick={nextSlide} className="p-5 md:p-6 bg-white text-black rounded-full hover:bg-blue-600 hover:text-white transition-all shadow-2xl active:scale-90 md:translate-x-12"><ChevronRight size={32}/></button>
               </div>
            </div>

            {/* Pagination dots */}
            <div className="flex justify-center gap-3 mt-12">
               {galleryItems.map((_, i) => (
                  <button 
                    key={i} 
                    onClick={() => setCurrentIndex(i)}
                    className={`h-1.5 transition-all duration-500 rounded-full ${i === currentIndex ? 'w-16 bg-blue-500' : 'w-4 bg-white/20 hover:bg-white/40'}`} 
                  />
               ))}
            </div>
          </div>
        )}
      </div>

      {/* Background Decor */}
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/[0.03] blur-[150px] rounded-full -z-10 pointer-events-none"></div>
    </div>
  );
};

export default Gallery;