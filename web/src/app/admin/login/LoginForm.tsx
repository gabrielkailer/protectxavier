"use client";

import { useActionState } from "react";
import { login } from "./actions";
import { Lock, Mail, Loader2 } from "lucide-react";

const initialState = {
  error: "",
};

export function LoginForm() {
  const [state, formAction, isPending] = useActionState(login, initialState);

  return (
    <form action={formAction} className="flex flex-col gap-5">
      {state?.error && (
        <div className="bg-red-500/10 border border-red-500/20 text-red-400 text-sm p-3 rounded-xl text-center font-medium">
          {state.error}
        </div>
      )}
      
      <div className="flex flex-col gap-2">
        <label className="text-sm font-semibold text-slate-300" htmlFor="email">Email Corporativo</label>
        <div className="relative">
          <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
          <input 
            id="email" 
            name="email" 
            type="email" 
            required
            placeholder="admin@protectxavier.com.br"
            className="w-full bg-[#111322] border border-white/10 rounded-xl py-3 pl-11 pr-4 text-white placeholder:text-slate-600 focus:outline-none focus:border-[var(--color-accent)] focus:ring-1 focus:ring-[var(--color-accent)] transition-all"
          />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-sm font-semibold text-slate-300" htmlFor="password">Senha de Segurança</label>
        <div className="relative">
          <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
          <input 
            id="password" 
            name="password" 
            type="password" 
            required
            placeholder="••••••••"
            className="w-full bg-[#111322] border border-white/10 rounded-xl py-3 pl-11 pr-4 text-white placeholder:text-slate-600 focus:outline-none focus:border-[var(--color-accent)] focus:ring-1 focus:ring-[var(--color-accent)] transition-all"
          />
        </div>
      </div>

      <button 
        type="submit" 
        disabled={isPending}
        className="mt-2 w-full bg-[var(--color-accent)] hover:bg-[var(--color-accent-hover)] text-[#111322] font-bold py-3 px-4 rounded-xl transition-colors flex justify-center items-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
      >
        {isPending ? <Loader2 className="w-5 h-5 animate-spin" /> : "Autenticar e Entrar"}
      </button>
    </form>
  );
}
