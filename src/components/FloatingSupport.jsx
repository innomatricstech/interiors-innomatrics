import React, { useState } from "react";
import {
  FaPhoneAlt,
  FaCommentDots,
  FaTimes,
  FaHeadset,
  FaWhatsapp,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import emailjs from "@emailjs/browser";

const FloatingSupport = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
  });

  const services = [
    "SHOWER PARTITIONS",
    "UPVC WINDOWS",
    "GLASS RAILINGS",
    "TOUGHENED GLASS",
    "LACQUERED GLASS",
    "LED MIRRORS",
    "FRAMELESS GLASS",
    "SPIDER FITTINGS",
    "CUSTOM SOLUTIONS",
  ];

  const phoneNumber = "9481016006";
  const whatsappNumber = "919481016006";

  // 🔥 METHOD 1 – GO TO CONTACT + SCROLL TOP
  const goToContactTop = () => {
    navigate("/contact");
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 50);
  };

  const handleCallClick = () => {
    const isMobile = /iPhone|Android|iPad/i.test(navigator.userAgent);
    if (isMobile) {
      window.location.href = `tel:${phoneNumber}`;
    } else {
      goToContactTop();
    }
  };

  const handleSupportClick = () => {
    goToContactTop();
  };

  const handleWhatsAppClick = () => {
    const message = "Hello! I would like to enquire about your services.";
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_1w6e7b8",
        "template_527ixtm",
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          service: formData.service,
          message: "Enquiry from Floating Support",
          year: new Date().getFullYear(),
        },
        "rKrHOvAx59tAEL0ed"
      )
      .then(() => {
        alert("✅ Enquiry sent successfully!");
        setFormData({
          name: "",
          email: "",
          phone: "",
          service: "",
        });
        setOpen(false);
      })
      .catch(() => {
        alert("❌ Failed to send enquiry");
      });
  };

  const handleChatClick = () => {
    setOpen(!open);
  };

  return (
    <>
      <div className="floating-container">
        {/* SUPPORT */}
        <div
          className="float-btn support"
          onClick={handleSupportClick}
          title="Contact Page"
        >
          <FaHeadset />
        </div>

        {/* WHATSAPP */}
        <div
          className="float-btn whatsapp"
          onClick={handleWhatsAppClick}
          title="WhatsApp"
        >
          <FaWhatsapp />
        </div>

        {/* CHAT + POPUP WRAPPER */}
        <div className="chat-wrapper">
          <div
            className={`float-btn chat ${open ? "active" : ""}`}
            onClick={handleChatClick}
            title={open ? "Close Enquiry Form" : "Quick Enquiry"}
          >
            {open ? <FaTimes /> : <FaCommentDots />}
          </div>

          {/* POPUP FORM — OPENS BESIDE CHAT ICON */}
          {open && (
            <div className="popup-wrapper">
              <div className="popup-arrow"></div>
              <form className="popup-card" onSubmit={handleSubmit}>
                <h2>Enquiry Form</h2>

                <input
                  type="text"
                  name="name"
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />

                <input
                  type="text"
                  name="phone"
                  placeholder="Enter your phone number"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />

                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select a service</option>
                  {services.map((service, index) => (
                    <option key={index} value={service}>
                      {service}
                    </option>
                  ))}
                </select>

                <button type="submit" className="submit-btn">
                  Submit Enquiry
                </button>
              </form>
            </div>
          )}
        </div>

        {/* CALL */}
        <div
          className="float-btn call"
          onClick={handleCallClick}
          title="Call Us"
        >
          <FaPhoneAlt />
        </div>
      </div>

      <style>{`
        /* MAIN CONTAINER */
        .floating-container {
          position: fixed;
          bottom: 140px;
          right: 30px;
          z-index: 1000;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 14px;
        }

        /* BUTTON COMMON */
        .float-btn {
          width: 54px;
          height: 54px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 22px;
          cursor: pointer;
          box-shadow: 0 8px 20px rgba(0,0,0,0.3);
          transition: transform 0.2s ease, background 0.2s ease;
          position: relative;
          z-index: 1001;
        }

        .float-btn:hover {
          transform: scale(1.1);
        }

        .support {
          background: #dc3545;
        }
        .support:hover {
          background: #c82333;
        }

        .whatsapp {
          background: #25d366;
        }
        .whatsapp:hover {
          background: #1da851;
        }

        .chat {
          background: #0d6efd;
        }
        .chat.active {
          background: #000;
        }
        .chat:hover {
          background: #0b5ed7;
        }

        .call {
          background: #0b5ed7;
        }
        .call:hover {
          background: #0a58ca;
        }

        /* CHAT RELATIVE WRAPPER */
        .chat-wrapper {
          position: relative;
          display: flex;
          justify-content: center;
        }

        /* POPUP — OPENS BESIDE CHAT ICON */
        .popup-wrapper {
          position: absolute;
          top: 50%;
          right: 70px;
          transform: translateY(-50%);
          z-index: 1002;
          animation: slideIn 0.25s ease-out;
          min-width: 340px;
        }

        /* ARROW POINTS TO CHAT ICON */
        .popup-arrow {
          position: absolute;
          top: 50%;
          right: -10px;
          transform: translateY(-50%);
          width: 0;
          height: 0;
          border-top: 10px solid transparent;
          border-bottom: 10px solid transparent;
          border-left: 10px solid white;
        }

        .popup-card {
          background: white;
          border-radius: 12px;
          padding: 25px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
          width: 100%;
          max-width: 95vw;
        }

        .popup-card h2 {
          margin-top: 0;
          margin-bottom: 20px;
          text-align: center;
          color: #333;
          font-size: 22px;
        }

        .popup-card input,
        .popup-card select {
          width: 100%;
          padding: 12px;
          margin-bottom: 15px;
          border: 1px solid #ddd;
          border-radius: 6px;
          font-size: 14px;
          box-sizing: border-box;
          font-family: inherit;
        }

        .popup-card input:focus,
        .popup-card select:focus {
          outline: none;
          border-color: #0d6efd;
          box-shadow: 0 0 0 3px rgba(13, 110, 253, 0.1);
        }

        .submit-btn {
          width: 100%;
          padding: 12px;
          background: #0d6efd;
          color: white;
          border: none;
          border-radius: 6px;
          font-size: 16px;
          cursor: pointer;
          font-weight: 600;
          transition: background 0.2s ease;
          margin-top: 10px;
        }

        .submit-btn:hover {
          background: #0b5ed7;
        }

        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(-50%) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(-50%) scale(1);
          }
        }

        /* 📱 MOBILE */
        @media (max-width: 768px) {
          .floating-container {
            bottom: calc(90px + env(safe-area-inset-bottom));
            right: 14px;
          }

          .float-btn {
            width: 48px;
            height: 48px;
            font-size: 20px;
          }

          .popup-wrapper {
            right: 60px;
            min-width: 280px;
          }

          .popup-arrow {
            right: -8px;
          }
        }

        /* EXTRA SMALL */
        @media (max-width: 480px) {
          .popup-wrapper {
            min-width: 260px;
          }

          .popup-card {
            padding: 18px;
          }

          .popup-card h2 {
            font-size: 18px;
            margin-bottom: 14px;
          }

          .popup-card input,
          .popup-card select {
            padding: 10px;
            margin-bottom: 12px;
            font-size: 13px;
          }

          .submit-btn {
            padding: 10px;
            font-size: 15px;
          }
        }
      `}</style>
    </>
  );
};

export default FloatingSupport;
