export type BookStatus = 'now_available' | 'coming_soon';
export type FormatType = 'pdf' | 'ebook' | 'paperback';
export type FileType = 'pdf' | 'xlsx' | 'docx' | 'zip';

export interface Book {
  id: string;
  title: string;
  author: string;
  cover_image_url: string | null;
  status: BookStatus;
  volume: number | null;
  isbn: string | null;
  pages: number | null;
  description: string | null;
  sort_order: number;
  created_at: string;
}

export interface PriceFormat {
  id: string;
  book_id: string;
  format: FormatType;
  price: number | null;
  buy_url: string | null;
  sort_order: number;
}

export interface Material {
  id: string;
  book_id: string;
  label: string;
  file_type: FileType;
  chapter_ref: string | null;
  download_url: string;
  sort_order: number;
}

export interface BookWithDetails extends Book {
  price_formats: PriceFormat[];
  materials: Material[];
}
