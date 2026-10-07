import React from 'react';
import { ExperienceItem } from '../types';
import SectionHeader from './SectionHeader';

const experienceData: ExperienceItem[] = [
  {
    id: "ALGOOD",
    role: "IT Administrator",
    company: "City of Algood",
    duration: "Jan 2026 – Present",
    location: "Cookeville, TN",
    description: "Manage and maintain citywide IT infrastructure across all municipal departments, serving as system, network, and security administrator for servers, endpoints, workstations, mobile devices, and network equipment. Diagnose and resolve hardware, software, network, and security issues supporting enterprise systems (Windows Server, desktops, Microsoft SQL Server) and public safety operations. Oversee IT asset lifecycle management and software licensing, coordinate with vendors, execute procurement recommendations, and provide technical documentation and training to non-technical staff.",
    skills: ["Windows Server", "Network Administration", "Security", "Microsoft SQL Server", "Asset Management"]
  },
  {
    id: "ELCO",
    role: "Software Developer Intern",
    company: "Elco Dev, LLC",
    duration: "May 2025 – May 2026",
    location: "Remote",
    description: "Optimized databases with indexing that cut query times from 4 minutes to under 5 seconds, and built an online inventory management system with filtering and Excel exports that earned strong client feedback. Developed a 3D mini-golf game in Unity 6 and C# featuring a daily-seed system that generates one globally synchronized course every 24 hours. Built a custom drag-and-release shooting mechanic with trajectory rendering, tuned arcade physics simulating turf friction and wall ricochets, a dual-camera system (ball-tracking and bounded free-fly), and a responsive UI with live stroke tracking, a midnight countdown, and an end-of-match summary.",
    skills: ["Unity 6", "C#", "SQL Server", "JavaScript", "React", "Firebase"]
  },
  {
    id: "STEM",
    role: "STEM Ambassador",
    company: "Tennessee Technological University",
    duration: "Sep 2025 – Present",
    location: "Cookeville, TN",
    description: "Taught STEM concepts weekly to 50+ K-12 students using interactive classroom activities. Supported Tennessee Tech's outreach initiatives to inspire the next generation of students in STEM, providing leadership and teamwork in coordinating hands-on events.",
    skills: ["Leadership", "Teamwork", "Public Speaking", "Event Coordination"]
  },
  {
    id: "ICUBE",
    role: "Find Help Now TN Intern",
    company: "Tennessee Tech University iCube",
    duration: "Feb 2025 – Aug 2025",
    location: "Cookeville, TN",
    description: "Supported team operations by handling email, Google Sheets, and Canva. Contacted and assisted healthcare clinics across Tennessee with onboarding and platform adoption. Provided general administrative and organizational support to ensure efficient operations.",
    skills: ["Communication", "Onboarding", "Canva", "Google Sheets"]
  },
  {
    id: "CANE",
    role: "Restaurant Crew Member",
    company: "Raising Cane's Chicken Fingers",
    duration: "Oct 2023 – Jan 2026",
    location: "Cookeville, TN",
    description: "Operated multiple POS and scheduling systems with accuracy. Trained new staff on workflow optimization and systemized procedures. Worked every position from front-of-house to kitchen, maintaining performance during high-pressure rushes.",
    skills: ["Workflow Optimization", "Training", "Customer Service", "POS Systems"]
  },
  {
    id: "CFA",
    role: "Crew Member",
    company: "Chick-fil-A",
    duration: "Apr 2021 – Nov 2023",
    location: "Mount Juliet, TN",
    description: "Delivered customer service in a fast-paced environment using digital POS systems. Recognized for efficient, friendly service in front-of-house and drive-thru. Twice awarded the Remarkable Futures Scholarship for exceptional performance.",
    skills: ["Customer Service", "Time Management", "Leadership"]
  }
];

const involvement = [
  {
    title: "BCM Media Team Leadership",
    detail: "Provided audio and visual services using soundboards, microphones, and ProPresenter."
  },
  {
    title: "Intramural Sports",
    detail: "Participated in Football, Volleyball, Archery Tag, and Water Polo."
  }
];

const Experience: React.FC = () => {
  return (
    <div className="animate-fade-in-up">
      <SectionHeader
        eyebrow="Experience"
        title="Where I've worked"
        description="Municipal IT, software development, and the customer-facing roles that taught me how to support people under pressure."
      />

      <ol className="border-t border-line">
        {experienceData.map((item) => (
          <li key={item.id} className="grid gap-3 border-b border-line py-10 md:grid-cols-[200px_1fr] md:gap-10">
            <div className="space-y-1">
              <p className="font-mono text-xs text-muted">{item.duration}</p>
              <p className="font-mono text-xs text-subtle">{item.location}</p>
            </div>

            <div>
              <h2 className="text-lg font-semibold tracking-tight text-fg">{item.role}</h2>
              <p className="mt-0.5 text-[15px] text-muted">{item.company}</p>
              <p className="mt-4 max-w-2xl text-[15px] leading-7 text-muted">{item.description}</p>
              <div className="mt-5 flex flex-wrap gap-1.5">
                {item.skills.map((skill) => (
                  <span key={skill} className="tag">{skill}</span>
                ))}
              </div>
            </div>
          </li>
        ))}
      </ol>

      <section className="mt-24 grid gap-10 md:grid-cols-[200px_1fr]">
        <div>
          <p className="eyebrow">Involvement</p>
          <h2 className="mt-3 text-xl font-semibold tracking-tight text-fg">On campus</h2>
        </div>
        <div className="grid gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-2">
          {involvement.map((item) => (
            <div key={item.title} className="bg-canvas p-6">
              <h3 className="text-[15px] font-medium text-fg">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{item.detail}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Experience;
