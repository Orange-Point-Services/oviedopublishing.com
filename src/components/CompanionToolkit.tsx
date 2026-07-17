import { useState } from 'react';
import {
  Search,
  FileText,
  FileSpreadsheet,
  FileType2,
  Archive,
  Download,
  Package,
  ChevronDown,
  ChevronUp,
} from 'lucide-react';
import type { BookWithDetails, FileType } from '../lib/types';
import { useReveal } from '../lib/useReveal';

interface CompanionToolkitProps {
  books: BookWithDetails[];
  searchQuery: string;
  loading: boolean;
}

const FILE_ICONS: Record<FileType, typeof FileText> = {
  pdf: FileText,
  xlsx: FileSpreadsheet,
  docx: FileType2,
  zip: Archive,
};

const FILE_COLORS: Record<FileType, string> = {
  pdf: 'text-red-600 bg-red-50 border-red-100',
  xlsx: 'text-emerald-600 bg-emerald-50 border-emerald-100',
  docx: 'text-blue-600 bg-blue-50 border-blue-100',
  zip: 'text-amber-600 bg-amber-50 border-amber-100',
};

const FILE_BADGE: Record<FileType, string> = {
  pdf: 'bg-red-50 text-red-700 border border-red-200',
  xlsx: 'bg-emerald-50 text-emerald-700 border border-emerald-200',
  docx: 'bg-blue-50 text-blue-700 border border-blue-200',
  zip: 'bg-amber-50 text-amber-700 border border-amber-200',
};

interface BookMaterialsGroupProps {
  book: BookWithDetails;
  searchQuery: string;
}

