É uma forma de versionar o schema do banco de dados. Ou seja, cada migration conterá um pedaço de código que representa o histórico de alterações feitas no banco de dados.

1. Assim como no model vamos adicionar uma coluna email;
2. Rode os comandos:
 - **Para migrar:** npx sequelize db:migrate
 - **Reverter migração:** npx sequelize db:migrate:undo
3. Criando uma alteração com uma nova migrations:
 - Nova migration (adicionar phone_num na tabela Users):
```
npx sequelize migration:generate --name add-column-phone-table-users
```

- Um novo arquivo gerado no diretorio migrations (XXXXXXXX-add-column-phone-table-users.js)
4. Migre `npx sequelize db:migrate`;
5. Adicionar `phone_num: DataTypes.STRING` no model user.js.