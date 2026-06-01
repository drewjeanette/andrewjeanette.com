import React, { useState } from 'react';
import { ArrowLeft, Trophy, CloudSun, MousePointerClick, ExternalLink } from 'lucide-react';
import QuizBowl from './tools/QuizBowl';

// Route to the standalone Weather App. Resolves to /portfolio/weatherapp/ in
// production and /weatherapp/ in dev, matching the Vite base path.
const WEATHER_APP_URL = `${import.meta.env.BASE_URL}weatherapp/`;

interface Project {
  id: string;
  name: string;
  description: string;
  icon: React.ReactNode;
}

const projects: Project[] = [
  {
    id: 'weather',
    name: "Weather App",
    description: "Real-time weather conditions and an interactive map using your location or any place you search. Fully responsive and installable as a mobile app.",
    icon: <CloudSun size={56} strokeWidth={1.5} />
  },
  {
    id: 'quiz',
    name: "Quiz Bowl",
    description: "Interactive study application for Business domains with 6 subject categories.",
    icon: <Trophy size={56} strokeWidth={1.5} />
  }
];

const WeatherAppDetail: React.FC = () => {
  const tools = [
    "HTML, CSS, JavaScript",
    "Bootstrap for layout and icons",
    "Open-Meteo (weather data)",
    "Nominatim (geolocation)",
    "Windy.com (weather map)",
  ];

  return (
    <div className="max-w-3xl mx-auto bg-white p-8 md:p-10 rounded-2xl border border-slate-200 shadow-md">
      <div className="flex items-center gap-4 mb-6">
        <div className="p-3 bg-blue-100 rounded-xl text-blue-600">
          <CloudSun size={32} />
        </div>
        <h2 className="text-3xl font-bold text-slate-900">Weather App</h2>
      </div>

      <div className="space-y-4 text-slate-600 leading-relaxed">
        <p>
          I built a real-time Weather App that uses your device's location, or any
          location you enter, and displays live weather conditions and an
          interactive weather map using free public APIs.
        </p>
        <p>
          It's fully responsive and works great on mobile and desktop devices. You
          can even save it to your home screen, and it'll launch like a native app
          complete with a custom weather icon I generated using Grok!
        </p>
      </div>

      <h3 className="font-bold text-slate-900 mt-8 mb-3">Some of the tools and APIs I used:</h3>
      <ul className="space-y-2 mb-8">
        {tools.map((tool) => (
          <li key={tool} className="flex items-center gap-3 text-slate-600">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0"></span>
            {tool}
          </li>
        ))}
      </ul>

      <a
        href={WEATHER_APP_URL}
        className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-7 py-3.5 text-base font-semibold text-white shadow-lg shadow-blue-600/20 transition-all hover:bg-blue-700 hover:-translate-y-0.5"
      >
        Open Weather App
        <ExternalLink size={18} />
      </a>
    </div>
  );
};

const ProjectsSection: React.FC = () => {
  const [activeProjectId, setActiveProjectId] = useState<string | null>(null);

  const renderActiveProject = () => {
    switch (activeProjectId) {
      case 'weather':
        return <WeatherAppDetail />;
      case 'quiz':
        return <QuizBowl />;
      default:
        return null;
    }
  };

  return (
    <div className="animate-fade-in min-h-[600px]">
      {!activeProjectId ? (
        /* Dashboard Grid View */
        <div>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Projects</h2>
            <p className="text-slate-500 text-lg max-w-2xl mx-auto">
              A collection of applications I've designed and built, spanning web
              development and interactive tools.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto px-4">
            {projects.map((project) => (
              <button
                key={project.id}
                onClick={() => setActiveProjectId(project.id)}
                className="group relative flex flex-col items-center justify-center p-6 bg-white rounded-2xl border border-slate-200 aspect-square hover:border-blue-400 hover:shadow-xl transition-all duration-300 text-center overflow-hidden"
              >
                {/* Background Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="relative z-10 flex flex-col items-center h-full justify-center">
                  <div className="mb-6 text-blue-500 group-hover:scale-110 transition-transform duration-300">
                    {project.icon}
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-700 transition-colors">{project.name}</h3>

                  <p className="text-slate-500 text-sm leading-relaxed mb-6 px-2 opacity-80 group-hover:opacity-100 transition-opacity line-clamp-3">
                    {project.description}
                  </p>

                  <div className="mt-auto opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 text-blue-600 font-bold text-xs uppercase tracking-widest flex items-center gap-2 border-b-2 border-blue-600 pb-1">
                    View Project <MousePointerClick size={14} />
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      ) : (
        /* Active Project Detail View */
        <div className="animate-fade-in-up">
          <div className="max-w-7xl mx-auto mb-8">
            <button
              onClick={() => setActiveProjectId(null)}
              className="flex items-center gap-2 text-slate-500 hover:text-blue-600 transition-colors font-bold uppercase tracking-wide text-sm group py-2 px-4 rounded-lg hover:bg-white border border-transparent hover:border-slate-200 w-fit"
            >
              <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
              Back to Projects
            </button>
          </div>

          {renderActiveProject()}
        </div>
      )}
    </div>
  );
};

export default ProjectsSection;
