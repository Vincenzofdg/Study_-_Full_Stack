## Backend
1. Verifica as variáveis de ambiente (Fins Didáticos, não é uma boa prática).
- PORT=3000 e UPSIDEDOWN_MODE=true

**Resolução:**

`.env`
```js
PORT=3000
UPSIDEDOWN_MODE=true
```

`index.js`
```
const PORT = process.env.PORT || 3000;
const hereIsTheUpsideDown = JSON.parse(process.env.UPSIDEDOWN_MODE);
```

2. Verifica o arquivo Dockerfile.
- Usando imagem node:14-alpine
- npm start como CMD

**Resolução**

```sh
FROM node:14-alpine

# Poderia settar no site do Heroku
# Heroku sobrescreve as variaveis de ambiente
# Nao se faz isso... fins educativos
ENV UPSIDEDOWN_MODE=true

WORKDIR /usr/src/app/backend
COPY package*.json /usr/src/app/backend/
RUN npm install
COPY . /usr/src/app/backend/
CMD ["npm", "start"] 
```

3. Verifica o arquivo heruku.yml.
- O arquivo deve iniciar um servidor do tipo web;
- O run deve executar o servidor utilizando o node.

**Resolução**

```sh
build:
  docker:
    web: Dockerfile
run:
  web: node index.js 
```

4. Verifica action de Linter para ser executada no GitHub.
- Se o arquivo ./actions/project.yml existe;
- Se a Action é acionada somente em pull_request;
- Se o job foi nomeado como: eslint;
- Se o linter está sendo executado com a versão 20.04 do ubuntu;
- Se o linter está sendo executado com a versão 12 do node.

`actions/proct.yml`
```sh
on: [pull_request]

jobs:
  eslint:
    runs-on: ubuntu-20.04
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v1.4.4
        with:
          node-version: 12
      - run: npm install
      - run: npm test 
```

5. Verifica o Deploy no Heroku.
```
> heroku create vincenzofdg-up --remote heroku-up
> heroku create vincenzofdg-dw --remote heroku-dw

> heroku stack:set container -a vincenzofdg-up
> heroku stack:set container -a vincenzofdg-dw

> git push heroku-up vincenzo-f-di-giacomo-stranger-things-backend:master
> git push heroku-dw vincenzo-f-di-giacomo-stranger-things-backend:master
```

## Frontend
6. Verifica as variáveis de ambiente do frontend (Fins Didáticos, não é uma boa prática).
```
REACT_APP_HAWKINS_URL=https://vincenzofdg-up.herokuapp.com/
REACT_APP_HAWKINS_TIMEOUT=30000
REACT_APP_UPSIDEDOWN_URL=https://vincenzofdg-dw.herokuapp.com/
REACT_APP_UPSIDEDOWN_TIMEOUT=30000
GITHUB_USER=vincenzofdg
```

7. Verifica se foi feito o deploy do frontend no Heroku.
```
> heroku create vincenzofdg-ft -b mars/create-react-app;
> git remote rename heroku heroku-ft;
> git push heroku-ft vincenzo-f-di-giacomo-stranger-things-frontend:master.
```
