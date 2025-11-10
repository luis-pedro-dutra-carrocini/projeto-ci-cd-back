# projeto-ci-cd-back

API simples em Node.js + Express para demonstração de CI/CD com **GitHub Actions** e deploy no **Render** (via Docker).

## Endpoints
- `GET /` → `{ "mensagem": "API online e integrada com CI/CD!" }`
- `GET /health` → `{ "status": "ok", "version": "<tag ou dev>" }`

## Variáveis de ambiente importantes
- `ALLOWED_ORIGIN` → URL do front (ex.: `https://seu-front.vercel.app`)
- `APP_VERSION` → definida automaticamente no workflow a partir da tag (ex.: `1.2.0`)

## Como rodar localmente
```bash
npm install
npm run dev
# abra http://localhost:3000
```

## Criar imagem Docker local (opcional)
```bash
docker build -t projeto-ci-cd-back .
docker run -p 3000:3000 -e ALLOWED_ORIGIN='*' projeto-ci-cd-back
```

## Fluxo de deploy (Render via GitHub Actions)
1. Configure os **Secrets** no repositório (Settings → Secrets → Actions):
   - `RENDER_API_KEY`
   - `RENDER_SERVICE_ID`
2. Crie uma tag semântica:
   ```bash
   git tag v1.0.0
   git push origin v1.0.0
   ```
3. O workflow `release.yml` acionará o deploy no Render.
