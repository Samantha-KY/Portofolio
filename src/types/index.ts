export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  image: string;
  link?: string;
  github?: string;
}

export interface Experience {
  id: number;
  role: string;
  company: string;
  period: string;
  description: string[];
}

export interface Achievement {
  id: number;
  title: string;
  description: string;
  date: string;
}

export interface Skill {
  id: number;
  name: string;
  category: 'frontend' | 'backend' | 'tools' | 'soft-skills';
}
