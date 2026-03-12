# Getting Started — Protect Xavier Facilite

## Pré-requisitos

- **Node.js** >= 18.x
- **npm** >= 9.x
- Conta no **Supabase** com projeto criado
- (Opcional) Chave API **OpenAI** para geração de artigos
- (Opcional) Chave **Unsplash** para imagens de capa

## Setup Passo a Passo

### 1. Clone o Repositório

```bash
git clone https://github.com/gabrielkailer/protectxavier.git
cd protectxavier
```

### 2. Instale as Dependências

```bash
cd web
npm install
```

### 3. Configure as Variáveis de Ambiente

```bash
cp .env.example .env.local
```

Edite `.env.local` com suas credenciais:

| Variável | Obrigatória | Descrição |
|---|---|---|
| `NEXT_PUBLIC_SUPABASE_URL` | ✅ | URL do projeto Supabase |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | ✅ | Chave pública (anon) |
| `SUPABASE_SERVICE_ROLE_KEY` | ✅ | Chave service_role (server-only) |
| `OPENAI_API_KEY` | ❌ | Para geração automática de artigos |
| `UNSPLASH_ACCESS_KEY` | ❌ | Para busca de imagens de capa |

### 4. Configure o Supabase

Crie a tabela `articles` no Supabase SQL Editor:

```sql
CREATE TABLE IF NOT EXISTS articles (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  excerpt TEXT,
  content TEXT,
  cover_image TEXT,
  category TEXT,
  read_time INTEGER DEFAULT 5,
  author TEXT DEFAULT 'Protect Xavier Insights',
  created_at TIMESTAMPTZ DEFAULT now()
);
```

### 5. Rode o Servidor de Desenvolvimento

```bash
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000).

### 6. Acesse o Painel Admin

1. Crie um usuário no Supabase (Authentication → Users → Add user)
2. Acesse [http://localhost:3000/admin/login](http://localhost:3000/admin/login)
3. Faça login com o email/senha criados

## Troubleshooting

| Problema | Solução |
|---|---|
| `Invalid environment variables` | Verifique se `.env.local` tem todas as variáveis obrigatórias |
| Erro 401 no admin | Crie um usuário no Supabase Authentication |
| Artigos não aparecem | Verifique se a tabela `articles` existe no Supabase |
| Build falha com TypeScript | Rode `npm run typecheck` para ver erros detalhados |
