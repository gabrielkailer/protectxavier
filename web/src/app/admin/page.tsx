import { createClient as createServerClient } from "@/lib/supabase/server";
import { supabaseAdmin } from "@/lib/supabase/admin";
import { redirect } from "next/navigation";
import { LogOut, BrainCircuit, Calendar, ExternalLink } from "lucide-react";
import Link from "next/link";
import { GenerateAiButton } from "./GenerateAiButton";
import { DeleteArticleButton } from "./DeleteArticleButton";

export const dynamic = 'force-dynamic';
export const revalidate = 0;
export const fetchCache = 'force-no-store';

export default async function AdminDashboard() {
  const supabaseAuth = await createServerClient();
  
  // Validando se o usuário está logado
  const { data } = await supabaseAuth.auth.getUser();

  if (!data?.user) {
    redirect("/admin/login");
  }

  // Buscando os artigos usando a chave de Admin
  const { data: articles, error } = await supabaseAdmin
    .from("articles")
    .select("*")
    .order("created_at", { ascending: false });

  return (
    <div className="p-4 sm:p-8 max-w-6xl mx-auto w-full">
      {/* Header do Painel */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 sm:mb-12 border-b border-white/10 pb-6 gap-6">
        <div>
          <h1 className="text-3xl font-black text-white flex items-center gap-3">
            <BrainCircuit className="text-[var(--color-accent)] w-8 h-8" />
            Painel do Blog VIP
          </h1>
          <p className="text-slate-400 mt-2">
            Logado como: <span className="text-[var(--color-accent)]">{data.user.email}</span>
          </p>
        </div>
        
        <form action={async () => {
          "use server";
          const sup = await createServerClient();
          await sup.auth.signOut();
          redirect("/admin/login");
        }}>
          <button type="submit" className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-all border border-white/10 shadow-sm text-sm">
            <LogOut className="w-4 h-4 text-red-400" />
            Sair do Painel
          </button>
        </form>
      </div>

      {/* Seção Principal de Artigos */}
      <div className="bg-[#1a1d2e] border border-white/5 rounded-3xl p-6 sm:p-8 shadow-2xl">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-6 border-b border-white/5 pb-6">
          <h2 className="text-2xl font-bold text-white flex items-center gap-3">
            Artigos Publicados 
            <span className="text-xs font-bold text-[#111322] bg-[var(--color-accent)] px-3 py-1 rounded-full">
              {articles?.length || 0}
            </span>
          </h2>
          {/* Botão de Geração Automática (Componente Cliente para mostrar Loading) */}
          <GenerateAiButton />
        </div>
        
        {error && (
            <div className="bg-red-500/10 border border-red-500/20 text-red-400 p-4 rounded-xl mb-6">
                <strong>Erro do Supabase:</strong> {JSON.stringify(error)}
            </div>
        )}
        
        {!articles || articles.length === 0 ? (
          <div className="text-center py-20 border-2 border-dashed border-white/10 rounded-2xl bg-white/[0.02]">
            <BrainCircuit className="w-16 h-16 text-slate-600 mx-auto mb-6 opacity-50" />
            <h3 className="text-xl font-bold text-slate-200">Seu acervo está vazio</h3>
            <p className="text-slate-400 mt-2 max-w-md mx-auto">
              Clique no botão dourado acima para solicitar que a Inteligência Artificial escreva seu primeiro artigo premium sobre Segurança Patrimonial e Facilities.
            </p>
          </div>
        ) : (
          <div className="flex flex-col gap-4">
            {articles.map((article: any) => (
              <div 
                key={article.id} 
                className="flex flex-col sm:flex-row justify-between items-start sm:items-center p-4 rounded-2xl border border-white/5 bg-[#111322] hover:border-white/10 hover:bg-[#16192b] transition-all gap-6 shadow-sm group"
              >
                <div className="flex items-center gap-5 w-full sm:w-auto">
                  {article.cover_image ? (
                    <img 
                      src={article.cover_image} 
                      alt={article.title} 
                      className="w-24 h-16 sm:w-32 sm:h-20 object-cover rounded-xl border border-white/10 shadow-md group-hover:scale-105 transition-transform" 
                    />
                  ) : (
                    <div className="w-24 h-16 sm:w-32 sm:h-20 rounded-xl border border-white/10 bg-slate-900 flex flex-col justify-center items-center">
                       <span className="opacity-30">Sem Foto</span>
                    </div>
                  )}
                  <div className="flex flex-col">
                    <h3 className="text-white font-bold text-lg sm:text-xl leading-tight hover:text-[var(--color-accent)] transition-colors line-clamp-1">
                      {article.title}
                    </h3>
                    <div className="flex flex-wrap items-center gap-4 mt-3 text-xs sm:text-sm text-slate-400">
                      <span className="flex items-center gap-1.5 opacity-80">
                        <Calendar className="w-3.5 h-3.5" /> 
                        {new Date(article.created_at).toLocaleDateString('pt-BR', { day: '2-digit', month: 'long', year: 'numeric' })}
                      </span>
                      <span className="bg-white/10 text-slate-300 font-medium px-2.5 py-1 rounded-md tracking-wide uppercase text-[10px] sm:text-xs">
                        {article.category || 'Sem categoria'}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3 w-full sm:w-auto mt-2 sm:mt-0 pt-4 sm:pt-0 border-t border-white/5 sm:border-transparent justify-end">
                  <Link 
                    href={`/blog/${article.slug}`} 
                    target="_blank" 
                    className="flex justify-center items-center gap-2 px-4 py-2 rounded-xl bg-white/5 hover:bg-slate-700 text-slate-300 hover:text-white transition-all text-sm font-medium border border-transparent hover:border-white/10"
                  >
                    <ExternalLink className="w-4 h-4" /> 
                    <span>Abrir Artigo</span>
                  </Link>
                  <DeleteArticleButton id={article.id} />
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
