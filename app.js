// Importa bibliotecas principais para construir a API
import express from 'express';         // Framework para rotas e servidor HTTP
import cors from 'cors';               // Middleware que libera requisições de outros domínios
import sqlite3 from 'sqlite3';         // Biblioteca para manipular banco de dados SQLite
import { fileURLToPath } from 'url';   // Utilitário para lidar com URLs de arquivos
import { dirname, resolve } from 'path'; // Utilitários para lidar com caminhos de diretório

// Cria variáveis de caminho para poder usar __dirname em modo ES module
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Inicializa o servidor Express
const app = express();
const PORT = 3000; // Porta onde o servidor vai rodar

// Middleware para permitir requisições externas e leitura de JSON no corpo da requisição
app.use(cors()); // Habilita CORS
app.use(express.json()); // Permite uso de JSON nas requisições

// Configuração do caminho para o arquivo do banco de dados SQLite
const dbPath = resolve(__dirname, 'database.sqlite');

// Conecta (ou cria) o banco SQLite
const db = new sqlite3.Database(dbPath, (err) => {
  if (err) {
    console.error('Erro ao conectar ao banco:', err.message);
  } else {
    console.log('Conectado ao banco SQLite!');
  }
});

// Rota GET raiz (/) para testar se a API está online
app.get('/', (req, res) => {
  res.send('API funcionando com ESModules! 🚀');
});

// Rota GET /usuarios para listar todos os usuários cadastrados no banco
app.get('/usuarios', (req, res) => {
  db.all('SELECT * FROM usuarios', [], (err, rows) => {
    if (err) {
      res.status(500).json({ erro: err.message }); // Erro na consulta
    } else {
      res.json(rows); // Retorna todos os usuários encontrados
    }
  });
});

// Rota POST /usuarios para cadastrar um novo usuário no banco
app.post('/usuarios', (req, res) => {
  const { nome, email, senha, tipo } = req.body;

  // Verifica se todos os campos obrigatórios foram preenchidos
  if (!nome || !email || !senha || !tipo) {
    return res.status(400).json({ erro: 'Preencha todos os campos!' });
  }

  // Insere o novo usuário no banco
  const query = `INSERT INTO usuarios (nome, email, senha, tipo) VALUES (?, ?, ?, ?)`;
  db.run(query, [nome, email, senha, tipo], function (err) {
    if (err) {
      res.status(500).json({ erro: err.message }); // Erro ao inserir
    } else {
      // Retorna os dados do usuário recém-cadastrado (sem a senha)
      res.status(201).json({ id: this.lastID, nome, email, tipo });
    }
  });
});

// Inicia o servidor e escuta na porta definida
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
