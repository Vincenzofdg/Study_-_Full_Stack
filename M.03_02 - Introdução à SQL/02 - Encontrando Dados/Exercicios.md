## Exercício 01 (Sakila)
1. Escreva uma query que exiba todos os filmes cadastrados no banco de dados.
```
SELECT * FROM sakila.film;
```
2. Escreva uma query que exiba apenas o nome dos filmes, seu ano de lançamento e sua classificação.
```
SELECT title, release_year, rating FROM sakila.film;
```
3. Quantos filmes temos cadastrados?
```
SELECT COUNT(title) FROM sakila.film;
```
4. Escreva uma query que exiba apenas os sobrenomes únicos cadastrados.
```
SELECT DISTINCT last_name FROM sakila.actor;
```
5. Quantos sobrenomes únicos temos na tabela?
```
SELECT COUNT(DISTINCT last_name) FROM sakila.actor;
```
6. Ordene os valores na tabela em ordem crescente de sobrenomes e em ordem decrescente de nome.
```
SELECT * FROM sakila.actor ORDER BY last_name ASC, first_name DESC;
```
7. Vá até a tabela language do sakila e crie uma pesquisa que mostre os 5 idiomas cadastrados, mas não mostre o idioma english.
```
SELECT * FROM sakila.language LIMIT 5 OFFSET 1;
```
8. Vá até a tabela film e selecione todos os dados da tabela.
```
SELECT * FROM sakila.film;
```
9. Crie uma query para encontrar os 20 primeiros filmes , incluindo o título , o ano de lançamento , a duração , a classificação indicativa e o custo de substituição . Ordene os resultados pelos filmes com a maior duração e depois pelo menor custo de substituição.
```
SELECT title, release_year, rental_duration, rating, replacement_cost FROM sakila.film ORDER BY rental_duration DESC, replacement_cost ASC LIMIT 20;
```

## Exercício 02
Adicione ao Bando de Dados:
```sh
DROP SCHEMA IF EXISTS Scientists;
CREATE SCHEMA Scientists;
USE Scientists;

CREATE TABLE Scientists (
  SSN INT,
  Name CHAR(30) NOT NULL,
  PRIMARY KEY (SSN)
);

CREATE TABLE Projects (
  Code CHAR(4),
  Name CHAR(50) NOT NULL,
  Hours INT,
  PRIMARY KEY (Code)
);

CREATE TABLE AssignedTo (
  Scientist INT NOT NULL,
  Project CHAR(4) NOT NULL,
  PRIMARY KEY (Scientist, Project),
  FOREIGN KEY (Scientist) REFERENCES Scientists (SSN),
  FOREIGN KEY (Project) REFERENCES Projects (Code)
);

INSERT INTO Scientists(SSN,Name)
  VALUES(123234877, 'Michael Rogers'),
    (152934485, 'Anand Manikutty'),
    (222364883, 'Carol Smith'),
    (326587417, 'Joe Stevens'),
    (332154719, 'Mary-Anne Foster'),
    (332569843, 'George ODonnell'),
    (546523478, 'John Doe'),
    (631231482, 'David Smith'),
    (654873219, 'Zacary Efron'),
    (745685214, 'Eric Goldsmith'),
    (845657245, 'Elizabeth Doe'),
    (845657246, 'Kumar Swamy');

 INSERT INTO Projects (Code, Name, Hours)
  VALUES ('AeH1' ,'Winds: Studying Bernoullis Principle', 156),
    ('AeH2', 'Aerodynamics and Bridge Design', 189),
    ('AeH3', 'Aerodynamics and Gas Mileage', 256),
    ('AeH4', 'Aerodynamics and Ice Hockey', 789),
    ('AeH5', 'Aerodynamics of a Football', 98),
    ('AeH6', 'Aerodynamics of Air Hockey', 89),
    ('Ast1', 'A Matter of Time', 112),
    ('Ast2', 'A Puzzling Parallax', 299),
    ('Ast3', 'Build Your Own Telescope', 6546),
    ('Bte1', 'Juicy: Extracting Apple Juice with Pectinase', 321),
    ('Bte2', 'A Magnetic Primer Designer', 9684),
    ('Bte3', 'Bacterial Transformation Efficiency', 321),
    ('Che1', 'A Silver-Cleaning Battery', 545),
    ('Che2', 'A Soluble Separation Solution', 778);

 INSERT INTO AssignedTo (Scientist, Project)
  VALUES (123234877, 'AeH1'),
    (152934485, 'AeH3'),
    (222364883, 'Ast3'),
    (326587417, 'Ast3'),
    (332154719, 'Bte1'),
    (546523478, 'Che1'),
    (631231482, 'Ast3'),
    (654873219, 'Che1'),
    (745685214, 'AeH3'),
    (845657245, 'Ast1'),
    (845657246, 'Ast2'),
    (332569843, 'AeH4');
```

