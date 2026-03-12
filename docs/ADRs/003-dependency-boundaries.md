# ADR-003: Padrões de Dependência e Boundaries

**Data:** 2026-03-12
**Status:** Aceita
**Decisores:** Equipe técnica

## Contexto

O Supabase admin client (`createClient()` com service_role key) era criado inline em 6 arquivos diferentes, cada um repetindo as mesmas 3 linhas. Isso criava:
- Duplicação desnecessária
- Risco de inconsistência (um arquivo pode usar uma key diferente)
- Dificuldade de manutenção (mudar config = editar 6 files)

## Decisão

1. **Singleton centralizado:** `lib/supabase/admin.ts` exporta uma instância única
2. **Regras de dependência claras:**
   - `lib/` → não importa `components/` nem `app/`
   - `config/` → não importa nada (dados puros)
   - `types/` → não importa nada (tipos puros)
   - `components/` → pode importar `lib/`, `types/`, `config/`
   - `app/` → pode importar tudo acima
3. **Validação de env:** `env.ts` com Zod valida todas as variáveis no startup

## Justificativa

- Um singleton evita overhead de múltiplas conexões e centraliza config
- Regras de dependência unidirecionais previnem dependências circulares
- Validação de env falha rápido — melhor que erros crípticos em runtime

## Consequências

✅ 6 duplicações eliminadas → 1 import centralizado
✅ Erro de env detectado no startup, não em runtime
✅ Impossível criar client com key errada acidentalmente
⚠️ `supabaseAdmin` é singleton — cuidado ao usar em contextos edge (ok para Node.js)
