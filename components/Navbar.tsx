"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Creatives', path: '/creatives' },
  { name: 'Techs', path: '/techs' },
  { name: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  // Mencegah scroll pada body saat menu mobile terbuka
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = ''; // Menggunakan string kosong untuk reset
    }
    
    // Fungsi cleanup untuk mencegah kebocoran memori (memory leak)
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-brand-black/70 backdrop-blur-md">
      <div className="flex justify-between items-center px-6 py-6 md:px-12 relative z-50">
        
        {/* Logo */}
        <Link href="/" className="z-10 flex items-center" onClick={() => setIsOpen(false)}>
          <Image 
            src="/logo.svg" 
            alt="ThorWorks Logo" 
            width={60} 
            height={32}  
            className="object-contain"
            priority 
          />
        </Link>

        {/* --- DESKTOP NAVIGATION --- */}
        <nav className="hidden md:flex gap-6 z-10">
          {navLinks.map((link) => {
            const isActive = pathname === link.path;
            
            return (
              <Link key={link.name} href={link.path} className="relative text-sm font-medium px-3 py-1.5">
                <span className={`relative z-10 transition-colors duration-300 ${isActive ? 'text-brand-black' : 'text-brand-white hover:text-gray-400'}`}>
                  {link.name}
                </span>

                {isActive && (
                  <motion.div
                    layoutId="active-nav"
                    className="absolute inset-0 bg-brand-white rounded-full -z-0"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* --- MOBILE HAMBURGER BUTTON --- */}
        <button 
          className="md:hidden z-50 flex flex-col justify-center items-center gap-1.5 w-8 h-8"
          onClick={toggleMenu}
          aria-label="Toggle Mobile Menu"
        >
          {/* Menghapus transition-transform agar murni dikendalikan oleh Framer Motion */}
          <motion.span 
            animate={isOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }} 
            className="w-7 h-[2px] bg-brand-white block origin-center"
          />
          <motion.span 
            animate={isOpen ? { opacity: 0 } : { opacity: 1 }} 
            className="w-7 h-[2px] bg-brand-white block"
          />
          <motion.span 
            animate={isOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }} 
            className="w-7 h-[2px] bg-brand-white block origin-center"
          />
        </button>
      </div>

{/* --- MOBILE NAVIGATION OVERLAY --- */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            key="mobile-menu-overlay"
            initial={{ opacity: 0, y: '-100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-100%' }}
            transition={{ type: "tween", duration: 0.6, ease: "easeInOut" }}
            className="fixed inset-0 w-full h-screen bg-brand-black/95 backdrop-blur-2xl flex flex-col items-center justify-center gap-8 z-40 md:hidden"
          >
            {navLinks.map((link, index) => {
              const isActive = pathname === link.path;
              
              return (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + (index * 0.1) }}
                >
                  <Link 
                    href={link.path} 
                    onClick={() => setIsOpen(false)}
                    // Perubahan di sini: Mengubah text-4xl font-display font-bold uppercase menjadi font-sans normal-case font-normal
                    className={`text-2xl font-sans font-normal tracking-normal transition-colors ${isActive ? 'text-brand-accent' : 'text-brand-white hover:text-gray-400'}`}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              );
            })}
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}