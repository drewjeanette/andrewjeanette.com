import React from 'react';

const links = [
  { label: 'Email', href: 'mailto:andrewjeanettebusiness@gmail.com' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/andrew-jeanette' },
  { label: '(615) 766-6373', href: 'tel:+16157666373' },
];

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-5xl flex-col gap-4 px-5 py-8 text-sm sm:flex-row sm:items-center sm:justify-between md:px-8">
        <p className="text-subtle">© {new Date().getFullYear()} Andrew Jeanette · Cookeville, TN</p>
        <div className="flex flex-wrap gap-x-6 gap-y-2">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith('http') ? '_blank' : undefined}
              rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="text-muted transition-colors hover:text-fg"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
