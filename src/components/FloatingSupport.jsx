import React from "react";
import { FaWhatsapp, FaHeadset } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const FloatingSupport = () => {
  const navigate = useNavigate();

  const whatsappNumber = "919876543210";
  const whatsappMessage =
    "Thank you for contacting Shree Ayyappan Glass and Plywoods.";

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
      style={{
        position: "fixed",
        top: "45%",
        right: "18px",
        zIndex: 99999,
        transform: "none",
        display: "flex",
        flexDirection: "column",
        gap: "14px",
        pointerEvents: "auto",
      }}
    >
      {/* WhatsApp */}
      <button
        onClick={openWhatsApp}
        aria-label="WhatsApp"
        style={{
          width: "52px",
          height: "52px",
          borderRadius: "50%",
          backgroundColor: "#25D366",
          color: "#fff",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          border: "none",
          cursor: "pointer",
          boxShadow: "0 10px 25px rgba(0,0,0,0.25)",
          transition: "transform 0.2s ease",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
        onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
      >
        <FaWhatsapp size={26} />
      </button>

      {/* Helpline */}
      <button
        onClick={() => navigate("/contact")}
        aria-label="Helpline"
        style={{
          width: "52px",
          height: "52px",
          borderRadius: "50%",
          backgroundColor: "#2563EB",
          color: "#fff",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          border: "none",
          cursor: "pointer",
          boxShadow: "0 10px 25px rgba(0,0,0,0.25)",
          transition: "transform 0.2s ease",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
        onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
      >
        <FaHeadset size={24} />
      </button>
    </div>
  );
};

export default FloatingSupport;
