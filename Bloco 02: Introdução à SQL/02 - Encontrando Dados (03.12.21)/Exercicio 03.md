## Exercícios

Adicione ao Bando de Dados (New Query Tab):

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

01. Escreva uma query para exibir a peça e o preço de tudo que é provido pela empresa RBT.
```sr
SELECT DISTINCT Provider, Piece, Price FROM PiecesProviders.Provides where Provider='RBT';
```
02. Escreve uma query para exibir todas as informações das cinco peças com os maiores preços.
```sr
SELECT * FROM PiecesProviders.Provides ORDER BY Price DESC LIMIT 5;
```
03. Escreva uma query para exibir o nome das empresas e preço das peças com os quatro maiores preços, começando a lista a partir do 3º item.
```sr
SELECT Provider, Price FROM PiecesProviders.Provides ORDER BY Price DESC LIMIT 4 OFFSET 2;
```
04. Escreva uma query para exibir todas as informações das peças que são providas pela empresa HAL. Ordene o resultado pelos preços das peças de forma decrescente.
```sr
SELECT Provider, Piece, Price FROM PiecesProviders.Provides where Provider='HAL' ORDER BY Price DESC;
```
05. escreva uma query para exibir por quantas empresas a peça 1 é provida.
```sr
SELECT COUNT(*) FROM PiecesProviders.Provides WHERE Piece = 1;
```
