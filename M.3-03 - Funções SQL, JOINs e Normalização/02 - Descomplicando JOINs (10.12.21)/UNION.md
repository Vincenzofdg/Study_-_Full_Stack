Junta informações em uma unica tabela

Temos duas quaries:
```
SELECT first_name, last_name FROM sakila.actor;

SELECT first_name, last_name FROM sakila.customer;
```

Utilizando o UNION (Excluindo os dados duplicados):
```
SELECT first_name, last_name FROM sakila.actor
UNION
SELECT first_name, last_name FROM sakila.customer;
```

Utilizando o UNION (Sem excluir os dados duplicados):
```
SELECT first_name, last_name, '-' AS 'customer_id' FROM sakila.actor
UNION ALL
SELECT first_name, last_name FROM sakila.customer;
```

`'-' AS 'customer_id'`  Para nao gerar erro de colunas.