import express from 'express';
import cors from 'cors';

const app = express();

// Configuração de CORS
const corsOptions = {
  origin: "https://projeto-ci-cd-front-navy.vercel.app/",
  methods: "GET,POST,PUT,DELETE",
  allowedHeaders: "Content-Type,Authorization",
};

app.use(cors(corsOptions));

app.get('/', (req, res) => {
  res.json({ mensagem: 'API online e integrada com CI/CD!' });
});

// Endpoint opcional de saúde
app.get('/health', (req, res) => {
  res.json({ status: 'ok', version: 'dev' });
});

const port = 3000;
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
