import { Metadata } from "next";
import ScrollReveal from "@/components/ScrollReveal";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact | ThorWorks",
  description: "Get in touch with Nazheef Thareq Asywal for freelance opportunities and creative collaborations.",
};

const socialLinks = [
  { name: "WhatsApp", url: "https://wa.me/6282141186216" },
  { name: "Discord", url: "https://discordapp.com/users/thor.works" },
  { name: "X (Twitter)", url: "https://x.com/nazheefthareq" }
];

export default function ContactPage() {
  return (
    // Menggunakan CSS Grid untuk mengontrol posisi di desktop vs mobile secara presisi[cite: 5]
    <main className="min-h-screen pt-48 pb-32 px-6 md:px-12 w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-y-16 lg:gap-x-24 overflow-hidden">
      
      {/* 1. SISI KIRI ATAS: Judul (Tampil pertama di mobile & desktop) */}
      <div className="lg:col-start-1 lg:row-start-1">
        <ScrollReveal>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold uppercase tracking-tight flex flex-col">
            <span className="text-brand-accent italic font-normal lowercase text-4xl md:text-5xl mb-4">let's -</span>
            Get In Touch
          </h1>
          <p className="mt-6 text-gray-400 font-medium max-w-md text-lg md:text-xl">
            Available for freelance opportunities, technical consulting, and creative collaborations.
          </p>
        </ScrollReveal>
      </div>

      {/* 2. SISI KANAN: Form (Tampil KEDUA di mobile, tapi ditarik ke kanan penuh pada desktop) */}
      <div className="lg:col-start-2 lg:row-start-1 lg:row-span-2 flex flex-col">
        <ScrollReveal delay={0.2}>
          <ContactForm />
        </ScrollReveal>
      </div>

      {/* 3. SISI KIRI BAWAH: Tautan Sosial (Tampil KETIGA di mobile, ditarik ke kiri bawah pada desktop) */}
      {/* self-end mendorong elemen ini ke bagian paling bawah kolomnya pada desktop */}
      <div className="lg:col-start-1 lg:row-start-2 lg:self-end pt-8 lg:pt-0 border-t border-gray-800 lg:border-none mt-8 lg:mt-0">
        <ScrollReveal delay={0.3}>
          {/* Label diperkecil dari text-sm ke text-xs */}
          <p className="text-xs text-gray-500 uppercase tracking-widest font-bold mb-4">Or contact me on</p>
          <ul className="flex flex-col gap-3">
            {socialLinks.map((link) => (
              <li key={link.name}>
                <a 
                  href={link.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  // Teks diperkecil dari text-2xl menjadi text-xl
                  className="group flex items-center gap-2 text-xl font-display font-medium text-brand-white hover:text-brand-accent transition-colors"
                >
                  {link.name}
                  {/* Ikon diperkecil dari w-5 h-5 menjadi w-4 h-4 */}
                  <svg className="w-4 h-4 opacity-0 -translate-x-2 translate-y-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </li>
            ))}
          </ul>
        </ScrollReveal>
      </div>

    </main>
  );
}