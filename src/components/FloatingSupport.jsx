import React from "react";
import { FaWhatsapp, FaHeadset } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const FloatingSupport = () => {
  const navigate = useNavigate();

  const whatsappNumber = "919876543210"; // 🔴 real number
  const whatsappMessage = "Hello, I need support";

  const openWhatsApp = () => {
    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
        whatsappMessage
      )}`,
      "_blank"
    );
  };

  return (
    <div
      className="
        fixed 
        right-6 
        bottom-32   /* ✅ footer mela */
        z-50 
        flex 
        flex-col 
        gap-4
      "
    >
      {/* ✅ WhatsApp */}
      <button
        onClick={openWhatsApp}
        className="
          bg-green-500 
          hover:bg-green-600 
          text-white 
          w-14 
          h-14 
          rounded-full 
          flex 
          items-center 
          justify-center 
          shadow-2xl 
          transition 
          transform 
          hover:scale-110
        "
        aria-label="WhatsApp"
      >
        <FaWhatsapp className="w-7 h-7" />
      </button>

      {/* ✅ Helpline */}
      <button
        onClick={() => navigate("/contact")}
        className="
          bg-blue-600 
          hover:bg-blue-700 
          text-white 
          w-14 
          h-14 
          rounded-full 
          flex 
          items-center 
          justify-center 
          shadow-2xl 
          transition 
          transform 
          hover:scale-110
        "
        aria-label="Helpline"
      >
        <FaHeadset className="w-7 h-7" />
      </button>
    </div>
  );
};

export default FloatingSupport;
