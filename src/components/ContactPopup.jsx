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

  /* 🔹 SAME SERVICES AS CONTACT FORM */
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

  /* 🔥 EMAILJS SUBMIT */
  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_1w6e7b8",        // 🔴 SAME SERVICE ID
        "template_527ixtm",       // 🔴 SAME TEMPLATE ID
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          service: formData.service,
          message: "Enquiry from Contact Popup",
          year: new Date().getFullYear(),
        },
        "rKrHOvAx59tAEL0ed"      // 🔴 SAME PUBLIC KEY
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
      {/* TOGGLE ICON */}
      <div
        className={`toggle-icon ${open ? "close" : ""}`}
        onClick={() => setOpen(!open)}
      >
        {open ? <FaTimes /> : <FaCommentDots />}
      </div>

      {/* POPUP FORM */}
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

      {/* CSS */}
      <style>{`
        .toggle-icon {
          position: fixed;
          bottom: 160px;
          right: 20px;
          width: 55px;
          height: 55px;
          background: #0d6efd;
          color: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 24px;
          cursor: pointer;
          z-index: 1001;
          box-shadow: 0 10px 25px rgba(0,0,0,0.35);
          transition: all 0.3s ease;
        }

        .toggle-icon.close {
          background: #e63946;
          transform: rotate(180deg);
        }

        .popup-wrapper {
          position: fixed;
          bottom: 155px;
          right: 20px;
          z-index: 1000;
        }

        .popup-card {
          width: 340px;
          background: white;
          border-radius: 20px;
          padding: 22px;
          box-shadow: 0 15px 40px rgba(0,0,0,0.35);
        }

        .popup-card h2 {
          text-align: center;
          color: #e63946;
          margin-bottom: 15px;
        }

        .popup-card input,
        .popup-card select {
          width: 100%;
          padding: 10px;
          margin-bottom: 12px;
          border-radius: 8px;
          border: 1px solid #ddd;
        }

        .submit-btn {
          width: 100%;
          background: #e63946;
          color: white;
          border: none;
          padding: 12px;
          border-radius: 10px;
          font-size: 16px;
          cursor: pointer;
        }
      `}</style>
    </>
  );
};

export default ContactPopup;
