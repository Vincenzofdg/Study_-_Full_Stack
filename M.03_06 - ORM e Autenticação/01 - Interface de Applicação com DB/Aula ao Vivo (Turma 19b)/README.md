1. Crie o arquivo '.sequelizerc'
```
const path = require('path');

module.exports = {
	'config': path.resolve('src', 'database', 'config', 'config.js'),
	'models-path': path.resolve('src', 'database', 'models'),
	'seeders-path': path.resolve('src', 'database', 'seeders'),
	'migrations-path': path.resolve('src', 'database', 'migrations'),
}
```

2. npx sequelize-cli init

**Create DB:** `npx sequelize-cli db:create`

**Create Model:** `npx sequelize-cli model:generate --name User --attributes email:string,passwordHash:string,name:string,phone:string`

**Migrate:** `npx sequelize-cli db:migrate`

**Create Seed:** `npx sequelize-cli seed:generate --name add-user`

**Populating DB:** `npx sequelize-cli db:seed:all`