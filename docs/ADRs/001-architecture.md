# ADR-001: Escolha da Arquitetura

**Data:** 2026-03-12
**Status:** Aceita
**Decisores:** Equipe técnica

## Contexto

O projeto Protect Xavier Facilite é um site institucional com blog e painel admin. Precisávamos decidir entre:

1. Feature-first (módulos por feature com camadas internas)
2. Layer-first (camadas globais: domain/app/infra/presentation)
3. Hybrid (Next.js App Router conventions + camadas infra)

## Decisão

Adotamos a abordagem **Hybrid (opção 3)**:

- **`app/`** segue a estrutura natural do Next.js App Router (route-based)
- **`lib/`** centraliza toda a infraestrutura (Supabase, OpenAI)
- **`components/`** organiza UI por responsabilidade (layout, sections, ui)
- **`config/`** e **`types/`** isolam dados puros e tipos

## Justificativa

- O projeto é um "serviço único" (não multi-feature), então camadas globais fazem mais sentido que módulos por feature
- O App Router já impõe organização por rota — não faz sentido duplicar com feature modules
- A camada `lib/` centralizada elimina a duplicação de clients que existia

## Consequências

✅ Estrutura previsível e fácil de navegar
✅ Sem duplicação de infraestrutura
✅ Compatível com as convenções do Next.js
⚠️ Se o projeto crescer para multi-product, considerar feature modules
