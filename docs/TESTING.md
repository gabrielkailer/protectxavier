# Testes — Protect Xavier Facilite

## Status Atual

O projeto não possui testes unitários ou de integração automatizados. A verificação atual é feita por:

1. **TypeScript Type-check** — `npm run typecheck`
2. **ESLint** — `npm run lint`
3. **Build de produção** — `npm run build`

## Estratégia Recomendada

### Nível 1 — Smoke Tests (Prioridade Alta)
- Build de produção passa sem erros
- Type-check resolve todos os tipos
- Lint sem warnings críticos

### Nível 2 — Testes de Integração (Futuro)
- Testes de API routes (`/api/cron/generate-article`)
- Testes de Server Actions (`deleteArticle`, `fetchMoreArticles`)
- Testes de middleware (redirect de auth)

### Nível 3 — Testes E2E (Futuro)
- Fluxo de login admin
- Geração de artigo via painel
- Navegação do blog

## Como Rodar

```bash
# Verificação de tipos
npm run typecheck

# Lint
npm run lint

# Build completo
npm run build
```

## Como Adicionar Testes

Quando implementar testes, recomendamos:

1. **Framework:** Vitest (compatível com Next.js)
2. **E2E:** Playwright
3. **Estrutura:** Criar pasta `__tests__/` ao lado dos arquivos testados

```bash
# Instalar Vitest
npm install -D vitest @vitejs/plugin-react

# Executar testes
npm run test
```
