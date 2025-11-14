import express from 'express';
import cors from 'cors';

const app = express();

// Configuração de CORS
const corsOptions = {
  origin: "*",
  methods: "GET,POST,PUT,DELETE",
  allowedHeaders: "Content-Type,Authorization",
};

app.use(cors(corsOptions));

app.get('/', (req, res) => {
  res.json({ mensagem: 'API rodando e integrada com CI/CD na internet do claudiãooooooooooooooooooooooooooooooooo!' });
});

// Endpoint opcional de saúde
app.get('/health', (req, res) => {
  res.json({ status: 'ok', version: 'dev' });
});

const port = 3000;
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
