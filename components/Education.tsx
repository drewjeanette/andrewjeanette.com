
import React from 'react';
import { BookOpen, Award, Terminal, GitBranch, ShieldCheck, Database } from 'lucide-react';
import { EducationItem } from '../types';

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

const Education: React.FC = () => {
  return (
    <div className="space-y-12 animate-fade-in-up">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">Education & Certifications</h2>
        <p className="text-slate-500 dark:text-slate-400 max-w-2xl mx-auto text-lg">
          Building a strong foundation in both business logic and technical implementation at Tennessee Tech.
        </p>
      </div>

      {/* Main Education Card */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 overflow-hidden shadow-md hover:shadow-lg transition-shadow">
          <div className="bg-slate-50 dark:bg-slate-900/50 p-8 border-b border-slate-200 dark:border-slate-700">
            <div className="flex items-center gap-4 mb-3">
              <div className="p-2 bg-blue-100 dark:bg-blue-900/50 rounded-lg">
                <BookOpen className="text-blue-600 dark:text-blue-300" size={28} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">{educationData[0].school}</h3>
            </div>
            <p className="text-slate-600 dark:text-slate-300 text-lg font-medium">{educationData[0].degree}</p>
          </div>
          <div className="p-8">
            <div className="flex flex-wrap gap-4 mb-8">
              <span className="bg-blue-50 dark:bg-blue-950/50 text-blue-700 dark:text-blue-300 border border-blue-100 dark:border-blue-900 px-4 py-2 rounded-full font-semibold text-sm tracking-wide">
                GPA: {educationData[0].gpa}
              </span>
              <span className="bg-green-50 dark:bg-green-950/50 text-green-700 dark:text-green-300 border border-green-100 dark:border-green-900 px-4 py-2 rounded-full font-semibold text-sm tracking-wide">
                Graduation: {educationData[0].graduation}
              </span>
            </div>

            <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Academic Focus</h4>
            <ul className="space-y-3">
              {educationData[0].details.map((detail, idx) => (
                <li key={idx} className="flex items-start gap-3 text-slate-600 dark:text-slate-300">
                  <div className="mt-2 w-2 h-2 rounded-full bg-blue-500"></div>
                  <span className="text-lg">{detail}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Certifications & Interests */}
        <div className="space-y-6">
          <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-8 h-full flex flex-col justify-start shadow-md hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3 mb-6 border-b border-slate-100 dark:border-slate-700 pb-4">
              <Award className="text-blue-600 dark:text-blue-300" size={28} />
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">Certifications</h3>
            </div>
            <ul className="space-y-4">
              <li className="flex items-center gap-4 text-slate-700 dark:text-slate-200 p-3 bg-slate-50 dark:bg-slate-900/50 rounded-lg border border-slate-100 dark:border-slate-700 hover:border-blue-200 dark:hover:border-blue-700 transition-colors">
                <div className="p-2 bg-white dark:bg-slate-700 rounded-md shadow-sm text-blue-600 dark:text-blue-300">
                    <Terminal size={20} />
                </div>
                <div>
                    <span className="font-bold block text-sm text-slate-900 dark:text-white">Introduction to Linux</span>
                    <span className="text-xs text-slate-500 dark:text-slate-400 font-semibold uppercase tracking-wide">LinkedIn • Sep 2025</span>
                </div>
              </li>
              <li className="flex items-center gap-4 text-slate-700 dark:text-slate-200 p-3 bg-slate-50 dark:bg-slate-900/50 rounded-lg border border-slate-100 dark:border-slate-700 hover:border-blue-200 dark:hover:border-blue-700 transition-colors">
                <div className="p-2 bg-white dark:bg-slate-700 rounded-md shadow-sm text-blue-600 dark:text-blue-300">
                    <GitBranch size={20} />
                </div>
                <div>
                    <span className="font-bold block text-sm text-slate-900 dark:text-white">Foundations of Git</span>
                    <span className="text-xs text-slate-500 dark:text-slate-400 font-semibold uppercase tracking-wide">GitKraken • Feb 2024</span>
                </div>
              </li>
              <li className="flex items-center gap-4 text-slate-700 dark:text-slate-200 p-3 bg-slate-50 dark:bg-slate-900/50 rounded-lg border border-slate-100 dark:border-slate-700 hover:border-blue-200 dark:hover:border-blue-700 transition-colors">
                <div className="p-2 bg-white dark:bg-slate-700 rounded-md shadow-sm text-blue-600 dark:text-blue-300">
                    <ShieldCheck size={20} />
                </div>
                <div>
                    <span className="font-bold block text-sm text-slate-900 dark:text-white">Advent of Cyber 2024</span>
                    <span className="text-xs text-slate-500 dark:text-slate-400 font-semibold uppercase tracking-wide">TryHackMe • Dec 2024</span>
                </div>
              </li>
              <li className="flex items-center gap-4 text-slate-700 dark:text-slate-200 p-3 bg-slate-50 dark:bg-slate-900/50 rounded-lg border border-slate-100 dark:border-slate-700 hover:border-blue-200 dark:hover:border-blue-700 transition-colors">
                <div className="p-2 bg-white dark:bg-slate-700 rounded-md shadow-sm text-blue-600 dark:text-blue-300">
                    <Database size={20} />
                </div>
                <div>
                    <span className="font-bold block text-sm text-slate-900 dark:text-white">FRED Data Practitioner</span>
                    <span className="text-xs text-slate-500 dark:text-slate-400 font-semibold uppercase tracking-wide">St. Louis Fed • Nov 2024</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
