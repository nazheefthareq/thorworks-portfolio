"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export default function ScrollReveal({ children, className = "", delay = 0 }: ScrollRevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      // once: true memastikan animasi hanya terjadi sekali agar tidak mengganggu jika di-scroll naik turun
      // margin: "-100px" memastikan animasi baru terpicu setelah elemen benar-benar masuk 100px ke dalam layar
      viewport={{ once: true, margin: "-100px" }} 
      transition={{ 
        duration: 0.8, 
        delay: delay, 
        ease: [0.16, 1, 0.3, 1] // Custom bezier ease-out bergaya sinematik[cite: 3, 4]
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}