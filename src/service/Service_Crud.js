import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

/**
 * Cria um novo registro em uma entidade.
 * @param {Object} data - Dados a serem inseridos.
 * @param {string} entidade - Nome da tabela no Prisma.
 * @returns {Promise<Object>} Objeto criado.
 */
async function create(data, entidade) {
  try {
    return await prisma[entidade].create({ data });
  } catch (error) {
    throw new Error(`Erro ao criar em ${entidade}: ${error.message}`);
  }
}

/**
 * Busca todos os registros de uma entidade.
 * @param {string} entidade - Nome da tabela no Prisma.
 * @returns {Promise<Array>} Lista de registros.
 */
async function readAll(entidade) {
  try {
    return await prisma[entidade].findMany();
  } catch (error) {
    throw new Error(`Erro ao buscar todos em ${entidade}: ${error.message}`);
  }
}

/**
 * Busca um registro por ID.
 * @param {number} id - ID do registro.
 * @param {string} entidade - Nome da tabela no Prisma.
 * @returns {Promise<Object|null>} Registro encontrado ou null.
 */
async function readById(id, entidade) {
  try {
    return await prisma[entidade].findUnique({ where: { id: Number(id) } });
  } catch (error) {
    throw new Error(`Erro ao buscar por ID em ${entidade}: ${error.message}`);
  }
}

/**
 * Atualiza um registro pelo ID.
 * @param {number} id - ID do registro.
 * @param {Object} data - Dados para atualizar.
 * @param {string} entidade - Nome da tabela no Prisma.
 * @returns {Promise<Object>} Registro atualizado.
 */
async function update(id, data, entidade) {
  try {
    return await prisma[entidade].update({ where: { id: Number(id) }, data });
  } catch (error) {
    throw new Error(`Erro ao atualizar em ${entidade}: ${error.message}`);
  }
}

/**
 * Exclui um registro pelo ID.
 * @param {number} id - ID do registro.
 * @param {string} entidade - Nome da tabela no Prisma.
 * @returns {Promise<Object>} Registro excluído.
 */
async function deleteById(id, entidade) {
  try {
    return await prisma[entidade].delete({ where: { id: Number(id) } });
  } catch (error) {
    throw new Error(`Erro ao excluir em ${entidade}: ${error.message}`);
  }
}

export {
  prisma,
  create,
  readAll,
  readById,
  update,
  deleteById
};
