## COUNT
**Contar todas as linha de um banco de dados:** `SELECT COUNT(*) FROM sakila.actor;`

**Contar todas as linha sem se repetir nenhum nome:** `SELECT COUNT(DISTINCT first_name) FROM sakila.actor;`

**Filtrando com um nome:** `SELECT COUNT(district) FROM sakila.address WHERE district='Vaduz';`

### Exemplo
1. Quantas senhas temos cadastradas nessa tabela?
```
SELECT COUNT(password) FROM sakila.staff;
```
2. Quantas pessoas temos no total trabalhando para nossa empresa?
```
SELECT COUNT(*) FROM sakila.staff;
```
3. Quantos emails temos cadastrados nessa tabela?
```
SELECT COUNT(email) FROM sakila.staff;
```

## CONCAT
Usado para Juntas informações providas pela tabela, assim gerando relatorios e novas informações.
```
SELECT CONCAT(first_name, last_name) FROM sakila.actor;
SELECT CONCAT(first_name, ' ', last_name) FROM sakila.actor;
SELECT CONCAT(first_name, ' ', last_name) AS 'Nome Completo' FROM sakila.actor;
```

### Exemplo
1. Monte uma query que exiba o título e o ano de lançamento dos filmes em uma coluna e dê a ela o nome Lançamento do Filme.
```
SELECT CONCAT(title, ' ', release_year) AS 'Lançamento do Filme' FROM sakila.film;
```
2. Crie uma query que exiba o título do filme e sua classificação indicativa (PG, G, NC-17) em apenas uma coluna. Dê a ela o nome Classificação. Não se esqueça de deixar um espaço entre as palavras para que fiquem legíveis.
```
SELECT CONCAT(title, ' (', rating, ')') AS 'Classificação' FROM sakila.film;
```
3. Monte uma query que exiba a rua e o distrito de cada registro em uma coluna apenas, e dê a essa coluna o nome Endereço.
```
SELECT CONCAT(address, ' (', district, ')') AS 'Endereço' FROM sakila.address;
```

## DISTINCT
`SELECT * FROM sakila.actor;` ==> 200 linhas retornadas

`SELECT first_name, last_name FROM sakila.actor;`

`SELECT DISTINCT first_name, last_name FROM sakila.actor;` ==> 199 linhas retornadas

### Exemplo
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
```
SELECT DISTINCT Nome, Idade FROM Escola.Alunos;
```
2. Quantas linhas você encontraria na query anterior? (R: 5)
3. Monte uma query para encontrar somente os nomes únicos.
```
SELECT DISTINCT Nome FROM Escola.Alunos;
```
4. Quantas linhas você encontraria na query anterior? (R: 4)
5. Monte uma query para encontrar somente as idades únicas.
```
SELECT DISTINCT Idade FROM Escola.Alunos;
```
6. Quantas linhas você encontraria na query anterior? (R: 4)

## LIMIT e OFFSET
Para pular uma certa quantidade de linhas do seu resultado, você pode usar o comando OFFSET.

### Exemplo
```
SELECT * FROM sakila.rental LIMIT 10 OFFSET 3;
```

## ORDER BY
- **Ordem Crescente (Padrao):** `SELECT * FROM sakila.address ORDER BY address ASC;`
- **Orderm Decrescente:** `SELECT * FROM sakila.address ORDER BY address DESC;`

### Exemplo
```
SELECT * FROM sakila.address ORDER BY district ASC, address DESC;
```