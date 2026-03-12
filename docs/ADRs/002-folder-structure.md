# ADR-002: Organização de Pastas

**Data:** 2026-03-12
**Status:** Aceita
**Decisores:** Equipe técnica

## Contexto

Os 12 componentes estavam em `src/components/` flat, sem categorização. Precisávamos decidir como organizá-los.

## Decisão

Organizamos `components/` em 3 subdiretórios:

```
components/
├── layout/     # Header, Footer
├── sections/   # Seções da landing page (Hero, Services, etc.)
└── ui/         # Componentes reutilizáveis (AnimatedCounter, ContactModal)
```

Além disso:
- **`lib/`** para infraestrutura (clients, integrações)
- **`config/`** para constantes puras
- **`types/`** para interfaces TypeScript

## Justificativa

- `layout/` vs `sections/` vs `ui/` é intuitivo para qualquer dev
- Componentes de seção são muito específicos — não são reutilizáveis entre páginas
- `ui/` é reservado para componentes genuinamente reutilizáveis
- A separação `lib/` ← `config/` ← `types/` garante que dados puros não dependam de frameworks

## Consequências

✅ Imports mais previsíveis (`@/components/layout/Header`)
✅ Fácil de localizar qualquer componente
✅ Escalável para novos componentes
⚠️ Imports ficam um nível mais profundos (trade-off aceitável)
