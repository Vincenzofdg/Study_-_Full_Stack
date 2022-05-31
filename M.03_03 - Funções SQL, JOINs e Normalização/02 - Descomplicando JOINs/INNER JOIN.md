Busca campos que são iguais em tabelas.

**Sintax:**

01. `O QUE SERÁ SELECIONADO`

02. `O INNER JOIN ENTRE AS TABELAS, APELIDANDO-AS`

03. `DEFINIR A COLUNA EM COMUM ENTRE AS TABELAS (O QUE SATISFAZ RETORNA)`

**Exemplo 01:**
```
SELECT AA.city, AA.country_id, BB.country
FROM sakila.city AS AA INNER JOIN sakila.country AS BB
ON AA.country_id = BB.country_id;
```

**Exemplo 02:**
```
SELECT AA.title, AA.language_id, BB.name
FROM sakila.film AS AA INNER JOIN sakila.language AS BB
ON AA.language_id = BB.language_id;
```

# Exercícios:

01. Monte uma query que exiba o id do ator, nome do ator e id do filme em que ele já atuou usando as tabelas actor e film_actor.
```
SELECT AA.actor_id, AA.first_name, FF.film_id
FROM sakila.actor AS AA INNER JOIN sakila.film_actor AS FF
ON AA.actor_id = FF.actor_id;
```

02. Use o JOIN para exibir o nome, sobrenome e endereço de cada um dos funcionários do banco. Use as tabelas staff e address.
```
SELECT AA.first_name, AA.last_name, BB.address
FROM sakila.staff AS AA INNER JOIN sakila.address AS BB
ON AA.address_id = BB.address_id;
```

03. Exiba o id do cliente, nome e email dos primeiros 100 clientes, ordenados pelo nome em ordem decrescente, juntamente com o id do endereço e o nome da rua onde o cliente mora. Essas informações podem ser encontradas nas tabelas customer e address.
```
SELECT AA.customer_id, AA.first_name, AA.email, BB.address_id, BB.address
FROM sakila.customer AS AA INNER JOIN sakila.address AS BB
ON AA.address_id = BB.address_id
ORDER BY first_name DESC LIMIT 100;
```

04. Exiba o nome, email, id do endereço, endereço e distrito dos clientes que moram no distrito da California e que contêm "rene" em seus nomes. As informações podem ser encontradas nas tabelas address e customer.
```
SELECT AA.first_name, AA.email, BB.address_id, BB.district
FROM sakila.customer AS AA INNER JOIN sakila.address AS BB
ON AA.address_id = BB.address_id
WHERE first_name LIKE "%rene%" AND district = "California";
```

05. Exiba o nome e a quantidade de endereços dos clientes cadastrados. Ordene seus resultados por nomes de forma decrescente. Exiba somente os clientes ativos. As informações podem ser encontradas na tabela address e customer.
```
SELECT AA.first_name, COUNT(BB.address)
FROM sakila.customer AA INNER JOIN sakila.address AS BB
ON AA.address_id = BB.address_id
WHERE AA.active = 1 GROUP BY AA.customer_id
ORDER BY first_name DESC, last_name DESC;
```

06. Monte uma query que exiba o nome, sobrenome e a média de valor (amount) paga aos funcionários no ano de 2006. Use as tabelas payment e staff. Os resultados devem estar agrupados pelo nome e sobrenome do funcionário.
```
SELECT AA.first_name, AA.last_name, AVG(BB.amount)
FROM sakila.staff AS AA INNER JOIN sakila.payment BB
ON AA.staff_id = BB.staff_id
WHERE YEAR(BB.payment_date) = 2006 GROUP BY AA.staff_id;
```

07. Monte uma query que exiba o id do ator, nome, id do filme e título do filme, usando as tabelas actor, film_actor e film.
```
SELECT
    AA.actor_id, 
    AA.first_name, 
    CC.film_id, 
    CC.title
FROM
    sakila.actor AS AA
INNER JOIN
    sakila.film_actor AS BB
        ON AA.actor_id = BB.actor_id
INNER JOIN
    sakila.film AS CC
        ON AA.film_id = BB.film_id;
```
