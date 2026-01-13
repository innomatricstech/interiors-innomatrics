import { useState } from "react";
import { actorImages } from "../utils/actorImages";

const GALLERY_COUNT = 54;
const SLIDE_COUNT = 5;

const ActorGallery = () => {
  const [open, setOpen] = useState(false);
  const [current, setCurrent] = useState(0);
  const [slides, setSlides] = useState([]);
  const [fullscreen, setFullscreen] = useState(false);

  const galleryImages = actorImages.images.slice(0, GALLERY_COUNT);

  const openSlider = (clickedIndex) => {
    const groupStart = clickedIndex * SLIDE_COUNT;
    setSlides(actorImages.images.slice(groupStart, groupStart + SLIDE_COUNT));
    setCurrent(0);
    setOpen(true);
  };

  const next = () => setCurrent((current + 1) % slides.length);
  const prev = () => setCurrent((current - 1 + slides.length) % slides.length);

  const openFullImage = (imgIndex) => {
    setSlides([actorImages.images[imgIndex]]);
    setCurrent(0);
    setOpen(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 p-4 md:p-8">
      {/* ================= HEADER ================= */}
      <div className="text-center mb-12">
        <h1 className="text-white text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          Actor Gallery
        </h1>
        <p className="text-gray-300 text-xl">
          High Quality Images - Click to View Full Size
        </p>
        <div className="flex justify-center items-center gap-4 mt-4">
          <span className="px-4 py-2 bg-blue-600/30 rounded-full text-blue-300 text-sm">
            {GALLERY_COUNT} Images
          </span>
          <span className="px-4 py-2 bg-purple-600/30 rounded-full text-purple-300 text-sm">
            Original Quality
          </span>
        </div>
      </div>

      {/* ================= GALLERY - BIG IMAGES ================= */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
        {galleryImages.map((img, i) => (
          <div
            key={i}
            className="group relative cursor-pointer rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2 bg-black/20"
          >
            {/* BIG IMAGE CONTAINER */}
            <div className="aspect-square overflow-hidden">
              <img
                src={img}
                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-1"
                alt={`Actor ${i + 1}`}
                loading="lazy"
              />
            </div>

            {/* HOVER OVERLAY */}
            <div 
              className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-center"
              onClick={() => openFullImage(i)}
            >
              <div className="text-center transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                <div className="bg-white/20 backdrop-blur-sm rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🔍</span>
                </div>
                <h3 className="text-white text-2xl font-bold mb-2">
                  Actor {i + 1}
                </h3>
                <p className="text-gray-300 mb-6 max-w-xs px-4">
                  Click to view in full resolution
                </p>
                <div className="flex gap-3">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      openFullImage(i);
                    }}
                    className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-semibold transition-all hover:scale-105"
                  >
                    View Full Size
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      openSlider(Math.floor(i / SLIDE_COUNT));
                    }}
                    className="px-6 py-3 bg-purple-600/70 hover:bg-purple-700 text-white rounded-full font-semibold transition-all hover:scale-105"
                  >
                    View Slideshow
                  </button>
                </div>
              </div>
            </div>

            {/* IMAGE NUMBER */}
            <div className="absolute top-4 left-4 bg-black/70 text-white text-lg font-bold rounded-full w-10 h-10 flex items-center justify-center backdrop-blur-sm">
              {i + 1}
            </div>
          </div>
        ))}
      </div>

      {/* ================= VIDEO SECTION ================= */}
      <div className="max-w-6xl mx-auto mt-20">
        <div className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-xl p-8 rounded-3xl border border-gray-700/50">
          <h2 className="text-white text-4xl font-bold mb-8 text-center">
            Behind The Scenes
          </h2>
          
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <video
              src={actorImages.video}
              controls
              className="w-full h-auto max-h-[70vh] object-contain bg-black"
              poster={actorImages.images[0]}
              preload="metadata"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
              <h3 className="text-white text-2xl font-bold mb-2">
                Production Video
              </h3>
              <p className="text-gray-300">
                Original Quality • Director's Cut
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ================= FULLSCREEN IMAGE VIEWER ================= */}
      {open && (
        <div className={`fixed inset-0 bg-black z-50 flex items-center justify-center ${fullscreen ? 'p-0' : 'p-4'}`}>
          {/* CLOSE BUTTON */}
          <button
            className="absolute top-6 right-6 bg-red-600 hover:bg-red-700 text-white rounded-full w-14 h-14 flex items-center justify-center text-2xl font-bold shadow-2xl z-20"
            onClick={() => {
              setOpen(false);
              setFullscreen(false);
            }}
          >
            ✕
          </button>

          {/* FULLSCREEN TOGGLE */}
          <button
            className="absolute top-6 right-24 bg-blue-600 hover:bg-blue-700 text-white rounded-full w-14 h-14 flex items-center justify-center text-2xl font-bold shadow-2xl z-20"
            onClick={() => setFullscreen(!fullscreen)}
          >
            {fullscreen ? '⤢' : '⤡'}
          </button>

          {/* NAVIGATION - Only show if multiple slides */}
          {slides.length > 1 && (
            <>
              <button
                className="absolute left-6 bg-black/70 hover:bg-black/90 text-white rounded-full w-14 h-14 flex items-center justify-center text-3xl font-bold shadow-2xl z-20"
                onClick={prev}
              >
                ‹
              </button>

              <button
                className="absolute right-6 bg-black/70 hover:bg-black/90 text-white rounded-full w-14 h-14 flex items-center justify-center text-3xl font-bold shadow-2xl z-20"
                onClick={next}
              >
                ›
              </button>
            </>
          )}

          {/* MAIN IMAGE CONTAINER */}
          <div className={`relative ${fullscreen ? 'w-full h-full' : 'max-w-[90vw] max-h-[90vh]'}`}>
            <img
              src={slides[current]}
              className={`${fullscreen ? 'w-full h-full' : 'w-full h-auto max-h-[80vh]'} object-contain transition-all duration-300`}
              alt={`Full Size Image ${current + 1}`}
            />
            
            {/* IMAGE INFO */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/80 text-white px-6 py-3 rounded-full backdrop-blur-sm flex items-center gap-4">
              <span className="text-lg font-semibold">
                Image {current + 1} of {slides.length}
              </span>
              <span className="text-gray-300">
                • Original Quality •
              </span>
            </div>

            {/* THUMBNAILS (if multiple slides) */}
            {slides.length > 1 && (
              <div className="absolute bottom-24 left-1/2 transform -translate-x-1/2 flex gap-3">
                {slides.map((slide, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrent(idx)}
                    className={`w-20 h-20 rounded-xl overflow-hidden border-2 transition-all ${
                      idx === current 
                        ? 'border-blue-500 scale-110 shadow-lg' 
                        : 'border-gray-600 hover:border-gray-400 opacity-70 hover:opacity-100'
                    }`}
                  >
                    <img
                      src={slide}
                      className="w-full h-full object-cover"
                      alt={`Thumb ${idx + 1}`}
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* ZOOM CONTROLS */}
          <div className="absolute left-6 bottom-6 flex flex-col gap-2 z-20">
            <button
              className="bg-black/70 hover:bg-black/90 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl"
              onClick={() => {
                const img = document.querySelector('.fixed img');
                if (img) {
                  img.style.transform = `scale(${parseFloat(img.style.transform?.replace('scale(', '') || 1) + 0.1})`;
                }
              }}
            >
              +
            </button>
            <button
              className="bg-black/70 hover:bg-black/90 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl"
              onClick={() => {
                const img = document.querySelector('.fixed img');
                if (img) {
                  img.style.transform = `scale(${parseFloat(img.style.transform?.replace('scale(', '') || 1) - 0.1})`;
                }
              }}
            >
              -
            </button>
          </div>
        </div>
      )}

      {/* ================= FOOTER ================= */}
      <footer className="mt-20 text-center">
        <div className="border-t border-gray-700/50 pt-8">
          <p className="text-gray-400 text-lg">
            All images are in original quality
          </p>
          <p className="text-gray-500 mt-2">
            Total Collection: {actorImages.images.length} High Quality Images
          </p>
        </div>
      </footer>
    </div>
  );
};

export default ActorGallery;