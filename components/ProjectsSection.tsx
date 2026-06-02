import React, { useState } from 'react';
import {
  ArrowLeft, ArrowRight, ExternalLink, Trophy, CloudSun,
  Globe, Smartphone, MapPin, Code, BookOpen, CheckCircle, BarChart,
  Flag, Boxes, Calendar, MousePointerClick, Camera, Filter, Zap, FileSpreadsheet,
} from 'lucide-react';
import QuizBowl from './tools/QuizBowl';

// Route to the standalone Weather App. Resolves to /portfolio/weatherapp/ in
// production and /weatherapp/ in dev, matching the Vite base path.
const WEATHER_APP_URL = `${import.meta.env.BASE_URL}weatherapp/`;

interface Feature {
  icon: React.ReactNode;
  text: string;
}

interface Project {
  id: string;
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  paragraphs: string[];
  techStackLabel: string;
  techStackIcon: React.ReactNode;
  techStack: string[];
  features: Feature[];
  cta?: { label: string } & ({ type: 'link'; href: string } | { type: 'launch' });
}

const projects: Project[] = [
  {
    id: 'daily-golf',
    title: 'Daily Golf',
    subtitle: 'Elco Dev, LLC · Jan 2026 – May 2026',
    icon: <Flag size={32} />,
    paragraphs: [
      'Developed a 3D mini-golf game built in Unity 6 and C# that offers a new, globally synchronized challenge every day. Powered by a daily seed system, the course layout changes every 24 hours, ensuring all players worldwide tackle the exact same unique puzzle. The core gameplay features a custom drag-and-release shooting mechanic with visual trajectory rendering, grounded by highly tuned arcade physics that utilize custom materials to simulate realistic turf friction and kinetic wall ricochets. To enhance the player experience, I engineered a dual-camera system allowing seamless switching between a dynamic ball-tracking view and a mathematically bounded free-fly camera for level scouting. Additionally, I implemented a responsive user interface that handles real-time stroke tracking, a midnight countdown timer, and an end-of-match summary screen.',
    ],
    techStackLabel: 'Tech Stack',
    techStackIcon: <Code size={18} className="text-blue-500 dark:text-blue-400" />,
    techStack: ['Unity 6', 'C#', 'Arcade Physics', 'Custom Materials', 'UI Design'],
    features: [
      { icon: <Calendar size={14} />, text: 'Daily Global Synced Course' },
      { icon: <MousePointerClick size={14} />, text: 'Drag-and-Release Shooting' },
      { icon: <Camera size={14} />, text: 'Dual-Camera System' },
    ],
  },
  {
    id: 'inventory',
    title: 'Web-Based Inventory Management System',
    subtitle: 'Elco Dev, LLC · May 2025 – Jul 2025',
    icon: <Boxes size={32} />,
    paragraphs: [
      'Designed and developed a web-based inventory platform to replace a manual workflow where employees printed Excel spreadsheets to track inventory. The system provides real-time access to inventory data with advanced filtering, fast search functionality, and multiple display options including a paginated table view and an infinite-scroll grid view.',
      'Implemented database indexing and server-side caching to dramatically improve performance, enabling near-instant data loading and responsive filtering across the entire dataset. The platform also allows users to export filtered inventory results directly to Excel, improving reporting and workflow efficiency.',
      'For demonstration purposes, the system was recreated locally using mock data generated with Faker to safely showcase functionality without exposing company data.',
    ],
    techStackLabel: 'Tech Stack',
    techStackIcon: <Globe size={18} className="text-blue-500 dark:text-blue-400" />,
    techStack: ['HTML5', 'CSS', 'JavaScript', 'Database Indexing', 'Server-Side Caching', 'Excel Export'],
    features: [
      { icon: <Filter size={14} />, text: 'Advanced Filtering & Search' },
      { icon: <Zap size={14} />, text: 'Indexing + Caching Performance' },
      { icon: <FileSpreadsheet size={14} />, text: 'Excel Export' },
    ],
  },
  {
    id: 'weather',
    title: 'Real-Time Weather App',
    subtitle: 'Personal Project',
    icon: <CloudSun size={32} />,
    paragraphs: [
      "I built a real-time Weather App that uses your device's location, or any location you enter, and displays live weather conditions and an interactive weather map using free public APIs.",
      "It's fully responsive and works great on mobile and desktop devices. You can even save it to your home screen, and it'll launch like a native app complete with a custom weather icon I generated using Grok!",
    ],
    techStackLabel: 'Tech Stack & APIs',
    techStackIcon: <Globe size={18} className="text-blue-500 dark:text-blue-400" />,
    techStack: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'Open-Meteo', 'Nominatim', 'Windy.com'],
    features: [
      { icon: <MapPin size={14} />, text: 'Geolocation Support' },
      { icon: <Smartphone size={14} />, text: 'PWA / Native-like Feel' },
      { icon: <CloudSun size={14} />, text: 'Live Weather Mapping' },
    ],
    cta: { type: 'link', href: WEATHER_APP_URL, label: 'Open Weather App' },
  },
  {
    id: 'quiz',
    title: 'Quiz Bowl',
    subtitle: 'Interactive Study Tool',
    icon: <Trophy size={32} />,
    paragraphs: [
      'An interactive study application for business domains, spanning six subject categories from App Development and Finance to Marketing and Management.',
      'Each category offers a ten-question quiz with instant feedback, answer reveals, and live scoring to help reinforce key concepts.',
    ],
    techStackLabel: 'Tech Stack',
    techStackIcon: <Code size={18} className="text-blue-500 dark:text-blue-400" />,
    techStack: ['React', 'TypeScript', 'Tailwind CSS'],
    features: [
      { icon: <BookOpen size={14} />, text: '6 Subject Categories' },
      { icon: <CheckCircle size={14} />, text: 'Instant Feedback & Scoring' },
      { icon: <BarChart size={14} />, text: 'Live Progress Tracking' },
    ],
    cta: { type: 'launch', label: 'Launch Quiz Bowl' },
  },
];

