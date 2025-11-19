import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
  // Replace this number with your WhatsApp business or personal number (with country code, no +)
  const phoneNumber = "918122229557"; 
  const message = "Hi! I would like to know more about your services.";

  const handleClick = () => {
    window.open(`https://wa.me/918122228645?text=Hi!%20I'm%20interested%20in%20your%20services
`, "_blank");
  };

  return (
    <button
      onClick={handleClick}
      className="
        fixed bottom-6 right-6 
        bg-green-500 hover:bg-green-600 
        text-white rounded-full p-4 shadow-lg 
        animate-bounce transition-all duration-2000 
        flex items-center justify-center
        z-50
      "
    >
      <FaWhatsapp size={28} />
    </button>
  );
};

export default WhatsAppButton;
