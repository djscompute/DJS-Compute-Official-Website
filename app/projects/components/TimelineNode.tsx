"use client";
import React from "react";
import { motion } from "framer-motion";

interface TimelineNodeProps {
  progress: number; // numeric progress 0..1
}

const TimelineNode: React.FC<TimelineNodeProps> = ({ progress }) => {
  const safeProgress = typeof progress === "number" && !isNaN(progress) ? progress : 0;
  const scale = safeProgress * 0.5 + 0.5; // Scale from 0.5 to 1
  const haloOpacity = Math.max(0.15, safeProgress * 0.5);

  return (
    <div className="relative w-10 h-10 flex items-center justify-center">
      {/* Vibrant gradient ring */}
      <div className="relative">
        <div className="w-6 h-6 rounded-full p-[2px] bg-gradient-to-br from-orange-400 via-fuchsia-500 to-cyan-400">
          <div className="w-full h-full rounded-full bg-slate-900" />
        </div>
        {/* Inner glowing core */}
        <motion.div
          style={{
            scale,
            opacity: 1,
          }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <div className="w-2.5 h-2.5 rounded-full bg-gradient-to-br from-orange-400 to-rose-400 shadow-[0_0_24px_rgba(255,120,60,0.9)]" />
        </motion.div>
        {/* Soft halo */}
        <motion.div
          style={{
            scale: scale * 1.5,
            opacity: haloOpacity,
          }}
          className="absolute -inset-2 rounded-full bg-orange-400/25 blur-md"
        />
      </div>
      {/* Ripple animation */}
      <motion.span
        initial={{ scale: 0, opacity: 0 }}
        animate={{
          scale: safeProgress > 0.5 ? [0.8, 1.3, 1.7] : 0,
          opacity: safeProgress > 0.5 ? [0.35, 0.18, 0] : 0,
        }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="absolute inset-0 rounded-full bg-gradient-to-br from-orange-400/30 to-rose-400/30 blur-md"
      />
    </div>
  );
};

export default TimelineNode;
