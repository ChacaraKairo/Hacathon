CREATE TABLE IF NOT EXISTS avaliacao_aula (
  id INT AUTO_INCREMENT PRIMARY KEY,
  id_usuario INT NOT NULL,
  id_cronograma INT NOT NULL,
  Foreign Key (id_cronograma) REFERENCES cronograma(id)
)