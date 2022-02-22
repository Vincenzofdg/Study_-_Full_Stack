# Adição, Subtração, Multiplicação e Divisão

### Exemplo 01:
```
SELECT 5 + 5;
SELECT 5 - 5;
SELECT 5 * 5;
SELECT 5 / 5;
```

### Exemplo 02 (SAKILA):

```
SELECT rental_duration + rental_rate FROM sakila.film LIMIT 10;
SELECT rental_duration - rental_rate FROM sakila.film LIMIT 10;
SELECT rental_duration / rental_rate FROM sakila.film LIMIT 10;
SELECT rental_duration * rental_rate FROM sakila.film LIMIT 10;
```

# Divisão de inteiros com DIV e restos com o MOD

O DIV retorna o resultado inteiro de uma divisão, ignorando as casas decimais de um número.

### Exemplo (DIV):
```
SELECT 10 DIV 3; -- 3
SELECT 10 DIV 2; -- 5
SELECT 14 DIV 3; -- 4
SELECT 13 DIV 2; -- 6
```

### Exemplo (MOD):
```
SELECT 10 MOD 3; 	-- 1
SELECT 10 MOD 2; 	-- 0
SELECT 14 MOD 3; 	-- 2
SELECT 13 MOD 2; 	-- 1
SELECT 10.5 MOD 2; 	-- 0.5
```


### Exercícios:

01. Monte uma query usando o MOD juntamente com o IF para descobrir se o valor 15 é par ou ímpar. Chame essa coluna de 'Par ou Ímpar', onde ela pode dizer 'Par' ou 'Ímpar'. 
```
SELECT IF(15 MOD 2 = 0, 'Par', 'Ímpar') AS 'Par ou Ímpar';
```

02. Temos uma sala de cinema que comporta 220 pessoas. Quantos grupos completos de 12 pessoas podemos levar ao cinema sem que ninguém fique de fora?
```
SELECT 220 DIV 12;
```

03. Utilizando o resultado anterior, responda à seguinte pergunta: temos lugares sobrando? Se sim, quantos?
```
SELECT IF(220 MOD 12 = 0, 'NÃO', CONCAT('SIM, ', 220 MOD 12));
```

# Arredondando Valores

### Exemplo (ROUND):
```
SELECT ROUND(10.4925); 		-- 	10
SELECT ROUND(10.5136); 		-- 	11
SELECT ROUND(-10.5136); 	-- -11
SELECT ROUND(10.4925, 2); 	-- 	10.49
SELECT ROUND(10.4925, 3); 	-- 	10.493
```

### Exemplo (CEIL):
```
SELECT CEIL(10.51); 	-- 11
SELECT CEIL(10.49); 	-- 11
SELECT CEIL(10.2); 		-- 11
```

### Exemplo (FLOOR):
```
SELECT FLOOR(10.51); 	-- 10
SELECT FLOOR(10.49); 	-- 10
SELECT FLOOR(10.2); 	-- 10
```

# Exponenciação e Raiz Quadrada

### Exemplo (POW):
```
SELECT POW(2, 2); 	-- 4
SELECT POW(2, 4); 	-- 16
```

### Exemplo (SQRT):
```
SELECT SQRT(9); 	-- 3
SELECT SQRT(16); 	-- 4
```

# Gerando valores aleatórios

### Para gerar um valor aleatório entre 0 e 1:
```
SELECT RAND();
```

### Para gerar um valor entre 7 e 13:
```
SELECT ROUND(7 + (RAND() * 6));
```

# Exercicios

01. Monte uma query que gere um valor entre 15 e 20 .
```
SELECT FLOOR(15 + (RAND() * 5));
```

02. Monte uma query que exiba o valor arredondado de 15.7515971 com uma precisão de 5 casas decimais.
```
SELECT ROUND(15.7515971, 5);
```

03. Estamos com uma média de 39.494 de vendas de camisas por mês. Qual é o valor aproximado para baixo dessa média?
```
SELECT FLOOR(39.494);
```

04. Temos uma taxa de inscrição de 85.234% no curso de fotografia para iniciantes. Qual é o valor aproximado para cima dessa média?
```
SELECT CEIL(85.234)
```

