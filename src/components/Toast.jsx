import React, { useEffect } from "react";
import { motion } from "framer-motion";

export default function Toast({ message, onClose }) {
  useEffect(() => {
    const t = setTimeout(onClose, 2500);
    return () => clearTimeout(t);
  }, [onClose]);

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 20 }} className="position-fixed bottom-0 start-50 translate-middle-x bg-dark text-white px-4 py-2 rounded shadow-lg zindex-modal">
      {message}
    </motion.div>
  );
}
