CREATE TABLE exercicios (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  id_disciplina INTEGER NOT NULL,
  enunciado TEXT NOT NULL,
  resposta_1 TEXT NOT NULL,
  resposta_2 TEXT NOT NULL,
  resposta_3 TEXT NOT NULL,
  resposta_4 TEXT NOT NULL,
  resposta_correta INTEGER NOT NULL,
  FOREIGN KEY (id_professor) REFERENCES professores(id)
);