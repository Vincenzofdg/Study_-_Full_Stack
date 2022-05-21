FROM node:14-alpine
WORKDIR /app
COPY . .
EXPOSE 3000
# ADD: Descompacta arquivos dentro do container.
ADD node_modules.tar.gz .
ENTRYPOINT ["npm", "start"]
