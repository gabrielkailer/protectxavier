"use client";

import { useState } from "react";
import { BrainCircuit, Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";

export function GenerateAiButton() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleGenerate = async () => {
    try {
      setLoading(true);
      const res = await fetch("/api/cron/generate-article");
      const data = await res.json();
      
      if (data.success) {
        alert("✔️ Artigo premium gerado com sucesso: " + data.article.title);
        router.refresh(); // Recarrega a página para exibir o novo artigo
      } else {
        alert("Erro na IA: " + data.error);
      }
    } catch (err) {
      alert("Erro de conexão ao solicitar artigo à IA.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <button 
      onClick={handleGenerate} 
      disabled={loading}
      className="flex items-center gap-2 bg-[var(--color-accent)] hover:bg-[var(--color-accent-hover)] text-[#111322] px-5 py-2.5 rounded-xl font-bold transition-all shadow-lg hover:shadow-xl text-sm disabled:opacity-50 disabled:cursor-wait"
    >
      {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <BrainCircuit className="w-4 h-4" />}
      {loading ? "Inteligência Criando (Aguarde)..." : "Criar Novo Artigo via IA"}
    </button>
  );
}
