# Usando Apenas o IF:

**Sintaxe:** `SELECT IF(condicao, verdadeiro, falso);`

### Exemplo (SAKILA):
```
SELECT first_name, IF(active, 'Cliente Ativo', 'Cliente Inativo')
AS status
FROM sakila.customer
LIMIT 20;
```

# Usando o CASE:

**Sintaxe:**
```
SELECT CASE
  WHEN condicao THEN valor
  ELSE valor padrao
END;
```

### Exemplo:
```
SELECT
    nome,
    nivel_acesso,
    CASE
        WHEN nivel_acesso = 1 THEN 'Nível de acesso 1'
        WHEN nivel_acesso = 2 THEN 'Nível de acesso 2'
        WHEN nivel_acesso = 3 THEN 'Nível de acesso 3'
        ELSE 'Usuário sem acesso'
    END AS nivel_acesso
FROM permissoes_usuario;
```

### Exemplo (SAKILA):
```
SELECT
    first_name,
    email,
    CASE
        WHEN email = 'MARY.SMITH@sakilacustomer.org' THEN 'Cliente de baixo valor'
        WHEN email = 'PATRICIA.JOHNSON@sakilacustomer.org' THEN 'Cliente de médio valor'
        WHEN email = 'LINDA.WILLIAMS@sakilacustomer.org' THEN 'Cliente de alto valor'
        ELSE 'não classificado'
    END AS valor
FROM sakila.customer
LIMIT 10;
```


## Exercícios:

01. Usando o IF na tabela sakila.film , exiba o id do filme, o título e uma coluna extra chamada 'conheço o filme?', em que deve-se avaliar se o nome do filme é 'ACE GOLDFINGER'. Caso seja, exiba "Já assisti a esse filme". Caso contrário, exiba "Não conheço o filme". Não esqueça de usar um alias para renomear a coluna da condicional. 
```
SELECT film_id, title, IF(title = 'ACE GOLDFINGER', 'Já assisti a esse filme', 'Não conheço o filme')
AS 'conheço o filme?'
FROM sakila.film
```

02. Usando o CASE na tabela sakila.film , exiba o título, a classificação indicativa ( rating ) e uma coluna extra que vamos chamar de 'público-alvo', em que classificaremos o filme de acordo com as seguintes siglas:
- G: "Livre para todos";
- PG: "Não recomendado para menores de 10 anos";
- PG-13: "Não recomendado para menores de 13 anos";
- R: "Não recomendado para menores de 17 anos";
- Se não cair em nenhuma das classificações anteriores: "Proibido para menores de idade".
```
SELECT
    title,
    rating,
    CASE
        WHEN rating = 'G' THEN 'Livre para todos'
        WHEN rating = 'PG' THEN 'Não recomendado para menores de 10 anos'
        WHEN rating = 'PG-13' THEN 'Não recomendado para menores de 13 anos'
        WHEN rating = 'R' THEN 'Não recomendado para menores de 17 anos'
        ELSE 'Proibido para menores de idade'
    END AS 'público Alvo'
FROM sakila.film;
```
