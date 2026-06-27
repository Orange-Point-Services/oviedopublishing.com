import type { BookWithDetails } from './supabase';

const BOOKS: BookWithDetails[] = [
  {
    id: 'smb-ai-operations-vol1',
    title: 'The SMB AI Adoption Playbook',
    author: 'Marco Oviedo',
    cover_image_url: '/covers/smb-ai-vol1.jpg',
    status: 'now_available',
    volume: 1,
    isbn: '978-1-7385920-1-0',
    pages: 248,
    description:
      'Volume I: Operations. A field guide for owner-operators introducing AI tools to a 5-to-50-person business.',
    sort_order: 1,
    created_at: '2026-01-01T00:00:00Z',
    price_formats: [
      { id: 'pf-1', book_id: 'smb-ai-operations-vol1', format: 'paperback', price: 2499, buy_url: null, sort_order: 1 },
      { id: 'pf-2', book_id: 'smb-ai-operations-vol1', format: 'ebook', price: 999, buy_url: null, sort_order: 2 },
    ],
    materials: [
      { id: 'm-1', book_id: 'smb-ai-operations-vol1', label: 'Vendor evaluation rubric', file_type: 'pdf', chapter_ref: 'Ch. 2', download_url: '#', sort_order: 1 },
      { id: 'm-2', book_id: 'smb-ai-operations-vol1', label: 'Pilot-program one-pager template', file_type: 'docx', chapter_ref: 'Ch. 4', download_url: '#', sort_order: 2 },
      { id: 'm-3', book_id: 'smb-ai-operations-vol1', label: 'ROI worksheet', file_type: 'xlsx', chapter_ref: 'Ch. 6', download_url: '#', sort_order: 3 },
      { id: 'm-4', book_id: 'smb-ai-operations-vol1', label: 'Sample policy documents', file_type: 'zip', chapter_ref: 'Ch. 8', download_url: '#', sort_order: 4 },
    ],
  },
  {
    id: 'smb-ai-vol2',
    title: 'The SMB AI Adoption Playbook',
    author: 'Marco Oviedo',
    cover_image_url: null,
    status: 'coming_soon',
    volume: 2,
    isbn: null,
    pages: null,
    description:
      'Volume II. Coming Winter 2026.',
    sort_order: 2,
    created_at: '2026-01-01T00:00:00Z',
    price_formats: [],
    materials: [],
  },
  {
    id: 'smb-ai-vol3',
    title: 'The SMB AI Adoption Playbook',
    author: 'Marco Oviedo',
    cover_image_url: null,
    status: 'coming_soon',
    volume: 3,
    isbn: null,
    pages: null,
    description:
      'Volume III. Coming 2027.',
    sort_order: 3,
    created_at: '2026-01-01T00:00:00Z',
    price_formats: [],
    materials: [],
  },
];

export function useBooks() {
  return { books: BOOKS, loading: false, error: null };
}
