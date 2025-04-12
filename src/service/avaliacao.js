import { PrismaClient } from '@prisma/client';
import { notas as notasQuery } from '@prisma/client/sql';

const prisma = new PrismaClient();

export async function mediaComDesvioService(id_cronograma) {
  const resultado = await prisma.$queryRawTyped(notasQuery(id_cronograma));
  const valores = resultado.map(item => item.nota); // Supondo que a propriedade seja `nota`

  if (valores.length === 0) {
    throw new Error('Nenhuma nota encontrada para esse cronograma.');
  }

  const calcularMedia = (arr) => arr.reduce((total, val) => total + val, 0) / arr.length;

  const mediaNotas = calcularMedia(valores);

  const calcularDesvioPadrao = (arr, media) => {
    const somaQuadrados = arr.reduce((acc, val) => acc + Math.pow(val - media, 2), 0);
    return Math.sqrt(somaQuadrados / arr.length);
  };

  const desvioPadrao = calcularDesvioPadrao(valores, mediaNotas);

  const notasFiltradas = valores.filter(nota => Math.abs(nota - mediaNotas) <= desvioPadrao);

  const mediaFinal = calcularMedia(notasFiltradas);

  return {
    media_com_desvio: Number(mediaFinal.toFixed(2)),
    total_notas: valores.length,
    notas_consideradas: notasFiltradas.length,
  };
}
