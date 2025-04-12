import express from 'express';
import controllerCrud from './src/controllers/controllerGenerico.js';

const router = express.Router();

// Lista de entidades do seu sistema
const entidades = [
  'usuarios',
  'cursos',
  'disciplinas',
  'disciplina_curso',
  'exercicios',
  'cronograma'
];

// Para cada entidade, gera um conjunto de rotas REST
entidades.forEach((entidade) => {
  const controller = controllerCrud(entidade);

  router.get(`/${entidade}`, controller.readAll);        // Listar todos
  router.get(`/${entidade}/:id`, controller.readById);   // Buscar por ID
  router.post(`/${entidade}`, controller.create);        // Criar novo
  router.put(`/${entidade}/:id`, controller.update);     // Atualizar
  router.delete(`/${entidade}/:id`, controller.delete);  // Deletar
});

export default router;
