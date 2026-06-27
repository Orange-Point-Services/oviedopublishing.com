import { useState } from 'react';
import { useBooks } from './lib/useBooks';
import Navbar from './components/Navbar';
import NavRail from './components/NavRail';
import Hero from './components/Hero';
import StatsBar from './components/StatsBar';
import BookShowcase from './components/BookShowcase';
import AuthorSection from './components/AuthorSection';
import CompanionToolkit from './components/CompanionToolkit';
import About from './components/About';
import ContactFooter from './components/ContactFooter';

export default function App() {
  const { books, loading, error } = useBooks();
  const [searchQuery, setSearchQuery] = useState('');

  const featuredBook = books.find((b) => b.status === 'now_available') ?? books[0] ?? null;
  const totalMaterials = books.reduce((sum, b) => sum + b.materials.length, 0);

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <div className="text-center max-w-md px-6">
          <div className="w-14 h-14 rounded-xl bg-coral-50 flex items-center justify-center mx-auto mb-5">
            <span className="text-2xl">!</span>
          </div>
          <h2 className="font-display text-xl text-slate-900 mb-2" style={{ fontWeight: 700 }}>
            Unable to load catalog
          </h2>
          <p className="font-body text-slate-500 text-sm">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="mt-6 px-5 py-2.5 rounded-lg bg-coral-600 text-white font-body text-sm font-medium hover:bg-coral-700 transition-colors"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="font-body">
      <Navbar />
      <NavRail />

      <Hero
        featuredBook={featuredBook}
        onSearch={setSearchQuery}
        bookCount={books.length}
      />

      <StatsBar
        bookCount={books.length}
        materialCount={totalMaterials}
      />

      <BookShowcase
        books={books}
        searchQuery={searchQuery}
        loading={loading}
      />

      <AuthorSection books={books} />

      <CompanionToolkit
        books={books}
        searchQuery={searchQuery}
        loading={loading}
      />

      <About />

      <ContactFooter />
    </div>
  );
}
