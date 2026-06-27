import { useState, useEffect } from 'react';

const SECTIONS = [
  { id: 'home', label: 'Home' },
  { id: 'catalog', label: 'Catalog' },
  { id: 'materials', label: 'Materials' },
  { id: 'about', label: 'About' },
  { id: 'contact', label: 'Contact' },
];

export default function NavRail() {
  const [active, setActive] = useState('home');

  useEffect(() => {
    const onScroll = () => {
      for (const s of SECTIONS) {
        const el = document.getElementById(s.id);
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        if (rect.top <= 120 && rect.bottom > 120) {
          setActive(s.id);
          break;
        }
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 z-30 hidden xl:flex flex-col items-center gap-3">
      {SECTIONS.map((s) => (
        <button
          key={s.id}
          onClick={() => document.getElementById(s.id)?.scrollIntoView({ behavior: 'smooth' })}
          className="group relative flex items-center justify-end gap-2"
          aria-label={s.label}
        >
          <span
            className={`absolute right-full mr-3 font-mono text-xs whitespace-nowrap transition-all duration-200 ${
              active === s.id
                ? 'opacity-100 text-coral-600'
                : 'opacity-0 group-hover:opacity-100 text-slate-500'
            }`}
          >
            {s.label}
          </span>
          <span
            className={`block rounded-full transition-all duration-200 ${
              active === s.id
                ? 'w-3 h-3 bg-coral-600'
                : 'w-2 h-2 bg-slate-300 group-hover:bg-slate-500'
            }`}
          />
        </button>
      ))}
    </div>
  );
}
