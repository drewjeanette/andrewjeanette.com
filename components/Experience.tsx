import React from 'react';
import { Briefcase, Calendar, MapPin, Users } from 'lucide-react';
import { ExperienceItem } from '../types';

const experienceData: ExperienceItem[] = [
  {
    id: "ALGOOD",
    role: "IT Administrator",
    company: "City of Algood",
    duration: "Jan 2026 - Present",
    location: "Cookeville, TN",
    description: "Manage and maintain citywide IT infrastructure across all municipal departments, serving as system, network, and security administrator for servers, endpoints, workstations, mobile devices, and network equipment. Diagnose and resolve hardware, software, network, and security issues supporting enterprise systems (Windows Server, desktops, Microsoft SQL Server) and public safety operations. Oversee IT asset lifecycle management and software licensing, coordinate with vendors, execute procurement recommendations, and provide technical documentation and training to non-technical staff.",
    skills: ["Windows Server", "Network Administration", "Security", "Microsoft SQL Server", "Asset Management"]
  },
  {
    id: "ELCO",
    role: "Software Developer Intern",
    company: "Elco Dev, LLC",
    duration: "May 2025 - Present",
    location: "Remote",
    description: "Optimized databases by implementing indexing that improved query performance from 4 minutes to under 5 seconds. Created an online inventory management system with filtering and Excel exports that received strong positive feedback from the client. Tested and debugged server configurations and cloud-hosted apps on Firebase Hosting. Currently designing, implementing, and supporting a mini golf game in Unity for iOS and Android.",
    skills: ["SQL Server", "JavaScript", "React", "Firebase", "Unity"]
  },
  {
    id: "ICUBE",
    role: "Find Help Now TN Intern",
    company: "Tennessee Tech University iCube",
    duration: "Feb 2025 - Aug 2025",
    location: "Cookeville, TN",
    description: "Supported team operations by handling email, Google Sheets, and Canva. Contacted and assisted healthcare clinics across Tennessee with onboarding and platform adoption. Provided general administrative and organizational support to ensure efficient operations.",
    skills: ["Communication", "Onboarding", "Canva", "Google Sheets"]
  },
  {
    id: "STEM",
    role: "STEM Ambassador",
    company: "Tennessee Technological University",
    duration: "Sep 2025 - Present",
    location: "Cookeville, TN",
    description: "Taught STEM concepts weekly to 50+ K-12 students using interactive classroom activities. Supported Tennessee Tech's outreach initiatives to inspire the next generation of students in STEM, providing leadership and teamwork in coordinating hands-on events.",
    skills: ["Leadership", "Teamwork", "Public Speaking", "Event Coordination"]
  },
  {
    id: "CANE",
    role: "Restaurant Crew Member",
    company: "Raising Cane's Chicken Fingers",
    duration: "Oct 2023 - Jan 2026",
    location: "Cookeville, TN",
    description: "Operated multiple POS and scheduling systems with accuracy. Trained new staff on workflow optimization and systemized procedures. Worked every position from front-of-house to kitchen, maintaining performance during high-pressure rushes.",
    skills: ["Workflow Optimization", "Training", "Customer Service", "POS Systems"]
  },
  {
    id: "CFA",
    role: "Crew Member",
    company: "Chick-fil-A",
    duration: "Apr 2021 - Nov 2023",
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
    title: "STEM Ambassador",
    detail: "Taught STEM concepts weekly to 50+ K-12 students through interactive classroom activities."
  },
  {
    title: "Intramural Sports",
    detail: "Participated in Football, Volleyball, Archery Tag, and Water Polo."
  }
];

const Experience: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto animate-fade-in-up">
      <h2 className="text-4xl font-bold text-slate-900 mb-16 text-center">Professional Experience</h2>
      
      <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-1 before:bg-slate-200">
        {experienceData.map((item, index) => (
          <div key={item.id} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
            
            {/* Dot on the timeline */}
            <div className="flex items-center justify-center w-12 h-12 rounded-full border-4 border-white bg-blue-600 text-white shadow-md shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 transition-transform group-hover:scale-110">
              <Briefcase size={20} className="stroke-[2.5]" />
            </div>
            
            {/* Content Card */}
            <div className="w-[calc(100%-5rem)] md:w-[calc(50%-3rem)] bg-white p-8 rounded-xl border border-slate-200 shadow-md hover:shadow-lg transition-all hover:-translate-y-1">
              <div className="flex flex-col sm:flex-row justify-between sm:items-center mb-3">
                <h3 className="font-bold text-xl text-slate-900">{item.role}</h3>
                <span className="text-xs font-bold text-blue-700 bg-blue-50 border border-blue-100 px-3 py-1.5 rounded inline-block mt-2 sm:mt-0 w-fit tracking-wide uppercase">
                  {item.company}
                </span>
              </div>
              
              <div className="flex flex-col gap-2 text-sm text-slate-500 mb-5 pb-4 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <Calendar size={16} className="text-slate-400" />
                  {item.duration}
                </div>
                <div className="flex items-center gap-2">
                  <MapPin size={16} className="text-slate-400" />
                  {item.location}
                </div>
              </div>
              
              <p className="text-slate-600 mb-6 text-base leading-relaxed">
                {item.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {item.skills.map(skill => (
                  <span key={skill} className="px-3 py-1 bg-slate-50 text-slate-600 text-xs rounded-full border border-slate-200 font-bold">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Campus Involvement */}
      <div className="mt-24">
        <h2 className="text-3xl font-bold text-slate-900 mb-10 text-center">Campus Involvement</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {involvement.map((item) => (
            <div key={item.title} className="bg-white p-7 rounded-xl border border-slate-200 shadow-md hover:shadow-lg hover:-translate-y-1 transition-all">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-blue-100 rounded-lg text-blue-600">
                  <Users size={22} />
                </div>
                <h3 className="font-bold text-lg text-slate-900 leading-tight">{item.title}</h3>
              </div>
              <p className="text-slate-600 leading-relaxed text-sm">{item.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;