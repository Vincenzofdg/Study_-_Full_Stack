**NGINX   ==>   [Link do Site](https://www.nginx.com/)  |  [Link do Docker Hub](https://hub.docker.com/_/nginx)**

![Docker Hub NGINX](./images/documentation.png)

> docker container run -d nginx (Container rodando em segundo plano)

> docker ps

> docker container stop <ID_Container>

> docker container rm <ID_Container>

> touch index.html Dockerfile

Conteudo `index.html`:
```
<!DOCTYPE html>
<html>
  <head>
    <title>Welcome to nginx!</title>
    <style>
      html { color-scheme: light dark; }
      body { width: 35em; margin: 0 auto;
      font-family: Tahoma, Verdana, Arial, sans-serif; }
    
</style>
  </head>
<body>
  <h1>Hello Docker!</h1>
  </body>
</html>
``` 

**Para entrar no terminal do NGINX**

> docker container run -it nginx bash 

**Onde o NGINX coloca os arquivos:**

> ls -a /usr/share/nginx/

**Ver a configuração do NGINX**

> cat /etc/nginx/conf.d/default.conf

> exit

**paremetro `-t` para dar um nome à imagem**

> docker build -t hello-nginx . 

**Criar um container e rodar:**

> docker container run -d <Nome_da_Imagem> 

32
