import { PrismaClient } from '@prisma/client';
import { notas } from '@prisma/client/sql';

const prisma = new PrismaClient();

async function media(id_cronograma) {
  // Recupera as notas associadas ao cronograma
  const resultados = await prisma.$queryRawTyped(notas(id_cronograma));

  // Extrai os valores das notas (supondo que venha um array de objetos)
  const listaNotas = resultados.map(item => item.nota); // substitua "nota" pelo nome real da coluna

  if (listaNotas.length === 0) return 0;

  // Função para calcular a média
  const calcularMedia = (arr) => arr.reduce((acc, val) => acc + val, 0) / arr.length;

  // Média inicial
  const mediaNotas = calcularMedia(listaNotas);

  // Função para calcular o desvio padrão
  const calcularDesvioPadrao = (arr, media) => {
    const somaQuadrados = arr.reduce((acc, val) => acc + Math.pow(val - media, 2), 0);
    return Math.sqrt(somaQuadrados / arr.length);
  };

  const desvioPadrao = calcularDesvioPadrao(listaNotas, mediaNotas);

  // Filtra as notas dentro de 1 desvio padrão da média
  const notasFiltradas = listaNotas.filter(nota => Math.abs(nota - mediaNotas) <= desvioPadrao);

  // Retorna a nova média das notas filtradas
  return calcularMedia(notasFiltradas);
}

export { media };