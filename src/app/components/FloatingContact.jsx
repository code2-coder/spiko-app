import React from "react";
import { motion } from "motion/react";
import { Phone, MessageCircleMore } from "lucide-react";

export function FloatingContact() {
  const whatsappNumber = "917841892600";
  const whatsappMessage = encodeURIComponent(
    "Hi, I want to join Learn Quickly Academy"
  );
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">

      {/* Call Button */}
      <motion.a
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        href="tel:+917841892600"
        className="w-14 h-14 bg-blue-600 rounded-full shadow-lg shadow-blue-600/30 flex items-center justify-center text-white relative overflow-hidden"
        aria-label="Call Us"
      >
        <div className="absolute inset-0 bg-blue-500 rounded-full animate-ping opacity-30"></div>
        <Phone className="w-6 h-6 relative z-10" />
      </motion.a>

      {/* WhatsApp Button */}
      <motion.a
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.2 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 bg-[#25D366] rounded-full shadow-lg shadow-[#25D366]/30 flex items-center justify-center text-white relative overflow-hidden group"
        aria-label="WhatsApp Us"
      >
        <div className="absolute inset-0 bg-white rounded-full animate-ping opacity-20 group-hover:opacity-40 transition-opacity"></div>
        <MessageCircleMore className="w-7 h-7 relative z-10" />
      </motion.a>

    </div>
  );
}