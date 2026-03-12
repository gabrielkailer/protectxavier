# Arquitetura — Protect Xavier Facilite

## Visão Geral

O projeto é uma **aplicação Next.js 16** com App Router, servindo como:

1. **Landing Page** — site institucional da empresa de segurança
2. **Blog** — artigos gerados por IA (OpenAI GPT-4o-mini) com imagens Unsplash
3. **Painel Admin** — CRUD de artigos protegido por autenticação Supabase

```
┌─────────────────────────────────────────────────┐
│                   Navegador                     │
│  (Landing Page / Blog / Painel Admin)           │
└────────────────┬────────────────────────────────┘
                 │ HTTP
┌────────────────▼────────────────────────────────┐
│             Next.js App Router                  │
│  ┌──────────┐ ┌──────────┐ ┌────────────────┐  │
│  │  Pages   │ │  API     │ │  Middleware     │  │
│  │  (SSR)   │ │  Routes  │ │  (Auth Guard)  │  │
│  └────┬─────┘ └────┬─────┘ └───────┬────────┘  │
│       │             │               │           │
│  ┌────▼─────────────▼───────────────▼────────┐  │
│  │              lib/ (Infra Layer)            │  │
│  │  supabase/admin  │  supabase/server       │  │
│  │  supabase/client │  openai                │  │
│  └────────┬─────────┴────────┬───────────────┘  │
└───────────┼──────────────────┼──────────────────┘
            │                  │
    ┌───────▼──────┐   ┌──────▼──────┐
    │   Supabase   │   │   OpenAI    │
    │  (Auth + DB) │   │  (GPT-4o)  │
    └──────────────┘   └─────────────┘
```

## Camadas

### 1. `app/` — Presentation Layer
Páginas e rotas do Next.js. Cada diretório é uma rota:
- `app/page.tsx` — Home (landing page com seções)
- `app/blog/` — Listagem e leitura de artigos
- `app/admin/` — Dashboard admin (protegido)
- `app/api/cron/` — Endpoints de API (geração de artigos)
- `app/privacidade/`, `app/termos/` — Páginas legais

### 2. `components/` — UI Layer
Componentes React organizados por responsabilidade:
- `layout/` — Header, Footer (estrutura da página)
- `sections/` — Seções da landing page (Hero, Services, etc.)
- `ui/` — Componentes reutilizáveis (AnimatedCounter, ContactModal)

### 3. `lib/` — Infrastructure Layer
Integrações externas centralizadas:
- `supabase/admin.ts` — Client com service_role (bypass RLS)
- `supabase/server.ts` — Client SSR com cookies
- `supabase/client.ts` — Client browser (anon key)
- `supabase/middleware.ts` — Client para middleware de auth
- `openai.ts` — Client OpenAI

### 4. `config/` — Configuration Layer
Constantes e configurações:
- `site.ts` — Metadata, nav links, URLs
- `topics.ts` — Temas para geração de artigos

### 5. `types/` — Type Definitions
Interfaces TypeScript compartilhadas (Article, etc.)

## Regras de Dependência

| Camada | Pode importar | NÃO pode importar |
|---|---|---|
| `lib/` | `env.ts`, `config/`, npm packages | `components/`, `app/` |
| `config/` | nada | qualquer outra pasta |
| `types/` | nada | qualquer outra pasta |
| `components/` | `lib/`, `types/`, `config/` | `app/` |
| `app/` | tudo acima | — |

## Fluxo de Request End-to-End

### Landing Page (`/`)
1. Request chega ao Next.js
2. Middleware valida session Supabase (refresh token)
3. `page.tsx` (Server Component) importa `supabaseAdmin`
4. Busca os 3 artigos mais recentes
5. Renderiza todas as seções da landing page no servidor
6. Envia HTML completo ao browser
7. Client-side: framer-motion hydrata animações

### Geração de Artigo (`/api/cron/generate-article`)
1. GET request (pode ser cron ou botão do admin)
2. Seleciona tópico aleatório de `ARTICLE_TOPICS`
3. Busca títulos existentes (evitar duplicatas)
4. Chama OpenAI GPT-4o-mini com prompt estruturado
5. Busca imagem Unsplash (evitando imagens já usadas)
6. Insere artigo no Supabase via `supabaseAdmin`
7. Retorna JSON com título e slug

### Admin Dashboard (`/admin`)
1. Middleware intercepta → verifica auth Supabase
2. Se não autenticado → redirect `/admin/login`
3. Se autenticado → carrega dashboard
4. Lista artigos via `supabaseAdmin` (bypass RLS)
5. Ações: "Gerar via IA" (chama API), "Deletar" (Server Action)

## Decisões de Arquitetura

- **App Router** sobre Pages Router — melhor suporte a React Server Components
- **Supabase Admin singleton** — evita recriação de client a cada request
- **Server Actions** para mutations — login, delete (no extra API routes)
- **force-dynamic** em páginas com dados — garante dados frescos sempre
- **Zod para env** — validação fail-fast no startup
