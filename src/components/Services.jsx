import React, { useState, useEffect, useMemo, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { 
  X, CheckCircle2, Phone, ArrowRight, Box, BoxSelect, 
  Video, Image, ChevronLeft, ChevronRight, Maximize2,
  Play, Pause, Volume2, VolumeX, Home, Building, Bath, 
  Shield, Palette, Diamond, Zap, Castle, Briefcase, 
  DoorOpen, Square, Ruler, GlassWater, Sparkles, Layers, 
  DivideSquare
} from "lucide-react";
import { images } from "../utils/images";

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [currentMediaIndex, setCurrentMediaIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
const [touchStart, setTouchStart] = useState(null);
const [touchEnd, setTouchEnd] = useState(null);

  const [selectedCategory, setSelectedCategory] = useState('all');
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(1);
  const [isMuted, setIsMuted] = useState(false);
  const videoRef = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();

  // Combine images and videos for each service
  const services = useMemo(() => [
    { 
      id: 1, 
      title: "SS Railing Glass for Balcony", 
      category: "RAILINGS", 
      icon: <Shield size={20} />,
      image: images.balcony3,
      color: "from-blue-600 to-cyan-500",
      media: [
        { type: 'image', src: images.balcony3 },
        { type: 'image', src: images.balcony4 },
        { type: 'image', src: images.balcony5 }, 
        { type: 'image', src: images.balcony6 },
        { type: 'image', src: images.glassRailings },
        { type: 'image', src: images.gallery10 }
      ],
      shortDesc: "Premium stainless steel railing glass systems for balconies. Our SS railings provide maximum safety with crystal clear views using SS 316 grade fittings.",
      features: ["SS 316 Grade Fittings", "Laminated Safety Glass", "Weather Proof", "Custom Heights", "Anti-slip Design", "Rust Proof"],
      stats: { projects: 275, years: 10, rating: 4.7 }
    },
    { 
      id: 2, 
      title: "Lacquered Glass", 
      category: "DECORATIVE", 
      icon: <Palette size={20} />,
      image: images.lacquredglass1,
      color: "from-indigo-600 to-purple-500",
      media: [
        { type: 'image', src: images.lacquredglass1 },
        { type: 'image', src: images.lacquredglass2 },
        { type: 'image', src: images.lacquredglass3 },
        { type: 'image', src: images.lacquredglass4 },
        { type: 'image', src: images.lacquredglass5 },
        { type: 'video', src: images.videolacqured, thumbnail: images.lacquredglass1 }
      ],
      shortDesc: "Vibrant back-painted lacquered glass for modern interiors. Perfect for kitchen cabinets, accent walls, and decorative partitions.",
      features: ["Custom Colors", "Heat Resistant", "Scratch Proof", "Easy to Clean", "UV Stable", "Moisture Resistant"],
      stats: { projects: 220, years: 9, rating: 4.7 }
    },
    { 
      id: 3, 
      title: "PVC & UPVC Doors", 
      category: "DOORS", 
      icon: <DoorOpen size={20} />,
      image: images.gallery8,
      color: "from-emerald-600 to-teal-500",
      media: [
        { type: 'image', src: images.gallery8 },
        { type: 'image', src: images.gallery1 },
        { type: 'image', src: images.gallery7 },
        { type: 'image', src: images.gallery3 },
        { type: 'image', src: images.balcony1 },
        { type: 'image', src: images.balcony2 }
      ],
      shortDesc: "High-quality PVC and UPVC doors for residential and commercial spaces. Energy efficient and low maintenance solutions.",
      features: ["Thermal Insulation", "Sound Proof", "Multi-point Locks", "Low Maintenance", "Weather Proof", "Custom Sizes"],
      stats: { projects: 180, years: 8, rating: 4.8 }
    },
    { 
      id: 4, 
      title: "UPVC Windows Price", 
      category: "WINDOWS", 
      icon: <Square size={20} />,
      image: images.upvcWindows,
      color: "from-green-600 to-emerald-500",
      media: [
        { type: 'image', src: images.upvcWindows },
        { type: 'image', src: images.gallery3 },
        { type: 'image', src: images.balcony1 }, 
        { type: 'image', src: images.balcony2 },
        { type: 'image', src: images.gallery7 },
        { type: 'image', src: images.gallery8 }
      ],
      shortDesc: "Affordable UPVC windows with competitive pricing. Get best quality windows at the best market price.",
      features: ["Competitive Pricing", "Best Quality", "Thermal Break", "Sound Insulation", "UV Protection", "Warranty"],
      stats: { projects: 320, years: 12, rating: 4.8 }
    },
    { 
      id: 5, 
      title: "Glass Shop Near Me", 
      category: "GLASS SHOP", 
      icon: <Home size={20} />,
      image: images.gallery1,
      color: "from-amber-600 to-orange-500",
      media: [
        { type: 'image', src: images.gallery1 },
        { type: 'image', src: images.gallery2 },
        { type: 'image', src: images.gallery3 },
        { type: 'image', src: images.gallery4 },
        { type: 'image', src: images.gallery5 },
        { type: 'image', src: images.gallery6 }
      ],
      shortDesc: "Your local glass shop providing all glass solutions. We're your one-stop shop for all glass needs in the area.",
      features: ["Local Service", "Quick Delivery", "All Glass Types", "Professional Team", "Free Consultation", "Same Day Service"],
      stats: { projects: 500, years: 15, rating: 4.9 }
    },
    { 
      id: 6, 
      title: "Glass Shower Doors Installation", 
      category: "SHOWER", 
      icon: <Bath size={20} />,
      image: images.shower90,
      color: "from-blue-600 to-purple-500",
      media: [
        { type: 'image', src: images.shower90 },
        { type: 'image', src: images.shower1 },
        { type: 'image', src: images.shower2 }, 
        { type: 'image', src: images.shower3 },
        { type: 'image', src: images.gallery4 },
        { type: 'video', src: images.showervideo, thumbnail: images.shower90 }
      ],
      shortDesc: "Professional installation of glass shower doors. We handle everything from measurement to final installation.",
      features: ["Professional Installation", "10mm Safety Glass", "Leak Proof", "Custom Fit", "Quick Service", "Warranty"],
      stats: { projects: 150, years: 8, rating: 4.9 }
    },
    { 
      id: 7, 
      title: "Glass Shower Enclosures", 
      category: "SHOWER", 
      icon: <GlassWater size={20} />,
      image: images.shower1,
      color: "from-cyan-600 to-blue-500",
      media: [
        { type: 'image', src: images.shower1 },
        { type: 'image', src: images.shower2 },
        { type: 'image', src: images.shower3 },
        { type: 'image', src: images.gallery4 },
        { type: 'image', src: images.gallery12 },
        { type: 'image', src: images.gallery9 }
      ],
      shortDesc: "Complete glass shower enclosure solutions. Frameless and framed options available with premium hardware.",
      features: ["Frameless Design", "10mm Toughened Glass", "Magnetic Seals", "Rust-proof Hardware", "Custom Sizes", "Easy Clean"],
      stats: { projects: 120, years: 7, rating: 4.8 }
    },
    { 
      id: 8, 
      title: "Toughened Glass", 
      category: "SAFETY GLASS", 
      icon: <Shield size={20} />,
      image: images.gallery6,
      color: "from-red-600 to-rose-500",
      media: [
        { type: 'image', src: images.gallery6 },
        { type: 'image', src: images.spiderFittings },
        { type: 'image', src: images.gallery10 }, 
        { type: 'image', src: images.gallery3 },
        { type: 'image', src: images.lacquredglass1 },
        { type: 'image', src: images.ledglass5 }
      ],
      shortDesc: "Premium toughened safety glass for all applications. ISI certified and tested for maximum safety.",
      features: ["ISI Certified", "Safety Rated", "Heat Resistant", "Impact Resistant", "Custom Thickness", "Quality Guarantee"],
      stats: { projects: 420, years: 15, rating: 4.8 }
    },
    { 
      id: 9, 
      title: "Interior Design House Glass", 
      category: "INTERIOR", 
      icon: <Sparkles size={20} />,
      image: images.lacquredglass3,
      color: "from-pink-600 to-rose-500",
      media: [
        { type: 'image', src: images.lacquredglass3 },
        { type: 'image', src: images.lacquredglass4 },
        { type: 'image', src: images.lacquredglass5 },
        { type: 'image', src: images.gallery5 },
        { type: 'image', src: images.gallery1 },
        { type: 'image', src: images.gallery8 }
      ],
      shortDesc: "Glass solutions for interior design houses. Custom decorative glass for modern interior designs.",
      features: ["Custom Designs", "Decorative Finish", "Modern Styles", "Color Matching", "Textured Glass", "Pattern Glass"],
      stats: { projects: 95, years: 6, rating: 4.7 }
    },
    { 
      id: 10, 
      title: "Glass Installation", 
      category: "INSTALLATION", 
      icon: <Ruler size={20} />,
      image: images.gallery3,
      color: "from-teal-600 to-green-500",
      media: [
        { type: 'image', src: images.gallery3 },
        { type: 'image', src: images.gallery7 },
        { type: 'image', src: images.gallery10 },
        { type: 'image', src: images.gallery11 },
        { type: 'image', src: images.ledglass9 },
        { type: 'image', src: images.ledglass11 }
      ],
      shortDesc: "Professional glass installation services. Experienced technicians for all types of glass installations.",
      features: ["Professional Team", "Expert Installation", "Safety First", "Clean Work", "On-time Completion", "After Service"],
      stats: { projects: 450, years: 14, rating: 4.8 }
    },
    { 
      id: 11, 
      title: "Shower Doors", 
      category: "SHOWER", 
      icon: <DoorOpen size={20} />,
      image: images.gallery4,
      color: "from-violet-600 to-purple-500",
      media: [
        { type: 'image', src: images.gallery4 },
        { type: 'image', src: images.gallery9 },
        { type: 'image', src: images.gallery11 },
        { type: 'image', src: images.gallery12 },
        { type: 'image', src: images.shower1 },
        { type: 'image', src: images.shower2 }
      ],
      shortDesc: "High-quality shower doors for modern bathrooms. Sliding, pivot, and fixed options available.",
      features: ["Various Styles", "Easy Operation", "Smooth Finish", "Durable Hardware", "Leak Proof", "Easy Maintenance"],
      stats: { projects: 200, years: 9, rating: 4.8 }
    },
    { 
      id: 12, 
      title: "Aluminium Glass Partition", 
      category: "PARTITIONS", 
      icon: <Layers size={20} />,
      image: images.balcony5,
      color: "from-slate-600 to-gray-500",
      media: [
        { type: 'image', src: images.balcony5 },
        { type: 'image', src: images.balcony6 },
        { type: 'image', src: images.glassRailings },
        { type: 'image', src: images.gallery10 },
        { type: 'image', src: images.gallery2 },
        { type: 'image', src: images.gallery6 }
      ],
      shortDesc: "Aluminium framed glass partitions for offices and commercial spaces. Durable and stylish solutions.",
      features: ["Aluminium Frame", "Sound Proof", "Privacy Options", "Modern Design", "Easy Installation", "Custom Sizes"],
      stats: { projects: 160, years: 8, rating: 4.7 }
    },
    { 
      id: 13, 
      title: "Glass Partition with Door", 
      category: "PARTITIONS", 
      icon: <DivideSquare size={20} />,
      image: images.gallery11,
      color: "from-cyan-600 to-blue-500",
      media: [
        { type: 'image', src: images.gallery11 },
        { type: 'image', src: images.gallery4 },
        { type: 'image', src: images.gallery9 },
        { type: 'image', src: images.gallery12 },
        { type: 'image', src: images.shower1 },
        { type: 'image', src: images.shower2 }
      ],
      shortDesc: "Complete glass partition systems with integrated doors. Perfect for office cabins and room divisions.",
      features: ["Integrated Doors", "Frameless Design", "Smooth Operation", "Safety Glass", "Modern Look", "Space Saving"],
      stats: { projects: 130, years: 7, rating: 4.8 }
    },
    { 
      id: 14, 
      title: "Glass Partition Company", 
      category: "PARTITIONS", 
      icon: <Building size={20} />,
      image: images.gallery7,
      color: "from-blue-600 to-indigo-500",
      media: [
        { type: 'image', src: images.gallery7 },
        { type: 'image', src: images.gallery8 },
        { type: 'image', src: images.gallery9 },
        { type: 'image', src: images.gallery1 },
        { type: 'image', src: images.ledglass2 },
        { type: 'image', src: images.ledglass6 }
      ],
      shortDesc: "Professional glass partition company providing complete solutions from design to installation.",
      features: ["Design Service", "Project Management", "Quality Materials", "Timely Delivery", "Professional Team", "Warranty"],
      stats: { projects: 180, years: 9, rating: 4.8 }
    },
    { 
      id: 15, 
      title: "Glass Partition Price & Cost", 
      category: "PARTITIONS", 
      icon: <Diamond size={20} />,
      image: images.gallery10,
      color: "from-amber-600 to-yellow-500",
      media: [
        { type: 'image', src: images.gallery10 },
        { type: 'image', src: images.gallery3 },
        { type: 'image', src: images.gallery7 },
        { type: 'image', src: images.gallery11 },
        { type: 'image', src: images.ledglass9 },
        { type: 'image', src: images.ledglass11 }
      ],
      shortDesc: "Transparent pricing for glass partition installations. Get the best value for your investment.",
      features: ["Competitive Pricing", "Free Quote", "No Hidden Costs", "Value for Money", "Flexible Payment", "Budget Options"],
      stats: { projects: 210, years: 10, rating: 4.7 }
    },
    { 
      id: 16, 
      title: "Wall Glass Partition", 
      category: "PARTITIONS", 
      icon: <Layers size={20} />,
      image: images.gallery2,
      color: "from-purple-600 to-pink-500",
      media: [
        { type: 'image', src: images.gallery2 },
        { type: 'image', src: images.gallery6 },
        { type: 'image', src: images.ledglass1 },
        { type: 'image', src: images.gallery3 },
        { type: 'image', src: images.gallery7 },
        { type: 'image', src: images.lacquredglass1 }
      ],
      shortDesc: "Wall-mounted glass partitions for modern interiors. Create separate spaces while maintaining openness.",
      features: ["Wall Mounted", "Space Division", "Modern Design", "Easy Installation", "Custom Heights", "Various Finishes"],
      stats: { projects: 140, years: 8, rating: 4.7 }
    },
    { 
      id: 17, 
      title: "LED Smart Mirrors", 
      category: "LUXURY", 
      icon: <Zap size={20} />,
      image: images.ledglass1,
      color: "from-amber-600 to-orange-500",
      media: [
        { type: 'image', src: images.ledglass1 },
        { type: 'image', src: images.ledglass2 },
        { type: 'image', src: images.ledglass3 },
        { type: 'image', src: images.ledglass4 },
        { type: 'image', src: images.ledglass5 },
        { type: 'image', src: images.ledglass6 }
      ],
      shortDesc: "Intelligent LED mirrors with touch controls and smart features for modern bathrooms and luxury spaces.",
      features: ["Touch Control", "Anti-Fog Tech", "Dimmable LED", "3 Color Modes", "Bluetooth", "Smart Sensors"],
      stats: { projects: 95, years: 6, rating: 4.9 }
    },
    { 
      id: 18, 
      title: "Spider Glass Facade", 
      category: "COMMERCIAL", 
      icon: <Briefcase size={20} />,
      image: images.spiderFittings,
      color: "from-gray-600 to-slate-500",
      media: [
        { type: 'image', src: images.spiderFittings },
        { type: 'image', src: images.gallery6 },
        { type: 'image', src: images.gallery10 }, 
        { type: 'image', src: images.gallery3 },
        { type: 'image', src: images.lacquredglass1 },
        { type: 'image', src: images.ledglass5 }
      ],
      shortDesc: "Architectural spider glass facade systems for commercial buildings and modern structures.",
      features: ["SS 316 Fittings", "High Transparency", "Architectural Grade", "Wind Stability", "Structural Support", "Modern Design"],
      stats: { projects: 85, years: 7, rating: 4.8 }
    }
  ], []);

  // Get all categories
  const categories = useMemo(() => {
    const cats = ['all', ...new Set(services.map(s => s.category))];
    return cats;
  }, [services]);

  // Filter services by category
  const filteredServices = useMemo(() => {
    if (selectedCategory === 'all') return services;
    return services.filter(s => s.category === selectedCategory);
  }, [services, selectedCategory]);

  // Get current media item
  const currentMedia = selectedService ? selectedService.media[currentMediaIndex] : null;

  // Handle URL Sync
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const serviceId = params.get('id');
    if (serviceId) {
      const found = services.find(s => s.id === parseInt(serviceId));
      if (found) {
        setSelectedService(found);
        setCurrentMediaIndex(0);
        setIsPlaying(false);
        setVolume(1);
        setIsMuted(false);
      }
    } else {
      setSelectedService(null);
    }
  }, [location.search, services]);
  useEffect(() => {
  const checkScreen = () => setIsMobile(window.innerWidth < 768);
  checkScreen();
  window.addEventListener("resize", checkScreen);
  return () => window.removeEventListener("resize", checkScreen);
}, []);


  // Video controls
  useEffect(() => {
    if (videoRef.current && currentMedia?.type === 'video') {
      if (isPlaying) {
        videoRef.current.play().catch(e => console.log("Auto-play prevented:", e));
      } else {
        videoRef.current.pause();
      }
      videoRef.current.volume = isMuted ? 0 : volume;
    }
  }, [isPlaying, volume, isMuted, currentMedia]);

  // Handle video end
  const handleVideoEnd = () => {
    setIsPlaying(false);
    nextMedia();
  };

  // Close Handler
  const handleClose = () => {
    setIsPlaying(false);
    setSelectedService(null);
    setCurrentMediaIndex(0);
    navigate("/services", { replace: true });
  };

  // Navigation functions
  const nextMedia = () => {
    if (selectedService) {
      setCurrentMediaIndex(prev => {
        const nextIndex = prev === selectedService.media.length - 1 ? 0 : prev + 1;
        // If next is video, pause it initially
        if (selectedService.media[nextIndex]?.type === 'video') {
          setIsPlaying(false);
        }
        return nextIndex;
      });
    }
  };

  const prevMedia = () => {
    if (selectedService) {
      setCurrentMediaIndex(prev => {
        const prevIndex = prev === 0 ? selectedService.media.length - 1 : prev - 1;
        // If previous is video, pause it initially
        if (selectedService.media[prevIndex]?.type === 'video') {
          setIsPlaying(false);
        }
        return prevIndex;
      });
    }
  };
  const minSwipeDistance = 50;

