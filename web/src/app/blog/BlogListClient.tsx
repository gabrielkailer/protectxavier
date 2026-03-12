"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { Calendar, Clock, Loader2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { fetchMoreArticles } from "./actions";
import type { Article } from "@/types/article";

export function BlogListClient({ initialArticles }: { initialArticles: Article[] }) {
  const [articles, setArticles] = useState<Article[]>(initialArticles);
  const [loadingMore, setLoadingMore] = useState(false);
  const [hasMore, setHasMore] = useState(initialArticles.length >= 9); // Se vieram 9 na primeira batida, provavelmente tem mais

  const loadMoreArticles = useCallback(async () => {
    if (loadingMore || !hasMore) return;
    
    setLoadingMore(true);
    const lastArticleIndex = articles.length;

    try {
      const data = await fetchMoreArticles(lastArticleIndex);

      if (data && data.length > 0) {
        setArticles(prev => [...prev, ...data]);
        if (data.length < 9) {
          setHasMore(false); // Não vieram os 9 completos, então acabou
        }
      } else {
        setHasMore(false);
      }
    } catch (err) {
      console.error("Erro ao carregar mais artigos:", err);
    } finally {
      setLoadingMore(false);
    }
  }, [articles.length, hasMore, loadingMore]);

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {articles.map((article, i) => (
          <Link href={`/blog/${article.slug}`} key={article.id} className="block group">
            <motion.article
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: (i % 9) * 0.1 }} // Anima apenas os novos da página atual
                className="bg-[#fafafc] border border-slate-200/60 shadow-sm rounded-2xl overflow-hidden hover:border-[var(--color-accent)]/50 hover:shadow-xl transition-all flex flex-col h-full"
            >
                {/* Image Container */}
                <div className="relative w-full h-56 overflow-hidden bg-slate-100">
                    {/* Imagem Padrão / Fallback caso não tenha cover_image */}
                    <img 
                        src={article.cover_image || "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80"} 
                        alt={article.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        loading={i < 4 ? "eager" : "lazy"} // Eager load first ones
                    />
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md border border-slate-200 px-3 py-1 rounded-full shadow-sm">
                        <span className="text-xs font-bold text-[var(--color-accent)] uppercase tracking-wide">
                            {article.category || "Segurança"}
                        </span>
                    </div>
                </div>

                {/* Content */}
                <div className="p-6 sm:p-8 flex flex-col flex-1">
                    <h4 className="text-xl font-bold text-[#111322] mb-3 group-hover:text-[var(--color-accent)] transition-colors leading-tight line-clamp-2">
                        {article.title}
                    </h4>
                    <p className="text-sm text-slate-600 mb-6 flex-1 line-clamp-3 leading-relaxed">
                        {article.excerpt}
                    </p>
                    
                    <div className="flex items-center gap-4 text-xs text-slate-500 font-medium pt-4 border-t border-slate-100">
                        <span className="flex items-center gap-1.5">
                            <Calendar className="w-3.5 h-3.5" /> 
                            {new Date(article.created_at).toLocaleDateString('pt-BR', { day: '2-digit', month: 'short', year: 'numeric' })}
                        </span>
                        <span className="flex items-center gap-1.5">
                            <Clock className="w-3.5 h-3.5" /> 
                            {article.read_time || 4} min
                        </span>
                    </div>
                </div>
            </motion.article>
          </Link>
        ))}
      </div>

      {hasMore && (
        <div className="mt-16 flex justify-center">
            <button
                onClick={loadMoreArticles}
                disabled={loadingMore}
                className="flex items-center gap-2 bg-[#111322] hover:bg-[#1a1d2e] text-white px-8 py-3.5 rounded-xl font-bold transition-all disabled:opacity-70 disabled:cursor-not-allowed shadow-[0_4px_14px_0_rgba(17,19,34,0.39)] hover:shadow-[0_6px_20px_rgba(17,19,34,0.23)] hover:-translate-y-0.5"
            >
                {loadingMore ? (
                    <><Loader2 className="w-5 h-5 animate-spin text-[var(--color-accent)]" /> Carregando...</>
                ) : (
                    "Ler mais artigos"
                )}
            </button>
        </div>
      )}
    </div>
  );
}
