1. **Instalar o dotenv:** npm install dotenv
2. Mudar o nome do arquivo `config.json` para `config.js`
3. Subistituir conteúdoúd do arquivo por:
```js
require('dotenv').config();

module.exports = {
  development: {
    username: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
    host: process.env.HOSTNAME,
    dialect: 'mysql',
  },
  test: {
    username: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
    host: process.env.HOSTNAME,
    dialect: 'mysql',
  },
  production: {
    username: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
    host: process.env.HOSTNAME,
    dialect: 'mysql',
  },
};
```
4. Criar um arquivo .env na raiz do projeto. Contendo:
```
MYSQL_USER=root
MYSQL_PASSWORD=password
MYSQL_DATABASE=orm_example
HOSTNAME=localhost
```

5. Mo arquivo `models/index.js` modificar a linha 8:
```js
// Original:
const config = require(__dirname + '/../config/config.json')[env];
// Depois de modificar:
const config = require(__dirname + '/../config/config.js')[env];
```
