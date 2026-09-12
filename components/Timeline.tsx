import ScrollReveal from "./ScrollReveal";

const changelogData = [
  { 
    year: "2019", 
    description: "Self-taught video editing and motion graphic." 
  },
  { 
    year: "2022", 
    description: "Started career as a creatives freelancer." 
  },
  { 
    year: "2023", 
    description: "Got into Computer Science in college." 
  },
  { 
    year: "2025", 
    description: "Started career as a fullstack freelancer." 
  },
];

export default function Timeline() {
  return (
    // Garis vertikal tipis di sebelah kiri sebagai tulang punggung timeline
    <div className="relative border-l border-brand-accent/30 ml-4 md:ml-6 py-4">
      {changelogData.map((item, index) => (
        // Memanfaatkan ScrollReveal dengan efek stagger (jeda berurutan) berdasarkan index
        <ScrollReveal key={item.year} delay={index * 0.15} className="mb-16 last:mb-0 relative pl-8 md:pl-12">
          
          {/* Titik indikator menyala (glowing dot) khas Aceternity UI */}
          <div className="absolute -left-[5px] top-2.5 h-2.5 w-2.5 rounded-full bg-brand-accent shadow-[0_0_12px_#096DFF]" />
          
          <div className="flex flex-col gap-2">
            <h3 className="text-3xl md:text-4xl font-display font-bold tracking-tight text-brand-white">
              {item.year}
            </h3>
            <p className="text-lg text-gray-400 font-medium max-w-md">
              {item.description}
            </p>
          </div>

        </ScrollReveal>
      ))}
    </div>
  );
}