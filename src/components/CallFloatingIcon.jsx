import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const CallFloatingIcon = () => {
  const navigate = useNavigate();
  const phoneNumber = "919591181111";

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
      <div className="call-float" onClick={handleCallClick}>
        <FaPhoneAlt />
      </div>

      <style>{`
        .call-float {
          position: fixed;
          bottom: 250px;
          right: 20px;
          width: 55px;
          height: 55px;
          background: #0d6efd;
          color: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 22px;
          cursor: pointer;
          z-index: 999;
          box-shadow: 0 10px 25px rgba(0,0,0,0.3);
        }

        .call-float:hover {
          background: #084298;
        }
      `}</style>
    </>
  );
};

export default CallFloatingIcon;
