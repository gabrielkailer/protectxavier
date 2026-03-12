import { createClient as createServerClient } from "@/utils/supabase/server";
import { createClient } from "@supabase/supabase-js";
import { notFound } from "next/navigation";

export const dynamic = 'force-dynamic';
export const revalidate = 0;
export const fetchCache = 'force-no-store';
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Calendar, Clock, User, Share2, Facebook, Twitter, Linkedin, ArrowLeft } from "lucide-react";
import Markdown from "react-markdown";
import Link from "next/link";
import { TableOfContents } from "./TableOfContents"; // Um client component pro sumário

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  
  const supabaseAdmin = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
  );

  const { data: article } = await supabaseAdmin
    .from("articles")
    .select("title, excerpt, cover_image")
    .eq("slug", resolvedParams.slug)
    .single();

  if (!article) return { title: "Artigo não encontrado" };

  return {
    title: `${article.title} | Protect Xavier Blog`,
    description: article.excerpt,
    openGraph: {
      images: [article.cover_image || ""],
    },
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  
  const supabaseAdmin = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
  );
  
  // Busca o artigo pelo SLUG
  const { data: article, error } = await supabaseAdmin
    .from("articles")
    .select("*")
    .eq("slug", resolvedParams.slug)
    .single();

  if (error || !article) {
    notFound();
  }

  // Busca 3 artigos relacionados da mesma categoria (excluindo este)
  const { data: relatedArticles } = await supabaseAdmin
    .from("articles")
    .select("id, slug, title, cover_image, category, created_at")
    .eq("category", article.category)
    .neq("id", article.id)
    .limit(3);

  const fallbackImage = "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80";

  return (
    <main className="min-h-screen bg-[#f4f5f8] relative w-full overflow-x-hidden flex flex-col">
      <Header />

      {/* Hero Section (A Imagem de Capa e as Infos) */}
      <section className="relative w-full h-auto min-h-[60vh] md:min-h-[70vh] flex items-end">
        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full">
            <img 
                src={article.cover_image || fallbackImage} 
                className="w-full h-full object-cover" 
                alt={article.title}
            />
            {/* Overlay Escuro com Gradiente para leitura do texto */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#111322] via-[#111322]/80 to-transparent" />
        </div>

        <div className="relative z-10 w-full max-w-4xl mx-auto px-6 sm:px-12 md:px-20 lg:px-24 pb-16 pt-32 sm:pt-40">
            <Link href="/blog" className="inline-flex items-center gap-2 text-[var(--color-accent)] font-semibold text-sm mb-8 hover:text-white transition-colors">
                <ArrowLeft className="w-4 h-4" /> Voltar para o Blog
            </Link>

            <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm font-bold text-white mb-6">
                <span className="bg-[var(--color-accent)] text-[#111322] px-3 py-1 rounded-full uppercase tracking-wider">
                    {article.category || "Mercado"}
                </span>
                <span className="flex items-center gap-1.5 text-slate-300">
                    <Calendar className="w-4 h-4" /> 
                    {new Date(article.created_at).toLocaleDateString('pt-BR', { day: '2-digit', month: 'long', year: 'numeric' })}
                </span>
                <span className="flex items-center gap-1.5 text-slate-300">
                    <Clock className="w-4 h-4" /> {article.read_time || 5} min de leitura
                </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.1] mb-6 tracking-tight">
                {article.title}
            </h1>

            <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-slate-800 border-2 border-[var(--color-accent)] flex items-center justify-center">
                    <User className="w-5 h-5 text-slate-300" />
                </div>
                <div>
                    <p className="text-sm font-bold text-white">{article.author || "Equipe Protect Xavier"}</p>
                    <p className="text-xs text-slate-400">Inteligência Estratégica</p>
                </div>
            </div>
        </div>
      </section>

      {/* Container Principal do Corpo do Artigo */}
      <section className="flex-1 w-full max-w-7xl mx-auto px-6 sm:px-12 py-16 flex flex-col lg:flex-row gap-16 relative">
        
        {/* Table of Contents Lateral (Aparece apenas em Desktop LG+) */}
        <aside className="hidden lg:block w-72 flex-shrink-0">
           <div className="sticky top-32">
               <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-4">Neste Artigo</h3>
               <TableOfContents content={article.content} />
           </div>
        </aside>

        {/* Corpo do Texto */}
        <article className="flex-1 max-w-3xl lg:max-w-none prose prose-lg prose-slate prose-headings:font-bold prose-headings:text-[#111322] prose-h2:text-3xl prose-h2:mt-12 prose-a:text-[var(--color-accent)] prose-a:no-underline hover:prose-a:underline prose-img:rounded-2xl prose-img:shadow-lg w-full">
            <Markdown>{article.content}</Markdown>

            {/* Rodapé do Artigo: Compartilhamento */}
            <div className="mt-16 pt-8 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-6 not-prose">
                <div className="flex items-center gap-3 text-slate-600 font-medium">
                    <Share2 className="w-5 h-5" /> Compartilhe este insight:
                </div>
                {/* Nota: No mundo real você colocaria o link base, aqui deixei '#' pra demonstração */}
                <div className="flex items-center gap-3">
                    <a href={`https://www.linkedin.com/sharing/share-offsite/?url=URL_DO_SITE/blog/${article.slug}`} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-slate-200 hover:bg-[#0077b5] hover:text-white flex items-center justify-center transition-colors text-slate-600">
                        <Linkedin className="w-5 h-5" />
                    </a>
                    <a href={`https://twitter.com/intent/tweet?url=URL_DO_SITE/blog/${article.slug}&text=${article.title}`} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-slate-200 hover:bg-[#1DA1F2] hover:text-white flex items-center justify-center transition-colors text-slate-600">
                        <Twitter className="w-5 h-5" />
                    </a>
                    <a href={`https://www.facebook.com/sharer/sharer.php?u=URL_DO_SITE/blog/${article.slug}`} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-slate-200 hover:bg-[#1877F2] hover:text-white flex items-center justify-center transition-colors text-slate-600">
                        <Facebook className="w-5 h-5" />
                    </a>
                </div>
            </div>
        </article>
      </section>

      {/* Seção de Artigos Relacionados */}
      {relatedArticles && relatedArticles.length > 0 && (
         <section className="border-t border-slate-200 bg-[#f4f5f8] py-24">
             <div className="max-w-7xl mx-auto px-6 sm:px-12 md:px-20 lg:px-24">
                 <h2 className="text-3xl font-black text-[#111322] mb-12">Continue sua Leitura</h2>
                 <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                     {relatedArticles.map((rel: any) => (
                         <Link href={`/blog/${rel.slug}`} key={rel.id} className="block group">
                            <div className="bg-[#fafafc] border border-slate-200 rounded-2xl overflow-hidden hover:border-[var(--color-accent)] hover:shadow-lg transition-all">
                                <div className="h-48 overflow-hidden relative">
                                    <img src={rel.cover_image || fallbackImage} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt={rel.title} />
                                    <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-2 py-1 rounded text-[10px] font-bold text-[var(--color-accent)] uppercase">
                                        {rel.category || "Segurança"}
                                    </div>
                                </div>
                                <div className="p-6">
                                    <h4 className="text-lg font-bold text-[#111322] group-hover:text-[var(--color-accent)] transition-colors line-clamp-2">
                                        {rel.title}
                                    </h4>
                                    <p className="text-xs text-slate-500 mt-4 flex items-center gap-1.5">
                                        <Calendar className="w-3.5 h-3.5" /> 
                                        {new Date(rel.created_at).toLocaleDateString('pt-BR')}
                                    </p>
                                </div>
                            </div>
                         </Link>
                     ))}
                 </div>
             </div>
         </section>
      )}

      <Footer />
    </main>
  );
}
