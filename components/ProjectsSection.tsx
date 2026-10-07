import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react';
import QuizBowl from './tools/QuizBowl';
import SectionHeader from './SectionHeader';

// Route to the standalone Weather App. Resolves to /portfolio/weatherapp/ in
// production and /weatherapp/ in dev, matching the Vite base path.
const WEATHER_APP_URL = `${import.meta.env.BASE_URL}weatherapp/`;

interface Project {
  id: string;
  title: string;
  subtitle: string;
  paragraphs: string[];
  techStackLabel: string;
  techStack: string[];
  features: string[];
  cta?: { label: string } & ({ type: 'link'; href: string } | { type: 'launch' });
}

const projects: Project[] = [
  {
    id: 'daily-golf',
    title: 'Daily Golf',
    subtitle: 'Elco Dev, LLC · Jan 2026 – May 2026',
    paragraphs: [
      'Developed a 3D mini-golf game built in Unity 6 and C# that offers a new, globally synchronized challenge every day. Powered by a daily seed system, the course layout changes every 24 hours, ensuring all players worldwide tackle the exact same unique puzzle.',
      'The core gameplay features a custom drag-and-release shooting mechanic with visual trajectory rendering, grounded by highly tuned arcade physics that utilize custom materials to simulate realistic turf friction and kinetic wall ricochets. To enhance the player experience, I engineered a dual-camera system allowing seamless switching between a dynamic ball-tracking view and a mathematically bounded free-fly camera for level scouting. Additionally, I implemented a responsive user interface that handles real-time stroke tracking, a midnight countdown timer, and an end-of-match summary screen.',
    ],
    techStackLabel: 'Stack',
    techStack: ['Unity 6', 'C#', 'Arcade Physics', 'Custom Materials', 'UI Design'],
    features: [
      'Daily Global Synced Course',
      'Drag-and-Release Shooting',
      'Dual-Camera System',
    ],
  },
  {
    id: 'inventory',
    title: 'Web-Based Inventory Management System',
    subtitle: 'Elco Dev, LLC · May 2025 – Jul 2025',
    paragraphs: [
      'Designed and developed a web-based inventory platform to replace a manual workflow where employees printed Excel spreadsheets to track inventory. The system provides real-time access to inventory data with advanced filtering, fast search functionality, and multiple display options including a paginated table view and an infinite-scroll grid view.',
      'Implemented database indexing and server-side caching to dramatically improve performance, enabling near-instant data loading and responsive filtering across the entire dataset. The platform also allows users to export filtered inventory results directly to Excel, improving reporting and workflow efficiency.',
      'For demonstration purposes, the system was recreated locally using mock data generated with Faker to safely showcase functionality without exposing company data.',
    ],
    techStackLabel: 'Stack',
    techStack: ['HTML5', 'CSS', 'JavaScript', 'Database Indexing', 'Server-Side Caching', 'Excel Export'],
    features: [
      'Advanced Filtering & Search',
      'Indexing + Caching Performance',
      'Excel Export',
    ],
  },
  {
    id: 'weather',
    title: 'Real-Time Weather App',
    subtitle: 'Personal Project',
    paragraphs: [
      "I built a real-time Weather App that uses your device's location, or any location you enter, and displays live weather conditions and an interactive weather map using free public APIs.",
      "It's fully responsive and works great on mobile and desktop devices. You can even save it to your home screen, and it'll launch like a native app complete with a custom weather icon I generated using Grok!",
    ],
    techStackLabel: 'Stack & APIs',
    techStack: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'Open-Meteo', 'Nominatim', 'Windy.com'],
    features: [
      'Geolocation Support',
      'PWA / Native-like Feel',
      'Live Weather Mapping',
    ],
    cta: { type: 'link', href: WEATHER_APP_URL, label: 'Open Weather App' },
  },
  {
    id: 'quiz',
    title: 'Quiz Bowl',
    subtitle: 'Interactive Study Tool',
    paragraphs: [
      'An interactive study application for business domains, spanning six subject categories from App Development and Finance to Marketing and Management.',
      'Each category offers a ten-question quiz with instant feedback, answer reveals, and live scoring to help reinforce key concepts.',
    ],
    techStackLabel: 'Stack',
    techStack: ['React', 'TypeScript', 'Tailwind CSS'],
    features: [
      '6 Subject Categories',
      'Instant Feedback & Scoring',
      'Live Progress Tracking',
    ],
    cta: { type: 'launch', label: 'Launch Quiz Bowl' },
  },
];

const ProjectCard: React.FC<{ project: Project; index: number; onLaunch: () => void }> = ({ project, index, onLaunch }) => (
  <article className="panel overflow-hidden transition-colors hover:border-line-strong">
    <header className="flex items-start justify-between gap-6 border-b border-line px-6 py-5 md:px-8">
      <div>
        <h2 className="text-lg font-semibold tracking-tight text-fg">{project.title}</h2>
        <p className="mt-1 font-mono text-xs text-subtle">{project.subtitle}</p>
      </div>
      <span className="font-mono text-xs text-subtle">{String(index + 1).padStart(2, '0')}</span>
    </header>

    <div className="grid md:grid-cols-[1fr_260px]">
      <div className="space-y-4 px-6 py-6 md:px-8 md:py-7">
        {project.paragraphs.map((p, i) => (
          <p key={i} className="text-[15px] leading-7 text-muted">{p}</p>
        ))}

        {project.cta && (
          <div className="pt-2">
            {project.cta.type === 'link' ? (
              <a href={project.cta.href} className="btn-secondary group">
                {project.cta.label}
                <ArrowUpRight size={15} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            ) : (
              <button onClick={onLaunch} className="btn-secondary group">
                {project.cta.label}
                <ArrowRight size={15} className="transition-transform group-hover:translate-x-0.5" />
              </button>
            )}
          </div>
        )}
      </div>

      <aside className="space-y-6 border-t border-line bg-surface px-6 py-6 md:border-l md:border-t-0 md:px-7 md:py-7">
        <div>
          <h3 className="eyebrow mb-3">{project.techStackLabel}</h3>
          <div className="flex flex-wrap gap-1.5">
            {project.techStack.map((tech) => (
              <span key={tech} className="tag bg-canvas">{tech}</span>
            ))}
          </div>
        </div>
        <div>
          <h3 className="eyebrow mb-3">Highlights</h3>
          <ul className="space-y-2">
            {project.features.map((f) => (
              <li key={f} className="flex gap-2.5 text-sm text-muted">
                <span className="mt-[9px] h-px w-3 shrink-0 bg-subtle" aria-hidden="true" />
                {f}
              </li>
            ))}
          </ul>
        </div>
      </aside>
    </div>
  </article>
);

const ProjectsSection: React.FC = () => {
  const [activeProjectId, setActiveProjectId] = useState<string | null>(null);

  if (activeProjectId === 'quiz') {
    return (
      <div className="animate-fade-in-up">
        <button
          onClick={() => setActiveProjectId(null)}
          className="group mb-10 inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-fg"
        >
          <ArrowLeft size={15} className="transition-transform group-hover:-translate-x-0.5" />
          All projects
        </button>
        <QuizBowl />
      </div>
    );
  }

  return (
    <div className="animate-fade-in-up">
      <SectionHeader
        eyebrow="Projects"
        title="Selected work"
        description="Applications I've designed and built — from client tooling to games and study aids."
      />

      <div className="space-y-6">
        {projects.map((project, i) => (
          <ProjectCard key={project.id} project={project} index={i} onLaunch={() => setActiveProjectId(project.id)} />
        ))}
      </div>
    </div>
  );
};

export default ProjectsSection;
