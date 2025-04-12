create table cursos(
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  nome TEXT NOT NULL,
  FOREIGN KEY (id_professor) REFERENCES professores(id)
);