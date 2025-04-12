-- Tabela de usuários
CREATE TABLE IF NOT EXISTS usuarios (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nome VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL UNIQUE,
  senha VARCHAR(255) NOT NULL,
  tipo ENUM('aluno', 'professor') NOT NULL,
  criado_em DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Tabela de cursos
CREATE TABLE IF NOT EXISTS cursos (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nome VARCHAR(255) NOT NULL,
  descricao TEXT
);

-- Tabela de disciplinas
CREATE TABLE IF NOT EXISTS disciplinas (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nome VARCHAR(255) NOT NULL,
  descricao TEXT
);

-- Relação entre disciplinas e cursos
CREATE TABLE IF NOT EXISTS disciplina_curso (
  id INT AUTO_INCREMENT PRIMARY KEY,
  curso_id INT NOT NULL,
  disciplina_id INT NOT NULL,
  FOREIGN KEY (curso_id) REFERENCES cursos(id),
  FOREIGN KEY (disciplina_id) REFERENCES disciplinas(id)
);

-- Tabela de exercícios
CREATE TABLE IF NOT EXISTS exercicios (
  id INT AUTO_INCREMENT PRIMARY KEY,
  titulo VARCHAR(255) NOT NULL,
  enunciado TEXT NOT NULL,
  disciplina_id INT NOT NULL,
  criado_em DATETIME DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (disciplina_id) REFERENCES disciplinas(id)
);
