# ------------------------------------------
# Com NODE
# docker build --tag aula-dia-13
# docker run --name aula -p 3000:3000 aula-dia-13

# FROM node
# WORKDIR /app
# COPY . .
# EXPOSE 10000
# CMD ["npm", "start"]

# ------------------------------------------
# Com NGINX
# npm run build
# docker build --tag aula-dia-13
# docker run --name aula -p 8080:80 aula-dia-13

FROM nginx
WORKDIR /usr/share/nginx/html
COPY ./build .
