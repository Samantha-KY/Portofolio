import { Experience, Achievement, Skill, Project } from '../types';

export const experiences: Experience[] = [
  {
    id: 1,
    role: 'AI Development Strategist',
    company: 'Current Company',
    period: 'Present',
    description: [
      'Leading AI integration initiatives and product development strategies',
      'Directing scrum meetings and managing agile development processes',
      'Collaborating with cross-functional teams to implement AI solutions'
    ]
  },
  {
    id: 2,
    role: 'Frontend Developer',
    company: 'Previous Company',
    period: 'Previous',
    description: [
      'Developed scalable web applications using React.js and Next.js',
      'Implemented responsive designs using TailwindCSS',
      'Led frontend development teams and mentored junior developers'
    ]
  }
];

export const achievements: Achievement[] = [
  {
    id: 1,
    title: 'Product Leaders Breakfast - Berlin',
    description: 'Participated in discussions about AI in product development',
    date: '2023'
  },
  {
    id: 2,
    title: 'NEAR Blockchain Event',
    description: 'Engaged in networking and blockchain technology discussions',
    date: '2023'
  }
];

export const skills: Skill[] = [
  { id: 1, name: 'Next.js', category: 'frontend' },
  { id: 2, name: 'React.js', category: 'frontend' },
  { id: 3, name: 'TypeScript', category: 'frontend' },
  { id: 4, name: 'TailwindCSS', category: 'frontend' },
  { id: 5, name: 'AI Integration', category: 'tools' },
  { id: 6, name: 'Agile Methodologies', category: 'soft-skills' },
  { id: 7, name: 'Team Leadership', category: 'soft-skills' },
  { id: 8, name: 'Product Ownership', category: 'soft-skills' }
];

export const projects: Project[] = [
  {
    id: 1,
    title: 'AI Tutor Platform',
    description: 'An innovative AI-powered tutoring platform that provides personalized learning experiences. Built with modern web technologies and integrated AI capabilities.',
    technologies: ['Next.js', 'React', 'AI Integration', 'TailwindCSS'],
    image: 'https://ai-tutor-frontend-1.vercel.app/og-image.jpg',
    link: 'https://ai-tutor-frontend-1.vercel.app/',
  },
  {
    id: 2,
    title: 'Lab3 Space',
    description: 'A highly interactive and animated website showcasing creative design and technical excellence. Features sophisticated animations and responsive layouts.',
    technologies: ['React', 'Animation', 'Responsive Design'],
    image: 'https://lab3.space/og-image.jpg',
    link: 'https://lab3.space/',
  }
];
