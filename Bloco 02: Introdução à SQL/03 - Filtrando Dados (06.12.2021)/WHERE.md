```sh
SELECT * FROM sakila.actor;
```
Caso eu queira pegar todos os atores com o nome 'Davis'
```sh
SELECT * FROM sakila.actor WHERE last_name = 'DAVIS';
```
Sendo mais especifico:
```sh
SELECT * FROM sakila.actor WHERE actor_id = 101;
```

**Operadores para usar com o `WHERE`:**

 - `=` Igual
 
 - `<>` Diferente de
 
 - `>` Maior que
 
 - `<` Menor que
 
 - `>=` Maior ou igual a
 
 - `<=` Menor ou igual a
 
 - `AND` Operador Lógico 'e'
 
 - `OR` Operador Lógico 'ou'
 
 - `IS` Compara com Valores Booleanos (TRUE, FALSE, NULL)
 
 - `NOT` NEGAÇÃO
 
**Exemplo 01:**
```sh
SELECT * FROM sakila.payment
WHERE amount = 0.99 OR amount = 2.99 AND staff_id = 2;
```

**Exemplo 02:**
```sh
SELECT * FROM sakila.payment
WHERE (amount = 0.99 OR amount = 2.99) AND staff_id = 2;
```
