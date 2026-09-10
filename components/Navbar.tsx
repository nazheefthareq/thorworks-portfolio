"use client"; // Wajib untuk hooks Next.js (usePathname) dan Framer Motion[cite: 3, 13]

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Creatives', path: '/creatives' },
  { name: 'Techs', path: '/techs' },
  { name: 'About', path: '/about' },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    // Header transparan dengan efek blur (Glassmorphism) yang bersih dan minimal[cite: 9]
    <header className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-6 py-6 md:px-12 bg-brand-black/70 backdrop-blur-md">
      {/* Logo tipografi menggunakan Clash Display */}
      <Link href="/" className="font-display text-xl font-bold tracking-tight z-10">
        ThorWorks.
      </Link>

      <nav className="flex gap-6 z-10">
        {navLinks.map((link) => {
          const isActive = pathname === link.path;
          
          return (
            <Link key={link.name} href={link.path} className="relative text-sm font-medium px-3 py-1.5">
              {/* Perubahan warna teks kontras tinggi saat aktif[cite: 9] */}
              <span className={`relative z-10 transition-colors duration-300 ${isActive ? 'text-brand-black' : 'text-brand-white hover:text-gray-400'}`}>
                {link.name}
              </span>

              {/* Framer Motion: Animasi pil background (smooth spring) untuk menu aktif[cite: 9, 13] */}
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
    </header>
  );
}