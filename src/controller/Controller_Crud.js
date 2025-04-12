import {
    create,
    readAll,
    readById,
    update,
    deleteById
  } from '../services/prismaService.js';
  
  /**
   * Cria um controller genérico para qualquer entidade Prisma.
   * @param {string} entidade - Nome da entidade no Prisma (tabela).
   * @returns {object} Controller com os métodos padrão.
   */
  function controllerCrud(entidade) {
    return {
      async create(req, res) {
        try {
          const novoRegistro = await create(req.body, entidade);
          res.status(201).json(novoRegistro);
        } catch (error) {
          res.status(500).json({ erro: error.message });
        }
      },
  
      async readAll(req, res) {
        try {
          const registros = await readAll(entidade);
          res.json(registros);
        } catch (error) {
          res.status(500).json({ erro: error.message });
        }
      },
  
      async readById(req, res) {
        try {
          const registro = await readById(req.params.id, entidade);
          if (!registro) {
            return res.status(404).json({ erro: `${entidade} não encontrado` });
          }
          res.json(registro);
        } catch (error) {
          res.status(500).json({ erro: error.message });
        }
      },
  
      async update(req, res) {
        try {
          const atualizado = await update(req.params.id, req.body, entidade);
          res.json(atualizado);
        } catch (error) {
          res.status(500).json({ erro: error.message });
        }
      },
  
      async delete(req, res) {
        try {
          const deletado = await deleteById(req.params.id, entidade);
          res.json(deletado);
        } catch (error) {
          res.status(500).json({ erro: error.message });
        }
      }
    };
  }
  
  export default controllerCrud;