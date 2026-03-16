# Deployment — Protect Xavier Facilite

## Ambientes

| Ambiente | URL | Branch |
|---|---|---|
| Produção | Vercel (auto-deploy) | `main` |
| Preview | Vercel (PR previews) | qualquer PR |
| Local | `http://localhost:3000` | qualquer branch |

## Deploy na Vercel

### Setup Inicial

1. Conecte o repositório GitHub à Vercel
2. Configure o **Root Directory** como `web`
3. O framework será detectado automaticamente como Next.js

### Variáveis de Ambiente

Configure na Vercel (Settings → Environment Variables):

| Variável | Ambiente |
|---|---|
| `NEXT_PUBLIC_SUPABASE_URL` | Production, Preview |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Production, Preview |
| `SUPABASE_SERVICE_ROLE_KEY` | Production, Preview |
| `OPENAI_API_KEY` | Production |
| `UNSPLASH_ACCESS_KEY` | Production |

### Build Settings

- **Build Command:** `npm run build`
- **Output Directory:** `.next`
- **Install Command:** `npm install`
- **Root Directory:** `web`

## Build de Produção Local

```bash
cd web
npm run build
npm run start
```

## Rollback

### Via Vercel
1. Acesse o dashboard do projeto na Vercel
2. Vá em **Deployments**
3. Encontre o deploy anterior estável
4. Clique nos 3 pontos → **Promote to Production**

### Via Git
```bash
git revert HEAD
git push origin main
```

## CI/CD

O deploy é automático via Vercel:
- Push em `main` → deploy de produção
- Abrir PR → deploy de preview com URL única

### Rotinas e Automação (Cron Jobs)

Para habilitar rotinas autônomas (como a geração de artigos), usamos o recurso **Vercel Cron**.
Ele é configurado por meio do arquivo `web/vercel.json`, que instrui a Vercel a acionar as APIs em datas e horários pré-determinados.

- **Arquivo Responsável:** `web/vercel.json`
- **Frequência Atual:** Segunda, quarta e sexta às 10h UTC (`0 10 * * 1,3,5`)
- **Acompanhamento no Vercel:** Pode ser verificado no painel da Vercel navegando em **Settings > Cron Jobs** do projeto.

## Checklist de Deploy

- [ ] `npm run build` passa localmente
- [ ] Variáveis de ambiente configuradas na Vercel
- [ ] Nenhum segredo commitado no repositório
- [ ] Testar preview URL antes de mergear
