# Protect Xavier Facilite

> Landing page + Blog com IA + Painel Admin para empresa de segurança patrimonial e facilities.

## 🏗️ Stack

| Tecnologia | Versão | Uso |
|---|---|---|
| Next.js | 16.x | Framework SSR/SSG |
| React | 19.x | UI Library |
| TypeScript | 5.x | Type Safety |
| Tailwind CSS | 4.x | Styling |
| Supabase | — | Auth + Database (PostgreSQL) |
| OpenAI | GPT-4o-mini | Geração automática de artigos |
| Framer Motion | — | Animações |

## 📁 Estrutura do Projeto

```
web/src/
├── app/                   # Pages & Routes (Next.js App Router)
│   ├── admin/             # Painel admin (protegido por auth)
│   ├── api/cron/          # API de geração de artigos via IA
│   ├── blog/              # Blog público com paginação
│   ├── privacidade/       # Política de privacidade
│   └── termos/            # Termos de uso
├── components/
│   ├── layout/            # Header, Footer
│   ├── sections/          # Seções da landing page
│   └── ui/                # Componentes reutilizáveis
├── config/                # Constantes e configurações
├── lib/                   # Integrações externas (Supabase, OpenAI)
├── types/                 # TypeScript types compartilhados
├── data/                  # Dados estáticos (JSON)
├── env.ts                 # Validação de variáveis de ambiente
└── middleware.ts           # Auth middleware
```

## 🚀 Rodar Localmente

```bash
# 1. Clone o repositório
git clone https://github.com/gabrielkailer/protectxavier.git
cd protectxavier/web

# 2. Instale as dependências
npm install

# 3. Configure as variáveis de ambiente
cp .env.example .env.local
# Preencha as variáveis em .env.local

# 4. Rode o servidor de desenvolvimento
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000).

## 📋 Scripts Disponíveis

| Comando | Descrição |
|---|---|
| `npm run dev` | Servidor de desenvolvimento |
| `npm run build` | Build de produção |
| `npm run start` | Inicia servidor de produção |
| `npm run lint` | Validação de código (ESLint) |
| `npm run lint:fix` | Correção automática de lint |
| `npm run typecheck` | Verificação de tipos TypeScript |
| `npm run format` | Formata código com Prettier |
| `npm run format:check` | Verifica formatação |

## 🧪 Testes

```bash
npm run typecheck   # Verifica tipos
npm run lint        # Verifica padrões de código
npm run build       # Garante que o projeto compila
```

## 📚 Documentação Completa

| Documento | Conteúdo |
|---|---|
| [ARCHITECTURE.md](docs/ARCHITECTURE.md) | Arquitetura, módulos, fluxo de request |
| [GETTING_STARTED.md](docs/GETTING_STARTED.md) | Setup do zero passo a passo |
| [CONTRIBUTING.md](docs/CONTRIBUTING.md) | Padrão de branches, PRs e código |
| [TESTING.md](docs/TESTING.md) | Estratégia e execução de testes |
| [DEPLOYMENT.md](docs/DEPLOYMENT.md) | Deploy, ambientes, variáveis |
| [RUNBOOK.md](docs/RUNBOOK.md) | Operação, logs, incidentes |
| [SECURITY.md](docs/SECURITY.md) | Gestão de segredos e boas práticas |
| [API.md](docs/API.md) | Endpoints da API |

## 📄 Licença

Projeto privado — © Protect Xavier Facilite.
