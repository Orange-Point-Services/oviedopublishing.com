import { useState, useEffect } from 'react';
import { Menu, X, BookOpen } from 'lucide-react';

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Catalog', href: '#catalog' },
  { label: 'Materials', href: '#materials' },
  { label: 'About', href: '#about' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [active, setActive] = useState('home');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = ['home', 'catalog', 'materials', 'about', 'contact'];
      for (const id of sections) {
        const el = document.getElementById(id);
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        if (rect.top <= 100 && rect.bottom > 100) {
          setActive(id);
          break;
        }
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const id = href.replace('#', '');
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => handleNavClick('#home')}
            className="flex items-center gap-2.5 group"
          >
            <div className={`w-8 h-8 rounded flex items-center justify-center transition-colors ${
              scrolled ? 'bg-coral-600' : 'bg-white/20'
            }`}>
              <BookOpen className={`w-4 h-4 ${scrolled ? 'text-white' : 'text-white'}`} />
            </div>
            <div className="flex flex-col leading-none">
              <span
                className={`font-display font-700 text-sm tracking-wide transition-colors ${
                  scrolled ? 'text-slate-900' : 'text-white'
                }`}
                style={{ fontWeight: 700 }}
              >
                OVIEDO
              </span>
              <span
                className={`font-mono text-[9px] tracking-widest uppercase transition-colors ${
                  scrolled ? 'text-slate-400' : 'text-white/70'
                }`}
              >
                PUBLISHING
              </span>
            </div>
          </button>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((link) => {
              const id = link.href.replace('#', '');
              const isActive = active === id;
              return (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className={`px-4 py-2 rounded font-body text-sm font-medium transition-all ${
                    scrolled
                      ? isActive
                        ? 'bg-coral-50 text-coral-700'
                        : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                      : isActive
                        ? 'bg-white/20 text-white'
                        : 'text-white/80 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
            <a
              href="https://example.com/buy"
              className={`ml-3 px-5 py-2 rounded font-body text-sm font-semibold transition-all ${
                scrolled
                  ? 'bg-coral-600 text-white hover:bg-coral-700 shadow-sm'
                  : 'bg-white text-coral-700 hover:bg-white/90'
              }`}
            >
              Buy Now
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`md:hidden p-2 rounded transition-colors ${
              scrolled ? 'text-slate-700 hover:bg-slate-100' : 'text-white hover:bg-white/10'
            }`}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile full-screen nav */}
      <div
        className={`fixed inset-0 z-40 bg-slate-950 flex flex-col items-center justify-center transition-all duration-300 md:hidden ${
          mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col items-center gap-2 w-full px-8">
          {NAV_LINKS.map((link, i) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className="w-full py-4 text-center font-display text-2xl font-semibold text-white/80 hover:text-white border-b border-white/10 transition-colors"
              style={{ animationDelay: `${i * 60}ms` }}
            >
              {link.label}
            </button>
          ))}
          <a
            href="https://example.com/buy"
            className="mt-6 w-full py-4 text-center rounded bg-coral-600 text-white font-semibold text-lg hover:bg-coral-700 transition-colors"
          >
            Buy Now
          </a>
        </div>
        <p className="mt-12 font-mono text-xs text-white/30 tracking-widest">
          OVIEDO PUBLISHING · OVIEDO, FL
        </p>
      </div>
    </>
  );
}
