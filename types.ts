export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  duration: string;
  location: string;
  description: string;
  skills: string[];
}

export interface EducationItem {
  school: string;
  degree: string;
  graduation: string;
  gpa: string;
  details: string[];
}

export enum Section {
  HOME = 'home',
  EDUCATION = 'education',
  EXPERIENCE = 'experience',
  PROJECTS = 'projects',
  CONTACT = 'contact'
}