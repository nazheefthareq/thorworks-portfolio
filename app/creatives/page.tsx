import { Metadata } from "next";
import ProjectCard from "@/components/ProjectCard";
import { supabase } from "@/lib/supabase/client";

// 1. Implementasi Static Metadata untuk SEO halaman khusus
export const metadata: Metadata = {
  title: "Creative Works | ThorWorks",
  description: "A curated collection of high-end motion design, cinematics, and promotional videos by Nazheef Thareq Asywal.",
};

// Revalidasi cache setiap 60 detik (ISR) untuk performa maksimal[cite: 14]
export const revalidate = 60; 

export default async function CreativesPage() {
  // 2. Fetching data langsung dari Supabase menggunakan Server Component[cite: 11]
  const { data: projects } = await supabase
    .from('creative_projects')
    .select('*')
    .order('created_at', { ascending: false }); // Urutkan dari yang terbaru

  return (
    <main className="min-h-screen pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto w-full flex flex-col gap-16">
      {/* Header Halaman: Tipografi berukuran besar dan garis batas aksen[cite: 5] */}
      <header className="flex flex-col gap-4 border-b border-brand-accent pb-8">
        <h1 className="text-5xl md:text-7xl font-bold uppercase tracking-tight">Creative Works.</h1>
        <p className="text-xl text-gray-400 max-w-2xl font-medium">
          A curated collection of motion graphics, visual effects, and cinematic storytelling.
        </p>
      </header>
      
      {/* Grid Sistem Layout: Bento-box style tanpa border[cite: 5] */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
        {projects && projects.length > 0 ? (
          projects.map((project) => (
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
          <p className="text-gray-500">No projects found.</p>
        )}
      </section>
    </main>
  );
}