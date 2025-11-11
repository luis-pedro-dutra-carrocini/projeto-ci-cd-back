import express from 'express';
import cors from 'cors';

const app = express();

// Configuração de CORS
const allowedOrigin = 'https://projeto-ci-cd-front-navy.vercel.app/';
app.use(cors({ origin: allowedOrigin }));

app.get('/', (req, res) => {
  res.json({ mensagem: 'API online e integrada com CI/CD!' });
});

// Endpoint opcional de saúde
app.get('/health', (req, res) => {
  res.json({ status: 'ok', version: process.env.APP_VERSION || 'dev' });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
