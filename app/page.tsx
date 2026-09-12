import Hero from "@/components/Hero";
import ProjectCard from "@/components/ProjectCard";
import ScrollReveal from "@/components/ScrollReveal";
import SkillTag from "@/components/SkillTag"; 
import Timeline from "@/components/Timeline";
import TimelineBackground from "@/components/TimelineBackground"; 
import { supabase } from "@/lib/supabase/client";
import Link from "next/link";

export const revalidate = 60;

export default async function HomePage() {
  const [creativesRes, techsRes] = await Promise.all([
    supabase.from('creative_projects').select('*').eq('is_featured', true).limit(2),
    supabase.from('tech_projects').select('*').eq('is_featured', true).limit(2)
  ]);

  const featuredCreatives = creativesRes.data || [];
  const featuredTechs = techsRes.data || [];

  return (
    <main className="flex flex-col w-full">
      <Hero />

      {/* --- ABOUT SECTION --- */}
      {/* Menghapus border-t dan menggunakan py-40 untuk ruang kosong masif[cite: 4] */}
      <section className="px-6 md:px-12 py-40 w-full max-w-7xl mx-auto flex flex-col gap-32">
        
        <ScrollReveal>
          <div className="flex flex-col md:flex-row gap-12 md:gap-24 items-start">
            <h2 className="text-5xl md:text-7xl font-bold uppercase tracking-tight flex-1">
              <span className="text-4xl md:text-5xl font-normal lowercase italic">the -</span>
                <br/>Architect<br/>
              <span className="text-brand-accent">&</span> Director.
            </h2>
            <div className="flex-1 flex flex-col gap-6 text-lg text-gray-400 font-medium">
              <p>
                Based in Surabaya, Indonesia, I operate at the exact intersection of cinematic visual storytelling and scalable software architecture.
              </p>
              <p>
                As a dual-threat professional, I don't just design how things look—I build how they function. From high-end motion graphics to headless web systems, I bring ideas to life with absolute precision.
              </p>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            
            <div className="flex flex-col gap-6">
              <h3 className="text-2xl font-bold font-display uppercase tracking-tight">Creative Arsenal</h3>
              <ul className="flex flex-wrap gap-3">
                {['After Effects', 'Premiere Pro', 'Photoshop', 'CapCut', 'Canva'].map(tool => (
                  <SkillTag key={tool} name={tool} />
                ))}
              </ul>
            </div>
            
            <div className="flex flex-col gap-6">
              <h3 className="text-2xl font-bold font-display uppercase tracking-tight">Engineering Stack</h3>
              <ul className="flex flex-wrap gap-3">
                {['Next.js', 'Laravel', 'Supabase', 'Redis', 'Docker', 'Streamlit'].map(tech => (
                  <SkillTag key={tech} name={tech} />
                ))}
              </ul>
            </div>
            
          </div>
        </ScrollReveal>
      </section>

{/* --- CHANGELOG / TIMELINE SECTION --- */}
      <section className="relative px-6 md:px-12 py-40 w-full flex flex-col md:flex-row gap-12 md:gap-24 items-start">
        
        {/* Latar Belakang Animasi (z-index: -10) */}
        <TimelineBackground />
        {/* Overlay Atas: Menghapus batas keras dengan About Section */}
        <div className="absolute top-0 left-0 w-full h-48 md:h-64 bg-gradient-to-b from-brand-black to-transparent pointer-events-none z-0"></div>
        
        {/* Overlay Bawah: Menghapus batas keras dengan Showcase Section */}
        <div className="absolute bottom-0 left-0 w-full h-48 md:h-64 bg-gradient-to-t from-brand-black to-transparent pointer-events-none z-0"></div>

        {/* Konten Timeline (z-index: 10 agar berada di atas overlay hitam) */}
        <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row gap-12 md:gap-24 items-start relative z-10">
          
          <ScrollReveal className="md:w-1/3 md:sticky md:top-32">
            <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tight flex flex-col gap-2">
              <span className="text-brand-accent italic font-normal lowercase text-3xl">changelog</span>
              Journey.
            </h2>
            <p className="mt-6 text-gray-400 font-medium">
              The evolution of a dual-threat professional.
            </p>
          </ScrollReveal>

          <div className="md:w-2/3 mt-8 md:mt-0">
            <Timeline />
          </div>

        </div>
      </section>

      {/* --- SHOWCASE SECTION --- */}
      {/* Padding bottom (pb) masif agar tidak menabrak footer */}
      <section className="px-6 md:px-12 py-40 w-full max-w-7xl mx-auto flex flex-col gap-40">
        
        <ScrollReveal>
          <div className="flex flex-col gap-12">
            <div className="flex justify-between items-end pb-6">
              <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tight">Selected Masterpieces.</h2>
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
        </ScrollReveal>

        <ScrollReveal>
          <div className="flex flex-col gap-12">
            <div className="flex justify-between items-end pb-6">
              <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tight">Tech Works.</h2>
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
        </ScrollReveal>

      </section>
    </main>
  );
}