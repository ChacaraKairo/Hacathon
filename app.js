/**
 * @author Kairo Chácara
 * @version 1.0
 * @date 01/04/2025
 * @description Arquivo principal da aplicação Express com Prisma e MySQL.
 */

import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import router from './src/routes/Routes_Crud.js';
import { PrismaClient } from '@prisma/client';

const app = express(); // Inicializa o Express
const prisma = new PrismaClient(); // Inicializa o Prisma com MySQL

// Middlewares
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

// Rota de health check
app.get('/api/health', async (req, res) => {
  try {
    await prisma.$queryRaw`SELECT 1`; // Teste de conexão com o MySQL
    res.status(200).json({
      status: 'healthy',
      message: 'API do Marketplace de Hardware está operacional',
      timestamp: new Date().toISOString(),
      version: '1.0.0',
    });
  } catch (error) {
    res.status(500).json({
      status: 'unhealthy',
      error: error.message,
    });
  }
});

// Rota principal
app.get('/', (req, res) => {
  res.send('API está funcionando!');
});

// Conecta rotas da aplicação
app.use('/api', router);

// Inicia o servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, async () => {
  try {
    await prisma.$connect();
    console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
    console.log('✅ Banco de dados conectado com sucesso!');
  } catch (error) {
    console.error('❌ Erro ao conectar com o banco de dados:', error.message);
  }
});
