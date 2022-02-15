**Caixa Alta:** `SELECT UCASE('string');`

**Caixa Baixa:** `SELECT LCASE('string');`

**Substitui:**`SELECT REPLACE('eu sou uma string', 'string', 'cadeia de caracteres');`

**Parte da Esquerda:** `SELECT LEFT('eu sou uma string', 3);`

**Parte da Direita:** `SELECT RIGHT('eu sou uma string', 6);`

**Tamanho da String:** `SELECT CHAR_LENGTH('eu sou uma string');`

**Extrai a Partir do Indice:** `SELECT SUBSTRING('eu sou uma string', 5, 2);`

**Extrair Até o Final:** `SELECT SUBSTRING('eu sou uma string', 5);`

## Exemplos Usando a Tabela SAKILA:
```
SELECT UCASE(title) FROM sakila.film LIMIT 10;
SELECT LCASE(title) FROM sakila.film LIMIT 10;
SELECT REPLACE(title, 'ACADEMY', 'FOO') FROM sakila.film WHERE film_id = 1;
SELECT LEFT(title, 7) FROM sakila.film WHERE film_id = 1;
SELECT RIGHT(title, 8) FROM sakila.film WHERE film_id = 1;
SELECT CHAR_LENGTH(title) FROM sakila.film WHERE film_id = 1;
SELECT SUBSTRING(title, 5, 2) FROM sakila.film WHERE film_id = 1;
SELECT SUBSTRING(title, 5) FROM sakila.film WHERE film_id = 1;
```

## Exercícios:

- Faça uma query que exiba a palavra 'mysql' em CAIXA ALTA.
```
SELECT UCASE('mysql')
```

- Faça uma query que transforme a frase 'Você já ouviu falar do DuckDuckGo?' em 'Você já ouviu falar do Google?'.
```
SELECT REPLACE('Você já ouviu falar do DuckDuckGo?', 'DuckDuckGo', 'Google');
```

- Utilizando uma query, encontre quantos caracteres temos em 'Uma frase qualquer'.
```
SELECT CHAR_LENGTH('Uma frase qualquer');
```

- Extraia e retorne a palavra "JavaScript" da frase 'A linguagem JavaScript está entre as mais usadas'.
```
SELECT SUBSTRING('A linguagem JavaScript está entre as mais usadas', 13, 10);
```

- Padronize a string 'RUA NORTE 1500, SÃO PAULO, BRASIL' para que suas informações estejam todas em caixa baixa.
```
SELECT LCASE('RUA NORTE 1500, SÃO PAULO, BRASIL')
```
