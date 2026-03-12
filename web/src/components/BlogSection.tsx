"use client";

import { motion } from "framer-motion";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function BlogSection({ articles = [] }: { articles?: any[] | null }) {
    // Fallback posts só para exibição no caso de erro ou sem posts no DB
    const posts = (articles && articles.length > 0) ? articles : [
        {
            category: "Segurança Condominial",
            title: "Como preparar seu condomínio para o período de férias",
            excerpt: "Com o aumento de viagens, saiba quais medidas adotar na portaria e no controle de acesso para garantir a tranquilidade dos moradores.",
            created_at: "2024-11-14T00:00:00Z",
            read_time: 4,
            cover_image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=600&auto=format&fit=crop",
            slug: "#"
        }
    ];

    const fallbackImage = "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80";

    return (
        <section id="blog" className="py-24 bg-[#f4f5f8] relative border-b border-slate-200 overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[radial-gradient(ellipse_at_top_right,var(--color-accent)_0%,transparent_60%)] opacity-[0.05] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[radial-gradient(circle_at_bottom_left,var(--color-accent)_0%,transparent_50%)] opacity-[0.03] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 sm:px-12 md:px-20 lg:px-24 relative z-10 w-full">
                
                {/* Header Row */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 sm:mb-16 gap-6">
                    <div>
                        <motion.h2 
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="text-sm uppercase tracking-[0.2em] font-bold text-[var(--color-accent)] mb-4"
                        >
                            Nosso Blog
                        </motion.h2>
                        <motion.h3 
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="text-3xl sm:text-4xl md:text-5xl font-black text-[#111322] tracking-tighter"
                        >
                            Insights & Artigos
                        </motion.h3>
                    </div>
                    
                        <Link href="/blog" className="group flex items-center gap-2 text-[var(--color-accent)] font-bold text-sm sm:text-base hover:text-[#111322] transition-colors">
                            Ver todos os artigos
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {posts.map((post, i) => (
                        <Link href={`/blog/${post.slug}`} key={post.id || i} className="block group">
                            <motion.article
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: i * 0.1 }}
                                className="bg-[#fafafc] border border-slate-200/60 shadow-sm rounded-2xl overflow-hidden hover:border-slate-300 hover:shadow-lg transition-all flex flex-col h-full"
                            >
                                {/* Image Container */}
                                <div className="relative w-full h-48 sm:h-56 overflow-hidden">
                                    <img 
                                        src={post.cover_image || post.image || fallbackImage} 
                                        alt={post.title}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                    />
                                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md border border-slate-200 px-3 py-1 rounded-full shadow-sm">
                                        <span className="text-xs font-bold text-[var(--color-accent)] uppercase tracking-wide">
                                            {post.category || "Segurança"}
                                        </span>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-6 sm:p-8 flex flex-col flex-1">
                                    <h4 className="text-lg sm:text-xl font-bold text-[#111322] mb-3 group-hover:text-[var(--color-accent)] transition-colors leading-tight line-clamp-2">
                                        {post.title}
                                    </h4>
                                    <p className="text-sm text-slate-600 mb-6 flex-1 line-clamp-3 leading-relaxed">
                                        {post.excerpt}
                                    </p>
                                    
                                    <div className="flex items-center gap-4 text-xs text-slate-500 font-medium pt-4 border-t border-slate-100">
                                        <span className="flex items-center gap-1.5">
                                            <Calendar className="w-3.5 h-3.5" /> 
                                            {post.created_at ? new Date(post.created_at).toLocaleDateString('pt-BR', { day: '2-digit', month: 'short', year: 'numeric' }) : post.date}
                                        </span>
                                        <span className="flex items-center gap-1.5">
                                            <Clock className="w-3.5 h-3.5" /> 
                                            {post.read_time || post.readTime || 5} {(post.read_time || typeof post.read_time === 'number') ? 'min' : ''}
                                        </span>
                                    </div>
                                </div>
                            </motion.article>
                        </Link>
                    ))}
                </div>

            </div>
        </section>
    );
}
