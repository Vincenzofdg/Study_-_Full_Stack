```
UPDATE nome_da_tabela SET propriedade_a_ser_alterada = 'novo valor para coluna' WHERE alguma_condicao; -- Aplicar o WHERE para não alterar a tabela inteira.
```

Para evitar essa restrição, rode o seguinte comando em uma janela de query dentro do MySQL Workbench sempre que abri-lo para desabilitar essa funcionalidade, antes de executar seus comandos de UPDATE ou DELETE:
```
SET SQL_SAFE_UPDATES = 0;
```

**Alterando mais de uma coluna ao mesmo tempo:**
```
UPDATE sakila.staff SET first_name = 'Rannveig', last_name = 'Jordan' WHERE staff_id = 4;
```

### Exemplo 01
```
-- Opção 1 - Incluindo a lista de condições fixas
UPDATE sakila.actor SET first_name = 'JOE' WHERE actor_id IN (1,2,3);

-- Opção 2 - Especificando como cada entrada será alterada individualmente
UPDATE sakila.actor SET first_name = ( 
CASE actor_id WHEN 1 THEN 'JOE' -- se actor_id = 1, alterar first_name para 'JOE'
              WHEN 2 THEN 'DAVIS' -- se actor_id = 2, alterar first_name para 'DAVIS'
              WHEN 3 THEN 'CAROLINE' -- se actor_id = 3, alterar first_name para 'CAROLINE'
          ELSE first_name -- em todos os outros casos, mantém-se o first_name
END);
```

### Exemplo 02
```
UPDATE sakila.staff SET password = 'FavorResetarSuaSenha123' WHERE active = 1 ORDER BY last_update LIMIT 2;
```

### Exercicio
1. Atualize o primeiro nome de todas as pessoas da tabela sakila.actor que possuem o primeiro nome "JULIA" para "JULES".
```
UPDATE sakila.actor SET first_name = 'JULES' WHERE first_name = 'JULIA';
```

2. Foi exigido que a categoria "Sci-Fi" seja alterada para "Science Fiction".
```
UPDATE sakila.category SET name = 'Science Fiction' WHERE name = 'Sci-Fi';
```

3. Atualize o valor do aluguel para $25 de todos os filmes com duração maior que 100 minutos e que possuem a classificações "G", "PG" ou "PG-13" e um custo de substituição maior que $20.
```
UPDATE sakila.film SET rental_rate = 25 WHERE length > 100 AND rating IN ('G', 'PG', 'PG-13') AND replacement_cost > 20;
```

4. Foi determinado pelo setor financeiro que haverá um reajuste em todos os preços dos filmes, com base em sua duração. Para todos os filmes com duração entre 0 e 100, o valor do aluguel passará a ser $10,00, e o aluguel dos filmes com duração acima de 100 passará a ser de $20,00.
```
UPDATE sakila.film
SET rental_rate = (
    CASE
        WHEN length BETWEEN 1 AND 100 THEN 10
        WHEN length > 100 THEN 20
    END
);
```