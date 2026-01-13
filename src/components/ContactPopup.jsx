import React, { useState } from "react";
import { FaCommentDots, FaTimes } from "react-icons/fa";
import emailjs from "@emailjs/browser";

const ContactPopup = () => {
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
          message: "Enquiry from Contact Popup",
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
      .catch((error) => {
        console.error(error);
        alert("❌ Failed to send enquiry");
      });
  };

  return (
    <>
      {/* TOGGLE ICON - ALWAYS VISIBLE */}
      <div
        className={`toggle-icon ${open ? "close" : ""}`}
        onClick={() => setOpen(!open)}
      >
        {open ? <FaTimes /> : <FaCommentDots />}
      </div>

      {/* POPUP FORM - ONLY VISIBLE WHEN OPEN IS TRUE */}
      {open && (
        <div className="popup-wrapper">
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

      <style jsx>{`
        /* TOGGLE ICON - ALWAYS VISIBLE */
        .toggle-icon {
          position: fixed;
          bottom: 150px;
          right: 14px;
          width: 50px;
          height: 50px;
          background: #0d6efd;
          color: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 22px;
          cursor: pointer;
          z-index: 1001;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
          transition: all 0.3s ease;
        }

        .toggle-icon:hover {
          background: #0b5ed7;
          transform: scale(1.05);
        }

        .toggle-icon.close {
          background: #dc3545;
        }

        .toggle-icon.close:hover {
          background: #bb2d3b;
        }

        /* POPUP FORM */
        .popup-wrapper {
          position: fixed;
          bottom: 220px;
          right: 10px;
          left: 10px;
          z-index: 1000;
          animation: slideIn 0.3s ease-out;
        }

        .popup-card {
          background: white;
          border-radius: 12px;
          padding: 25px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
          max-width: 400px;
          margin: 0 auto;
        }

        .popup-card h2 {
          margin-top: 0;
          margin-bottom: 20px;
          color: #333;
          font-size: 1.5rem;
          text-align: center;
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
          font-weight: 600;
          cursor: pointer;
          transition: background 0.3s;
        }

        .submit-btn:hover {
          background: #0b5ed7;
        }

        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* DESKTOP STYLES */
        @media (min-width: 769px) {
          .toggle-icon {
            bottom: 220px;
            right: 30px;
          }

          .popup-wrapper {
            bottom: 300px;
            right: 30px;
            left: auto;
            width: 400px;
          }
        }
      `}</style>
    </>
  );
};

export default ContactPopup;