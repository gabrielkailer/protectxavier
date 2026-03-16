# API — Protect Xavier Facilite

## Endpoints

### `GET /api/cron/generate-article`

Gera um novo artigo usando IA (OpenAI GPT-4o-mini) e salva no Supabase.

**Autenticação:** Nenhuma (considerar adicionar `X-API-Key` em produção)

**Acionamento Automático (Cron Jobs):**
A rota é executada de forma automática (segundas, quartas e sextas às 10h00 UTC) pelo **Vercel Cron**, através das configurações descritas no arquivo `vercel.json` na pasta \`web/\`.

**Fluxo:**
1. Seleciona tópico aleatório da lista de temas
2. Busca títulos existentes para evitar duplicatas
3. Gera artigo via OpenAI (título, excerpt, conteúdo markdown, keyword, categoria)
4. Busca imagem de capa na Unsplash (evitando repetições)
5. Insere no Supabase

**Resposta de Sucesso (201):**
```json
{
  "success": true,
  "message": "Artigo gerado com sucesso!",
  "article": {
    "title": "Título do artigo",
    "slug": "titulo-do-artigo",
    "category": "Segurança"
  }
}
```

**Resposta de Erro (500):**
```json
{
  "success": false,
  "error": "OPENAI_API_KEY não configurada no ambiente."
}
```

**Variáveis de Ambiente Necessárias:**
- `OPENAI_API_KEY` — obrigatória
- `UNSPLASH_ACCESS_KEY` — opcional (artigo criado sem imagem se ausente)
- `SUPABASE_SERVICE_ROLE_KEY` — obrigatória

**Uso típico:**
```bash
# Via curl
curl http://localhost:3000/api/cron/generate-article

# Via botão no admin
# O botão "Criar Novo Artigo via IA" chama este endpoint
```

---

## Server Actions

### `deleteArticle(id: string)`
**Arquivo:** `app/admin/actions.ts`

Deleta um artigo pelo ID usando `supabaseAdmin`. Revalida cache do `/admin` e `/blog`.

### `fetchMoreArticles(startIndex: number)`
**Arquivo:** `app/blog/actions.ts`

Busca mais artigos para paginação infinita. Retorna até 9 artigos a partir do `startIndex`.

### `login(prevState, formData)`
**Arquivo:** `app/admin/login/actions.ts`

Autentica usuário via Supabase Auth (email/password). Redireciona para `/admin` em caso de sucesso.

---

## Tabela `articles` (Supabase)

| Coluna | Tipo | Descrição |
|---|---|---|
| `id` | UUID | PK auto-generated |
| `title` | TEXT | Título do artigo |
| `slug` | TEXT (UNIQUE) | URL-friendly slug |
| `excerpt` | TEXT | Resumo curto (2 linhas) |
| `content` | TEXT | Conteúdo em Markdown |
| `cover_image` | TEXT | URL da imagem de capa (Unsplash) |
| `category` | TEXT | Categoria (ex: "Segurança") |
| `read_time` | INTEGER | Tempo estimado de leitura (min) |
| `author` | TEXT | Nome do autor |
| `created_at` | TIMESTAMPTZ | Data de criação |
