-- Como foi mostrado na aula:
-- CREATE DATABASE MyLib;
-- USE MyLib;

-- Como eu prefiro fazer:
DROP SCHEMA IF EXISTS MyLib;
CREATE SCHEMA MyLib;
USE MyLib;

CREATE TABLE categoria (
	categoria_id INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(255) NOT NULL
);

CREATE TABLE autor (
	autor_id INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(255) NOT NULL,
	nacionalidade VARCHAR(255),
	email VARCHAR(255)
);

CREATE TABLE editora (
	editora_id INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(255) NOT NULL
);

-- Dropar a tabela livro para a criação das Chaves Estrangeiras
-- DROP TABLE livro;

CREATE TABLE livro (
	livro_id INT PRIMARY KEY AUTO_INCREMENT,
	titulo VARCHAR(255) NOT NULL,
	data_lancamento DATETIME,
    -- Criando Chave Estrangeira
    autor_id INT NOT NULL,
    categoria_id INT NOT NULL,
    editora_id INT NOT NULL,
    -- Referenciando as chaves
    FOREIGN KEY (categoria_id) REFERENCES categoria (categoria_id),
    FOREIGN KEY (autor_id) REFERENCES autor (autor_id),
    FOREIGN KEY (editora_id) REFERENCES editora (editora_id)
);

CREATE TABLE cliente (
	cliente_id INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL
);

CREATE TABLE historico (
	historico_id INT PRIMARY KEY AUTO_INCREMENT,
	cliente_id INT NOT NULL,
    livro_id INT NOT NULL,
    data_retirada DATETIME NOT NULL,
    data_entrega DATETIME NOT NULL,
    -- Chaves estrageniras
    FOREIGN KEY (cliente_id) REFERENCES cliente (cliente_id),
    FOREIGN KEY (livro_id) REFERENCES livro (livro_id)
);

-- Utilizar chaves estrangeiras com chaves primárias:
-- Utilidade => Criar restrição
-- Exemplo 	=> Um livro so pode ser alugado pelo cliente uma única vez

-- CREATE TABLE livro_categoria (
-- 	livro_id INT NOT NULL,
-- 	categoria_id INT NOT NULL,
--     FOREIGN KEY (livro_id) REFERENCES livro (livro_id),
--     FOREIGN KEY (categoria_id) REFERENCES categoria (categoria_id),
--     -- Chave Primaria Composta
--     PRIMARY KEY (livro_id, categoria_id)
-- );
