FROM node:14-alpine
WORKDIR /app
COPY . .
EXPOSE 3001
ADD node_modules.tar.gz .
ENTRYPOINT [ "npm", "start" ]
