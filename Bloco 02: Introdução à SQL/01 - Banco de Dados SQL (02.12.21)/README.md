## O que é SQL?

É a linguagem usada para criar, pesquisar, extrair e também manipular dados dentro de um banco de dados relacional.

**Alguns Comandos:** `SELECT`, `UPDATE`, `DELETE`, `INSERT`, `WHERE`, ... etc

## Como as informações são armazenadas?

Todas as pesquisas realizadas dentro de um banco de dados são feitas em tabelas. Tabelas possuem linhas e colunas.

![image](tabela.png)

## Constraints (restrições)

São regras usadas para limitar os tipos de dados em uma tabela. São aplicadas ao na criação de uma nova tabela atraves do comando `CREATE TABLE NomeDaTabela ()` ou na alteração da estrutura desta tabela com o comando `ALTER TABLE NomeDaTabela`

As constraints mais usadas são:

**NOT NULL** ==> Garante que aquele campo não pode conter valores nulos.

**UNIQUE** ==> Garante que o valor inserido na coluna da tabela é único.

**PRIMARY KEY** ==> A chave primária de uma tabela garante que a coluna em que essa constraint está sendo aplicada é o identificador único da tabela.

**FOREIGN KEY** ==> Referência a uma chave primária (valor em uma coluna com PRIMARY KEY) de outra tabela, permitindo um relacionamento entre as duas

**DEFAULT** ==> Garante que, caso nenhum valor seja inserido na coluna, colocará o valor padrão que for passado para ela.

## Instalando `mysql-server`

1. Rode o script **mysql-server (Instalação).sh**;

2. Para acessar o MYSQL digite o comando `sudo mysql -u root -p`

3. Para ver as informações dos bancos de dados que ja vem com o MYSQL `show databases;`.

4. Criando um usuario (Para nao ter que colocar o sudo)
  
  > CREATE USER 'Um_nome_de_usuario'@'localhost' IDENTIFIED BY 'Uma_senha';
  
  > GRANT ALL PRIVILEGES ON *.* TO 'Um_nome_de_usuario'@'localhost';

5. Reinicie os privilégios `FLUSH PRIVILEGES;`

6. Testando. Rode o comando `mysql -u 'Um_nome_de_usuario' -p` e digite a senha `Uma_senha`
