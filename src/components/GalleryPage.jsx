import React, { useState } from "react";
import { motion } from "framer-motion";
import Header from "./Header";

export default function GalleryPage({ dark, setDark }) {
  const designs = [
    "https://via.placeholder.com/600x400?text=Design+1",
    "https://via.placeholder.com/600x400?text=Design+2",
    "https://via.placeholder.com/600x400?text=Design+3",
    "https://via.placeholder.com/600x400?text=Design+4",
    "https://via.placeholder.com/600x400?text=Design+5",
  ];

  const [toast, setToast] = useState(null);

  return (
    <div
      className={`min-vh-100 pt-5 ${dark ? "bg-dark text-light" : "bg-light text-dark"
        }`}
      style={{
        transition: "background-color 0.4s ease, color 0.4s ease",
      }}
    >
      {/* ✅ Header with theme toggle
      <Header dark={dark} setDark={setDark} /> */}

      {/* ✅ Page Content */}
      <div className="container text-center py-5 pt-5">
        <h2
          className={`display-5 fw-bold mb-4 ${dark ? "text-light" : "text-dark"
            }`}
        >
          Design Showcase
        </h2>

        <div className="row g-4 justify-content-center">
          {designs.map((url, index) => (
            <div key={index} className="col-12 col-sm-6 col-md-4 col-lg-3">
              <motion.img
                src={url}
                alt={`Design ${index + 1}`}
                className={`img-fluid rounded-4 shadow-sm ${dark ? "border border-secondary" : "border border-light"
                  }`}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
