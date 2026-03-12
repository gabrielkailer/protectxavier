import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { BlogListClient } from "./BlogListClient";
import { supabaseAdmin } from "@/lib/supabase/admin";

export const metadata = {
  title: "Blog | Insights em Segurança - Protect Xavier",
  description: "Artigos, inteligência e as últimas novidades sobre segurança patrimonial, facilities e tecnologia.",
};

export const dynamic = 'force-dynamic';
export const revalidate = 0;
export const fetchCache = 'force-no-store';

export default async function BlogIndexPage() {
  // Busca os primeiros 9 artigos (ordenados do mais recente pro mais antigo)
  const { data: initialArticles = [], error } = await supabaseAdmin
    .from("articles")
    .select("id, slug, title, excerpt, cover_image, category, created_at, read_time, author")
    .order("created_at", { ascending: false })
    .limit(9);

  return (
    <main className="min-h-screen bg-[#f4f5f8] relative w-full overflow-x-hidden flex flex-col">
      <Header />

      {/* Hero Section (Dark Mode) */}
      <section className="bg-[var(--background)] pt-32 pb-24 relative overflow-hidden">
        {/* Efeitos de Fundo */}
        <div className="absolute top-0 right-[-10%] w-[600px] h-[600px] bg-[radial-gradient(ellipse_at_top_right,var(--color-accent)_0%,transparent_60%)] opacity-[0.08] pointer-events-none" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-[radial-gradient(circle_at_bottom_left,var(--color-primary)_0%,transparent_60%)] opacity-[0.2] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6 sm:px-12 md:px-20 lg:px-24 relative z-10 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tighter mb-6">
            Inteligência & <span className="text-[var(--color-accent)]">Estratégia</span>
          </h1>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Acompanhe nossos últimos artigos, insights e análises sobre o mercado de segurança e facilities com tecnologia e inovação.
          </p>
        </div>
      </section>

      {/* Grid de Artigos */}
      <section className="flex-1 max-w-7xl mx-auto px-6 sm:px-12 md:px-20 lg:px-24 w-full py-20">
        {initialArticles && initialArticles.length > 0 ? (
           <BlogListClient initialArticles={initialArticles} />
        ) : (
          <div className="text-center py-20">
             <div className="w-16 h-16 border-2 border-[var(--color-accent)]/30 rounded-2xl flex items-center justify-center mx-auto mb-4 rotate-12 bg-white shadow-sm">
                <span className="text-2xl">📝</span>
             </div>
             <h2 className="text-xl font-bold text-[#111322] mb-2">Ainda não há publicações</h2>
             <p className="text-slate-500">Nossa inteligência artificial ainda está preparando os primeiros conteúdos.</p>
          </div>
        )}
      </section>

      <Footer />
    </main>
  );
}
