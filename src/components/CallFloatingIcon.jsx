import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const CallFloatingIcon = () => {
  const navigate = useNavigate();
  const phoneNumber = "9481016006";

  const handleCallClick = () => {
    const isMobile = /iPhone|Android|iPad/i.test(navigator.userAgent);

    if (isMobile) {
      window.location.href = `tel:${phoneNumber}`;
    } else {
      navigate("/contact");
    }
  };

  return (
    <>
      <div className="floating-container">
        <div className="call-float" onClick={handleCallClick}>
          <FaPhoneAlt />
        </div>
      </div>

      <style>{`
        /* MAIN FLOATING CONTAINER */
        .floating-container {
          position: fixed;
          bottom: 140px;
          right: 30px;
          z-index: 1000;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .call-float {
          width: 54px;
          height: 54px;
          background: #0d6efd;
          color: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 22px;
          cursor: pointer;
          box-shadow: 0 8px 20px rgba(0,0,0,0.3);
          transition: transform 0.2s ease, background 0.2s ease;
        }

        .call-float:hover {
          background: #0b5ed7;
          transform: scale(1.08);
        }

        /* 📱 MOBILE */
        @media (max-width: 768px) {
          .floating-container {
            bottom: calc(80px + env(safe-area-inset-bottom));
            right: 14px;
          }

          .call-float {
            width: 48px;
            height: 48px;
            font-size: 20px;
          }
        }
      `}</style>
    </>
  );
};

export default CallFloatingIcon;
