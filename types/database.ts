// types/database.ts

export interface CreativeProject {
  id: string; // uuid
  title: string;
  slug: string;
  description: string;
  role: string;
  tools_used: string[]; // _text array
  video_url: string;
  thumbnail_url: string;
  is_featured: boolean;
  created_at: string; // timestamptz
}

export interface TechProject {
  id: string; // uuid
  title: string;
  slug: string;
  description: string;
  role: string;
  tech_stack: string[]; // _text array
  github_url: string;
  live_url: string;
  image_url: string;
  is_featured: boolean;
  created_at: string; // timestamptz
}