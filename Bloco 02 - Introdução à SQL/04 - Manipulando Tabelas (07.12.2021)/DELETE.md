**Modelo:**
```sh
DELETE FROM banco_de_dados.tabela
WHERE coluna = 'valor';
-- O WHERE é opcional. Porém, sem ele, todas as linhas da tabela seriam excluídas.
```

Ao tentar rodar:
```sh
DELETE FROM sakila.actor
WHERE first_name = 'GRACE';
```
Ocorrerá um erro pois a coluna actor_id da tabela film_actor é uma chave estrangeira ( foreign key ) que aponta para a coluna actor_id na tabela actor , e essa chave estrangeira possui a restrição ON DELETE RESTRICT.

Para conseguir excluir este ator em actors, precisamos primeiro excluir todas as referências a ele na tabela sakila.film_actor:
```sh
DELETE FROM sakila.film_actor
WHERE actor_id = 7; -- actor_id = 7 é o Id de GRACE
```

## TRUNCATE

Excluir completamente, usar somente no seguinte cenário:
```sh
TRUNCATE banco_de_dados.tabela;
```

## Exercicios:

01. Exclua do banco de dados o ator com o nome de "KARL".
```sh
-- Primeiro descubra os IDs relacionados ao nome
SELECT actor_id
FROM sakila.actor
WHERE first_name = 'KARL';

-- Em seguida, apague suas referências
DELETE FROM sakila.film_actor
WHERE actor_id = 12;

-- Depois exclua o item original
DELETE FROM sakila.actor
WHERE first_name = 'KARL';
```
02. Exclua do banco de dados os atores com o nome de "MATTHEW".
```sh
SELECT actor_id FROM sakila.actor WHERE first_name = 'MATTHEW';

DELETE FROM sakila.film_actor WHERE actor_id IN (8, 103, 181);

DELETE FROM sakila.actor WHERE first_name = 'MATTHEW'
```
03. Exclua da tabela film_text todos os registros que possuem a palavra "saga" em suas descrições.
```sh
DELETE FROM sakila.film_text WHERE description LIKE '%saga%';
```
04. Apague da maneira mais performática possível todos os registros das tabelas film_actor e film_category .
```sh
TRUNCATE sakila.film_actor;
TRUNCATE sakila.film_category;
```
05. Inspecione todas as tabelas do banco de dados sakila e analise quais restrições ON DELETE foram impostas em cada uma. Use o Table Inspector para fazer isso (aba DDL).
```sh

```
06. Exclua o banco de dados e o recrie (use as instruções no início desta aula).
```sh

```

