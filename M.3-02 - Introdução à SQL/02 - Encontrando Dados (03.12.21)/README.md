## Principais Tipos de Queries

**DDL: Lidam com o esquema, a descrição e o modo como os dados devem existir em um banco de dados (*Data Definition Language*)**
- **CREATE:** Cria bancos de dados, tabelas, índices, views, procedures, functions e triggers;
- **ALTER:** Altera a estrutura de qualquer objeto;
- **DROP:** Deleta objetos;
- **TRUNCATE:** Esvazia os dados dentro de uma tabela, mas a mantém no banco de dados.

**DML: Utilizados para armazenar, modificar, buscar e excluir dados em um banco de dados (*Data Manipulation Language*)**
- **SELECT:** Buscar dados em um banco de dados;
- **INSERT:** Insere dados em uma tabela;
- **UPDATE:** Altera dados dentro de uma tabela;
- **DELETE:** Exclui dados de uma tabela.

**DCL: Concedem direitos, permissões e outros tipos de controle ao sistema de banco de dados (*Data Control Language*)**
- **GRANT:** Da acesso a um usuário;
- **REVOKE:** Remove acessos concedidos através do comando GRANT .

**TCL: Lidam com as transações dentro de suas pesquisas (*ransactional Control Language*)**
- **COMMIT:** Muda suas alterações de temporárias para permanentes no seu banco de dados;
- **ROLLBACK:** Desfaz todo o impacto realizado por um comando;
- **SAVEPOINT:** Define pontos para os quais uma transação pode voltar;
- **TRANSACTION:** Definem onde, como e em que escopo suas transações são executadas.
