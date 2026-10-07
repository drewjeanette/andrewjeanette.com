import React from 'react';

interface SectionHeaderProps {
  eyebrow: string;
  title: string;
  description?: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ eyebrow, title, description }) => (
  <header className="mb-12 max-w-2xl md:mb-16">
    <p className="eyebrow mb-4">{eyebrow}</p>
    <h1 className="text-3xl font-semibold tracking-tightest text-fg md:text-[2.75rem] md:leading-[1.1]">{title}</h1>
    {description && <p className="mt-4 text-base leading-relaxed text-muted md:text-lg">{description}</p>}
  </header>
);

export default SectionHeader;