const onTouchStart = (e) => {
  setTouchEnd(null);
  setTouchStart(e.targetTouches[0].clientX);
};

const onTouchMove = (e) => {
  setTouchEnd(e.targetTouches[0].clientX);
};

const onTouchEnd = () => {
  if (!touchStart || !touchEnd) return;

  const distance = touchStart - touchEnd;
  if (distance > minSwipeDistance) nextMedia();
  if (distance < -minSwipeDistance) prevMedia();
};


  // Toggle play/pause for video
  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  // Toggle mute
  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  // Handle volume change
  const handleVolumeChange = (e) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    setIsMuted(newVolume === 0);
  };

  return (
    <div className="bg-[#020617] text-white min-h-screen font-sans pb-20">
      
      {/* Header */}
      <section className="pt-24 pb-12 px-4 md:px-6 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-black tracking-tight mb-4 uppercase italic">Our Services</h1>
        <p className="text-blue-500 font-bold tracking-[0.3em] uppercase mb-8">Premium Glass Solutions</p>
        
        {/* Categories Filter - Responsive */}
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-8 px-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 md:px-6 py-2 md:py-3 rounded-full border text-xs font-black tracking-widest transition-all whitespace-nowrap ${
                  selectedCategory === cat 
                    ? 'bg-white text-black border-white shadow-[0_0_20px_rgba(255,255,255,0.2)]' 
                    : 'border-white/10 hover:border-white/30 bg-white/5'
                }`}
              >
                {cat.toUpperCase()}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid - Responsive */}
      <section className="w-full px-4 md:px-6 py-10 overflow-hidden">

       <div

  className="
    grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3
    gap-4 md:gap-6
    w-full
    lg:w-[1400px]
    mx-auto
  "
>



          {filteredServices.map((service) => (
            <div 
              key={service.id}
              onClick={() => navigate(`?id=${service.id}`)}
             className="
  group cursor-pointer
  bg-[#0a0f2b]
  rounded-2xl
  overflow-hidden
  border border-white/5
  hover:border-blue-500/50
  transition-all duration-500
  shadow-lg hover:shadow-xl
  relative
  lg:transform lg:will-change-transform
"

            >
              {/* ONE BIG IMAGE - Responsive */}
              <div className="aspect-[4/3] overflow-hidden relative">
                <img 
  src={service.image} 
  alt={service.title}
  className="
    w-full h-full object-cover
    transition-transform duration-700
    lg:group-hover:scale-110
    transform-gpu
    will-change-transform
  "
/>

                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-70 group-hover:opacity-100 transition-opacity"></div>
                
                {/* Category badge */}
                <div className={`absolute top-3 left-3 text-white text-[8px] md:text-[9px] font-black tracking-[0.1em] uppercase bg-gradient-to-r ${service.color} px-2 py-1 rounded-full flex items-center gap-1`}>
                  {service.icon}
                  <span className="hidden sm:inline">{service.category}</span>
                </div>
                
                {/* Media count badge */}
                <div className="absolute top-3 right-3 bg-black/50 backdrop-blur-sm text-white text-[9px] font-bold px-2 py-1 rounded-full flex items-center gap-1">
                  {service.media.some(m => m.type === 'video') ? (
                    <>
                      <Video size={10} />
                      <span>{service.media.filter(m => m.type === 'video').length}V</span>
                    </>
                  ) : (
                    <>
                      <Image size={10} />
                      {service.media.length}
                    </>
                  )}
                </div>
                
                {/* Video indicator */}
                {service.media.some(m => m.type === 'video') && (
                  <div className="absolute top-10 right-3 bg-red-600 text-white p-1.5 rounded-full animate-pulse">
                    <Play size={10} />
                  </div>
                )}
                
                {/* Service title on image */}
                <div className="absolute bottom-3 left-3 right-3">
                  <h3 className="text-sm md:text-base font-black uppercase tracking-tighter text-white line-clamp-2">
                    {service.title}
                  </h3>
                </div>
              </div>

              {/* Service Info - Mobile Optimized */}
              <div className="p-3 md:p-4">
                {/* Features preview */}
                <div className="flex flex-wrap gap-1 mb-2">
                  {service.features.slice(0, 2).map((feature, idx) => (
                    <span 
                      key={idx}
                      className="text-[8px] md:text-[9px] font-bold uppercase tracking-wider bg-white/5 px-2 py-0.5 rounded"
                    >
                      {feature}
                    </span>
                  ))}
                  {service.features.length > 2 && (
                    <span className="text-[8px] md:text-[9px] font-bold uppercase tracking-wider bg-white/5 px-2 py-0.5 rounded">
                      +{service.features.length - 2}
                    </span>
                  )}
                </div>
                
                {/* Stats */}
                <div className="flex items-center justify-between border-t border-white/10 pt-2 text-xs">
                  <div className="text-center">
                    <div className="text-sm font-black">{service.stats.projects}+</div>
                    <div className="text-[8px] uppercase tracking-widest text-white/50">Projects</div>
                  </div>
                  <div className="h-4 w-px bg-white/20"></div>
                  <div className="text-center">
                    <div className="text-sm font-black">{service.stats.years}+</div>
                    <div className="text-[8px] uppercase tracking-widest text-white/50">Years</div>
                  </div>
                  <div className="h-4 w-px bg-white/20"></div>
                  <div className="text-center">
                    <div className="text-sm font-black">{service.stats.rating}</div>
                    <div className="text-[8px] uppercase tracking-widest text-white/50">Rating</div>
                  </div>
                </div>
                
                {/* View button */}
                <button className="w-full mt-3 bg-white/5 hover:bg-white/10 text-white py-2 rounded-lg border border-white/10 flex items-center justify-center gap-2 transition-all text-[10px] font-black uppercase tracking-widest group-hover:bg-blue-600 group-hover:border-blue-600">
                  <BoxSelect size={12} />
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Total Services Count */}
      <div className="text-center mt-8 mb-12 px-4">
        <div className="inline-flex flex-col sm:flex-row items-center gap-4 sm:gap-6 bg-white/5 border border-white/10 px-6 py-4 rounded-2xl">
          <div className="text-center">
            <div className="text-2xl font-black text-blue-500">{services.length}</div>
            <div className="text-xs uppercase tracking-widest">Services</div>
          </div>
          <div className="h-6 w-px bg-white/20 hidden sm:block"></div>
          <div className="text-center">
            <div className="text-2xl font-black text-emerald-500">
              {services.reduce((total, service) => total + service.media.length, 0)}+
            </div>
            <div className="text-xs uppercase tracking-widest">Media Files</div>
          </div>
          <div className="h-6 w-px bg-white/20 hidden sm:block"></div>
          <div className="text-center">
            <div className="text-2xl font-black text-amber-500">
              {services.reduce((total, service) => total + service.stats.projects, 0)}+
            </div>
            <div className="text-xs uppercase tracking-widest">Total Projects</div>
          </div>
        </div>
      </div>

      {/* Media Gallery Modal */}
      {selectedService && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-2 md:p-4 backdrop-blur-xl bg-black/95 animate-in fade-in duration-300">
          {/* Overlay to close */}
          <div className="absolute inset-0" onClick={handleClose}></div>
          
          <div className="relative z-10 w-full h-[95vh] md:h-[90vh] bg-[#0a0f2b] rounded-xl md:rounded-3xl overflow-hidden border border-white/10 shadow-2xl animate-in zoom-in-95 duration-300 flex flex-col">
            
            {/* Top Controls Bar */}
            <div className="flex items-center justify-between px-4 md:px-6 py-3 bg-gradient-to-r from-black/80 via-black/60 to-black/80 border-b border-white/10">
              <div className="flex items-center gap-2 md:gap-4">
                <button onClick={handleClose} className="text-white/70 hover:text-white bg-white/10 p-2 rounded-full backdrop-blur-sm hover:bg-white/20 transition-all">
                  <X size={20} />
                </button>
                <div className={`flex items-center gap-2 ${selectedService.color} bg-clip-text text-transparent`}>
                  {selectedService.icon}
                  <span className="font-black text-xs md:text-sm tracking-[0.2em] uppercase">
                    {selectedService.category}
                  </span>
                </div>
              </div>
              
              {/* Media Counter */}
              <div className="text-sm md:text-base text-blue-400 font-bold">
                {currentMediaIndex + 1} / {selectedService.media.length}
              </div>
            </div>

            {/* Main Content Area */}
            <div className="flex-1 overflow-hidden flex flex-row">

              {/* Left Side - MEDIA VIEWER (Image/Video) */}
              <div
  className="flex-1 relative overflow-hidden bg-black"
  onTouchStart={onTouchStart}
  onTouchMove={onTouchMove}
  onTouchEnd={onTouchEnd}
>

                <div className="absolute inset-0 flex items-center justify-center p-2 md:p-4">
                  {currentMedia?.type === 'video' ? (
                    <div className="relative w-full h-full max-w-full max-h-full">
                      <video
                        ref={videoRef}
                        src={currentMedia.src}
                        className="w-full h-full object-contain rounded-lg"
                        onClick={togglePlayPause}
                        onEnded={handleVideoEnd}
                        playsInline
                        webkit-playsinline="true"
                        preload="metadata"
                      />
                      
                      {/* Video Controls Overlay */}
                      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/60 backdrop-blur-sm rounded-full px-4 py-2 flex items-center gap-3 md:gap-4">
                        {/* Play/Pause Button */}
                        <button 
                          onClick={togglePlayPause}
                          className="text-white hover:text-blue-400 transition-colors"
                        >
                          {isPlaying ? <Pause size={20} /> : <Play size={20} />}
                        </button>
                        
                        {/* Volume Controls */}
                        <div className="hidden md:flex items-center gap-2">
                          <button 
                            onClick={toggleMute}
                            className="text-white hover:text-blue-400 transition-colors"
                          >
                            {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
                          </button>
                          <input
                            type="range"
                            min="0"
                            max="1"
                            step="0.1"
                            value={isMuted ? 0 : volume}
                            onChange={handleVolumeChange}
                            className="w-20 accent-blue-500"
                          />
                        </div>
                        
                        {/* Media Type Indicator */}
                        <div className="text-white text-xs font-bold bg-red-600 px-2 py-1 rounded-full">
                          VIDEO
                        </div>
                      </div>
                      
                      {/* Play button overlay when paused */}
                      {!isPlaying && (
                        <button 
                          onClick={togglePlayPause}
                          className="absolute inset-0 flex items-center justify-center bg-black/30"
                        >
                          <div className="bg-blue-600/80 hover:bg-blue-500 text-white p-4 md:p-6 rounded-full">
                            <Play size={32} className="md:size-48" />
                          </div>
                        </button>
                      )}
                    </div>
                  ) : (
                    <img 
                      src={currentMedia?.src} 
                      alt={`${selectedService.title} - Image ${currentMediaIndex + 1}`}
                      className="max-w-full max-h-full object-contain rounded-lg"
                    />
                  )}
                </div>

                {/* Navigation Arrows */}
                {selectedService.media.length > 1 && (
                  <>
                    <button 
                      onClick={prevMedia}
                      className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 bg-black/80 hover:bg-black text-white p-2 md:p-3 rounded-full backdrop-blur-sm transition-all hover:scale-110 z-20"
                    >
                      <ChevronLeft size={20} className="md:size-28" />
                    </button>
                    <button 
                      onClick={nextMedia}
                      className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 bg-black/80 hover:bg-black text-white p-2 md:p-3 rounded-full backdrop-blur-sm transition-all hover:scale-110 z-20"
                    >
                      <ChevronRight size={20} className="md:size-28" />
                    </button>
                  </>
                )}

                {/* Media Type Indicator */}
                <div className="absolute bottom-2 md:bottom-4 left-2 md:left-4 text-xs md:text-sm font-bold bg-blue-500/20 border border-blue-500/30 px-3 md:px-4 py-1 md:py-2 rounded-full uppercase tracking-widest backdrop-blur-sm">
                  <div className="flex items-center gap-1 md:gap-2">
                    {currentMedia?.type === 'video' ? (
                      <>
                        <Video size={12} className="md:size-16" />
                        <span>Video</span>
                      </>
                    ) : (
                      <>
                        <Image size={12} className="md:size-16" />
                        <span>Image</span>
                      </>
                    )}
                  </div>
                </div>
              </div>

              {/* Right Side - Content Panel */}
             <div className="w-[40%] md:w-96 border-l border-white/10 bg-gradient-to-b from-[#0a0f2b] to-[#020617] overflow-y-auto">

                <div className="p-4 md:p-6">
                  <h2 className="text-xl md:text-3xl font-black uppercase tracking-tighter mb-4">
                    {selectedService.title}
                  </h2>
                  
                  {/* Description */}
                  <div className="mb-4 md:mb-6">
                    <p className="text-white/80 text-sm leading-relaxed">
                      {selectedService.shortDesc}
                    </p>
                  </div>

                  {/* All Features */}
                  <div className="mb-6">
                    <h3 className="text-lg font-black uppercase mb-3 tracking-tight">Key Features</h3>
                    <div className="space-y-2">
                      {selectedService.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2 bg-white/5 p-3 rounded-lg border border-white/10">
                          <CheckCircle2 size={14} className="text-emerald-500 flex-shrink-0" />
                          <span className="text-xs md:text-sm font-medium">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-2 md:gap-4 mb-6">
                    <div className="bg-white/5 p-2 md:p-3 rounded-lg text-center">
                      <div className="text-lg md:text-xl font-black text-blue-400">{selectedService.stats.projects}+</div>
                      <div className="text-[10px] md:text-xs uppercase tracking-widest text-white/60 mt-1">Projects</div>
                    </div>
                    <div className="bg-white/5 p-2 md:p-3 rounded-lg text-center">
                      <div className="text-lg md:text-xl font-black text-emerald-400">{selectedService.stats.years}+</div>
                      <div className="text-[10px] md:text-xs uppercase tracking-widest text-white/60 mt-1">Years</div>
                    </div>
                    <div className="bg-white/5 p-2 md:p-3 rounded-lg text-center">
                      <div className="text-lg md:text-xl font-black text-amber-400">{selectedService.stats.rating}/5</div>
                      <div className="text-[10px] md:text-xs uppercase tracking-widest text-white/60 mt-1">Rating</div>
                    </div>
                  </div>

                  {/* Media Thumbnails */}
                  <div className="mb-6">
                    <h3 className="text-lg font-black uppercase mb-3 tracking-tight">
                      Gallery ({selectedService.media.length} Files)
                    </h3>
                    <div className="grid grid-cols-3 md:grid-cols-4 gap-2 max-h-[150px] md:max-h-[200px] overflow-y-auto p-2">
                      {selectedService.media.map((media, idx) => (
                        <button
                          key={idx}
                          onClick={() => {
                            setCurrentMediaIndex(idx);
                            if (media.type === 'video') {
                              setIsPlaying(false);
                            }
                          }}
                          className={`aspect-square rounded-lg overflow-hidden border-2 transition-all relative ${
                            idx === currentMediaIndex 
                              ? 'border-blue-500 scale-105 shadow-lg' 
                              : 'border-white/10 hover:border-white/30'
                          }`}
                        >
                          {media.type === 'video' ? (
                            <>
                              <img 
                                src={media.thumbnail || selectedService.image} 
                                alt={`Video thumbnail ${idx + 1}`} 
                                className="w-full h-full object-cover"
                              />
                              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                                <div className="bg-red-600 text-white p-1 rounded-full">
                                  <Play size={12} />
                                </div>
                              </div>
                            </>
                          ) : (
                            <img 
                              src={media.src} 
                              alt={`Image ${idx + 1}`} 
                              className="w-full h-full object-cover"
                            />
                          )}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="space-y-2">
                    <button 
                      onClick={() => window.location.href = "tel:+919141621820"}
                      className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-black py-3 md:py-4 rounded-lg flex items-center justify-center gap-2 transition-all uppercase text-xs md:text-sm tracking-widest shadow-lg"
                    >
                      <Phone size={16} /> Call Now
                    </button>
                    <button 
                      onClick={() => window.location.href = "/contact"}
                      className="w-full bg-white/10 hover:bg-white/20 text-white font-bold py-3 md:py-4 rounded-lg border border-white/20 flex items-center justify-center gap-2 transition-all uppercase text-xs md:text-sm tracking-widest"
                    >
                      Get Free Quote <ArrowRight size={16} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Services;