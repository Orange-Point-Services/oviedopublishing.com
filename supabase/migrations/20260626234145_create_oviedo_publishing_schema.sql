/*
# Oviedo Publishing — Initial Schema

## Summary
Creates the three core tables for the Oviedo Publishing marketing site:
books, price_formats, and materials. This is a single-tenant public site
(no user login), so all RLS policies use `TO anon, authenticated` with
`USING (true)` for reads and `WITH CHECK (true)` for writes (admin content
only, no sensitive user data).

## New Tables

### books
Represents a published or forthcoming book title.
- id: UUID primary key
- title: Book title
- author: Author full name
- cover_image_url: URL to the cover image
- status: "now_available" | "coming_soon"
- volume: Volume number (nullable)
- isbn: ISBN string (nullable)
- pages: Page count (nullable)
- description: Long-form description
- sort_order: Integer for display ordering
- created_at: Timestamp

### price_formats
Per-book purchase options (PDF, eBook, Paperback).
- id: UUID primary key
- book_id: FK → books.id
- format: "pdf" | "ebook" | "paperback"
- price: Numeric price (nullable for free/TBD)
- buy_url: Purchase URL (nullable)
- sort_order: Integer for display ordering within a book

### materials
Free companion files downloadable per book.
- id: UUID primary key
- book_id: FK → books.id
- label: Display name for the file
- file_type: "pdf" | "xlsx" | "docx" | "zip"
- chapter_ref: Optional chapter reference string
- download_url: URL to the file
- sort_order: Integer for display ordering within a book

## Security
- RLS enabled on all tables
- Public read access (anon + authenticated) — this is a public marketing site
- No write access from the frontend (data managed via Supabase dashboard / migrations)
*/

-- books
CREATE TABLE IF NOT EXISTS books (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  author text NOT NULL DEFAULT 'David M. Elgueta',
  cover_image_url text,
  status text NOT NULL DEFAULT 'now_available' CHECK (status IN ('now_available', 'coming_soon')),
  volume integer,
  isbn text,
  pages integer,
  description text,
  sort_order integer NOT NULL DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE books ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "public_select_books" ON books;
CREATE POLICY "public_select_books" ON books FOR SELECT
  TO anon, authenticated USING (true);

-- price_formats
CREATE TABLE IF NOT EXISTS price_formats (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  book_id uuid NOT NULL REFERENCES books(id) ON DELETE CASCADE,
  format text NOT NULL CHECK (format IN ('pdf', 'ebook', 'paperback')),
  price numeric(8,2),
  buy_url text,
  sort_order integer NOT NULL DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE price_formats ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "public_select_price_formats" ON price_formats;
CREATE POLICY "public_select_price_formats" ON price_formats FOR SELECT
  TO anon, authenticated USING (true);

-- materials
CREATE TABLE IF NOT EXISTS materials (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  book_id uuid NOT NULL REFERENCES books(id) ON DELETE CASCADE,
  label text NOT NULL,
  file_type text NOT NULL CHECK (file_type IN ('pdf', 'xlsx', 'docx', 'zip')),
  chapter_ref text,
  download_url text NOT NULL,
  sort_order integer NOT NULL DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE materials ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "public_select_materials" ON materials;
CREATE POLICY "public_select_materials" ON materials FOR SELECT
  TO anon, authenticated USING (true);

-- indexes
CREATE INDEX IF NOT EXISTS books_sort_order_idx ON books(sort_order);
CREATE INDEX IF NOT EXISTS price_formats_book_id_idx ON price_formats(book_id);
CREATE INDEX IF NOT EXISTS materials_book_id_idx ON materials(book_id);
