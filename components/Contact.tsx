import React, { useState } from 'react';
import { ArrowUpRight, Check, Copy } from 'lucide-react';
import SectionHeader from './SectionHeader';
import { EMAIL, LINKEDIN_HANDLE, LINKEDIN_URL, LOCATION, PHONE_DISPLAY, PHONE_TEL } from './contactInfo';

interface Row {
  label: string;
  value: string;
  copy?: string;
  action?: { label: string; href: string; external?: boolean };
}

const rows: Row[] = [
  { label: 'Email', value: EMAIL, copy: EMAIL, action: { label: 'Send email', href: `mailto:${EMAIL}` } },
  { label: 'Phone', value: PHONE_DISPLAY, copy: PHONE_DISPLAY, action: { label: 'Call', href: `tel:${PHONE_TEL}` } },
  { label: 'LinkedIn', value: LINKEDIN_HANDLE, action: { label: 'View profile', href: LINKEDIN_URL, external: true } },
  { label: 'Location', value: LOCATION },
];

const CopyButton: React.FC<{ text: string; label: string }> = ({ text, label }) => {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {
      // Clipboard can be unavailable (insecure context, permissions); the value is still selectable.
    }
  };

  return (
    <button
      onClick={copy}
      aria-label={copied ? `${label} copied` : `Copy ${label.toLowerCase()}`}
      className="btn-secondary h-8 px-3 text-[13px]"
    >
      {copied ? <Check size={14} className="text-good" /> : <Copy size={14} />}
      {copied ? 'Copied' : 'Copy'}
    </button>
  );
};

const Contact: React.FC = () => {
  return (
    <div className="animate-fade-in-up">
      <SectionHeader
        eyebrow="Contact"
        title="Get in touch"
        description="Open to IT and software roles, internships, and project work. Email is the fastest way to reach me."
      />

      <dl className="panel divide-y divide-line overflow-hidden">
        {rows.map((row) => (
          <div
            key={row.label}
            className="flex flex-col gap-3 px-6 py-5 sm:flex-row sm:items-center sm:gap-6 md:px-8"
          >
            <dt className="text-sm text-subtle sm:w-28 sm:shrink-0">{row.label}</dt>
            <dd className="min-w-0 flex-1 select-all break-words text-[15px] text-fg">{row.value}</dd>
            {(row.copy || row.action) && (
              <dd className="flex shrink-0 gap-2">
                {row.copy && <CopyButton text={row.copy} label={row.label} />}
                {row.action && (
                  <a
                    href={row.action.href}
                    target={row.action.external ? '_blank' : undefined}
                    rel={row.action.external ? 'noopener noreferrer' : undefined}
                    className="btn-secondary group h-8 px-3 text-[13px]"
                  >
                    {row.action.label}
                    <ArrowUpRight size={14} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </a>
                )}
              </dd>
            )}
          </div>
        ))}
      </dl>
    </div>
  );
};

export default Contact;