const ProjectCard: React.FC<{ project: Project; onLaunch: () => void }> = ({ project, onLaunch }) => (
  <div className="bg-white dark:bg-slate-800 p-8 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md hover:border-blue-300 dark:hover:border-blue-600 transition-all">
    <div className="flex flex-col md:flex-row gap-8">
      <div className="flex-1 space-y-4">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-blue-100 dark:bg-blue-900/50 rounded-lg text-blue-600 dark:text-blue-300">
            {project.icon}
          </div>
          <div>
            <h4 className="text-2xl font-bold text-slate-900 dark:text-white">{project.title}</h4>
            <span className="text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wide">{project.subtitle}</span>
          </div>
        </div>

        {project.paragraphs.map((p, i) => (
          <p key={i} className={`text-slate-600 dark:text-slate-300 leading-relaxed${i === 0 ? ' text-lg' : ''}`}>{p}</p>
        ))}

        {project.cta && (project.cta.type === 'link' ? (
          <a
            href={project.cta.href}
            className="inline-flex items-center gap-2 rounded-lg bg-blue-600 hover:bg-blue-700 px-6 py-3 text-base font-semibold text-white shadow-md shadow-blue-600/20 transition-all hover:-translate-y-0.5"
          >
            {project.cta.label}
            <ExternalLink size={18} />
          </a>
        ) : (
          <button
            onClick={onLaunch}
            className="group inline-flex items-center gap-2 rounded-lg bg-blue-600 hover:bg-blue-700 px-6 py-3 text-base font-semibold text-white shadow-md shadow-blue-600/20 transition-all hover:-translate-y-0.5"
          >
            {project.cta.label}
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>
        ))}
      </div>

      <div className="md:w-1/3 bg-slate-50 dark:bg-slate-900/50 rounded-xl p-6 border border-slate-100 dark:border-slate-700">
        <h5 className="font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
          {project.techStackIcon} {project.techStackLabel}
        </h5>
        <div className="flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <span key={tech} className="bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-200 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-600 text-sm font-bold shadow-sm">
              {tech}
            </span>
          ))}
        </div>

        <h5 className="font-bold text-slate-900 dark:text-white mt-6 mb-4 flex items-center gap-2">
          <CheckCircle size={18} className="text-blue-500 dark:text-blue-400" /> Key Features
        </h5>
        <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-300">
          {project.features.map((f) => (
            <li key={f.text} className="flex items-center gap-2">{f.icon} {f.text}</li>
          ))}
        </ul>
      </div>
    </div>
  </div>
);

const ProjectsSection: React.FC = () => {
  const [activeProjectId, setActiveProjectId] = useState<string | null>(null);

  if (activeProjectId === 'quiz') {
    return (
      <div className="animate-fade-in-up min-h-[600px]">
        <div className="max-w-7xl mx-auto mb-8">
          <button
            onClick={() => setActiveProjectId(null)}
            className="flex items-center gap-2 text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-bold uppercase tracking-wide text-sm group py-2 px-4 rounded-lg hover:bg-white dark:hover:bg-slate-800 border border-transparent hover:border-slate-200 dark:hover:border-slate-700 w-fit"
          >
            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
            Back to Projects
          </button>
        </div>
        <QuizBowl />
      </div>
    );
  }

  return (
    <div className="animate-fade-in min-h-[600px]">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">Projects</h2>
        <p className="text-slate-500 dark:text-slate-400 text-lg max-w-2xl mx-auto">
          A collection of applications I've designed and built, spanning web development and interactive tools.
        </p>
      </div>

      <div className="space-y-8 max-w-5xl mx-auto">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} onLaunch={() => setActiveProjectId(project.id)} />
        ))}
      </div>
    </div>
  );
};

export default ProjectsSection;
