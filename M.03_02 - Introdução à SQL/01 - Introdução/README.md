**Comandos mais Usados:** `SELECT`, `UPDATE`, `DELETE`, `INSERT`, `WHERE`, ... etc

Por convenção, utilizamos as palavras chave do SQL em caixa alta para diferenciar das indicações de tabelas e colunas. Lembre-se sempre usar o _;_ no final de cada comando.

- **Referência do banco de dados que será utilizado na query:** `USE nome_do_banco_de_dados;` ou `SELECT * FROM banco_de_dados.tabela;`
- **Tabelas inicializadas no seu server:** `SHOW TABLES;`
- **Criar um banco de dados:** `CREATE DATABASE nome_do_banco_de_dados;`
- **Remover um banco de dados:** `DROP DATABASE nome_do_banco_de_dados;`

## Constraints (restrições)
São regras usadas para limitar os tipos de dados em uma tabela. São aplicadas ao na criação de uma nova tabela atraves do comando `CREATE TABLE NomeDaTabela ()` ou na alteração da estrutura desta tabela com o comando `ALTER TABLE NomeDaTabela`

As constraints mais usadas são:

- **NOT NULL** ==> Garante que aquele campo não pode conter valores nulos.
- **UNIQUE** ==> Garante que o valor inserido na coluna da tabela é único.
- **PRIMARY KEY** ==> A chave primária de uma tabela garante que a coluna em que essa constraint está sendo aplicada é o identificador único da tabela.
- **FOREIGN KEY** ==> Referência a uma chave primária (valor em uma coluna com PRIMARY KEY) de outra tabela, permitindo um relacionamento entre as duas
- **DEFAULT** ==> Garante que, caso nenhum valor seja inserido na coluna, colocará o valor padrão que for passado para ela.

## Instalando `mysql-server`

1. Baixe e execute o [script](https://github.com/Vincenzofdg/Programms/blob/master/MySQL.sh);
2. Para acessar o MYSQL digite o comando `sudo mysql -u root -p`
3. Para ver as informações dos bancos de dados que ja vem com o MYSQL `SHOW DATABASES;`.
4. Criando um usuario (Para nao ter que colocar o sudo)
  
  > CREATE USER 'Um_nome_de_usuario'@'localhost' IDENTIFIED BY 'Uma_senha';
  
  > GRANT ALL PRIVILEGES ON *.* TO 'Um_nome_de_usuario'@'localhost'; (copiar comando fora do markdown)

5. Reinicie os privilégios `FLUSH PRIVILEGES;`
6. Testando. Rode o comando `mysql -u 'Um_nome_de_usuario' -p` e digite a senha `Uma_senha`
7. Verificando o status da instalação: `sudo systemctl status mysql`.

  > **Para iniciar:** systemctl start mysql
  
  > **Para parar:** systemctl stop mysql
  
8. Configurando a inicialização:

  > **Para não iniciar junto ao sistema** `sudo systemctl disable mysql`
  
  será necessario rodar `sudo systemctl start mysql` toda a vez que iniciar o sistema
  
  > **Para iniciar junto ao sistema** `sudo systemctl enable mysql`
  
## Downloads: [MySQL Workbench](https://dev.mysql.com/downloads/workbench/) | [Sakila SQL Script](https://s3.us-east-2.amazonaws.com/assets.app.betrybe.com/back-end/sakila-1ae15ae82697888c35bf1f1c8acbf755.sql)