1. **Intalando:** 
```
npm install express mysql2 sequelize

npm install --save-dev sequelize-cli
```

2. **Inciando:**
```
npx sequelize-cli init
```

3. **Criando um migrations:**
```
npx sequelize migration:generate --name create-stores
```

4. **Rodando a migration criada:**
```
npx sequelize db:migrate
```

5. **Criando um seeders:**
```
npx sequelize seed:generate --name stores
```

6. **Rodando seeders:**
```
npx sequelize db:seed:all
```

7. **Criando a model:**
Obs: Como ja criamos a migração iremos realizar a criação da model manuamente, não pelo terminal. Pois ao fazer a criação da model pelo terminal ele gera uma nova migração, e ja temos neste caso.
```
npx sequelize model:generate --name Store --attributes name:string description:string
```

## Boas Praticas:

1. **Intalar dotenv:** npm install dotenv;
2. Mudando os arquivo `config/config.json` para `js`;
    - config.json ==> config.js
    - models/index.js (linha: 8) ==> `const config = require(__dirname + '/../config/config.js')[env];`
3. Criar o arquivo `.env`;
4. Criando um diretorio `sequelize` na raiz. Será movido para este diretorio;
    - seeders;
    - models;
    - migrations;
    - config.
5. Dizendo para o sequelize onde os diretorios estão agora (sequelize/);
    - Criar o arquivo `.sequelizerc`.
6. O Sequelize entende que Tabelas são no plural e os models no singular (Tabela: Users, Model: User). Fazendo com que a tabela tenha o mesmo nome do model sem colocar no plural:
```js
const Store = Sequelize.define('Store', {
    name: DataTypes.STRING,
    description: DataTypes.STRING,
}, {
    // Adicionar esta chave para dizes que a tabla tambem se chamará Store:
    freezeTableName: true,
    // ou
    tableName: 'Store' ou 'QualquerNome'
})
```