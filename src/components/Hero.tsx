import { useState, useRef } from 'react';
import { Search, ArrowRight, BookOpen, Star, MapPin } from 'lucide-react';
import type { BookWithDetails } from '../lib/types';

interface HeroProps {
  featuredBook: BookWithDetails | null;
  onSearch: (query: string) => void;
  bookCount?: number;
}

export default function Hero({ featuredBook, onSearch, bookCount = 0 }: HeroProps) {
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(query);
    if (query.trim()) {
      document.getElementById('catalog')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{
        backgroundImage: 'radial-gradient(circle, #f59e0b 0%, #f97316 35%, #ef4444 75%, #dc2626 100%)',
      }}
    >
      {/* Coordinate markers */}
      <div className="absolute top-24 left-8 font-mono text-[10px] text-white/30 tracking-widest hidden lg:block">
        29.5872° N
      </div>
      <div className="absolute top-24 left-8 mt-4 font-mono text-[10px] text-white/30 tracking-widest hidden lg:block">
        81.2081° W
      </div>
      <div className="absolute bottom-12 right-8 font-mono text-[10px] text-white/30 tracking-widest hidden lg:block">
        EST. 2024
      </div>

      {/* Large decorative letter */}
      <div
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/3 font-display font-800 text-[30vw] text-white/[0.04] select-none pointer-events-none leading-none"
        style={{ fontWeight: 800 }}
      >
        OP
      </div>

      <div className="relative max-w-7xl mx-auto px-6 pt-28 pb-20 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left — text */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/15 border border-white/20">
              <MapPin className="w-3.5 h-3.5 text-white/70" />
              <span className="font-mono text-xs text-white/80 tracking-wide">
                OVIEDO, FLORIDA
              </span>
            </div>

            <div>
              <h1
                className="font-display text-5xl sm:text-6xl lg:text-7xl text-white leading-[1.05] tracking-tight"
                style={{ fontWeight: 800 }}
              >
                Handbooks
                <br />
                <span className="text-amber-200">that actually</span>
                <br />
                get read.
              </h1>
              <p className="mt-6 text-white/75 text-lg leading-relaxed max-w-md font-body font-light">
                Practical, mid-length guides for small businesses navigating AI, operations,
                and growth — with free companion materials included.
              </p>
            </div>

            {/* Search bar */}
            <form onSubmit={handleSearch} className="flex gap-2 max-w-md">
              <div className="flex-1 relative">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
                <input
                  ref={inputRef}
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search books or materials..."
                  className="w-full pl-10 pr-4 py-3 rounded-lg bg-white/15 border border-white/20 text-white placeholder-white/40 font-body text-sm focus:outline-none focus:ring-2 focus:ring-white/40 focus:bg-white/20 transition-all"
                />
              </div>
              <button
                type="submit"
                className="px-5 py-3 rounded-lg bg-white text-coral-700 font-semibold text-sm hover:bg-amber-50 transition-colors flex items-center gap-1.5 whitespace-nowrap"
              >
                Search
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>

            {/* Stats pills */}
            <div className="flex flex-wrap gap-3">
              {[
                { icon: BookOpen, label: `${bookCount} Volume${bookCount !== 1 ? 's' : ''}`, sub: 'in catalog' },
                { icon: Star, label: 'Free', sub: 'companion materials' },
              ].map(({ icon: Icon, label, sub }) => (
                <div key={label} className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/10 border border-white/15">
                  <Icon className="w-4 h-4 text-amber-200" />
                  <div>
                    <div className="font-display text-sm font-semibold text-white">{label}</div>
                    <div className="font-mono text-[10px] text-white/50">{sub}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — 3D book */}
          {featuredBook && (
            <div className="flex justify-center lg:justify-end items-center">
              <div className="relative">
                {/* Glow */}
                <div className="absolute inset-0 -m-8 rounded-full bg-amber-400/20 blur-3xl pointer-events-none" />

                {/* Book stack shadow */}
                <div className="absolute -bottom-3 -right-3 w-full h-full rounded-lg bg-black/20 translate-x-3 translate-y-3" />
                <div className="absolute -bottom-1.5 -right-1.5 w-full h-full rounded-lg bg-black/15 translate-x-1.5 translate-y-1.5" />

                {/* Main book cover */}
                <div className="book-cover relative w-64 h-80 sm:w-72 sm:h-96 rounded-lg overflow-hidden shadow-book animate-float">
                  {featuredBook.cover_image_url ? (
                    <img
                      src={featuredBook.cover_image_url}
                      alt={featuredBook.title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center">
                      <BookOpen className="w-16 h-16 text-white/20" />
                    </div>
                  )}

                  {/* Cover overlay with title */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <div className="font-mono text-[9px] text-amber-400/80 tracking-widest mb-1">
                      VOL. {featuredBook.volume ?? 1}
                    </div>
                    <h3
                      className="font-display text-white text-base leading-tight"
                      style={{ fontWeight: 700 }}
                    >
                      {featuredBook.title}
                    </h3>
                    <p className="font-body text-white/60 text-xs mt-1">
                      {featuredBook.author}
                    </p>
                  </div>

                  {/* Available badge */}
                  <div className="absolute top-4 right-4">
                    <span className="px-2 py-1 rounded-full bg-emerald-500 text-white font-mono text-[9px] font-medium tracking-wide">
                      AVAILABLE
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Wave bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 80H1440V20C1200 60 900 0 720 20C540 40 240 0 0 20V80Z" fill="#f8fafc" />
        </svg>
      </div>
    </section>
  );
}
