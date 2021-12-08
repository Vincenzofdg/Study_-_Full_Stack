Usado para contar.

**Contar todas as linha de um banco de dados:**

> SELECT COUNT(*) FROM sakila.actor;

**Contar todas as linha sem se repetir nenhum nome:**

> SELECT COUNT(DISTINCT first_name) FROM sakila.actor;

**Filtrando com um nome:**

> SELECT COUNT(district) FROM sakila.address WHERE district='Vaduz';

**Exercicio (Usar a tablea staff):**

1. Quantas senhas temos cadastradas nessa tabela?

> SELECT COUNT(password) FROM sakila.staff;

2. Quantas pessoas temos no total trabalhando para nossa empresa?

> SELECT COUNT(*) FROM sakila.staff;

3. Quantos emails temos cadastrados nessa tabela?

> SELECT COUNT(email) FROM sakila.staff;

