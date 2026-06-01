import React, { useState } from 'react';
import { Section } from '../types';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  activeSection: Section;
  setActiveSection: (section: Section) => void;
}

const Navbar: React.FC<NavbarProps> = ({ activeSection, setActiveSection }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'Home / About Me', value: Section.HOME },
    { label: 'Education', value: Section.EDUCATION },
    { label: 'Experience', value: Section.EXPERIENCE },
    { label: 'Projects', value: Section.PROJECTS },
  ];

  const handleNavClick = (value: Section) => {
    setActiveSection(value);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md border-b border-slate-200 shadow-sm z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <div 
            className="font-bold text-2xl cursor-pointer tracking-tight text-slate-900 hover:text-blue-600 transition-colors"
            onClick={() => handleNavClick(Section.HOME)}
          >
            Andrew Jeanette
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.value}
                onClick={() => handleNavClick(item.value)}
                className={`text-sm font-semibold transition-all duration-300 relative group uppercase tracking-wider ${
                  activeSection === item.value 
                    ? 'text-blue-600' 
                    : 'text-slate-500 hover:text-slate-900'
                }`}
              >
                {item.label}
                <span className={`absolute -bottom-1 left-0 w-full h-0.5 bg-blue-600 transform transition-transform duration-300 ${
                  activeSection === item.value ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                }`}></span>
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-slate-700 focus:outline-none p-2 hover:text-blue-600 transition-colors"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-6 shadow-xl">
          <div className="flex flex-col space-y-3">
            {navItems.map((item) => (
              <button
                key={item.value}
                onClick={() => handleNavClick(item.value)}
                className={`text-left py-3 px-4 rounded transition-colors ${
                  activeSection === item.value 
                    ? 'bg-blue-50 text-blue-600 font-bold border-l-4 border-blue-600' 
                    : 'text-slate-600 hover:bg-slate-50'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;