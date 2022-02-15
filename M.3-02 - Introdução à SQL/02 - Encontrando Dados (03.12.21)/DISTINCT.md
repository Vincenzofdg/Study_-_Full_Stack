`SELECT * FROM sakila.actor;` ==> 200 linhas retornadas

`SELECT first_name, last_name FROM sakila.actor;`

`SELECT DISTINCT first_name, last_name FROM sakila.actor;` ==> 199 linhas retornadas

**Exercicio**

Abra uma nova janela de query no MySQL Workbench e execute o seguinte código:
```sh
CREATE DATABASE `Escola`;
CREATE TABLE IF NOT EXISTS Escola.Alunos (
    `Nome` VARCHAR(7) CHARACTER SET utf8,
    `Idade` INT
);
INSERT INTO Escola.Alunos VALUES
    ('Rafael', 25),
    ('Amanda', 30),
    ('Roberto', 45),
    ('Carol', 19),
    ('Amanda', 25);
```

1. Monte uma query para encontrar pares únicos de nomes e idades .

> SELECT DISTINCT Nome, Idade FROM Escola.Alunos;

2. Quantas linhas você encontraria na query anterior? (R: 5)

3. Monte uma query para encontrar somente os nomes únicos.

> SELECT DISTINCT Nome FROM Escola.Alunos;

4. Quantas linhas você encontraria na query anterior? (R: 4)

5. Monte uma query para encontrar somente as idades únicas.

> SELECT DISTINCT Idade FROM Escola.Alunos;

6. Quantas linhas você encontraria na query anterior? (R: 4)

