import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Education from './components/Education';
import Experience from './components/Experience';
import ProjectsSection from './components/ProjectsSection';
import Footer from './components/Footer';
import { Section } from './types';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<Section>(Section.HOME);

  const renderSection = () => {
    switch (activeSection) {
      case Section.HOME:
        return <Hero navigateTo={setActiveSection} />;
      case Section.EDUCATION:
        return <Education />;
      case Section.EXPERIENCE:
        return <Experience />;
      case Section.PROJECTS:
        return <ProjectsSection />;
      default:
        return <Hero navigateTo={setActiveSection} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />
      
      <main className="flex-grow pt-16">
        <div className="container mx-auto px-4 py-8 max-w-6xl">
          {renderSection()}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default App;