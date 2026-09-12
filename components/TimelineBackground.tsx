"use client";

import { motion } from "framer-motion";

export default function TimelineBackground() {
  return (
    <div className="absolute inset-0 -z-10 h-full w-full overflow-hidden pointer-events-none">
      {/* Hanya Pola Dot Matrix Murni */}
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff15_1px,transparent_1px)] [background-size:32px_32px]"></div>
      
      <motion.div
        animate={{ 
          opacity: [0.05, 0.15, 0.05], 
          scale: [1, 1.3, 1],
          x: ["-50%", "-40%", "-50%"],
          y: ["-50%", "-60%", "-50%"]
        }}
        transition={{ repeat: Infinity, duration: 15, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 w-[600px] md:w-[800px] h-[600px] md:h-[800px] bg-brand-accent rounded-full blur-[120px] mix-blend-screen"
      />
    </div>
  );
}