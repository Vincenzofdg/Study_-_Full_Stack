Usado para Juntas informações providas pela tabela, assim gerando relatorios e novas informações.
```
SELECT CONCAT(first_name, last_name) FROM sakila.actor;

SELECT CONCAT(first_name, ' ', last_name) FROM sakila.actor;

SELECT CONCAT(first_name, ' ', last_name) AS 'Nome Completo' FROM sakila.actor;
```
### Exercicios (Utilizando o banco de dados sakila):

1. Monte uma query que exiba o título e o ano de lançamento dos filmes em uma coluna e dê a ela o nome Lançamento do Filme.

> SELECT CONCAT(title, ' ', release_year) AS 'Lançamento do Filme' FROM sakila.film;

2. Crie uma query que exiba o título do filme e sua classificação indicativa (PG, G, NC-17) em apenas uma coluna. Dê a ela o nome Classificação. Não se esqueça de deixar um espaço entre as palavras para que fiquem legíveis.

> SELECT CONCAT(title, ' (', rating, ')') AS 'Classificação' FROM sakila.film;

3. Monte uma query que exiba a rua e o distrito de cada registro em uma coluna apenas, e dê a essa coluna o nome Endereço.

> SELECT CONCAT(address, ' (', district, ')') AS 'Endereço' FROM sakila.address;
