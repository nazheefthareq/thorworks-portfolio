import Link from 'next/link';
import Image from 'next/image'; // 1. Import komponen Image

export default function Footer() {
  return (
    <footer className="mt-auto w-full">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
        
        <div className="flex flex-col gap-4">
          {/* 2. Ganti teks dengan Image logo.svg */}
          <Link href="/">
            <Image 
              src="/logo.svg" 
              alt="ThorWorks Logo" 
              width={60} // Ukuran di footer biasanya sedikit lebih kecil
              height={28}
              className="object-contain opacity-80 hover:opacity-100 transition-opacity"
            />
            <h2>thorworks.</h2>
          </Link>
          <p className="text-sm text-gray-500 font-medium">
            © {new Date().getFullYear()} Nazheef Thareq Asywal. All rights reserved.
          </p>
        </div>

        <div className="flex gap-6 text-sm font-medium">
          <h2>Let's Connect!</h2>
          <a href="https://linkedin.com/in/nazheefthareq" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-brand-white transition-colors">
            LinkedIn
          </a>
          <a href="https://github.com/nazheefthareq" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-brand-white transition-colors">
            GitHub
          </a>
          <a href="https://instagram.com/nazheefthareq" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-brand-white transition-colors">
            Instagram
          </a>
        </div>

      </div>
    </footer>
  );
}