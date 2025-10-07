"use client";
import React from "react";

export function ScrollToCtaButton() {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById("cta-section-root");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      // Move focus for accessibility
      (el as HTMLElement).focus?.();
    }
  };

  return (
    <button
      onClick={handleClick}
      className="block w-full max-w-md mx-auto bg-black text-white font-semibold py-4 px-8 rounded-full text-center transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/50 hover:bg-gray-900 text-base md:text-lg relative group overflow-hidden cursor-pointer"
      style={{
        background: 'linear-gradient(black, black) padding-box, linear-gradient(45deg, #8955ff, #5695fb) border-box',
        border: '2px solid transparent'
      }}
      aria-label="Request a Consultation - scroll to contact section"
    >
      <span className="relative z-10">Request a Consultation</span>
      <div className="absolute inset-0 bg-black rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></div>
    </button>
  );
}
