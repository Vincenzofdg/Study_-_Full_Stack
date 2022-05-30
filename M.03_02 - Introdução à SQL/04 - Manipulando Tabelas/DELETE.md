```
DELETE FROM banco_de_dados.tabela WHERE coluna = 'valor';
```

Ao tentar rodar:
```
DELETE FROM sakila.actor WHERE first_name = 'GRACE';
```

Ocorrerá um erro pois a coluna actor_id da tabela film_actor é uma chave estrangeira ( foreign key ) que aponta para a coluna actor_id na tabela actor , e essa chave estrangeira possui a restrição ON DELETE RESTRICT.

Para conseguir excluir este ator em actors, precisamos primeiro excluir todas as referências a ele na tabela sakila.film_actor:
```
DELETE FROM sakila.film_actor WHERE actor_id = 7; -- actor_id = 7 é o Id de GRACE
```

## TRUNCATE
Excluir completamente, usar somente no seguinte cenário:
```
TRUNCATE banco_de_dados.tabela;
```

### Exercicio
1. Exclua do banco de dados o ator com o nome de "KARL".
```
-- Primeiro descubra os IDs relacionados ao nome
SELECT actor_id FROM sakila.actor WHERE first_name = 'KARL';

-- Em seguida, apague suas referências
DELETE FROM sakila.film_actor WHERE actor_id = 12;

-- Depois exclua o item original
DELETE FROM sakila.actor WHERE first_name = 'KARL';
```

2. Exclua do banco de dados os atores com o nome de "MATTHEW".
```
SELECT actor_id FROM sakila.actor WHERE first_name = 'MATTHEW';
DELETE FROM sakila.film_actor WHERE actor_id IN (8, 103, 181);
DELETE FROM sakila.actor WHERE first_name = 'MATTHEW'
```

3. Exclua da tabela film_text todos os registros que possuem a palavra "saga" em suas descrições.
```
DELETE FROM sakila.film_text WHERE description LIKE '%saga%';
```

4. Apague da maneira mais performática possível todos os registros das tabelas film_actor e film_category .
```
TRUNCATE sakila.film_actor;
TRUNCATE sakila.film_category;
```
