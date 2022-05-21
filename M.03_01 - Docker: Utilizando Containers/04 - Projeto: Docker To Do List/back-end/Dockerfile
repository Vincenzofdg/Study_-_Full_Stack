FROM node:14-alpine
WORKDIR /app
COPY . .
EXPOSE 3001
# ADD: Descompacta arquivos dentro do container.
ADD node_modules.tar.gz .
ENTRYPOINT ["npm", "start"]