create disciplinas (
  id integer PRIMARY KEY AUTOINCREMENT,
  nome TEXT NOT NULL
  id_professor INTEGER
  Foreign Key (id_professor) REFERENCES user(id)
)