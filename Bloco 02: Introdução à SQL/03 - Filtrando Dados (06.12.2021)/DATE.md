DATE faz parte dos tipos de dados temporais.

 - `DATE` Possui apenas data, no formato YYYY-MM-DD na faixa de 1001-01-01 até 9999-12-31;
 
 - `DATETIME` Possui data e tempo, no formato YYYY-MM-DD HH:MM:SS com a faixa de 1000-01-01 00:00:00 até 9999-12-31 23:59:59.
 
### Maneiras de encontrar dados por data

**DATE(coluna_do_tipo_date):**
```sh
SELECT * FROM sakila.payment
WHERE DATE(payment_date) = '2005-07-31';
```

**DATE(coluna_do_tipo_date):**

Todos pagamentos deste dia.
```sh
SELECT * FROM sakila.payment
WHERE payment_date LIKE '2005-07-31%';
```
Pagamento com dia e hora exatos.
```sh
SELECT * FROM sakila.payment
WHERE DATE(payment_date) = '2005-07-31';
```

**BETWEEN:**

valor mínimo e um valor máximo para a data.
```sh
SELECT * FROM sakila.payment
WHERE payment_date BETWEEN '2005-05-26 00:00:00' AND '2005-05-27 23:59:59';
```

### Selecionando apenas partes de uma data

`SELECT DATE(payment_date) FROM sakila.payment;` YYYY-MM-DD

`SELECT YEAR(payment_date) FROM sakila.payment;` Ano

`SELECT MONTH(payment_date) FROM sakila.payment;` Mês

`SELECT DAY(payment_date) FROM sakila.payment;` Dia

`SELECT HOUR(payment_date) FROM sakila.payment;` Hora

`SELECT MINUTE(payment_date) FROM sakila.payment;` Minuto

`SELECT SECOND(payment_date) FROM sakila.payment;` Segundo

**Exercícios:**


1. Quantos pagamentos temos com a data de retorno 2005-05-25?
```sh

```
2. Quantos pagamentos foram feitos entre 01/07/2005 e 22/08/2005?
```sh

```
3. Usando a tabela rental, extraia data, ano, mês, dia, hora, minuto e segundo dos registros com rental_id = 10330. Utilize a coluna rental_date para extrair as informações.
```sh

```
4. Monte uma query que retorne todos os dados do pagamento feito no dia 28/07/2005 a partir das 22 horas.
```sh

```

