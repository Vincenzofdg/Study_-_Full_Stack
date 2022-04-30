As bibliotecas de mapeamento objeto-relacional permitem que controlemos informações que devem ser criadas assim que nosso banco de dados/tabelas forem criadas. Ou seja, podemos configurar nosso banco para ser automaticamente criado e povoado.

1. Criando um novo Seed:
```
npx sequelize seed:generate --name users
```

- Arquivo criado no diretorio seeders ([timestamp]-users.js)

2. Modifique o arquivo no diretorio seeds
3. Execulte o comando:
- **Executar:** npx sequelize db:seed:all
- **Reverter:** npx sequelize db:seed:undo:all