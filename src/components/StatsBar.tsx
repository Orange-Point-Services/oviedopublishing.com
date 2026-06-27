import { BookOpen, FileDown, CalendarDays } from 'lucide-react';
import { useReveal } from '../lib/useReveal';

interface StatsBarProps {
  bookCount: number;
  materialCount: number;
}

export default function StatsBar({ bookCount, materialCount }: StatsBarProps) {
  const ref = useReveal();

  const stats = [
    {
      icon: BookOpen,
      value: bookCount,
      label: 'Titles Published',
      sub: 'practical handbooks',
    },
    {
      icon: FileDown,
      value: materialCount,
      label: 'Free Resources',
      sub: 'companion materials',
    },
    {
      icon: CalendarDays,
      value: '2024',
      label: 'Founded',
      sub: 'Oviedo, Florida',
    },
  ];

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className="reveal bg-white border-b border-slate-100"
    >
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-3 divide-x divide-slate-100">
          {stats.map(({ icon: Icon, value, label, sub }) => (
            <div key={label} className="px-6 first:pl-0 last:pr-0 flex items-center gap-4">
              <div className="w-10 h-10 rounded-lg bg-coral-50 flex items-center justify-center flex-shrink-0">
                <Icon className="w-5 h-5 text-coral-600" />
              </div>
              <div>
                <div
                  className="font-display text-2xl sm:text-3xl text-slate-900"
                  style={{ fontWeight: 700 }}
                >
                  {value}
                </div>
                <div className="font-body text-sm text-slate-600 leading-tight">{label}</div>
                <div className="font-mono text-[10px] text-slate-400 tracking-wide uppercase mt-0.5">
                  {sub}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
