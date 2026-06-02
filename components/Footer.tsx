import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-100 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 py-12 mt-20 transition-colors duration-300">
      <div className="container mx-auto px-4 text-center">
        <h3 className="text-2xl font-extrabold mb-4 tracking-widest text-slate-900 dark:text-white">ANDREW JEANETTE</h3>
        <p className="text-slate-500 dark:text-slate-400 mb-8 max-w-lg mx-auto leading-relaxed">
          IT Administrator and Business Information Technology major bridging business strategy and technical implementation.
        </p>
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wide">
            <a href="mailto:andrewjeanettebusiness@gmail.com" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Email</a>
            <a href="tel:+16157666373" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">(615) 766-6373</a>
            <a href="https://www.linkedin.com/in/andrew-jeanette" target="_blank" rel="noreferrer" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">LinkedIn</a>
            <span className="text-slate-300 dark:text-slate-600 hidden sm:inline">|</span>
            <span>Cookeville, TN</span>
        </div>
        <div className="mt-10 pt-8 border-t border-slate-200 dark:border-slate-800 text-xs text-slate-400 dark:text-slate-500">
          © {new Date().getFullYear()} Andrew Jeanette. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
