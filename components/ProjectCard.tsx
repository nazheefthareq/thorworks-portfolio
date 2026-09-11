"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';

interface ProjectCardProps {
  title: string;
  role: string;
  slug: string;
  imageUrl: string;
  category: 'creatives' | 'techs';
}

export default function ProjectCard({ title, role, slug, imageUrl, category }: ProjectCardProps) {
  return (
    // Struktur Bento-box minimalis: tanpa border tebal atau drop shadow, mengandalkan ruang kosong[cite: 12]
    <Link href={`/${category}/${slug}`} className="group relative flex flex-col gap-4 w-full cursor-pointer">
      <div className="relative w-full aspect-[4/3] overflow-hidden bg-brand-accent rounded-sm">
        {/* Efek zoom halus pada gambar saat di-hover menggunakan Framer Motion[cite: 3, 12] */}
        <motion.img 
          src={imageUrl} 
          alt={title}
          className="object-cover w-full h-full"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }} // Kurva easing sinematik
        />
        {/* Overlay gelap transparan yang muncul saat hover */}
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>
      
      <div className="flex flex-col">
        <h3 className="text-2xl font-bold font-display uppercase tracking-tight">{title}</h3>
        <p className="text-gray-400 font-medium">{role}</p>
      </div>
    </Link>
  );
}