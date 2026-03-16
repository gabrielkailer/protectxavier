# Runbook — Protect Xavier Facilite
# Runbook — Protect Xavier Facilite

## Operação

### Verificação de Saúde

| O que verificar | Como |
|---|---|
| Site está no ar | Acessar a URL pública |
| APIs funcionando | `GET /api/cron/generate-article` retorna JSON |
| Admin acessível | Login em `/admin/login` |
| Supabase conectado | Artigos carregam no blog |

### Logs

- **Vercel Logs:** Dashboard Vercel → Functions → Logs
- **Supabase Logs:** Dashboard Supabase → Logs → API
- **Browser Console:** DevTools → Console (erros client-side)

## Incidentes Comuns

### 1. "Artigos não carregam"

**Sintoma:** Blog vazio, sem artigos na home.

**Diagnóstico:**
1. Verificar Supabase Dashboard → Table `articles`
2. Verificar variáveis `NEXT_PUBLIC_SUPABASE_URL` e `SUPABASE_SERVICE_ROLE_KEY`
3. Checar logs da Vercel

**Resolução:**
- Se tabela vazia → gerar artigo pelo admin ou API
- Se variáveis incorretas → atualizar na Vercel e redeploy

### 2. "Login admin não funciona"

**Sintoma:** Credenciais corretas mas não autentica.

**Diagnóstico:**
1. Supabase Dashboard → Authentication → Users
2. Verificar se o usuário existe e está ativo

**Resolução:**
- Criar novo usuário no Supabase Authentication
- Verificar se `NEXT_PUBLIC_SUPABASE_ANON_KEY` está correto

### 3. "Geração de artigo falha"

**Sintoma:** Botão "Criar via IA" retorna erro.

**Diagnóstico:**
1. Verificar `OPENAI_API_KEY` configurada
2. Verificar créditos/billing na conta OpenAI
3. Checar logs: `Vercel → Functions → api/cron/generate-article`

**Resolução:**
- Adicionar/renovar API key do OpenAI
- Verificar créditos na conta

### 4. "Build falha no deploy"

**Diagnóstico:**
```bash
cd web
npm run typecheck  # Erros de tipo
npm run lint       # Erros de lint
npm run build      # Build completo
```

**Resolução:**
- Corrigir erros indicados no output
- Verificar se variáveis de env estão presentes na Vercel

## Manutenção Periódica

| Frequência | Tarefa |
|---|---|
| Semanal | Verificar geração automática de artigos |
| Mensal | Atualizar dependências (`npm audit`, `npm update`) |
| Trimestral | Renovar API keys (OpenAI, Unsplash) |
| Quando necessário | Revisar artigos gerados pela IA |
