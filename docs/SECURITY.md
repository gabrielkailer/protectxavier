# Segurança — Protect Xavier Facilite

## Gestão de Segredos

### Regras Obrigatórias

1. **NUNCA** commite `.env.local` ou qualquer arquivo `.env*` com valores reais
2. O `.gitignore` já ignora `.env*` — não modifique esta regra
3. Use `.env.example` como template (sem valores reais)
4. Na Vercel, configure variáveis via dashboard (Settings → Environment Variables)

### Variáveis Sensíveis

| Variável | Nível de Risco | Motivo |
|---|---|---|
| `SUPABASE_SERVICE_ROLE_KEY` | 🔴 Crítico | Bypass total de RLS — acesso admin ao banco |
| `OPENAI_API_KEY` | 🟡 Alto | Controla gastos na API OpenAI |
| `UNSPLASH_ACCESS_KEY` | 🟢 Médio | Rate-limited, baixo risco |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | 🟢 Baixo | Chave pública (exposta por design) |

### Se Uma Chave For Comprometida

1. **SUPABASE_SERVICE_ROLE_KEY:**
   - Regenerar imediatamente no Supabase Dashboard → Settings → API
   - Atualizar na Vercel e redeploy
   - Auditar logs de acesso no Supabase

2. **OPENAI_API_KEY:**
   - Revogar no dashboard OpenAI → API Keys
   - Criar nova chave e atualizar
   - Verificar billing por uso não-autorizado

## Boas Práticas

### Autenticação
- O admin usa Supabase Auth (email/password)
- Middleware intercepta rotas `/admin/*` e redireciona se não autenticado
- Session refresh automático via cookies

### Client vs Server
- `SUPABASE_SERVICE_ROLE_KEY` é usado APENAS no servidor (`lib/supabase/admin.ts`)
- Variáveis sem `NEXT_PUBLIC_` jamais são expostas ao browser
- Server Actions (`"use server"`) executam no servidor apenas

### Headers e CORS
- Controlados pelo Next.js/Vercel automaticamente
- API routes são server-side only — sem CORS issues

## Recomendações Futuras

- [ ] Implementar rate-limiting na API de geração de artigos
- [ ] Adicionar header `X-API-Key` para proteger a rota cron
- [ ] Configurar Supabase RLS para a tabela `articles`
- [ ] Habilitar 2FA para contas admin no Supabase
- [ ] Auditoria periódica de deps com `npm audit`
