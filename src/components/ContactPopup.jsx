import React, { useState } from "react";
import { FaCommentDots, FaTimes } from "react-icons/fa";

const ContactPopup = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* TOGGLE ICON */}
      <div
        className={`toggle-icon ${open ? "close" : ""}`}
        onClick={() => setOpen(!open)}
      >
        {open ? <FaTimes /> : <FaCommentDots />}
      </div>

      {/* POPUP */}
      {open && (
        <div className="popup-wrapper">
          <div className="popup-card">
            <h2>Enquiry Form</h2>

            <input type="text" placeholder="Enter your full name" />
            <input type="email" placeholder="Enter your email" />
            <input type="text" placeholder="Enter your phone number" />

            <select>
              <option>Select a service</option>
              <option>Interior Design</option>
              <option>Modular Kitchen</option>
              <option>False Ceiling</option>
            </select>

            <button className="submit-btn">Submit Enquiry</button>
          </div>
        </div>
      )}

      {/* CSS */}
      <style>{`
        .toggle-icon {
          position: fixed;
          bottom: 90px;
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

        /* X state */
        .toggle-icon.close {
          background: #e63946;
          transform: rotate(180deg);
        }

        .popup-wrapper {
          position: fixed;
          bottom: 155px; /* icon mela attach */
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
