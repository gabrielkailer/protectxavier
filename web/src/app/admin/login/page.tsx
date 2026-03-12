import { ShieldAlert } from "lucide-react";
import { LoginForm } from "./LoginForm";

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-[var(--background)] flex items-center justify-center p-4 relative overflow-hidden">
      {/* Elementos de background premium */}
      <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-[radial-gradient(circle_at_center,var(--color-accent)_0%,transparent_70%)] opacity-[0.05] pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] bg-[radial-gradient(circle_at_center,var(--color-primary)_0%,transparent_70%)] opacity-[0.3] pointer-events-none" />

      <div className="w-full max-w-md z-10">
        <div className="flex flex-col items-center mb-8">
          <div className="w-16 h-16 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center mb-6 shadow-xl backdrop-blur-md">
            <ShieldAlert className="w-8 h-8 text-[var(--color-accent)]" />
          </div>
          <h1 className="text-3xl font-black text-white tracking-tight">Painel Admin</h1>
          <p className="text-slate-400 mt-2 text-center text-sm">
            Área restrita. Faça login para gerenciar a inteligência do blog.
          </p>
        </div>

        <div className="bg-[#1a1d2e] border border-white/5 rounded-2xl p-8 shadow-2xl relative overflow-hidden">
          {/* Borda superior sutil dourada */}
          <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[var(--color-accent)] to-transparent opacity-30" />
          
          <LoginForm />
        </div>
        
        <div className="mt-8 text-center text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Protect Xavier Facilite.</p>
          <p>Acesso monitorado e registrado.</p>
        </div>
      </div>
    </div>
  );
}
