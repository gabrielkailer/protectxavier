# Contributing — Protect Xavier Facilite

## Padrão de Branches

| Branch | Uso |
|---|---|
| `main` | Produção — deploy automático |
| `develop` | Desenvolvimento — integração |
| `feature/nome-da-feature` | Novas funcionalidades |
| `fix/nome-do-bug` | Correção de bugs |
| `refactor/nome` | Refatorações |

## Padrão de Commits

Usamos **Conventional Commits**:

```
tipo(escopo): descrição curta

Corpo opcional com mais detalhes.
```

**Tipos permitidos:**
- `feat` — nova funcionalidade
- `fix` — correção de bug
- `refactor` — refatoração sem mudança funcional
- `docs` — documentação
- `style` — formatação, ponto-e-vírgula, etc.
- `chore` — manutenção, deps, configs
- `test` — adição/correção de testes

**Exemplos:**
```
feat(blog): adicionar paginação infinite scroll
fix(admin): corrigir redirect após logout
refactor(lib): centralizar client Supabase
docs: atualizar README com novos scripts
```

## Checklist de PR

Antes de abrir um PR, garanta:

- [ ] `npm run typecheck` passa sem erros
- [ ] `npm run lint` passa sem erros
- [ ] `npm run build` compila com sucesso
- [ ] Código formatado (`npm run format`)
- [ ] Imports seguem as regras de dependência (ver `docs/ARCHITECTURE.md`)
- [ ] Nenhum segredo/chave commitado
- [ ] Descrição do PR explica O QUÊ e POR QUÊ

## Padrões de Código

### TypeScript
- **Strict mode** habilitado
- Evite `any` — use tipos específicos ou `unknown`
- Use a interface `Article` de `@/types/article` em vez de tipos inline

### Componentes React
- Server Components por padrão — use `"use client"` apenas quando necessário
- Organize em `layout/`, `sections/`, `ui/`
- Use named exports (`export function Header()`)

### Imports
- Use o alias `@/` para imports absolutos
- Importe de `@/lib/supabase/admin` (não crie clients inline)
- Ordem: packages → `@/lib` → `@/components` → `@/types` → relative

### CSS
- Use Tailwind CSS (não CSS-in-JS)
- Variáveis CSS globais em `globals.css` via `@theme`
- Evite valores hardcoded — use variáveis (`var(--color-accent)`)
