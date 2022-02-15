## Operador IN

Como você viu no início do dia hoje, é possível juntar várias condições nas suas queries usando os operadores AND e OR. No entanto, você ainda terá que digitar cada condição separadamente, como no exemplo a seguir:
```sh
SELECT * FROM sakila.actor
WHERE first_name = 'PENELOPE'
OR first_name = 'NICK'
OR first_name = 'ED'
OR first_name = 'JENNIFER';
```

Uma forma melhor utilizando o IN:
```sh
SELECT * FROM sakila.actor
WHERE first_name IN ('PENELOPE','NICK','ED','JENNIFER');
```

ou pelo id:
```sh
SELECT * FROM sakila.customer
WHERE customer_id in (1, 2, 3, 4, 5);
```

## Operador BETWEEN

Uma outra opção quando queremos trabalhar com faixas de resultados é o BETWEEN, que torna possível fazer pesquisas dentro de uma faixa inicial e final.
```sh
SELECT title, length FROM sakila.film
WHERE length BETWEEN 50 AND 120;
```

**Com strings:**
```sh
SELECT * FROM sakila.language
WHERE name BETWEEN 'Italian' AND 'Mandarin'
ORDER BY name;
```

**Com datas:** Basta que você digite o valor no formato padrão da data, que é YYYY-MM-DD HH:MM:SS , sendo os valores de horas, minutos e segundos opcionais
```sh
SELECT rental_id, rental_date FROM sakila.rental
WHERE rental_date
BETWEEN '2005-05-27' AND '2005-07-17';
```

**Exercicio:**

01. Mostre o nome, sobrenome e e-mail dos clientes com os seguintes sobrenomes: hicks, crawford, henry, boyd, mason, morales e kennedy, ordenados por nome em ordem alfabética.
```sh
SELECT first_name, last_name, email FROM sakila.customer
WHERE last_name IN('hicks', 'crawford', 'henry', 'boyd', 'mason', 'morales', 'kennedy')
ORDER BY first_name ASC;
```
02. Mostre o e-mail dos clientes com os address_id 172, 173, 174, 175 e 176, ordenados em ordem alfabética.
```sh
SELECT email FROM sakila.customer
WHERE customer_id BETWEEN 172 AND 176
ORDER BY first_name ASC;
```
03. Descubra quantos pagamentos foram feitos entre 01/05/2005 e 01/08/2005.
```sh
SELECT COUNT(*) FROM sakila.payment
WHERE payment_date BETWEEN '2005-05-01' AND '2005-08-01';
```
04. Mostre o título, ano de lançamento e duração do empréstimo de todos os filmes com a duração de empréstimo de 3 a 6 . Os resultados devem ser classificados em filmes com maior duração de empréstimo primeiro. Em caso de empate, ordene em ordem alfabética pelo título.
```sh
SELECT title, release_year, rental_duration FROM sakila.film
WHERE rental_duration BETWEEN 3 AND 6
ORDER BY rental_duration DESC, title ASC;
```
05. Monte um relatório que exiba o título e classificação dos 500 primeiros filmes direcionados para as classificações indicativas G, PG e PG-13 . Os resultados devem estar ordenados por título.
```sh
SELECT title, rating FROM sakila.film
WHERE rating IN('G', 'PG', 'PG-13')
ORDER BY title ASC LIMIT 500;
```

