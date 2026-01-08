import React, { useState, useMemo } from "react";
import {
  Boxes,
  Shield,
  Palette,
  Zap,
  DoorClosed,
  Square,
  Image as ImageIcon,
  Frame,
} from "lucide-react";

import { servicesData } from "../utils/servicesdata";

import adarsh from "../assets/img/logos/adarsh-group.png";
import homelane from "../assets/img/logos/Homelane.png";
import dsmax from "../assets/img/logos/Ds-Max.png";
import neo from "../assets/img/logos/neo.jpg";
import gateway from "../assets/img/logos/hotel.png";
import eta from "../assets/img/logos/Et-Mall.png";

const OurWorks = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

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

  /* ================= REMOVE DUPLICATE IMAGES ================= */
  const allImages = useMemo(() => {
    const imageMap = new Map(); // src -> image object

    servicesData.forEach((service) => {
      (service.images || [])
        .filter(
          (img) =>
            img &&
            typeof img === "string" &&
            !img.endsWith(".mp4")
        )
        .forEach((img, index) => {
          if (!imageMap.has(img)) {
            imageMap.set(img, {
              id: `${service.id}-${index}`,
              src: img,
              title: service.title,
              category: service.category,
              type: "image",
            });
          }
        });
    });

    return Array.from(imageMap.values());
  }, []);

  /* ================= CATEGORY FILTER ================= */
  const filteredImages = useMemo(() => {
    if (selectedCategory === "all") return allImages;
    return allImages.filter(
      (img) => img.category === selectedCategory
    );
  }, [selectedCategory, allImages]);

  return (
    <div className="bg-[#020617] text-white min-h-screen font-sans">
      {/* ================= HEADER ================= */}
      <header className="pt-20 md:pt-24 px-4 text-center">
        <h1 className="text-3xl md:text-6xl lg:text-7xl font-black tracking-tight mb-4 uppercase opacity-90">
          Our Works
        </h1>
        <p className="text-blue-400 font-bold tracking-[0.25em] uppercase text-xs md:text-sm">
          Premium Gallery
        </p>
      </header>

      {/* ================= CLIENTS ================= */}
      <section className="max-w-7xl mx-auto px-4 md:px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-black uppercase">
            Trusted Brands
          </h2>
          <p className="text-blue-400 font-semibold tracking-widest mt-2 uppercase text-sm">
            Our Clients
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {clients.map((client, index) => (
            <div
              key={index}
              className="group bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col items-center justify-center hover:border-blue-500/50 hover:bg-white/10 transition-all"
            >
              <img
                src={client.logo}
                alt={client.name}
                className="h-16 md:h-20 object-contain group-hover:scale-105 transition-transform"
              />
              <p className="mt-4 text-xs md:text-sm font-semibold text-gray-300 group-hover:text-white text-center">
                {client.name}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= CATEGORY BAR ================= */}
      <div className="sticky top-20 z-30 bg-[#020617]/90 backdrop-blur-md border-b border-white/10 py-4">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex overflow-x-auto space-x-2 md:space-x-3">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full border text-xs font-medium transition-all ${
                  selectedCategory === cat.id
                    ? "bg-blue-500 text-white border-blue-500"
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

      {/* ================= IMAGE GRID ================= */}
      <div className="max-w-[1600px] mx-auto px-4 md:px-6 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {filteredImages.map((item) => (
            <div
              key={item.id}
              className="group relative aspect-square rounded-xl overflow-hidden border border-white/5 bg-black"
            >
              <img
                src={item.src}
                alt={item.title}
                className="w-full h-full object-cover"
                loading="lazy"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>

              <div className="absolute bottom-0 p-4">
                <span className="text-xs text-blue-300 uppercase font-bold tracking-wider">
                  {item.category}
                </span>
                <h3 className="text-sm md:text-lg font-bold line-clamp-1">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {filteredImages.length === 0 && (
          <div className="text-center py-16 text-gray-400">
            No images found
          </div>
        )}

        <div className="text-center mt-8 text-sm text-gray-400">
          Showing {filteredImages.length} images
        </div>
      </div>
    </div>
  );
};

export default OurWorks;
