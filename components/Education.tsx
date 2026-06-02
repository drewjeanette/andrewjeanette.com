
import React from 'react';
import { BookOpen, Award, CloudSun, MapPin, Smartphone, Terminal, GitBranch, ShieldCheck, Database, Globe, Users, Lock, FileText } from 'lucide-react';
import { EducationItem } from '../types';

const educationData: EducationItem[] = [
  {
    school: "Tennessee Technological University",
    degree: "Bachelor of Science in Business Administration",
    graduation: "December 2026",
    gpa: "3.49",
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

      {/* Major Projects Highlight */}
      <div>
        <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-8 border-l-4 border-blue-600 pl-4">Featured Academic Projects</h3>

        <div className="space-y-8">
            {/* Weather App Project */}
            <div className="bg-white dark:bg-slate-800 p-8 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md hover:border-blue-300 dark:hover:border-blue-600 transition-all">
            <div className="flex flex-col md:flex-row gap-8">
                <div className="flex-1 space-y-4">
                <div className="flex items-center gap-3">
                    <div className="p-2 bg-blue-100 dark:bg-blue-900/50 rounded-lg text-blue-600 dark:text-blue-300">
                        <CloudSun size={32} />
                    </div>
                    <div>
                        <h4 className="text-2xl font-bold text-slate-900 dark:text-white">Real-Time Weather App</h4>
                        <span className="text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wide">Web Development Class Project</span>
                    </div>
                </div>

                <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-lg">
                    I built a real-time Weather App that uses your device's location, or any location you enter, and displays live weather conditions and an interactive weather map using free public APIs.
                </p>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                    It’s fully responsive and works great on mobile and desktop devices. You can even save it to your home screen, and it'll launch like a native app complete with a custom weather icon I generated using Grok! This project taught me a lot about working with APIs, mobile optimization, and user-friendly design.
                </p>
                </div>

                <div className="md:w-1/3 bg-slate-50 dark:bg-slate-900/50 rounded-xl p-6 border border-slate-100 dark:border-slate-700">
                    <h5 className="font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                        <Globe size={18} className="text-blue-500 dark:text-blue-400" /> Tech Stack & APIs
                    </h5>
                    <div className="flex flex-wrap gap-2">
                        {["HTML", "CSS", "JavaScript", "Bootstrap", "Open-Meteo API", "Nominatim API", "Windy.com API", "GitHub Pages"].map(tech => (
                            <span key={tech} className="bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-200 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-600 text-sm font-bold shadow-sm">
                                {tech}
                            </span>
                        ))}
                    </div>

                    <h5 className="font-bold text-slate-900 dark:text-white mt-6 mb-4 flex items-center gap-2">
                        <Smartphone size={18} className="text-blue-500 dark:text-blue-400" /> Key Features
                    </h5>
                    <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-300">
                        <li className="flex items-center gap-2"><MapPin size={14} /> Geolocation Support</li>
                        <li className="flex items-center gap-2"><Smartphone size={14} /> PWA / Native-like Feel</li>
                        <li className="flex items-center gap-2"><CloudSun size={14} /> Live Weather Mapping</li>
                    </ul>
                </div>
            </div>
            </div>

            {/* Peer Evaluation Project */}
            <div className="bg-white dark:bg-slate-800 p-8 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md hover:border-blue-300 dark:hover:border-blue-600 transition-all">
                <div className="flex flex-col md:flex-row gap-8">
                    <div className="flex-1 space-y-4">
                        <div className="flex items-center gap-3">
                            <div className="p-2 bg-blue-100 dark:bg-blue-900/50 rounded-lg text-blue-600 dark:text-blue-300">
                                <Users size={32} />
                            </div>
                            <div>
                                <h4 className="text-2xl font-bold text-slate-900 dark:text-white">Peer Evaluation System</h4>
                                <span className="text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wide">Web Development Class Project</span>
                            </div>
                        </div>

                        <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-lg">
                            Collaborated with a team to build a secure system for students and faculty to manage peer evaluations. The platform allows faculty to design custom evaluation forms, assign students to groups, and track results, while students can securely log in to submit private or public feedback.
                        </p>
                        <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                             This project focused on backend logic, secure data handling, and complex database relationships. We implemented a complete evaluation lifecycle from assignment creation to result aggregation, ensuring a user-friendly experience for both roles.
                        </p>
                    </div>

                    <div className="md:w-1/3 bg-slate-50 dark:bg-slate-900/50 rounded-xl p-6 border border-slate-100 dark:border-slate-700">
                        <h5 className="font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                            <Database size={18} className="text-blue-500 dark:text-blue-400" /> Tech Stack
                        </h5>
                        <div className="flex flex-wrap gap-2">
                            {["PHP", "MySQL", "HTML/CSS", "Apache/XAMPP", "JavaScript", "Relational DB"].map(tech => (
                                <span key={tech} className="bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-200 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-600 text-sm font-bold shadow-sm">
                                    {tech}
                                </span>
                            ))}
                        </div>

                        <h5 className="font-bold text-slate-900 dark:text-white mt-6 mb-4 flex items-center gap-2">
                            <Lock size={18} className="text-blue-500 dark:text-blue-400" /> Key Features
                        </h5>
                        <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-300">
                            <li className="flex items-center gap-2"><ShieldCheck size={14} /> Secure RBAC Login</li>
                            <li className="flex items-center gap-2"><FileText size={14} /> Dynamic Form Builder</li>
                            <li className="flex items-center gap-2"><Users size={14} /> Group & Team Management</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
