CREATE Table if NOT EXISTS cronograma(
  id INT AUTO_INCREMENT PRIMARY KEY,
  disciplina_id INT NOT NULL,
  nome_aula VARCHAR(255) NOT NULL,
  `data` DATE NOT NULL,
  FOREIGN KEY (disciplina_id) REFERENCES disciplinas(id)
)