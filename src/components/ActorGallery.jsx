import { useState } from "react";
import { actorImages } from "../utils/actorImages";

const GALLERY_COUNT = 10;
const SLIDE_COUNT = 5;

const ActorGallery = () => {
  const [open, setOpen] = useState(false);
  const [current, setCurrent] = useState(0);
  const [slides, setSlides] = useState([]);

  const galleryImages = actorImages.images.slice(0, GALLERY_COUNT);

  const openSlider = (clickedIndex) => {
    const groupStart = clickedIndex * SLIDE_COUNT;

    setSlides(
      actorImages.images.slice(groupStart, groupStart + SLIDE_COUNT)
    );
    setCurrent(0);
    setOpen(true);
  };

  const next = () => setCurrent((current + 1) % slides.length);
  const prev = () =>
    setCurrent((current - 1 + slides.length) % slides.length);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-700 to-blue-500 p-6">
      {/* ================= HEADER ================= */}
      <h2 className="text-center text-white text-3xl md:text-4xl font-bold mb-8">
        Actor Gallery
      </h2>

      {/* ================= GALLERY ================= */}
      <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
        {galleryImages.map((img, i) => (
          <div
            key={i}
            onClick={() => openSlider(i)}
            className="group relative cursor-pointer rounded-xl overflow-hidden shadow-lg"
          >
            <img
              src={img}
              className="w-full h-40 object-cover transition-transform duration-500 group-hover:scale-110"
            />

            {/* Hover overlay */}
            <div className="absolute inset-0 bg-blue-900/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
              <span className="text-white font-semibold tracking-wide">
                View
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* ================= VIDEO ================= */}
      <div className="max-w-4xl mx-auto mt-14 bg-white/10 backdrop-blur-xl p-6 rounded-2xl shadow-xl">
        <h3 className="text-white text-2xl font-semibold mb-4 text-center">
          Work Video
        </h3>

        <video
          src={actorImages.video}
          controls
          className="w-full rounded-xl"
        />
      </div>

      {/* ================= SLIDER ================= */}
      {open && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 px-4">
          {/* Close */}
          <button
            className="absolute top-6 right-6 bg-white/20 hover:bg-white/40 text-white rounded-full w-10 h-10 flex items-center justify-center"
            onClick={() => setOpen(false)}
          >
            ✕
          </button>

          {/* Prev */}
          <button
            className="absolute left-3 md:left-10 bg-white/20 hover:bg-white/40 text-white rounded-full w-10 h-10 flex items-center justify-center"
            onClick={prev}
          >
            ‹
          </button>

          {/* Image */}
          <img
            src={slides[current]}
            className="max-h-[60vh] md:max-h-[75vh] rounded-2xl shadow-2xl transition-all duration-300"
          />

          {/* Next */}
          <button
            className="absolute right-3 md:right-10 bg-white/20 hover:bg-white/40 text-white rounded-full w-10 h-10 flex items-center justify-center"
            onClick={next}
          >
            ›
          </button>
        </div>
      )}
    </div>
  );
};

export default ActorGallery;
