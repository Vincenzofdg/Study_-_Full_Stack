**Media:** `SELECT AVG(replacement_cost) FROM sakila.film`

**Menor Valor Encontrado:** `SELECT MIN(replacement_cost) FROM sakila.film;`

**Maior Valor Encontrado:** `SELECT MAX(replacement_cost) FROM sakila.film;`

**Somatória:** `SELECT SUM(replacement_cost) FROM sakila.film;`

**Quantidade:** `SELECT COUNT(replacement_cost) FROM sakila.film;`

## Exercicios:

Utilizando o banco de dados sakila monte um query que exiba:

01. A média de duração dos filmes e dê o nome da coluna de 'Média de Duração';
```
SELECT AVG(length) AS 'Média de Duração' FROM sakila.film;
```

02. A duração mínima dos filmes como 'Duração Mínima';
```
SELECT MIN(length) AS 'Duração Mínima' FROM sakila.film;
```

03. A duração máxima dos filmes como 'Duração Máxima';
```
SELECT MAX(length) AS 'Duração Máxima' FROM sakila.film;
```

04. A soma de todas as durações como 'Tempo de Exibição Total';
```
SELECT SUM(length) AS 'Tempo de Exibição Total' FROM sakila.film;
```

05. E finalmente, a quantidade total de filmes cadastrados na tabela sakila.film como 'Filmes Registrados'.
```
SELECT COUNT(*) AS 'Filmes Registrados' FROM sakila.film;
```
