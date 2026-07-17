import { BookOpen, ExternalLink } from 'lucide-react';
import type { BookWithDetails } from '../lib/types';
import { useReveal } from '../lib/useReveal';

interface AuthorSectionProps {
  books: BookWithDetails[];
}

export default function AuthorSection({ books }: AuthorSectionProps) {
  const ref = useReveal();

  return (
    <section
      id="author"
      ref={ref as React.RefObject<HTMLElement>}
      className="reveal bg-white py-20 sm:py-28 border-t border-slate-100"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-14 items-start">
          {/* Author info */}
          <div>
            <div
              data-coord="38.1 · AUT"
              className="coord-marker font-mono text-xs text-coral-500 tracking-widest uppercase mb-2"
            />
            <h2
              className="font-display text-4xl sm:text-5xl text-slate-900 mb-6"
              style={{ fontWeight: 700 }}
            >
              The Author
            </h2>

            <div className="flex items-start gap-5 mb-8">
              {/* Profile photo placeholder */}
              <div className="relative flex-shrink-0">
                <img
                  src="https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=1"
                  alt="David M. Elgueta"
                  className="w-20 h-20 rounded-xl object-cover shadow-card"
                />
                <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-coral-600 flex items-center justify-center">
                  <span className="font-display text-white text-[9px] font-bold">DE</span>
                </div>
              </div>

              <div>
                <h3
                  className="font-display text-xl text-slate-900"
                  style={{ fontWeight: 700 }}
                >
                  David M. Elgueta
                </h3>
                <p className="font-mono text-xs text-slate-400 tracking-wide mt-0.5">
                  FOUNDER · OVIEDO PUBLISHING
                </p>
              </div>
            </div>

            <div className="space-y-4 font-body text-slate-600 leading-relaxed">
              <p>
                David M. Elgueta is a business strategist and technology advisor based in Oviedo, Florida.
                With more than a decade working alongside small and mid-sized businesses, he has helped
                hundreds of organizations navigate digital transformation, operational efficiency, and
                emerging technology adoption.
              </p>
              <p>
                His writing philosophy is simple: practical over theoretical, action over analysis.
                Every handbook is designed to be read in a weekend and implemented the week after —
                no filler chapters, no academic hedging, just clear frameworks and concrete steps.
              </p>
              <p>
                When not writing, David consults with SMBs across Central Florida and speaks at
                regional business events on AI strategy and operational modernization.
              </p>
            </div>
          </div>

          {/* Book cards */}
          <div>
            <h3
              className="font-display text-lg text-slate-700 mb-6"
              style={{ fontWeight: 600 }}
            >
              Published Works
            </h3>
            <div className="space-y-4">
              {books.map((book) => (
                <button
                  key={book.id}
                  onClick={() =>
                    document.getElementById('catalog')?.scrollIntoView({ behavior: 'smooth' })
                  }
                  className="w-full text-left p-5 rounded-xl border border-slate-200 bg-slate-50 hover:bg-white hover:border-coral-200 hover:shadow-card transition-all group"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg overflow-hidden flex-shrink-0 bg-slate-200">
                      {book.cover_image_url ? (
                        <img
                          src={book.cover_image_url}
                          alt={book.title}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center">
                          <BookOpen className="w-5 h-5 text-slate-400" />
                        </div>
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2">
                        <p className="font-display text-sm text-slate-900 font-semibold leading-tight group-hover:text-coral-700 transition-colors">
                          {book.title}
                          {book.volume && `, Vol. ${book.volume}`}
                        </p>
                        <ExternalLink className="w-3.5 h-3.5 text-slate-300 group-hover:text-coral-500 flex-shrink-0 transition-colors" />
                      </div>
                      <p className="font-mono text-[10px] text-slate-400 mt-1 tracking-wide uppercase">
                        {book.status === 'now_available' ? 'Available now' : 'Coming Summer 2026'}
                        {book.pages ? ` · ${book.pages} pages` : ''}
                      </p>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