function BookMaterialsGroup({ book, searchQuery }: BookMaterialsGroupProps) {
  const [expanded, setExpanded] = useState(true);

  const filteredMaterials = searchQuery.trim()
    ? book.materials.filter(
        (m) =>
          m.label.toLowerCase().includes(searchQuery.toLowerCase()) ||
          (m.chapter_ref ?? '').toLowerCase().includes(searchQuery.toLowerCase()) ||
          m.file_type.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : book.materials;

  if (filteredMaterials.length === 0) return null;

  return (
    <div className="border border-slate-200 rounded-xl overflow-hidden bg-white shadow-card">
      {/* Group header */}
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full flex items-center justify-between px-6 py-4 bg-slate-50 hover:bg-slate-100 transition-colors"
      >
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg overflow-hidden bg-slate-200 flex-shrink-0">
            {book.cover_image_url ? (
              <img
                src={book.cover_image_url}
                alt={book.title}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                <Package className="w-4 h-4 text-slate-400" />
              </div>
            )}
          </div>
          <div className="text-left">
            <p
              className="font-display text-sm text-slate-900"
              style={{ fontWeight: 600 }}
            >
              {book.title}
              {book.volume ? `, Vol. ${book.volume}` : ''}
            </p>
            <p className="font-mono text-[10px] text-slate-400 tracking-wide">
              {filteredMaterials.length} companion file{filteredMaterials.length !== 1 ? 's' : ''}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <a
            href="#"
            onClick={(e) => e.stopPropagation()}
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-coral-600 text-white font-body text-xs font-semibold hover:bg-coral-700 transition-colors"
          >
            <Download className="w-3.5 h-3.5" />
            Download All
          </a>
          {expanded ? (
            <ChevronUp className="w-4 h-4 text-slate-400" />
          ) : (
            <ChevronDown className="w-4 h-4 text-slate-400" />
          )}
        </div>
      </button>

      {/* Material rows */}
      {expanded && (
        <div className="divide-y divide-slate-100">
          {filteredMaterials.map((material) => {
            const Icon = FILE_ICONS[material.file_type];
            return (
              <div
                key={material.id}
                className="flex items-center gap-4 px-6 py-4 hover:bg-slate-50 transition-colors group"
              >
                <div
                  className={`w-9 h-9 rounded-lg border flex items-center justify-center flex-shrink-0 ${FILE_COLORS[material.file_type]}`}
                >
                  <Icon className="w-4 h-4" />
                </div>

                <div className="flex-1 min-w-0">
                  <p className="font-body text-sm text-slate-800 font-medium truncate">
                    {material.label}
                  </p>
                  <div className="flex items-center gap-2 mt-0.5">
                    {material.chapter_ref && (
                      <span className="font-mono text-[10px] text-slate-400 tracking-wide">
                        {material.chapter_ref}
                      </span>
                    )}
                    <span
                      className={`font-mono text-[9px] px-1.5 py-0.5 rounded tracking-widest uppercase ${FILE_BADGE[material.file_type]}`}
                    >
                      {material.file_type}
                    </span>
                  </div>
                </div>

                <a
                  href={material.download_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-200 text-slate-600 font-body text-xs font-medium hover:bg-coral-600 hover:text-white hover:border-coral-600 transition-all opacity-0 group-hover:opacity-100"
                >
                  <Download className="w-3 h-3" />
                  Download
                </a>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default function CompanionToolkit({ books, searchQuery, loading }: CompanionToolkitProps) {
  const ref = useReveal();
  const [localSearch, setLocalSearch] = useState(searchQuery);

  const effectiveSearch = localSearch || searchQuery;

  const booksWithMaterials = books.filter((b) => b.materials.length > 0);

  return (
    <section
      id="materials"
      ref={ref as React.RefObject<HTMLElement>}
      className="reveal bg-white border-t border-slate-100 py-20 sm:py-28"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-10">
          <div
            data-coord="39.2 · MAT"
            className="coord-marker font-mono text-xs text-coral-500 tracking-widest uppercase mb-2"
          />
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
            <div>
              <h2
                className="font-display text-4xl sm:text-5xl text-slate-900"
                style={{ fontWeight: 700 }}
              >
                Companion Toolkit
              </h2>
              <p className="mt-3 font-body text-slate-500 max-w-xl">
                Every book comes with free downloadable materials — worksheets, scorecards,
                checklists, and more. No sign-up required.
              </p>
            </div>

            {/* Search */}
            <div className="relative flex-shrink-0 w-full sm:w-72">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="text"
                value={localSearch}
                onChange={(e) => setLocalSearch(e.target.value)}
                placeholder="Search resources..."
                className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-slate-200 font-body text-sm focus:outline-none focus:ring-2 focus:ring-coral-500/30 focus:border-coral-400 transition-all"
              />
            </div>
          </div>
        </div>

        {loading ? (
          <div className="space-y-4">
            {[0, 1].map((i) => (
              <div key={i} className="skeleton h-48 rounded-xl" />
            ))}
          </div>
        ) : booksWithMaterials.length === 0 ? (
          <div className="text-center py-16 border border-dashed border-slate-200 rounded-xl">
            <Package className="w-12 h-12 text-slate-300 mx-auto mb-4" />
            <p className="font-body text-slate-500">
              Companion materials will be listed here when available.
            </p>
          </div>
        ) : (
          <div className="space-y-5">
            {booksWithMaterials.map((book) => (
              <BookMaterialsGroup
                key={book.id}
                book={book}
                searchQuery={effectiveSearch}
              />
            ))}
          </div>
        )}

        {/* Free note */}
        <div className="mt-10 flex items-start gap-3 p-5 rounded-xl bg-emerald-50 border border-emerald-100">
          <div className="w-8 h-8 rounded-lg bg-emerald-500 flex items-center justify-center flex-shrink-0">
            <Download className="w-4 h-4 text-white" />
          </div>
          <div>
            <p
              className="font-body text-sm text-emerald-800 font-semibold"
            >
              All materials are 100% free
            </p>
            <p className="font-body text-sm text-emerald-700 mt-0.5">
              No account required. Download directly and use immediately.
              Questions about a resource? Email{' '}
              <a
                href="mailto:materials@oviedopublishing.com"
                className="underline underline-offset-2 hover:text-emerald-900"
              >
                materials@oviedopublishing.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
