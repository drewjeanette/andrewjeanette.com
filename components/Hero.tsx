import React from 'react';
import { Section } from '../types';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { contacts } from './contactInfo';

interface HeroProps {
  navigateTo: (section: Section) => void;
}

const facts = [
  { label: 'Currently', value: 'IT Administrator', detail: 'City of Algood' },
  { label: 'Studying', value: 'Business IT, B.S.', detail: 'Tennessee Tech · Dec 2026' },
  { label: 'Based in', value: 'Cookeville, TN', detail: 'Open to opportunities' },
];

const skillGroups = [
  {
    title: 'Infrastructure',
    items: ['Windows Server', 'Network Administration', 'Microsoft 365', 'SQL Server / SSMS'],
  },
  {
    title: 'Development',
    items: ['React', 'JavaScript / TypeScript', 'Firebase', 'Git / GitHub'],
  },
  {
    title: 'Professional',
    items: ['Problem Solving', 'Technical Communication', 'Customer Service', 'Team Collaboration'],
  },
];

const Hero: React.FC<HeroProps> = ({ navigateTo }) => {
  return (
    <div className="animate-fade-in-up">
      {/* Intro */}
      <section className="flex flex-col-reverse gap-10 md:flex-row md:items-end md:justify-between">
        <div className="max-w-2xl">
          <p className="eyebrow mb-6 flex items-center gap-2">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-good opacity-60" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-good" />
            </span>
            IT Administrator · City of Algood
          </p>

          <h1 className="text-[2.75rem] font-semibold leading-[1.02] tracking-tightest text-fg sm:text-6xl md:text-7xl">
            Andrew Jeanette
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted md:text-xl md:leading-relaxed">
            I keep a city's systems, networks, and endpoints running — and build software on the side.
            Business IT student at Tennessee Tech with a minor in Computer Science.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <button onClick={() => navigateTo(Section.EXPERIENCE)} className="btn-primary group">
              View experience
              <ArrowRight size={15} className="transition-transform group-hover:translate-x-0.5" />
            </button>
            <button onClick={() => navigateTo(Section.PROJECTS)} className="btn-secondary">
              See projects
            </button>
          </div>
        </div>

        <img
          src={`${import.meta.env.BASE_URL}profile.png`}
          alt="Portrait of Andrew Jeanette"
          className="h-28 w-28 shrink-0 rounded-2xl border border-line object-cover md:h-40 md:w-40"
        />
      </section>

      {/* At a glance */}
      <section className="mt-20 grid grid-cols-1 overflow-hidden rounded-xl border border-line sm:grid-cols-3">
        {facts.map((fact, i) => (
          <div
            key={fact.label}
            className={`bg-canvas p-6 ${i > 0 ? 'border-t border-line sm:border-l sm:border-t-0' : ''}`}
          >
            <p className="eyebrow">{fact.label}</p>
            <p className="mt-3 text-[15px] font-medium text-fg">{fact.value}</p>
            <p className="mt-0.5 text-sm text-muted">{fact.detail}</p>
          </div>
        ))}
      </section>

      {/* Skills */}
      <section className="mt-24 grid gap-10 md:grid-cols-[200px_1fr]">
        <div>
          <p className="eyebrow">Skills</p>
          <h2 className="mt-3 text-xl font-semibold tracking-tight text-fg">What I work with</h2>
        </div>
        <div className="grid gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-3">
          {skillGroups.map((group) => (
            <div key={group.title} className="bg-canvas p-6">
              <h3 className="text-sm font-medium text-fg">{group.title}</h3>
              <ul className="mt-4 space-y-2.5">
                {group.items.map((item) => (
                  <li key={item} className="flex items-center gap-2.5 text-sm text-muted">
                    <span className="h-1 w-1 rounded-full bg-subtle" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section className="mt-24 grid gap-10 md:grid-cols-[200px_1fr]">
        <div>
          <p className="eyebrow">Contact</p>
          <h2 className="mt-3 text-xl font-semibold tracking-tight text-fg">Get in touch</h2>
        </div>
        <ul className="divide-y divide-line border-y border-line">
          {contacts.map((c) => (
            <li key={c.label}>
              <a
                href={c.href}
                target={c.href.startsWith('http') ? '_blank' : undefined}
                rel={c.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="group flex items-center justify-between gap-4 py-4"
              >
                <span className="w-24 shrink-0 text-sm text-subtle">{c.label}</span>
                <span className="flex-1 truncate text-sm text-fg sm:text-[15px]">{c.value}</span>
                <ArrowUpRight size={16} className="shrink-0 text-subtle transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-fg" />
              </a>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default Hero;
