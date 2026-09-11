"use client";

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import gsap from 'gsap';

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Menggunakan gsap.context untuk manajemen memori dan cleanup yang aman di React
    const ctx = gsap.context(() => {
      // Animasi tipografi utama: bergeser ke atas dan memudar secara bergantian (stagger)[cite: 10]
      gsap.fromTo('.hero-text', 
        { y: 50, opacity: 0 }, 
        { y: 0, opacity: 1, duration: 1.2, stagger: 0.15, ease: 'power3.out', delay: 0.2 }
      );
      
      // Animasi tombol masuk setelah teks selesai[cite: 10]
      gsap.fromTo('.hero-btn',
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: 'power2.out', delay: 1 }
      );
    }, containerRef);

    return () => ctx.revert(); // Cleanup saat komponen di-unmount[cite: 10]
  }, []);

  return (
    <section ref={containerRef} className="relative min-h-[85vh] flex flex-col justify-center items-center text-center px-6 overflow-hidden">
      
      {/* Tipografi Skala Besar dengan Clash Display (font-display) untuk dampak visual maksimal */}
      <h1 className="hero-text opacity-0 text-5xl md:text-7xl lg:text-8xl font-bold uppercase">
        Cinematic Visuals.
      </h1>
      <h1 className="hero-text opacity-0 text-5xl md:text-7xl lg:text-8xl font-bold uppercase text-brand-accent mt-2">
        Robust Code.
      </h1>
      
      {/* Teks body dengan Plus Jakarta Sans[cite: 6, 9] */}
      <p className="hero-text opacity-0 mt-8 text-lg md:text-xl max-w-2xl text-gray-400 font-medium">
        The digital space of Nazheef Thareq Asywal. A dual-threat professional bridging high-end motion design and scalable fullstack architecture.
      </p>

      {/* Navigasi Call-to-Action (CTA)[cite: 7, 9] */}
      <div className="mt-12 flex flex-col sm:flex-row gap-4 z-10">
        <Link href="/creatives" className="hero-btn opacity-0 bg-brand-white text-brand-black px-8 py-3.5 rounded-full font-semibold hover:bg-gray-200 transition-colors">
          View Masterpieces
        </Link>
        <Link href="/techs" className="hero-btn opacity-0 border border-brand-accent px-8 py-3.5 rounded-full font-semibold hover:bg-brand-accent transition-colors">
          Explore Architecture
        </Link>
      </div>
      
      {/* Elemen latar belakang (cahaya halus / noise) dapat ditambahkan di sini nantinya */}
    </section>
  );
}