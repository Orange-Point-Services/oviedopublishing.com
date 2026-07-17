import { BOOKS } from '../data/books';

export function useBooks() {
  return { books: BOOKS, loading: false, error: null };
}
