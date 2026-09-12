"use client";

import { motion } from "framer-motion";

export default function SkillTag({ name }: { name: string }) {
  return (
    <motion.li
      // Efek pegas saat di-hover dan ditekan (tactile hover states)[cite: 1]
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
      // Menggunakan Tailwind untuk transisi warna agar lebih ringan dirender[cite: 10]
      className="px-4 py-2 border border-brand-accent rounded-full text-sm text-gray-300 cursor-default hover:bg-brand-accent hover:text-brand-white transition-colors duration-300"
    >
      {name}
    </motion.li>
  );
}