/**
 * Shared Article type used across the application.
 * Mirrors the `articles` table in Supabase.
 */
export interface Article {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content?: string;
  cover_image: string | null;
  category: string;
  created_at: string;
  read_time: number;
  author?: string;
}
