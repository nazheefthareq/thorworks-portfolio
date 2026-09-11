import { Metadata } from "next";

// Implementasi Metadata untuk SEO teknikal[cite: 9]
export const metadata: Metadata = {
  title: "About | ThorWorks",
  description: "Nazheef Thareq Asywal is a dual-threat Creative Designer and Fullstack Developer based in Surabaya, Indonesia.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto w-full flex flex-col gap-24">
      
      {/* Bagian Narasi Utama: Menggunakan ruang kosong masif dan tipografi besar[cite: 8] */}
      <section className="flex flex-col md:flex-row gap-12 md:gap-24 items-start">
        <h1 className="text-5xl md:text-7xl font-bold uppercase tracking-tight flex-1">
          The Architect<br/>
          <span className="text-brand-accent">&</span> Director.
        </h1>
        <div className="flex-1 flex flex-col gap-6 text-lg text-gray-400 font-medium">
          <p>
            Based in Surabaya, Indonesia, I operate at the exact intersection of cinematic visual storytelling and scalable software architecture.
          </p>
          <p>
            As a dual-threat professional, I don't just design how things look—I build how they function. From high-end motion graphics to headless web systems, I bring ideas to life with absolute precision.
          </p>
        </div>
      </section>

      {/* Bagian Arsenal & Keahlian: Struktur Grid Minimalis[cite: 8] */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-12 border-t border-brand-accent">
        
        {/* Creative Stack berdasarkan skillset Anda[cite: 3] */}
        <div className="flex flex-col gap-6">
          <h2 className="text-2xl font-bold font-display uppercase tracking-tight">Creative Arsenal</h2>
          <ul className="flex flex-wrap gap-3">
            {['After Effects', 'Premiere Pro', 'Photoshop', 'CapCut', 'Canva'].map(tool => (
              <li key={tool} className="px-4 py-2 border border-brand-accent rounded-full text-sm text-gray-300">
                {tool}
              </li>
            ))}
          </ul>
        </div>

        {/* Engineering Stack berdasarkan skillset Anda[cite: 3] */}
        <div className="flex flex-col gap-6">
          <h2 className="text-2xl font-bold font-display uppercase tracking-tight">Engineering Stack</h2>
          <ul className="flex flex-wrap gap-3">
            {['Next.js', 'Laravel', 'Supabase', 'Redis', 'Docker', 'Streamlit'].map(tech => (
              <li key={tech} className="px-4 py-2 border border-brand-accent rounded-full text-sm text-gray-300">
                {tech}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Bagian Kontak (Call-to-Action) yang terhubung ke Email & WhatsApp[cite: 3] */}
      <section className="flex flex-col items-center text-center gap-8 pt-24 pb-12">
        <h2 className="text-5xl md:text-7xl font-bold uppercase tracking-tight">Let's Talk.</h2>
        <p className="text-gray-400 font-medium max-w-md">
          Available for freelance opportunities, technical consulting, and creative collaborations.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 mt-4">
          <a 
            href="mailto:youremail@example.com" 
            className="bg-brand-white text-brand-black px-8 py-3.5 rounded-full font-semibold hover:bg-gray-200 transition-colors"
          >
            Email Me
          </a>
          {/* Ganti 628... dengan nomor WhatsApp Anda yang menggunakan kode negara (tanpa +) */}
          <a 
            href="https://wa.me/6281234567890" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="border border-brand-accent px-8 py-3.5 rounded-full font-semibold hover:bg-brand-accent transition-colors"
          >
            WhatsApp
          </a>
        </div>
      </section>

    </main>
  );
}