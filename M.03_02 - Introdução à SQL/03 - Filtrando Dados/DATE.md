DATE faz parte dos tipos de dados temporais.

- `DATE` Possui apenas data, no formato YYYY-MM-DD na faixa de 1001-01-01 até 9999-12-31;
- `DATETIME` Possui data e tempo, no formato YYYY-MM-DD HH:MM:SS com a faixa de 1000-01-01 00:00:00 até 9999-12-31 23:59:59.
 
### Maneiras de encontrar dados por data
```
SELECT * FROM sakila.payment WHERE DATE(payment_date) = '2005-07-31';
```
- Todos pagamentos deste dia:
```
SELECT * FROM sakila.payment WHERE payment_date LIKE '2005-07-31%';
```
- Pagamento com dia e hora exatos:
```
SELECT * FROM sakila.payment WHERE DATE(payment_date) = '2005-07-31';
```

### BETWEEN
Valor mínimo e um valor máximo para a data:
```
SELECT * FROM sakila.payment WHERE payment_date BETWEEN '2005-05-26 00:00:00' AND '2005-05-27 23:59:59';
```

### Selecionando apenas partes de uma data
- **YYYY-MM-DD**: `SELECT DATE(payment_date) FROM sakila.payment;`
- **Ano**:`SELECT YEAR(payment_date) FROM sakila.payment;`
- **Mês**: `SELECT MONTH(payment_date) FROM sakila.payment;`
- **Dia**: `SELECT DAY(payment_date) FROM sakila.payment;`
- **Hora**: `SELECT HOUR(payment_date) FROM sakila.payment;`
- **Minuto**: `SELECT MINUTE(payment_date) FROM sakila.payment;`
- **Segundo**: `SELECT SECOND(payment_date) FROM sakila.payment;`

### Exercícios
1. Quantos pagamentos temos com a data de retorno 2005-05-25?
```
SELECT COUNT(*) FROM sakila.payment WHERE DATE(payment_date) = '2005-05-25';
```
2. Quantos pagamentos foram feitos entre 01/07/2005 e 22/08/2005?
```
SELECT COUNT(*) FROM sakila.payment WHERE payment_date BETWEEN '2005-07-01' AND '2005-08-22';
```
3. Usando a tabela rental, extraia data, ano, mês, dia, hora, minuto e segundo dos registros com rental_id = 10330. Utilize a coluna rental_date para extrair as informações.
```
SELECT
  DATE(rental_date) AS Data,
  YEAR(rental_date) AS Ano,
  MONTH(rental_date) AS Mes,
  DAY(rental_date) AS Dia,
  HOUR(rental_date) AS Hora,
  MINUTE(rental_date) AS Minuto,
  SECOND(rental_date) AS Segundo
FROM sakila.rental WHERE rental_id = 10330;
```
4. Monte uma query que retorne todos os dados do pagamento feito no dia 28/07/2005 a partir das 22 horas.
```
SELECT * FROM sakila.payment WHERE DATE(payment_date) = '2005-07-28' AND HOUR(payment_date) >= 22;
```