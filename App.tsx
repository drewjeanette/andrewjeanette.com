import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Education from './components/Education';
import Experience from './components/Experience';
import ProjectsSection from './components/ProjectsSection';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { Section } from './types';

// The active section is mirrored in the URL hash (#experience, #projects, ...)
// so each page can be linked to directly and the back button works.
const sectionFromHash = (): Section => {
  const hash = window.location.hash.slice(1);
  return (Object.values(Section) as string[]).includes(hash) ? (hash as Section) : Section.HOME;
};

const App: React.FC = () => {
  const [activeSection, setSection] = useState<Section>(sectionFromHash);

  useEffect(() => {
    const onHashChange = () => setSection(sectionFromHash());
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  const setActiveSection = (section: Section) => {
    if (section === Section.HOME) {
      history.pushState(null, '', window.location.pathname);
      setSection(Section.HOME);
    } else {
      window.location.hash = section;
    }
  };

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
      case Section.CONTACT:
        return <Contact />;
      default:
        return <Hero navigateTo={setActiveSection} />;
    }
  };

  return (
    <div className="flex min-h-screen flex-col bg-canvas">
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />

      <main className="relative flex-grow">
        <div key={activeSection} className="relative mx-auto max-w-5xl px-5 pb-24 pt-16 md:px-8 md:pt-24">
          {renderSection()}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default App;
