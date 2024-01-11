CREATE DATABASE lista_de_tarefas;

CREATE TABLE usuarios (
  id SERIAL PRIMARY KEY,
  nome VARCHAR(100) NOT NULL,
  email VARCHAR(100) NOT NULL UNIQUE,
  senha VARCHAR(100) NOT NULL
);


 CREATE TABLE tarefas (
    id SERIAL PRIMARY KEY,
    titulo VARCHAR(200) NOT NULL,
    descricao TEXT,
    prioridade VARCHAR(6) NOT NULL,
    concluida BOOLEAN NOT NULL,
    prazo_conclusao DATE NOT NULL ,
);