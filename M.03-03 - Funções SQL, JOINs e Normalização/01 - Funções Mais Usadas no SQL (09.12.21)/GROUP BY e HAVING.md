# GROUP BY

**Monstrar Agrupamentos:** 
```
SELECT first_name FROM sakila.actor
GROUP BY first_name;
```

**Monstrar Agrupamentos e Quantidade de Agrupados:** 
```
SELECT first_name, COUNT(*) FROM sakila.actor
GROUP BY first_name;
```

---

**Média de duração de filmes agrupados por classificação indicativa (AVG):** 
```
SELECT rating, AVG(length)
FROM sakila.film
GROUP BY rating;
```

**Valor mínimo de substituição dos filmes agrupados por classificação indicativa (MIN):** 
```
SELECT rating, MIN(replacement_cost)
FROM sakila.film
GROUP BY rating;
```

**Valor máximo de substituição dos filmes agrupados por classificação indicativa (MAX):** 
```
SELECT rating, MAX(replacement_cost)
FROM sakila.film
GROUP BY rating;
```

**Custo total de substituição de filmes agrupados por classificação indicativa (SUM):** 
```
SELECT rating, SUM(replacement_cost)
FROM sakila.film
GROUP by rating;
```

`coalesce(address2, "não nulo")`

Ao inves dos valores nulos serem mostrados como "nulos" eles serão mostrados como `não nulo`. Aplicar dentro do COUNT para contar os valores nulos tambem.

**Exemplo:**
```
SELECT
CASE -- Condicional
	WHEN length <= 30 THEN 'Até meia-hora'
	WHEN length > 30 AND length <= 60 THEN 'De 30 MINUTOS a 1 hora'
	WHEN length > 60 AND length <= 90 THEN 'De 1 hora a 1 hora e meia'
	WHEN length > 90 AND length < 120 THEN 'De 1 hora e meia até duas horas'
	ELSE 'Mais de duas horas'
END AS `Duração`,
count(film_id) AS `Quantidade de Filmes` -- Realiza a contagem
FROM sakila.film
GROUP BY `Duração` -- Ordena em Grupos a contagem feita pelo count(film_id)
HAVING `Quantidade de Filmes` > 200; -- Filtro
```

## Exercicios

01. Monte uma query que exiba a quantidade de clientes cadastrados na tabela sakila.customer que estão ativos e a quantidade que estão inativos.
```
SELECT active, COUNT(*)
FROM sakila.customer
GROUP BY active; 
```

02. Monte uma query para a tabela sakila.customer que exiba a quantidade de clientes ativos e inativos por loja. Os resultados devem conter o ID da loja, o status dos clientes (ativos ou inativos) e a quantidade de clientes por status.
```
SELECT active, COUNT(*)
FROM sakila.customer
GROUP BY store_id, active;
```

03. Monte uma query que exiba a média de duração de locação por classificação indicativa (rating) dos filmes cadastrados na tabela sakila.film. Os resultados devem ser agrupados pela classificação indicativa e ordenados da maior média para a menor.
```
SELECT rating, AVG(rental_duration) AS `Duração Média`
FROM sakila.film
GROUP BY rating ORDER BY `Duração Média` DESC;
```

04. Monte uma query para a tabela sakila.address que exiba o nome do distrito e a quantidade de endereços registrados nele. Os resultados devem ser ordenados da maior quantidade para a menor.
```
SELECT district, COUNT(*) AS `Qtd Endereços`
FROM sakila.address
GROUP BY district ORDER BY `Qtd Endereços` DESC;
```

# GROUP BY + HAVING

**Exemplo 01:**
```
SELECT first_name, COUNT(*)
FROM sakila.actor
GROUP BY first_name
HAVING COUNT(*) > 2;
```

**Exemplo 02:**
```
SELECT first_name, COUNT(*) AS nomes_cadastrados
FROM sakila.actor
GROUP BY first_name
HAVING nomes_cadastrados > 2;
```

**Exemplo 03:**
```
SELECT first_name, COUNT(*) AS 'nomes cadastrados'
FROM sakila.actor
GROUP BY first_name
HAVING 'nomes cadastrados' > 2;
```

## Exercicios

01. Usando a query a seguir:
```
SELECT rating, AVG(length)
FROM sakila.film
GROUP BY rating;
```

Exiba apenas as durações médias que estão entre 115.0 a 121.50. Além disso, dê um alias (apelido) à coluna gerada por AVG(length), de forma que deixe a query mais legível. Finalize ordenando os resultados de forma decrescente.

```
SELECT rating, AVG(length) AS `Duração Média`
FROM sakila.film
GROUP BY rating
HAVING `Duração Média` BETWEEN 115.0 AND 121.50
ORDER BY `Duração Média` DESC;
```

02. Usando a query a seguir:
```
SELECT rating, SUM(replacement_cost)
FROM sakila.film
GROUP by rating;
```

Exiba apenas os valores de total do custo de substituição que estão acima de $3950.50. Dê um alias que faça sentido para SUM(replacement_cost), de forma que deixe a query mais legível. Finalize ordenando os resultados de forma crescente.
```
SELECT rating, SUM(replacement_cost) AS `Custo de Substituição`
FROM sakila.film
GROUP by rating
HAVING `Custo de Substituição` > 3950.50
ORDER BY `Custo de Substituição` ASC;
```