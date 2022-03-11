Dentro do diretorio 'models' existe um arquivo index.js **não apaga-lo** pois ele estabelece uma instância de conexão entre os arquivos presentes na pasta model e o banco de dados relacional utilizado.

O model pode ser definido de duas formas:

- **sequelize.define(modelName, attributes, options)** ==> Chamando pela função;
- **init(attributes, options)** ==> Como uma classe.

<hr />

### Template para criar um model
```
npx sequelize model:generate --name nome_do_model --attributes nome_do_atributo:string
```

- **--name**: Nome da tabela, no singular (Refere-se a uma unidade dos dados, como uma linha no banco ou um objeto no seu código javascript);
- **--attributes**: Nome as colunas e os tipos de dados que ela contém.

**Exemplo:** Criar uma tabela Users, que contém dados de vários usuários.

1. Gerar um model que irá representar uma Instância de usuário , ou uma linha na tabela Users no nosso banco
```
npx sequelize model:generate --name User --attributes fullName:string
```

- Arquivo user.js criado no diretorio models;
- Arquivo 20220307183918-create-user.js (YYYY-MM-DD:hh:mm:ss) criado no diretorio migrations;

2. Não será trabalhado com classes, então suabistitua o conteudo de /models/user.js por:
```json
const User = (sequelize, DataTypes) => {
  const User = sequelize.define("User", {
    fullName: DataTypes.STRING,
    email: DataTypes.STRING,
  });

  return User;
};

module.exports = User;
```
