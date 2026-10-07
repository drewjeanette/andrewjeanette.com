import React from 'react';
import { EMAIL, LINKEDIN_URL, PHONE_DISPLAY, PHONE_TEL } from './contactInfo';

const links = [
  { label: 'Email', href: `mailto:${EMAIL}` },
  { label: 'LinkedIn', href: LINKEDIN_URL },
  { label: PHONE_DISPLAY, href: `tel:${PHONE_TEL}` },
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
