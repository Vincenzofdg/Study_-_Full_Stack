**Instalando:**

1. npm init -y
2. npm install mysql2 sequelize
3. npm install --save-dev sequelize-cli

**Utilizando:** `npx sequelize-cli init`

<hr />

- **config:** contém um arquivo de configuração, que "fala" para o CLI como conectar-se com o nosso banco de dados;
- **models:** contém todos os modelos da nossa aplicação;
- **migrations:** contém todos os arquivos de migração da nossa aplicação;
- **seeders:** contém todos os arquivos de "seeds".

<hr />

**Conectando ao Banco:**

Configurar o arquivo config.json gerado pelo init do CLI. Ao alterar esse arquivo, estamos configurando o acesso da aplicação ao nosso banco de dados. Vamos modificar somente o objeto development:
```json
{
  "development": {
    "username": "root",
    "password": "",
    "database": "orm_example",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
```

<hr />

**Criando o banco usando o CLI do Sequelize:**

Iniciando uma aplicação do sequelize, criaremos o banco de dados orm_example que nomeamos no arquivo config.json através deste comando:
```
npx sequelize db:create
```

Verificando se o Banco de Dados foi criado:

1. mysql -u root -p
2. show databases;
