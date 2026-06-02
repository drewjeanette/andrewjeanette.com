import React from 'react';
import { Section } from '../types';
import { ArrowRight, Linkedin, Mail, Phone, MapPin, Target } from 'lucide-react';

interface HeroProps {
  navigateTo: (section: Section) => void;
}

const technicalSkills = [
  'SQL Server Management Studio',
  'Windows Server',
  'Microsoft 365',
  'Git / GitHub',
  'Firebase',
  'React',
  'JavaScript / TypeScript',
  'Network Administration',
];

const softSkills = [
  'Problem Solving',
  'Critical Thinking',
  'Communication',
  'Customer Service',
  'Team Collaboration',
  'Adaptability',
];

const Hero: React.FC<HeroProps> = ({ navigateTo }) => {
  return (
    <div className="animate-fade-in">
      {/* Intro */}
      <div className="flex flex-col-reverse md:flex-row items-center gap-12 py-12 md:py-16">
        <div className="flex-1 space-y-6 text-center md:text-left">
          <div className="inline-block px-4 py-1.5 bg-blue-50 dark:bg-blue-950/50 border border-blue-100 dark:border-blue-900 text-blue-600 dark:text-blue-300 font-bold rounded-full text-sm shadow-sm">
            IT Administrator • City of Algood
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white leading-tight">
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">Andrew Jeanette</span>
          </h1>

          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 leading-relaxed font-light">
            I am a Business Information Technology major with a Computer Science minor at Tennessee
            Technological University, currently serving as the IT Administrator for the City of Algood.
            I specialize in bridging business strategy and technical implementation across system,
            network, and security administration.
          </p>

          <div className="pt-2 flex flex-wrap gap-4 justify-center md:justify-start">
            <button
              onClick={() => navigateTo(Section.EXPERIENCE)}
              className="group flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3.5 px-7 rounded-lg transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
            >
              View My Experience
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>

            <a
              href="https://www.linkedin.com/in/andrew-jeanette"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 hover:border-blue-300 dark:hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400 text-slate-700 dark:text-slate-200 font-medium py-3.5 px-7 rounded-lg transition-all shadow-sm"
            >
              <Linkedin size={20} />
              LinkedIn
            </a>
          </div>

          {/* Contact row */}
          <div className="pt-4 flex flex-wrap gap-x-6 gap-y-3 justify-center md:justify-start text-sm text-slate-500 dark:text-slate-400">
            <a href="mailto:andrewjeanettebusiness@gmail.com" className="flex items-center gap-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              <Mail size={16} /> andrewjeanettebusiness@gmail.com
            </a>
            <a href="tel:+16157666373" className="flex items-center gap-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              <Phone size={16} /> (615) 766-6373
            </a>
            <span className="flex items-center gap-2">
              <MapPin size={16} /> Cookeville, TN
            </span>
          </div>
        </div>

        {/* Profile image */}
        <div className="shrink-0">
          <div className="relative">
            <div className="absolute -inset-3 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-3xl opacity-20 blur-lg"></div>
            <img
              src={`${import.meta.env.BASE_URL}profile.png`}
              alt="Andrew Jeanette"
              className="relative w-48 h-48 md:w-60 md:h-60 rounded-3xl object-cover border-4 border-white dark:border-slate-700 shadow-xl"
            />
          </div>
        </div>
      </div>

      {/* Objective */}
      <div className="bg-gradient-to-br from-blue-600 to-indigo-600 dark:from-blue-700 dark:to-indigo-800 rounded-2xl p-8 md:p-10 text-white shadow-lg my-8">
        <div className="flex items-start gap-4">
          <div className="p-2.5 bg-white/15 rounded-lg shrink-0">
            <Target size={28} />
          </div>
          <div>
            <h2 className="text-sm font-bold uppercase tracking-widest text-blue-100 mb-2">Career Objective</h2>
            <p className="text-lg md:text-xl leading-relaxed font-light">
              Seeking a full-time position as a System Administrator in Middle or East Tennessee
              beginning Spring 2027, where I can apply hands-on infrastructure, network, and security
              experience to keep organizations running securely and efficiently.
            </p>
          </div>
        </div>
      </div>

      {/* Skills */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-12">
        <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-8 shadow-md hover:shadow-lg transition-shadow">
          <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-5 border-l-4 border-blue-600 pl-3">Technical Skills</h3>
          <div className="flex flex-wrap gap-2">
            {technicalSkills.map(skill => (
              <span key={skill} className="px-3 py-1.5 bg-blue-50 dark:bg-blue-950/50 text-blue-700 dark:text-blue-300 border border-blue-100 dark:border-blue-900 text-sm rounded-full font-semibold">
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-8 shadow-md hover:shadow-lg transition-shadow">
          <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-5 border-l-4 border-indigo-500 pl-3">Professional Skills</h3>
          <div className="flex flex-wrap gap-2">
            {softSkills.map(skill => (
              <span key={skill} className="px-3 py-1.5 bg-slate-50 dark:bg-slate-700 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-600 text-sm rounded-full font-semibold">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
