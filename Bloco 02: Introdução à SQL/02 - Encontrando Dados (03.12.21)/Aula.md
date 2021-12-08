## Principais Tipos de Queries

**DISTINCT:** Para visualizar uma informação que não venha repetida
```
SELECT DISTINCT first_name FROM sakila.actor;
```

Trazendo apenas 100 linhas desta tabela
```
SELECT DISTINCT actor_id, first_name, last_name FROM sakila.actor LIMIT 100;
```

Pulando as 50 primeiras linha
```
SELECT DISTINCT actor_id, first_name, last_name FROM sakila.actor LIMIT 100 OFFSET 50;
```

**COUNT:** Traz a quantidade de linhas, o count não conta a linha que tiver valor Null
```
SELECT COUNT(*) FROM sakila.actor
```
```
SELECT COUNT(first_name) FROM sakila.actor
```

**ORDERBY:** Define uma ordem por meio de um criterio
```
SELECT COUNT(*) FROM sakila.actor order ny first_name DESC, last_name ASC; (a segunda coluna é criterio de desempate)
```

