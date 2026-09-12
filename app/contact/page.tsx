import { Metadata } from "next";

// Implementasi Metadata untuk SEO[cite: 6]
export const metadata: Metadata = {
  title: "Contact | ThorWorks",
  description: "Get in touch with Nazheef Thareq Asywal for freelance opportunities and creative collaborations.",
};

export default function ContactPage() {
  return (
    // Menggunakan padding top yang sangat besar untuk mendorong konten ke tengah (massive white space)[cite: 5]
    <main className="min-h-[80vh] flex flex-col items-center justify-center text-center px-6 md:px-12 max-w-7xl mx-auto w-full gap-8">
      
      <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold uppercase tracking-tight">
        Let's Talk.
      </h1>
      
      <p className="text-gray-400 font-medium max-w-lg text-lg md:text-xl">
        Available for freelance opportunities, technical consulting, and creative collaborations.
      </p>
      
      <div className="flex flex-col sm:flex-row gap-4 mt-8 w-full sm:w-auto">
        <a 
          href="mailto:youremail@example.com" 
          className="bg-brand-white text-brand-black px-10 py-4 rounded-full font-semibold hover:bg-gray-200 transition-colors w-full sm:w-auto"
        >
          Email Me
        </a>
        <a 
          href="https://wa.me/6281234567890" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="border border-brand-accent px-10 py-4 rounded-full font-semibold hover:bg-brand-accent transition-colors w-full sm:w-auto"
        >
          WhatsApp
        </a>
      </div>

    </main>
  );
}