import { BookOpen, ShoppingCart, Clock, ExternalLink } from 'lucide-react';
import type { BookWithDetails, FormatType } from '../lib/supabase';
import { useReveal } from '../lib/useReveal';

interface BookCardProps {
  book: BookWithDetails;
  index: number;
}

const FORMAT_LABELS: Record<FormatType, string> = {
  pdf: 'PDF',
  ebook: 'eBook',
  paperback: 'Paperback',
};

const FORMAT_COLORS: Record<FormatType, string> = {
  pdf: 'bg-blue-50 text-blue-700 hover:bg-blue-100 border-blue-200',
  ebook: 'bg-emerald-50 text-emerald-700 hover:bg-emerald-100 border-emerald-200',
  paperback: 'bg-amber-50 text-amber-700 hover:bg-amber-100 border-amber-200',
};

function Book3DCover({ book }: { book: BookWithDetails }) {
  return (
    <div className="relative group">
      {/* Stack effect */}
      <div className="absolute -bottom-2 -right-2 w-full h-full rounded-lg bg-slate-200 translate-x-2 translate-y-2 rounded-l-sm" />
      <div className="absolute -bottom-1 -right-1 w-full h-full rounded-lg bg-slate-300 translate-x-1 translate-y-1 rounded-l-sm" />

      {/* Cover */}
      <div className="book-cover relative w-48 h-64 sm:w-56 sm:h-72 rounded-lg overflow-hidden shadow-book flex-shrink-0">
        {book.cover_image_url ? (
          <img
            src={book.cover_image_url}
            alt={book.title}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-coral-600 to-amber-500 flex items-center justify-center">
            <BookOpen className="w-12 h-12 text-white/40" />
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-4">
          {book.volume && (
            <div className="font-mono text-[9px] text-amber-400/90 tracking-widest mb-1">
              VOL. {book.volume}
            </div>
          )}
          <div
            className="font-display text-white text-xs leading-tight"
            style={{ fontWeight: 700 }}
          >
            {book.title}
          </div>
        </div>
        {/* Spine effect */}
        <div className="absolute left-0 top-0 bottom-0 w-3 bg-black/20" />
      </div>
    </div>
  );
}

function getComingSoonLabel(book: BookWithDetails): string {
  if (book.status === 'now_available') return 'NOW AVAILABLE';

  // Extract coming soon date from description if available
  const desc = book.description || '';
  if (desc.includes('Winter 2026')) return 'COMING SOON — WINTER 2026';
  if (desc.includes('2027')) return 'COMING SOON — 2027';
  return 'COMING SOON';
}

function BookRow({ book, index }: BookCardProps) {
  const ref = useReveal();
  const isEven = index % 2 === 0;
  const isAvailable = book.status === 'now_available';

  return (
    <article
      ref={ref as React.RefObject<HTMLElement>}
      className={`reveal grid md:grid-cols-2 gap-10 lg:gap-16 items-center ${
        !isEven ? 'md:[&>*:first-child]:order-last' : ''
      }`}
    >
      {/* Cover side */}
      <div className={`flex ${isEven ? 'justify-center md:justify-end' : 'justify-center md:justify-start'}`}>
        <Book3DCover book={book} />
      </div>

      {/* Info side */}
      <div className="space-y-5">
        {/* Meta row */}
        <div className="flex items-center gap-3 flex-wrap">
          {book.volume && (
            <span className="font-mono text-[10px] text-slate-400 tracking-widest uppercase border border-slate-200 rounded px-2 py-0.5">
              Volume {book.volume}
            </span>
          )}
          <span
            className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full font-mono text-[10px] tracking-wide ${
              isAvailable
                ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                : 'bg-amber-50 text-amber-700 border border-amber-200'
            }`}
          >
            {isAvailable ? (
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block" />
            ) : (
              <Clock className="w-2.5 h-2.5" />
            )}
            {getComingSoonLabel(book)}
          </span>
        </div>

        <div>
          <h3
            className="font-display text-2xl sm:text-3xl text-slate-900 leading-tight"
            style={{ fontWeight: 700 }}
          >
            {book.title}
          </h3>
          <p className="font-body text-slate-500 text-sm mt-1">By {book.author}</p>
        </div>

        {book.description && (
          <p className="font-body text-slate-600 leading-relaxed text-sm sm:text-base">
            {book.description}
          </p>
        )}

        {/* Book metadata */}
        <div className="flex gap-4 text-xs font-mono text-slate-400 flex-wrap">
          {book.pages && <span>{book.pages} pages</span>}
          {book.isbn && <span>ISBN {book.isbn}</span>}
        </div>

        {/* Purchase buttons */}
        {isAvailable && book.price_formats.length > 0 && (
          <div>
            <p className="font-mono text-[10px] text-slate-400 tracking-widest uppercase mb-3">
              Buy This Book
            </p>
            <div className="flex flex-wrap gap-2">
              {book.price_formats.map((pf) => (
                <a
                  key={pf.id}
                  href={pf.buy_url ?? '#'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg border font-body text-sm font-medium transition-all ${FORMAT_COLORS[pf.format]}`}
                >
                  <ShoppingCart className="w-3.5 h-3.5" />
                  {FORMAT_LABELS[pf.format]}
                  {pf.price !== null && (
                    <span className="font-mono text-xs opacity-70">
                      ${pf.price.toFixed(2)}
                    </span>
                  )}
                  <ExternalLink className="w-3 h-3 opacity-50" />
                </a>
              ))}
            </div>
          </div>
        )}

        {!isAvailable && (
          <div className="flex items-center gap-2 text-sm text-slate-500 font-body bg-amber-50 border border-amber-100 rounded-lg px-4 py-3">
            <Clock className="w-4 h-4 text-amber-500 flex-shrink-0" />
            Pre-orders and announcements coming soon. Check back or contact us for updates.
          </div>
        )}

        {book.materials.length > 0 && (
          <button
            onClick={() => document.getElementById('materials')?.scrollIntoView({ behavior: 'smooth' })}
            className="text-sm font-medium text-coral-600 hover:text-coral-700 font-body transition-colors underline underline-offset-2"
          >
            {book.materials.length} free companion file{book.materials.length !== 1 ? 's' : ''} available
          </button>
        )}
      </div>
    </article>
  );
}