1. Escreva uma query para exibir a string "This is SQL Exercise, Practice and Solution".
```
SELECT 'This is SQL Exercise, Practice and Solution';
```
2. Escreva uma query para exibir três números em três colunas.\
```
SELECT 1, 2, 3;
```
3. Escreva uma query para exibir a soma dos números 10 e 15.
```
SELECT 10+15;
```
4. Escreva uma query para exibir o resultado de uma expressão aritmética qualquer.
```
SELECT 10+15;
```
5. Escreva uma query para exibir todas as informações de todos os cientistas.
```
SELECT * FROM Scientists.Scientists;
```
6. Escreva uma query para exibir o nome como "Nome do Projeto" e as horas como "Tempo de Trabalho" de cada projeto.
```
SELECT Name AS 'Nome do Projeto', Hours AS 'Tempo de Trabalho' FROM Scientists.Projects;
```
7. Escreva uma query para exibir o nome dos cientistas em ordem alfabética.
```
SELECT Name FROM Scientists.Scientists ORDER BY Name ASC;
```
8.  Escreva uma query que exiba a string "O projeto Name precisou de Hours horas para ser concluído." para cada projeto.
```
SELECT Name FROM Scientists.Projects ORDER BY Name DESC;
```
9. Escreva uma query para exibir o nome e as horas dos três projetos com a maior quantidade de horas.
```
SELECT Name, Hours FROM Scientists.Projects ORDER BY Hours DESC LIMIT 3;
```
10. Escreva uma query para exibir o código de todos os projetos da tabela AssignedTo sem que haja repetições.
```
SELECT DISTINCT Project FROM Scientists.AssignedTo;
```
11. Escreva uma query para exibir o nome do projeto com maior quantidade de horas.
```
SELECT Name FROM Scientists.Projects ORDER BY Hours DESC LIMIT 1;
```
12. Escreva uma query para exibir o nome do segundo projeto com menor quantidade de horas.
```
SELECT Name FROM Scientists.Projects ORDER BY Hours DESC LIMIT 1 OFFSET 1;
```
13. Escreva uma query para exibir todas as informações dos cinco projetos com a menor quantidade de horas.
```
SELECT Name FROM Scientists.Projects ORDER BY Hours asc LIMIT 5;
```
14. Escreva uma query que exiba a string "Existem Number cientistas na tabela Scientists.", em que Number se refira a quantidade de cientistas.
```
SELECT CONCAT('Existem ', COUNT(*), ' cientistas na tabela Scientists.') FROM Scientists;
```

## Exercício 03
Adicione ao Bando de Dados:
```sh
DROP SCHEMA IF EXISTS PiecesProviders;
CREATE SCHEMA PiecesProviders;
USE PiecesProviders;

CREATE TABLE Pieces (
  Code INTEGER PRIMARY KEY NOT NULL,
  Name TEXT NOT NULL
);

CREATE TABLE Providers (
  Code VARCHAR(40) PRIMARY KEY NOT NULL,
  Name TEXT NOT NULL
);

CREATE TABLE Provides (
  Piece INTEGER,
  FOREIGN KEY (Piece) REFERENCES Pieces (Code),
  Provider VARCHAR(40),
  FOREIGN KEY (Provider) REFERENCES Providers (Code),
  Price INTEGER NOT NULL,
  PRIMARY KEY (Piece , Provider)
);

INSERT INTO Providers(Code, Name)
  VALUES ('HAL', 'Clarke Enterprises'),
    ('RBT', 'Susan Calvin Corp.'),
    ('TNBC', 'Skellington Supplies');

INSERT INTO Pieces(Code, Name)
  VALUES (1, 'Sprocket'),
    (2, 'Screw'),
    (3, 'Nut'),
    (4, 'Bolt');

INSERT INTO Provides(Piece, Provider, Price)
  VALUES (1, 'HAL', 10),
    (1, 'RBT', 15),
    (2, 'HAL', 20),
    (2, 'RBT', 25),
    (2, 'TNBC', 14),
    (3, 'RBT', 50),
    (3, 'TNBC', 45),
    (4, 'HAL', 5),
    (4, 'RBT', 7);
```

1. Escreva uma query para exibir a peça e o preço de tudo que é provido pela empresa RBT.
```
SELECT DISTINCT Provider, Piece, Price FROM PiecesProviders.Provides where Provider='RBT';
```
2. Escreve uma query para exibir todas as informações das cinco peças com os maiores preços.
```
SELECT * FROM PiecesProviders.Provides ORDER BY Price DESC LIMIT 5;
```
3. Escreva uma query para exibir o nome das empresas e preço das peças com os quatro maiores preços, começando a lista a partir do 3º item.
```
SELECT Provider, Price FROM PiecesProviders.Provides ORDER BY Price DESC LIMIT 4 OFFSET 2;
```
4. Escreva uma query para exibir todas as informações das peças que são providas pela empresa HAL. Ordene o resultado pelos preços das peças de forma decrescente.
```
SELECT Provider, Piece, Price FROM PiecesProviders.Provides where Provider='HAL' ORDER BY Price DESC;
```
5. escreva uma query para exibir por quantas empresas a peça 1 é provida.
```
SELECT COUNT(*) FROM PiecesProviders.Provides WHERE Piece = 1;
```