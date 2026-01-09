// components/FloatingSupport.jsx
import React from "react";
import { FaWhatsapp, FaHeadset } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const FloatingSupport = () => {
  const navigate = useNavigate();

  const whatsappNumber = "919876543210"; 
  const whatsappMessage = "Thank you for contacting Shree Ayyappan glass and plywoods.";

  const openWhatsApp = () => {
    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`,
      "_blank"
    );
  };

  return (
    <div
      className="
        fixed 
        right-4          /* Mobile-la konjam edge-la irukkum */
        md:right-8       /* Desktop-la konjam thalli irukkum */
        bottom-[700px]        /* Bottom position fix */
        z-40             /* Header-ku pinnala poga idhu thaan mukkiyam */
        flex 
        flex-col 
        gap-3            /* Buttons-ku naduvula gap */
        md:gap-4
      "
    >
      {/* WhatsApp Button */}
      <button
        onClick={openWhatsApp}
        className="
          bg-green-500 hover:bg-green-600 text-white 
          w-12 h-12        /* Mobile size */
          md:w-14 md:h-14  /* Desktop size */
          rounded-full flex items-center justify-center 
          shadow-lg transition transform hover:scale-110 active:scale-90
        "
        aria-label="WhatsApp"
      >
        <FaWhatsapp className="text-xl md:text-2xl" />
      </button>

      {/* Helpline Button */}
      <button
        onClick={() => navigate("/contact")}
        className="
          bg-blue-600 hover:bg-blue-700 text-white 
          w-12 h-12        /* Mobile size */
          md:w-14 md:h-14  /* Desktop size */
          rounded-full flex items-center justify-center 
          shadow-lg transition transform hover:scale-110 active:scale-90
        "
        aria-label="Helpline"
      >
        <FaHeadset className="text-xl md:text-2xl" />
      </button>
    </div>
  );
};

export default FloatingSupport;