interface BookShowcaseProps {
  books: BookWithDetails[];
  searchQuery: string;
  loading: boolean;
}

export default function BookShowcase({ books, searchQuery, loading }: BookShowcaseProps) {
  const ref = useReveal();

  const filtered = searchQuery.trim()
    ? books.filter(
        (b) =>
          b.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          b.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
          (b.description ?? '').toLowerCase().includes(searchQuery.toLowerCase())
      )
    : books;

  return (
    <section
      id="catalog"
      ref={ref as React.RefObject<HTMLElement>}
      className="reveal bg-slate-50 light-grid py-20 sm:py-28"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="mb-14">
          <div
            data-coord="37.4 · CAT"
            className="coord-marker font-mono text-xs text-coral-500 tracking-widest uppercase mb-2"
          />
          <h2
            className="font-display text-4xl sm:text-5xl text-slate-900"
            style={{ fontWeight: 700 }}
          >
            Our Catalog
          </h2>
          <p className="mt-3 font-body text-slate-500 max-w-xl">
            Every title ships with practical frameworks, real-world examples, and free downloadable resources.
          </p>
        </div>

        {loading ? (
          <div className="space-y-16">
            {[0, 1].map((i) => (
              <div key={i} className="grid md:grid-cols-2 gap-10 items-center">
                <div className="skeleton h-72 w-56 rounded-lg mx-auto md:ml-auto" />
                <div className="space-y-4">
                  <div className="skeleton h-4 w-24 rounded" />
                  <div className="skeleton h-8 w-3/4 rounded" />
                  <div className="skeleton h-4 w-full rounded" />
                  <div className="skeleton h-4 w-5/6 rounded" />
                </div>
              </div>
            ))}
          </div>
        ) : filtered.length === 0 ? (
          <div className="text-center py-16">
            <BookOpen className="w-12 h-12 text-slate-300 mx-auto mb-4" />
            <p className="font-body text-slate-500">
              No books match "{searchQuery}".{' '}
              <button
                className="text-coral-600 hover:text-coral-700 underline underline-offset-2"
                onClick={() => window.location.reload()}
              >
                Clear search
              </button>
            </p>
          </div>
        ) : (
          <div className="space-y-20">
            {filtered.map((book, i) => (
              <BookRow key={book.id} book={book} index={i} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
