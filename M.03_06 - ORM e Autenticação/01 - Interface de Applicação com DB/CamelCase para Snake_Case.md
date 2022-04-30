Durante as criação das tabelas (em migrations), as colunas createdAt e updatedAt estão em Camel Case, ou seja, seguem o formato que escrevemos em JavaScript, porém, a nomenclatura utilizada pelo MySQL segue o formato Snake Case, logo teríamos que declarar estas duas colunas no seguinte formato created_at e updated_at. Então basta mudarmos o nome das colunas em migrations? Sim, mas não iremos alterar o nome das nossas chaves, permaneceremos com createdAt e updatedAt. O que faremos, será adicionar o field na nossa declaração, para resolvermos esse impasse. Segue o formato que ficará nossa migration e seed:

## migrations/[timestamp]-create-user.js
```js
// module.exports = {
//   up: async (queryInterface, Sequelize) => {
//     await queryInterface.createTable('Users', {
//       id: {
//         allowNull: false,
//         autoIncrement: true,
//         primaryKey: true,
//         type: Sequelize.INTEGER,
//       },
//       fullName: {
//         type: Sequelize.STRING,
           field: 'full_name',
//       },
//       email: {
//         type: Sequelize.STRING,
//       },
//       createdAt: {
//         allowNull: false,
//         type: Sequelize.DATE,
           field: 'created_at', // a coluna será criada no banco com este nome
//       },
//       updatedAt: {
//         allowNull: false,
//         type: Sequelize.DATE,
           field: 'updated_at', // a coluna será criada no banco com este nome
//       }
//     });
//   },

//   down: async (queryInterface, Sequelize) => {
//     await queryInterface.dropTable('Users');
//   }
// };
```

## seeders/[timestamp]-users.js
```js
module.exports = {
//   up: async (queryInterface, Sequelize) => queryInterface.bulkInsert('Users',
//     [
//       {
           full_name: 'Leonardo',
//         email: 'leo@test.com',
           // com a mudança no nome das colunas, precisamos colocar no seed o formato correspondente a este novo nome
           created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
           updated_at: Sequelize.literal('CURRENT_TIMESTAMP'),
//       },
//       {
           full_name: 'JEduardo',
//         email: 'edu@test.com',
           created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
           updated_at: Sequelize.literal('CURRENT_TIMESTAMP'),
//       },
//     ], {}),

//   down: async (queryInterface) => queryInterface.bulkDelete('Users', null, {}),
// };
```

## Erros

01. O primeiro erro será de coluna desconhecida relacionada a createdAt. Isso ocorre pelo fato de createdAt e updatedAt serem colunas criadas por padrão, ou seja, a aplicação tentará retornar estas colunas, mas como fizemos a alteração para usar Snake Case, estas colunas não foram criadas, gerando assim o erro.
```
Unknown column 'createdAt' in 'field list'
```

02. O segundo erro será relacionado a tabela não encontrada. Quando você fizer uma requisição, o sequelize tentará fazer por padrão uma busca com o database orm_example e a tabela users, perceba que criamos uma tabela Users com U maiúsculo, dessa forma temos um problema na nossa pesquisa.
```
Table 'orm_example.users' doesn't exist
```

**Solucionando Estes Erros**

Acrescentar uma configuração no nosso model:

 - **underscored:** Resolverá o primeiro problema, ele fará com que parâmetros recebidos em Camel Case, sejam convertidos em Snake Case, quando for feita uma consulta a respectiva tabela.
 - **tableName:** Resolverá o segundo problema, aqui podemos declarar explicitamente, qual o nome da tabela que estamos referenciando, retirando assim a responsabilidade do Sequelize de nomear a tabela.

O model ficará assim:

```js
// const User = (sequelize, DataTypes) => {
//   const User = sequelize.define('User', {
//     fullName: DataTypes.STRING,
//     email: DataTypes.STRING,
       phoneNum: DataTypes.STRING,
//   },
     {
       underscored: true,
       tableName: 'Users',
     });

//   return User;
// };

// module.exports = User;
```
