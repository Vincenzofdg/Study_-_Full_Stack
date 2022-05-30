1. Crie o projeto express:
```
npm init -y 
npm i express
npm i nodemon -D
```

2. touch index.js, contendo:
```js
const express = require('express');

const app = express();
const PORT = process.env.PORT | 3000

app.get('/', (_req, res) => { 
  res.status(200).json({
    msg: 'Hot Reload Funcionando Corretamente'
  })
})

app.listen(PORT, () => console.log(`Rodando na Porta: ${PORT}`))
```

3. Adicione no package.json: `"dev": "nodemon index.js"`

<hr />

### Com Dockerfile

1. Criar um Dockerfile, com o seguinte conteúdo:
```
FROM node:16-alpine
WORKDIR /app
# Caso utilize TypeScript: COPY ["package.json", "tsconfig.json", "./"] 
COPY ["package.json", "./"]
RUN npm install
CMD ["npm", "run", "dev"]
```

2. Gerar a imagem: `> docker build --tag express-com-docker .`

3. Iniciando o container: `docker container run -v "$(pwd)":/app/ -p 3000:3000 express-com-docker`

<hr />

### Com docker-compose.yml

1. Criar o arquivo, contendo:
```
version: '3.9'
services:
  build: ./
  volumes:
    - ./:/app
  ports:
    - 3000:3000
```