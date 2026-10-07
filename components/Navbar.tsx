import React, { useState } from 'react';
import { Section } from '../types';
import { Menu, X, Sun, Moon } from 'lucide-react';

interface NavbarProps {
  activeSection: Section;
  setActiveSection: (section: Section) => void;
}

const navItems = [
  { label: 'About', value: Section.HOME },
  { label: 'Experience', value: Section.EXPERIENCE },
  { label: 'Projects', value: Section.PROJECTS },
  { label: 'Education', value: Section.EDUCATION },
];

const Navbar: React.FC<NavbarProps> = ({ activeSection, setActiveSection }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  // Initialized from the class set by the anti-flash script in index.html.
  const [isDark, setIsDark] = useState<boolean>(
    () => typeof document !== 'undefined' && document.documentElement.classList.contains('dark')
  );

  const handleNavClick = (value: Section) => {
    setActiveSection(value);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleTheme = () => {
    setIsDark((prev) => {
      const next = !prev;
      document.documentElement.classList.toggle('dark', next);
      try {
        localStorage.setItem('theme', next ? 'dark' : 'light');
      } catch {}
      return next;
    });
  };

  const themeLabel = isDark ? 'Switch to light mode' : 'Switch to dark mode';

  return (
    <nav className="sticky top-0 z-50 border-b border-line bg-canvas/80 backdrop-blur-xl backdrop-saturate-150">
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-5 md:px-8">
        <button
          onClick={() => handleNavClick(Section.HOME)}
          className="flex items-center gap-2.5 text-sm font-medium text-fg"
        >
          <span className="flex h-6 w-6 items-center justify-center rounded-md bg-fg font-mono text-[10px] font-medium text-canvas">
            AJ
          </span>
          Andrew Jeanette
        </button>

        <div className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <button
              key={item.value}
              onClick={() => handleNavClick(item.value)}
              aria-current={activeSection === item.value ? 'page' : undefined}
              className={`rounded-md px-3 py-1.5 text-sm transition-colors ${
                activeSection === item.value
                  ? 'bg-raised text-fg'
                  : 'text-muted hover:text-fg'
              }`}
            >
              {item.label}
            </button>
          ))}
          <span className="mx-2 h-4 w-px bg-line" aria-hidden="true" />
          <button
            onClick={() => handleNavClick(Section.CONTACT)}
            aria-current={activeSection === Section.CONTACT ? 'page' : undefined}
            className={`rounded-md px-3 py-1.5 text-sm transition-colors ${
              activeSection === Section.CONTACT ? 'bg-raised text-fg' : 'text-muted hover:text-fg'
            }`}
          >
            Contact
          </button>
          <button
            onClick={toggleTheme}
            aria-label={themeLabel}
            title={themeLabel}
            className="ml-1 flex h-8 w-8 items-center justify-center rounded-md border border-line text-muted transition-colors hover:border-line-strong hover:text-fg"
          >
            {isDark ? <Sun size={15} /> : <Moon size={15} />}
          </button>
        </div>

        <div className="flex items-center gap-1 md:hidden">
          <button
            onClick={toggleTheme}
            aria-label={themeLabel}
            className="flex h-9 w-9 items-center justify-center rounded-md text-muted hover:text-fg"
          >
            {isDark ? <Sun size={17} /> : <Moon size={17} />}
          </button>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMobileMenuOpen}
            className="flex h-9 w-9 items-center justify-center rounded-md text-fg"
          >
            {isMobileMenuOpen ? <X size={19} /> : <Menu size={19} />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="animate-fade-in border-t border-line bg-canvas px-5 py-3 md:hidden">
          {[...navItems, { label: 'Contact', value: Section.CONTACT }].map((item) => (
            <button
              key={item.value}
              onClick={() => handleNavClick(item.value)}
              className={`flex w-full items-center justify-between border-b border-line py-3.5 text-left text-[15px] last:border-0 ${
                activeSection === item.value ? 'text-fg' : 'text-muted'
              }`}
            >
              {item.label}
              {activeSection === item.value && <span className="h-1.5 w-1.5 rounded-full bg-fg" />}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
