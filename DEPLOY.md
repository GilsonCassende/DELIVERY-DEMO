# Deploy (Frontend no Vercel + Backend no Render)

Este arquivo explica como publicar o frontend no Vercel e o backend no Render, usando os scripts já adicionados ao `package.json`.

## Scripts úteis
- `pnpm build:client` — build do frontend (Vite) gera `dist`
- `pnpm build:server` — bundle do backend via `esbuild` gera `dist-server`
- `pnpm start:server` — inicia o servidor a partir de `dist-server`
 - `pnpm build:client` — build do frontend (Vite) gera `dist`
 - `pnpm build:server` — bundle do backend via `esbuild` gera `dist-server`
 - `pnpm build:deploy` — build combinado (client + server) e copia frontend para `dist-server/public`
 - `pnpm start:server` — inicia o servidor a partir de `dist-server`

## 1) Teste local rápido
```bash
pnpm install
pnpm build:client    # gera /dist
pnpm build:server    # gera /dist-server
node dist-server/index.js   # testa backend localmente
# para ver o frontend, use um servidor estático na pasta dist ou `pnpm preview`
```vsf

## 2) Backend no Render
1. Push do repo para GitHub/GitLab.
2. No Render: New → Web Service → conectar repositório.
3. Configurar:
   - Build Command: `pnpm install && pnpm build:deploy`
   - Start Command: `node dist-server/index.js`
   - Environment: `NODE_ENV=production`
   - Selecionar a versão Node (ex.: 18+).
4. Deployar. Copie a URL pública do serviço (ex.: `https://minha-api.onrender.com`).

## 3) Frontend no Vercel
1. No Vercel: New Project → importar repositório.
2. Em Project Settings → Build & Output:
   - Build Command: `pnpm install && pnpm build:client`
   - Output Directory: `dist`
3. Adicione variável de ambiente (em Vercel):
   - `VITE_API_URL = https://minha-api.onrender.com` (URL do Render)
4. Deployar. O frontend consumirá `import.meta.env.VITE_API_URL`.

## Notas importantes
- Use a variável `VITE_` para expor valores ao cliente (`import.meta.env.VITE_API_URL`).
- Não é necessário rodar `pnpm build` que junta front+back; usamos `build:client` e `build:server` separadamente.
- Alinhe a versão do Node entre Render e Vercel para evitar incompatibilidades.

Se quiser, eu posso:
- criar um pequeno arquivo de exemplo de função serverless (Netlify/Vercel) para migrar rotas do `server/index.ts`, ou
- abrir/editar `server/index.ts` para preparar fácil migração para serverless.
