import React from 'react';
import { EducationItem } from '../types';
import SectionHeader from './SectionHeader';

const educationData: EducationItem[] = [
  {
    school: "Tennessee Technological University",
    degree: "Bachelor of Science in Business Administration",
    graduation: "December 2026",
    gpa: "3.55",
    details: [
      "Major: Business Information Technology",
      "Minor: Computer Science",
      "Interests: Network Administration, Database Management, System Security"
    ]
  }
];

const certifications = [
  { name: 'Introduction to Linux', issuer: 'LinkedIn', date: 'Sep 2025' },
  { name: 'Advent of Cyber 2024', issuer: 'TryHackMe', date: 'Dec 2024' },
  { name: 'FRED Data Practitioner', issuer: 'St. Louis Fed', date: 'Nov 2024' },
  { name: 'Foundations of Git', issuer: 'GitKraken', date: 'Feb 2024' },
];

const Education: React.FC = () => {
  const edu = educationData[0];
  // "Major: Business Information Technology" -> ["Major", "Business Information Technology"]
  const details = edu.details.map((d) => {
    const [label, ...rest] = d.split(':');
    return { label: label.trim(), value: rest.join(':').trim() };
  });

  const rows = [
    { label: 'Degree', value: edu.degree },
    ...details,
    { label: 'Graduation', value: edu.graduation },
    { label: 'GPA', value: edu.gpa },
  ];

  return (
    <div className="animate-fade-in-up">
      <SectionHeader
        eyebrow="Education"
        title="Education & certifications"
        description="Pairing business strategy with technical depth at Tennessee Tech."
      />

      <section className="panel overflow-hidden">
        <div className="flex flex-col gap-2 border-b border-line bg-surface px-6 py-5 sm:flex-row sm:items-center sm:justify-between md:px-8">
          <h2 className="text-lg font-semibold tracking-tight text-fg">{edu.school}</h2>
          <span className="font-mono text-xs text-muted">Cookeville, TN</span>
        </div>
        <dl className="divide-y divide-line">
          {rows.map((row) => (
            <div key={row.label} className="grid gap-1 px-6 py-4 sm:grid-cols-[160px_1fr] sm:gap-6 md:px-8">
              <dt className="text-sm text-subtle">{row.label}</dt>
              <dd className="text-[15px] text-fg">{row.value}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="mt-24 grid gap-10 md:grid-cols-[200px_1fr]">
        <div>
          <p className="eyebrow">Certifications</p>
          <h2 className="mt-3 text-xl font-semibold tracking-tight text-fg">Credentials</h2>
        </div>
        <ul className="divide-y divide-line border-y border-line">
          {certifications.map((cert) => (
            <li key={cert.name} className="flex flex-col gap-1 py-4 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
              <div>
                <p className="text-[15px] font-medium text-fg">{cert.name}</p>
                <p className="text-sm text-muted">{cert.issuer}</p>
              </div>
              <p className="font-mono text-xs text-subtle">{cert.date}</p>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default Education;
