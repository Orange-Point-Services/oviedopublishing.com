import { Mail, MapPin, BookOpen, ArrowUpRight } from 'lucide-react';

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Catalog', href: '#catalog' },
  { label: 'Materials', href: '#materials' },
  { label: 'About', href: '#about' },
];

export default function ContactFooter() {
  return (
    <footer id="contact" className="bg-white border-t border-slate-200">
      {/* Contact section */}
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-10">
        <div className="grid md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-5">
              <div className="w-9 h-9 rounded-lg bg-coral-600 flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-white" />
              </div>
              <div>
                <div
                  className="font-display text-base text-slate-900"
                  style={{ fontWeight: 700 }}
                >
                  Oviedo Publishing
                </div>
                <div className="font-mono text-[9px] text-slate-400 tracking-widest uppercase">
                  Practical Handbooks
                </div>
              </div>
            </div>
            <p className="font-body text-sm text-slate-500 leading-relaxed max-w-xs">
              A small press publishing practical, mid-length handbooks for small and mid-sized businesses,
              with free companion materials.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3
              className="font-display text-sm text-slate-900 mb-5 tracking-wide"
              style={{ fontWeight: 600 }}
            >
              Get in Touch
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-coral-500 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-mono text-[10px] text-slate-400 tracking-wide uppercase mb-0.5">
                    General Inquiries
                  </p>
                  <a
                    href="mailto:hello@oviedopublishing.com"
                    className="font-body text-sm text-slate-700 hover:text-coral-600 transition-colors"
                  >
                    hello@oviedopublishing.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-coral-500 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-mono text-[10px] text-slate-400 tracking-wide uppercase mb-0.5">
                    Author / Press
                  </p>
                  <a
                    href="mailto:press@oviedopublishing.com"
                    className="font-body text-sm text-slate-700 hover:text-coral-600 transition-colors"
                  >
                    press@oviedopublishing.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-coral-500 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-mono text-[10px] text-slate-400 tracking-wide uppercase mb-0.5">
                    Materials Support
                  </p>
                  <a
                    href="mailto:materials@oviedopublishing.com"
                    className="font-body text-sm text-slate-700 hover:text-coral-600 transition-colors"
                  >
                    materials@oviedopublishing.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-coral-500 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-mono text-[10px] text-slate-400 tracking-wide uppercase mb-0.5">
                    Mailing Address
                  </p>
                  <address className="font-body text-sm text-slate-700 not-italic leading-relaxed">
                    Oviedo Publishing LLC<br />
                    PO Box 1024<br />
                    Oviedo, FL 32765
                  </address>
                </div>
              </li>
            </ul>
          </div>

          {/* Navigation */}
          <div>
            <h3
              className="font-display text-sm text-slate-900 mb-5 tracking-wide"
              style={{ fontWeight: 600 }}
            >
              Navigation
            </h3>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => {
                      const id = link.href.replace('#', '');
                      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="font-body text-sm text-slate-600 hover:text-coral-600 transition-colors flex items-center gap-1.5 group"
                  >
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <h3
                className="font-display text-sm text-slate-900 mb-3 tracking-wide"
                style={{ fontWeight: 600 }}
              >
                Current Catalog
              </h3>
              <div className="space-y-2">
                <p className="font-body text-xs text-slate-500">
                  The SMB AI Adoption Playbook, Vol. 1 — Available Now
                </p>
                <p className="font-body text-xs text-slate-400">
                  The SMB AI Adoption Playbook, Vol. 2 — Coming Summer 2026
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-mono text-[10px] text-slate-400 tracking-wide">
            © {new Date().getFullYear()} OVIEDO PUBLISHING LLC · OVIEDO, FL 32765
          </p>
          <div className="flex items-center gap-4">
            <a
              href="mailto:hello@oviedopublishing.com"
              className="font-mono text-[10px] text-slate-400 hover:text-coral-500 tracking-wide transition-colors"
            >
              CONTACT
            </a>
            <span className="text-slate-200">·</span>
            <span className="font-mono text-[10px] text-slate-400 tracking-wide">
              ALL MATERIALS FREE TO USE
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
