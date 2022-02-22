Utilizar o bando de dados pixar.sql

01. Utilizando o INNER JOIN, encontre as vendas nacionais (domestic_sales) e internacionais (international_sales) de cada filme.
```
SELECT mv.title, box.domestic_sales, box.international_sales
FROM
    Pixar.Movies AS mv
	INNER JOIN Pixar.BoxOffice AS box
    ON box.movie_id = mv.id;
```


02. Utilizando o INNER JOIN, faça uma busca que retorne o número de vendas para cada filme que possui um número maior de vendas internacionais (international_sales) do que vendas nacionais (domestic_sales).
```
SELECT mv.title, (box.domestic_sales + box.international_sales) AS 'Número Total de Vendas'
FROM
    Pixar.Movies AS mv
	INNER JOIN Pixar.BoxOffice AS box
    ON box.movie_id = mv.id
WHERE international_sales > domestic_sales;
```

03. Utilizando o INNER JOIN, faça uma busca que retorne os filmes e sua avaliação (rating) em ordem decrescente.
```
SELECT mv.title, box.rating AS 'Avaliação'
FROM
    Pixar.Movies AS mv
	INNER JOIN Pixar.BoxOffice AS box
    ON box.movie_id = mv.id
ORDER BY rating ASC;
```

04. Utilizando o LEFT JOIN, faça uma busca que retorne todos os dados dos cinemas, mesmo os que não possuem filmes em cartaz e, adicionalmente, os dados dos filmes que estão em cartaz nestes cinemas. Retorne os nomes dos cinemas em ordem alfabética.
```
SELECT
    Cinema.name,
    Cinema.location,
    Filmes.title,
    Filmes.director,
    Filmes.year,
    Filmes.length_minutes
FROM
    Pixar.Theater AS Cinema
	LEFT JOIN Pixar.Movies AS Filmes 
    ON Cinema.id = Filmes.theater_id
ORDER BY Cinema.name;
```

05. Utilizando o RIGHT JOIN, faça uma busca que retorne todos os dados dos filmes, mesmo os que não estão em cartaz e, adicionalmente, os dados dos cinemas que possuem estes filmes em cartaz. Retorne os nomes dos cinemas em ordem alfabética.
```
SELECT
    Cinema.id,
    Cinema.name,
    Cinema.location,
    Filmes.title,
    Filmes.director,
    Filmes.year,
    Filmes.length_minutes
FROM
    Pixar.Theater AS Cinema
	RIGHT JOIN Pixar.Movies AS Filmes 
    ON Cinema.id = Filmes.theater_id
ORDER BY Cinema.name;
```

06. Utilizando o INNER JOIN, selecione todas as informações dos filmes com avaliação maior que 8.
```
SELECT
    Filmes.id,
    Filmes.title,
    Filmes.director,
    Filmes.year,
    Filmes.length_minutes,
    Filmes.theater_id
FROM
    Pixar.Movies AS Filmes
	INNER JOIN BoxOffice AS Box
    ON Box.movie_id = Filmes.id
WHERE Box.rating > 8 AND Filmes.theater_id IS NOT NULL;
```
