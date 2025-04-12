CREATE TABLE IF NOT EXISTS avaliacao_aula (
  id INT AUTO_INCREMENT PRIMARY KEY,
  id_usuario INT NOT NULL,
  id_cronograma INT NOT NULL,
  nota INT NOT NULL,
  FOREIGN Key (id_usuario) REFERENCES usuarios(id),
  Foreign Key (id_cronograma) REFERENCES cronograma(id)
)
/*nota de 1 a 5*/