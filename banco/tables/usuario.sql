CREATE TABLE usuarios (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nome TEXT NOT NULL,
    email TEXT UNIQUE NOT NULL,
    senha TEXT NOT NULL,
    tipo TEXT NOT NULL CHECK (tipo IN ('aluno', 'professor')),
    codigo VARCHAR(13) NOT NULL
);

/*
codigo é o RA ou Matricula
*/