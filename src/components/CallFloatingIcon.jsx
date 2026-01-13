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
      <div className="call-float" onClick={handleCallClick}>
        <FaPhoneAlt />
      </div>

    <style>{`
.call-float {
  position: fixed;
  bottom: 200px;
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

/* 📱 MOBILE – UNCHANGED */
@media (max-width: 768px) {
  .call-float {
    bottom: 220px;
    right: 20px;
    width: 48px;
    height: 48px;
    font-size: 20px;
  }
}

/* 🖥️ DESKTOP ONLY – MOVE UP */
@media (min-width: 769px) {
  .call-float {
    bottom: 150px;   /* ⬆ desktop-la mela pogum */
    right: 20px;
  }
}
`}</style>


    </>
  );
};

export default CallFloatingIcon;
