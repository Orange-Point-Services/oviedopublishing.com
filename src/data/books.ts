import type { BookWithDetails } from '../lib/types';

export const BOOKS: BookWithDetails[] = [
  {
    id: 'smb-ai-operations-vol1',
    title: 'The SMB AI Adoption Playbook',
    author: 'David M. Elgueta',
    cover_image_url: '/covers/smb-ai-vol1.jpg',
    status: 'now_available',
    volume: 1,
    isbn: '978-1-7385920-1-0',
    pages: 87,
    description:
      'Volume I: Operations.',
    sort_order: 1,
    created_at: '2026-01-01T00:00:00Z',
    price_formats: [
      { id: 'pf-1', book_id: 'smb-ai-operations-vol1', format: 'paperback', price: 17.99, buy_url: 'https://a.co/d/02K6QhKK', sort_order: 1 },
      { id: 'pf-2', book_id: 'smb-ai-operations-vol1', format: 'ebook', price: 7.49, buy_url: 'https://a.co/d/00EQRSnJ', sort_order: 2 },
    ],
    materials: [
      // { id: 'm-1', book_id: 'smb-ai-operations-vol1', label: 'Vendor evaluation rubric', file_type: 'pdf', chapter_ref: 'Ch. 2', download_url: '#', sort_order: 1 },
      // { id: 'm-2', book_id: 'smb-ai-operations-vol1', label: 'Pilot-program one-pager template', file_type: 'docx', chapter_ref: 'Ch. 4', download_url: '#', sort_order: 2 },
      // { id: 'm-3', book_id: 'smb-ai-operations-vol1', label: 'ROI worksheet', file_type: 'xlsx', chapter_ref: 'Ch. 6', download_url: '#', sort_order: 3 },
      // { id: 'm-4', book_id: 'smb-ai-operations-vol1', label: 'Sample policy documents', file_type: 'zip', chapter_ref: 'Ch. 8', download_url: '#', sort_order: 4 },
    ],
  },
  {
    id: 'smb-ai-vol2',
    title: 'The SMB AI Adoption Playbook',
    author: 'David M. Elgueta',
    cover_image_url: '/covers/smb-ai-vol2.png',
    status: 'coming_soon',
    volume: 2,
    isbn: null,
    pages: 88,
    description:
      'Volume II: Revenue Operations.',
    sort_order: 2,
    created_at: '2026-01-01T00:00:00Z',
    price_formats: [      { id: 'pf-1', book_id: 'smb-ai-operations-vol2', format: 'paperback', price: 17.99, buy_url: 'https://www.amazon.com/dp/B0H521N23H?binding=paperback&ref_=saga_sdp_cft_dsk', sort_order: 1 },
      { id: 'pf-2', book_id: 'smb-ai-operations-vol2', format: 'ebook', price: 7.49, buy_url: 'https://www.amazon.com/dp/B0H521N23H?binding=paperback&ref_=saga_sdp_cft_dsk', sort_order: 2 },
],
    materials: [],
  },
  {
    id: 'smb-ai-vol3',
    title: 'The SMB AI Adoption Playbook',
    author: 'David M. Elgueta',
    cover_image_url: '/covers/smb-ai-vol3.png',
    status: 'coming_soon',
    volume: 3,
    isbn: null,
    pages: 90,
    description:
      'Volume III: Marketing.',
    sort_order: 2,
    created_at: '2026-01-01T00:00:00Z',
    price_formats: [      { id: 'pf-1', book_id: 'smb-ai-operations-vol3', format: 'paperback', price: 17.99, buy_url: 'https://www.amazon.com/dp/B0H521N23H?binding=paperback&ref_=saga_sdp_cft_dsk', sort_order: 1 },
      { id: 'pf-2', book_id: 'smb-ai-operations-vol3', format: 'ebook', price: 7.49, buy_url: 'https://www.amazon.com/dp/B0H521N23H?binding=paperback&ref_=saga_sdp_cft_dsk', sort_order: 2 },
],
    materials: [],
  },
];
