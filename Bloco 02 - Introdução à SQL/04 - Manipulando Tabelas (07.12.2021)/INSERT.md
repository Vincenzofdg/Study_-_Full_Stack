 - **Crase (``):** São usadas para identificar nome de tabelas e colunas. São necessárias apenas quando o identificador for uma palavra reservada do MySQL, ou quando o nome da tabela ou coluna contiver espaços em branco.
 
 - **Aspas simples (''):** Devem ser usadas em valores do tipo string.

**Inserindo uma linha:** INSERT INTO nome_tabela (coluna1, coluna2) VALUES ('valor_coluna1', 'valor_coluna2');

**Inserindo mais de uma linha:**
```sh
INSERT INTO nome_tabela (coluna1, coluna2) VALUES
('valor_1','valor_2'),
('valor_3','valor_4'),
('valor_5','valor_6');
```

## INSERT IGNORE

Ignore os erros e pule os dados problemáticos, que normalmente interromperiam a query em função de alguma restrição imposta na tabela.

## INSERT SELECT

Inserindo dados de uma outra tabela. Exemplo:
```sh
INSERT INTO tabelaA (coluna1, coluna2)
    SELECT tabelaB.coluna1, tabelaB.coluna2
    FROM tabelaB
    WHERE tabelaB.nome_da_coluna <> 'algumValor'
    ORDER BY tabelaB.coluna_de_ordenacao;
```
Assim, estaríamos extraindo a coluna1 e a coluna2 da tabelaB e as inserindo na tabelaA, de acordo com a condição que for passada no `WHERE`.
Outro Exemplo:
```sh
INSERT INTO sakila.actor (first_name, last_name)
    SELECT first_name, last_name FROM sakila.staff;
```

## Exercicios

1. Insira um novo funcionário na tabela sakila.staff.
```sh
INSERT INTO sakila.staff (first_name, last_name, address_id, email, store_id, active, username, password)
VALUES ('Vincenzo', 'Di Giacomo', 2, 'vincenzofdg@hotmail.com', 1, 1, 'VFDGiacomo', 'vince2022');
```
2. Feito o exercício anterior, vamos agora para o nível 2. Insira dois funcionários novos em apenas uma _query_.
```sh
INSERT INTO sakila.staff (first_name, last_name, address_id, email, store_id, active, username, password)
VALUES 
	('Ricardo', 'Silva', 5, '', 1, 1, 'riki', ''),
	('Charlie', 'Reis', 6, 'chaliereis@fakemail.com', 1, 1, 'charl', 'charlie213');
```
3. Selecione os cinco primeiros nomes e sobrenomes da tabela sakila.customer e cadastre essas pessoas como atores na tabela sakila.actor.
```sh
INSERT INTO sakila.actor (first_name, last_name)
	SELECT first_name, last_name 
    FROM sakila.customer
    LIMIT 5;
```
4. Cadastre três categorias de uma vez só na tabela sakila.category.
```sh
INSERT INTO sakila.category (category_id, name)
VALUES
	(17, 'CATEGORIA01'),
    (18, 'CATEGORIA02'),
    (19, 'CATEGORIA03');
```
5. Cadastre uma nova loja na tabela sakila.store .
```sh
INSERT INTO sakila.store (manager_staff_id, address_id)
VALUES (3, 3);
```


