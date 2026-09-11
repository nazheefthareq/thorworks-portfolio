import Hero from "@/components/Hero";
import ProjectCard from "@/components/ProjectCard";
import { supabase } from "@/lib/supabase/client"; // Client aman untuk operasi baca publik[cite: 10]
import Link from "next/link";

// Konfigurasi revalidasi data cache Next.js (ISR) agar performa tetap cepat
export const revalidate = 60; // Refresh cache setiap 60 detik jika ada perubahan di Supabase

export default async function HomePage() {
  // Mengambil data paralel dari dua tabel untuk performa maksimal
  const [creativesRes, techsRes] = await Promise.all([
    supabase.from('creative_projects').select('*').eq('is_featured', true).limit(2),
    supabase.from('tech_projects').select('*').eq('is_featured', true).limit(2)
  ]);

  const featuredCreatives = creativesRes.data || [];
  const featuredTechs = techsRes.data || [];

  return (
    <main className="flex flex-col w-full">
      <Hero />

      {/* Bagian Showcase: Strict grid system & Massive white space[cite: 12] */}
      <section className="px-6 md:px-12 py-24 w-full max-w-7xl mx-auto flex flex-col gap-32">
        
        {/* --- CREATIVE WORKS SHOWCASE --- */}
        <div className="flex flex-col gap-12">
          <div className="flex justify-between items-end border-b border-brand-accent pb-6">
            <h2 className="text-4xl md:text-5xl font-bold uppercase">Selected Masterpieces.</h2>
            <Link href="/creatives" className="text-sm font-medium hover:text-gray-400 transition-colors">
              View All Creatives →
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {featuredCreatives.length > 0 ? (
              featuredCreatives.map((project) => (
                <ProjectCard 
                  key={project.id}
                  title={project.title}
                  role={project.role}
                  slug={project.slug}
                  imageUrl={project.thumbnail_url} 
                  category="creatives"
                />
              ))
            ) : (
              <p className="text-gray-500">No featured creative works yet.</p>
            )}
          </div>
        </div>

        {/* --- TECH ARCHITECTURE SHOWCASE --- */}
        <div className="flex flex-col gap-12">
          <div className="flex justify-between items-end border-b border-brand-accent pb-6">
            <h2 className="text-4xl md:text-5xl font-bold uppercase">Tech Architecture.</h2>
            <Link href="/techs" className="text-sm font-medium hover:text-gray-400 transition-colors">
              Explore All Code →
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {featuredTechs.length > 0 ? (
              featuredTechs.map((project) => (
                <ProjectCard 
                  key={project.id}
                  title={project.title}
                  role={project.role}
                  slug={project.slug}
                  imageUrl={project.image_url} 
                  category="techs"
                />
              ))
            ) : (
              <p className="text-gray-500">No featured tech projects yet.</p>
            )}
          </div>
        </div>

      </section>
    </main>
  );
}