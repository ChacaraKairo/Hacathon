CREATE Table disciplina_curso(
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  id_curso INTEGER NOT NULL,
  id_disciplina INTEGER NOT NULL
  Foreign Key (id_curso) REFERENCES cursos(id),
  Foreign Key (id_disciplina,) REFERENCES disciplinas(id)
)