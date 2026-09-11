import { Metadata } from "next";
import ProjectCard from "@/components/ProjectCard";
import { supabase } from "@/lib/supabase/client";

export const metadata: Metadata = {
  title: "Tech Architecture | ThorWorks",
  description: "Explore robust web, mobile, and game development projects engineered by Nazheef Thareq Asywal.",
};

export const revalidate = 60;

export default async function TechsPage() {
  const { data: projects } = await supabase
    .from('tech_projects')
    .select('*')
    .order('created_at', { ascending: false });

  return (
    <main className="min-h-screen pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto w-full flex flex-col gap-16">
      <header className="flex flex-col gap-4 border-b border-brand-accent pb-8">
        <h1 className="text-5xl md:text-7xl font-bold uppercase tracking-tight">Tech Architecture.</h1>
        <p className="text-xl text-gray-400 max-w-2xl font-medium">
          Scalable codebases, seamless fullstack web applications, and interactive systems.
        </p>
      </header>
      
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
        {projects && projects.length > 0 ? (
          projects.map((project) => (
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
          <p className="text-gray-500">No projects found.</p>
        )}
      </section>
    </main>
  );
}