1. Crie o projeto express:
```
npm init -y 
npm i express
npm i nodemon -D
```

2. Adicione no package.json: `"dev": "nodemon index.js"`

3. Criar um Dockerfile, com o seguinte conteúdo:
```
FROM node:16-alpine
WORKDIR /app
# Caso utilize TypeScript: COPY ["package.json", "tsconfig.json", "./"] 
COPY ["package.json", "./"]
RUN npm install
CMD ["npm", "run", "dev"]
```

1. Gerar a imagem: `> docker build --tag express-com-docker .`

2. docker container run -v "$(pwd)":/app/ -p 3000:3000 express-com-docker
