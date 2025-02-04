export type Project = {
  title: string;
  description: string;
  icon: React.ReactNode;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
};

export type Experience = {
  company: string;
  role: string;
  period: string;
  description: string;
  technologies: string[];
};