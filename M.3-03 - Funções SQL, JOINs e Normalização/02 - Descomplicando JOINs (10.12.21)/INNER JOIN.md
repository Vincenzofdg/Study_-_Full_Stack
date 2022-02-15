Busca campos que são iguais em tabelas.

**Sintax:**

01. `O QUE SERÁ SELECIONADO`

02. `O INNER JOIN ENTRE AS TABELAS, APELIDANDO-AS`

03. `DEFINIR A COLUNA EM COMUM ENTRE AS TABELAS (O QUE SATISFAZ RETORNA)`

**Exemplo 01:**
```
SELECT city.city, city.country_id, country.country
FROM sakila.city AS city
INNER JOIN sakila.country AS country
ON city.country_id = country.country_id;
```

**Exemplo 02:**
```
SELECT f.title, f.language_id, l.name
FROM sakila.film AS f INNER JOIN sakila.language AS l
ON f.language_id = l.language_id;
```

# Exercícios:

01. Monte uma query que exiba o id do ator, nome do ator e id do filme em que ele já atuou usando as tabelas actor e film_actor.
```
SELECT Actor.actor_id, Actor.first_name, Film.film_id
FROM sakila.actor AS Actor INNER JOIN sakila.film_actor AS Film
ON Actor.actor_id = Film.actor_id;
```

02. Use o JOIN para exibir o nome, sobrenome e endereço de cada um dos funcionários do banco. Use as tabelas staff e address.
```
SELECT Empregados.first_name, Empregados.last_name, Endereco.address
FROM sakila.staff AS Empregados INNER JOIN sakila.address AS Endereco
ON Empregados.address_id = Endereco.address_id;
```

03. Exiba o id do cliente, nome e email dos primeiros 100 clientes, ordenados pelo nome em ordem decrescente, juntamente com o id do endereço e o nome da rua onde o cliente mora. Essas informações podem ser encontradas nas tabelas customer e address.
```
SELECT Cliente.customer_id, Cliente.first_name, Cliente.email, Endereco.address_id, Endereco.address
FROM sakila.customer AS Cliente INNER JOIN sakila.address AS Endereco
ON Cliente.address_id = Endereco.address_id
ORDER BY first_name DESC
LIMIT 100;
```

04. Exiba o nome, email, id do endereço, endereço e distrito dos clientes que moram no distrito da California e que contêm "rene" em seus nomes. As informações podem ser encontradas nas tabelas address e customer.
```
SELECT Cliente.first_name, Cliente.email, Endereco.address_id, Endereco.district
FROM sakila.customer AS Cliente INNER JOIN sakila.address AS Endereco
ON Cliente.address_id = Endereco.address_id
WHERE first_name LIKE "%rene%" AND district = "California";
```

05. Exiba o nome e a quantidade de endereços dos clientes cadastrados. Ordene seus resultados por nomes de forma decrescente. Exiba somente os clientes ativos. As informações podem ser encontradas na tabela address e customer.
```
SELECT Cliente.first_name, COUNT(Endereco.address)
FROM sakila.customer Cliente INNER JOIN sakila.address AS Endereco
ON Cliente.address_id = Endereco.address_id
WHERE Cliente.active = 1
GROUP BY Cliente.customer_id
ORDER BY first_name DESC, last_name DESC;
```

06. Monte uma query que exiba o nome, sobrenome e a média de valor (amount) paga aos funcionários no ano de 2006. Use as tabelas payment e staff. Os resultados devem estar agrupados pelo nome e sobrenome do funcionário.
```
SELECT Empregados.first_name, Empregados.last_name, AVG(Pagamento.amount)
FROM sakila.staff AS Empregados INNER JOIN sakila.payment Pagamento
ON Empregados.staff_id = Pagamento.staff_id
WHERE YEAR(Pagamento.payment_date) = 2006
GROUP BY Empregados.staff_id;
```

07. Monte uma query que exiba o id do ator, nome, id do filme e título do filme, usando as tabelas actor, film_actor e film.
```
SELECT
    Actor.actor_id, 
    Actor.first_name, 
    Film.film_id, 
    Film.title
FROM
    sakila.actor AS Actor
INNER JOIN
    sakila.film_actor AS Film_Actor
    ON Actor.actor_id = Film_Actor.actor_id
INNER JOIN
    sakila.film AS Film
    ON Film.film_id = Film_Actor.film_id;
```
