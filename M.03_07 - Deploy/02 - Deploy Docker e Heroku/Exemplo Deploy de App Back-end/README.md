01. `npm init -y`;
02.  `npm install express dotenv`;
03.  `npm install eslint -D`;
04.  Crie `index.js` e Adicione:
```js
const express = require('express');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => res.send(`<h1> Executando na porta: ${port} </h1>`));
app.listen(port, () => console.log(`Online: ${port}`));
```
05. Inicie o eslint: `npx eslint --init`;
  - ENTER para continuar;
  - To check syntax, find problems, and enforce code style;
  - CommonJS;
  - None of these;
  - No;
  - Node;
  - Use a popular style guide;
  - Airbnb: https://github.com/airbnb/javascript
  - JSON
  - Yes
06. Verifique o arquivo `.eslintrc.json`;
```json
{
  "env": {
      "commonjs": true,
      "es2021": true,
      "node": true
  },
  "extends": [
      "airbnb-base"
  ],
  "parserOptions": {
      "ecmaVersion": 12 // certifique-se de que o valor seja 12
  },
  "rules": {
  }
}
```
07. Delete a pasta `node_modules/`;
08. Crie o arquivo `Dockerfile` adicione:
```js
FROM node:alpine
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
CMD ["node", "index.js"]
```
09. Crie o arquivo `heroku.yml` adicione:
```js
build:
  docker:
    web: Dockerfile

run:
  web: node index.js
```
10. `git init`;
11. `heroku create deploy-heroku-1234`;
12. `heroku stack ` ou `heroku stack -a deploy-heroku-1234`
13. `heroku stack`;
  - heroku-20 é o Ubuntu 20.04
14. Alterar a stack do aplicativo `heroku stack:set container -a deploy-heroku-1234`;
15. `git add .`;
16. `git commit -m 'uma mensagem'`;
17. `git push heroku master`;
18. `heroku open -a deploy-heroku-1234`