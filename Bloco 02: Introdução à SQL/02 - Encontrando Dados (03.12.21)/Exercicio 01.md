## Exercícios

**Usar tabela: sakila.Film**

1. Escreva uma query que exiba todos os filmes cadastrados no banco de dados.
```sh
> SELECT * FROM sakila.film;
```
2. Escreva uma query que exiba apenas o nome dos filmes, seu ano de lançamento e sua classificação.
```sh
> SELECT title, release_year, rating FROM sakila.film;
```
3. Quantos filmes temos cadastrados?
```sh
> SELECT COUNT(title) FROM sakila.film;
```

<hr />

**Usar tabela: sakila.actor**

4. Escreva uma query que exiba apenas os sobrenomes únicos cadastrados.
```sh
> SELECT DISTINCT last_name FROM sakila.actor;
```
5. Quantos sobrenomes únicos temos na tabela?
```sh
> SELECT COUNT(DISTINCT last_name) FROM sakila.actor;
```
6. Ordene os valores na tabela em ordem crescente de sobrenomes e em ordem decrescente de nome.
```sh
> SELECT * FROM sakila.actor ORDER BY last_name ASC, first_name DESC;
```

<hr />

**Usar tabela: sakila.language**

7. Vá até a tabela language do sakila e crie uma pesquisa que mostre os 5 idiomas cadastrados, mas não mostre o idioma english.
```sh
> SELECT * FROM sakila.language LIMIT 5 OFFSET 1;
```
<hr />

**Usar tabela: sakila.Film**

8. Vá até a tabela film e selecione todos os dados da tabela.
```sh
> SELECT * FROM sakila.film;
```
9. Crie uma query para encontrar os 20 primeiros filmes , incluindo o título , o ano de lançamento , a duração , a classificação indicativa e o custo de substituição . Ordene os resultados pelos filmes com a maior duração e depois pelo menor custo de substituição.
```sh
> SELECT title, release_year, rental_duration, rating, replacement_cost FROM sakila.film ORDER BY rental_duration DESC, replacement_cost ASC LIMIT 20;
```


