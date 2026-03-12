"use server";

import { supabaseAdmin } from "@/lib/supabase/admin";

export async function fetchMoreArticles(startIndex: number) {
  const { data, error } = await supabaseAdmin
    .from("articles")
    .select("id, slug, title, excerpt, cover_image, category, created_at, read_time, author")
    .order("created_at", { ascending: false })
    .range(startIndex, startIndex + 8);

  if (error) {
    console.error("Error fetching more articles:", error);
    return [];
  }

  return data;
}
