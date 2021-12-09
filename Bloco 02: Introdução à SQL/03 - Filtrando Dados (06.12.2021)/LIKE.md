O LIKE é usado para buscar por meio de uma sequência específica de caracteres. São normalmente usados com LIKE:

	- `%` O sinal de percentual, que pode representar zero, um ou múltiplos caracteres;
	
	- `_` O underscore (às vezes chamado de underline, no Brasil), que representa um único caractere.
	
**Exemplo:**

**Encontra qualquer resultado finalizando com "don"**
```sh
SELECT * FROM sakila.film
WHERE title LIKE '%don';
```

**Encontra qualquer resultado iniciando com "plu"**
```sh
SELECT * FROM sakila.film
WHERE title LIKE 'plu%';
```
**Encontra qualquer resultado que contém "plu"**
```sh
SELECT * FROM sakila.film
WHERE title LIKE '%plu%';
```

**Encontra qualquer resultado que inicia com "p" e finaliza com "r"**
```sh
SELECT * FROM sakila.film
WHERE title LIKE 'p%r';
```

***Encontra qualquer resultado em que o segundo caractere da frase é "C"**
```sh
SELECT * FROM sakila.film
WHERE title LIKE '_C%';
```

**Encontra qualquer resultado em que o título possui exatamente 8 caracteres**
```sh
SELECT * FROM sakila.film
WHERE title LIKE '________';
```

**Encontra todas as palavras com no mínimo 3 caracteres e que iniciam com E**
```sh
SELECT * FROM sakila.film
WHERE title LIKE 'E__%';
```

**Exercicio**


01. Mostre todos os detalhes dos filmes que contêm a palavra ace no nome.
```sh
SELECT * FROM sakila.film WHERE title LIKE '%ace%';
```
02. Mostre todos os detalhes dos filmes cujas descrições finalizam com china.
```sh
SELECT * FROM sakila.film WHERE description LIKE '%china';
```
03. Mostre todos os detalhes dos dois filmes cujas descrições contêm a palavra girl e o título finaliza com a palavra lord.
```sh
SELECT * FROM sakila.film WHERE description LIKE '%girl%' AND title LIKE '%lord';
```
04. Mostre os dois casos em que, a partir do 4° caractere no título do filme, tem-se a palavra gon.
```sh
SELECT * FROM sakila.film WHERE title LIKE '___gon%';
```
05. Mostre o único caso em que, a partir do 4° caractere no título do filme, tem-se a palavra gon e a descrição contém a palavra Documentary.
```sh
SELECT * FROM sakila.film WHERE title LIKE '___gon%' AND description LIKE '%Documentary%';
```
06. Mostre os dois filmes cujos títulos ou finalizam com academy ou iniciam com mosquito.
```sh
SELECT * FROM sakila.film WHERE title LIKE '%academy' OR title LIKE 'mosquito%';
```
07. Mostre os seis filmes que contêm as palavras monkey e sumo em suas descrições.
```sh
SELECT * FROM sakila.film WHERE description LIKE '%monkey%' OR description LIKE '%sumo%';
```

