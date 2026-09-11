import { notFound } from "next/navigation";
import { supabase } from "@/lib/supabase/client";
import Link from "next/link";

export const revalidate = 60;

// 1. Ubah tipe params menjadi Promise
export default async function TechProjectDetail({ params }: { params: Promise<{ slug: string }> }) {
  // 2. Lakukan await pada params sebelum mengambil nilai slug
  const { slug } = await params;

  const { data: project } = await supabase
    .from('tech_projects')
    .select('*')
    .eq('slug', slug) // 3. Gunakan variabel slug yang sudah diekstrak
    .single();

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen pt-32 pb-24 px-6 md:px-12 max-w-5xl mx-auto w-full flex flex-col gap-12">
      <Link href="/techs" className="text-gray-400 hover:text-brand-white transition-colors font-medium text-sm">
        ← Back to Tech Architecture
      </Link>

      <header className="flex flex-col gap-6">
        <h1 className="text-4xl md:text-6xl font-bold uppercase tracking-tight">{project.title}</h1>
        
        <div className="flex flex-wrap items-center gap-3 text-sm font-medium">
          <span className="bg-brand-white text-brand-black px-4 py-1.5 rounded-full">{project.role}</span>
          <span className="text-brand-accent">|</span>
          {project.tech_stack.map((tech: string) => (
            <span key={tech} className="border border-brand-accent text-gray-300 px-4 py-1.5 rounded-full">
              {tech}
            </span>
          ))}
        </div>
      </header>

      <div className="w-full aspect-video bg-brand-accent rounded-sm overflow-hidden">
        <img 
          src={project.image_url} 
          alt={project.title} 
          className="w-full h-full object-cover" 
        />
      </div>

      <article className="prose prose-invert max-w-3xl text-gray-300 text-lg md:text-xl leading-relaxed font-medium">
        <p>{project.description}</p>
      </article>

      <div className="flex flex-col sm:flex-row gap-4 pt-8 border-t border-brand-accent">
        {project.live_url && (
          <a href={project.live_url} target="_blank" rel="noopener noreferrer" className="bg-brand-white text-brand-black px-8 py-3.5 rounded-full font-semibold hover:bg-gray-200 transition-colors text-center">
            Visit Live Project
          </a>
        )}
        {project.github_url && (
          <a href={project.github_url} target="_blank" rel="noopener noreferrer" className="border border-brand-accent px-8 py-3.5 rounded-full font-semibold hover:bg-brand-accent transition-colors text-center">
            View Source Code
          </a>
        )}
      </div>
    </main>
  );
}