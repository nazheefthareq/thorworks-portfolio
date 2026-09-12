"use client";

import { useEffect, useRef } from 'react';
// Hapus import Link dari 'next/link' jika sudah tidak dipakai di komponen ini
import gsap from 'gsap';
import { motion } from 'framer-motion'; // 1. Impor motion untuk efek tombol[cite: 6]
import TextTypeLoop from './TextTypeLoop';

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.hero-fade',
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: 'power2.out', delay: 0.5 }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative min-h-[85vh] flex flex-col justify-center w-full overflow-hidden">
      
      {/* --- ARCHITECTURAL GRID & SPOTLIGHT BACKGROUND --- */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-brand-black bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:4rem_4rem]">
        <div className="absolute left-0 top-1/4 -z-10 h-[500px] w-[500px] -translate-x-1/2 translate-y-[-50%] rounded-full bg-brand-accent opacity-20 blur-[120px]"></div>
      </div>

      {/* --- GRADIENT OVERLAY FADE OUT --- */}
      <div className="absolute bottom-0 left-0 w-full h-32 md:h-64 bg-gradient-to-t from-brand-black to-transparent pointer-events-none z-0"></div>

      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col items-start text-left relative z-10">
        <h1 className="hero-fade text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight flex flex-col min-h-[2.5em]">
          <span className="font-normal italic">building //</span>
          <TextTypeLoop 
            words={["AESTHETIC VISUALS", "ROBUST CODE", "MOTION DESIGN"]} 
            className="text-brand-accent mt-2"
          />
        </h1>
        
        <p className="hero-fade mt-8 text-lg md:text-xl max-w-2xl text-gray-400 font-medium">
          The digital space of Nazheef Thareq Asywal. A dual-threat professional bridging high-end motion design and scalable fullstack architecture.
        </p>

        {/* --- DUAL CV DOWNLOAD BUTTONS --- */}
        <div className="hero-fade mt-12 flex flex-col sm:flex-row gap-4">
          
          {/* Tombol 1: Creative CV */}
          <motion.a 
            href="/cv-creatives.pdf" // Pastikan nama file di folder public sesuai
            download="CV_Nazheef_Creatives.pdf"
            target="_blank"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group flex items-center justify-center gap-3 bg-brand-white text-brand-black px-8 py-3.5 rounded-full font-semibold hover:bg-gray-200 transition-colors"
          >
            {/* Ikon Dokumen Unduh (Panah akan bergerak turun saat di-hover) */}
            <svg className="w-5 h-5 text-brand-black group-hover:translate-y-0.5 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Creative CV
          </motion.a>

          {/* Tombol 2: Tech/Engineering CV */}
          <motion.a 
            href="/cv-tech.pdf" // Pastikan nama file di folder public sesuai
            download="CV_Nazheef_Tech.pdf"
            target="_blank"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group flex items-center justify-center gap-3 border border-brand-accent text-brand-white px-8 py-3.5 rounded-full font-semibold hover:bg-brand-accent hover:text-brand-white transition-colors"
          >
            {/* Ikon Dokumen Unduh */}
            <svg className="w-5 h-5 text-brand-white group-hover:translate-y-0.5 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Tech CV
          </motion.a>

        </div>
      </div>
      
    </section>
  );
}