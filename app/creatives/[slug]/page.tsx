import { notFound } from "next/navigation";
import { supabase } from "@/lib/supabase/client";
import Link from "next/link";

export const revalidate = 60;

// 1. Ubah tipe params menjadi Promise
export default async function CreativeProjectDetail({ params }: { params: Promise<{ slug: string }> }) {
  // 2. Lakukan await pada params
  const { slug } = await params;

  const { data: project } = await supabase
    .from('creative_projects')
    .select('*')
    .eq('slug', slug) // 3. Gunakan variabel slug
    .single();

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen pt-32 pb-24 px-6 md:px-12 max-w-5xl mx-auto w-full flex flex-col gap-12">
      <Link href="/creatives" className="text-gray-400 hover:text-brand-white transition-colors font-medium text-sm">
        ← Back to Creatives
      </Link>

      <header className="flex flex-col gap-6">
        <h1 className="text-4xl md:text-6xl font-bold uppercase tracking-tight">{project.title}</h1>
        
        <div className="flex flex-wrap items-center gap-3 text-sm font-medium">
          <span className="bg-brand-white text-brand-black px-4 py-1.5 rounded-full">{project.role}</span>
          <span className="text-brand-accent">|</span>
          {project.tools_used.map((tool: string) => (
            <span key={tool} className="border border-brand-accent text-gray-300 px-4 py-1.5 rounded-full">
              {tool}
            </span>
          ))}
        </div>
      </header>

      <div className="w-full aspect-video bg-brand-accent rounded-sm overflow-hidden relative">
        {project.video_url ? (
          <iframe 
            src={project.video_url} 
            className="absolute top-0 left-0 w-full h-full"
            allow="autoplay; fullscreen; picture-in-picture" 
            allowFullScreen
          />
        ) : (
          <img 
            src={project.thumbnail_url} 
            alt={project.title} 
            className="w-full h-full object-cover" 
          />
        )}
      </div>

      <article className="prose prose-invert max-w-3xl text-gray-300 text-lg md:text-xl leading-relaxed font-medium">
        <p>{project.description}</p>
      </article>
    </main>
  );
}