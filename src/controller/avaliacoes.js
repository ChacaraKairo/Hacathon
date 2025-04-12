import { mediaComDesvioService } from '../services/mediaService.js';

export const calcularMediaComDesvio = async (req, res) => {
  const { id_cronograma } = req.params;

  try {
    const resultado = await mediaComDesvioService(id_cronograma);
    res.status(200).json({
      id_cronograma,
      ...resultado
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
