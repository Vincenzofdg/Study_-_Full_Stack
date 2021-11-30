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

> docker container run -it <Nome_da_Imagem> 

**Abrindo outro terminal, para entrar no NGINX**

> docker exec -it <ID_Container> bash

> cat /usr/share/nginx/html/index.html (Esta usando o nosso html)

> docker image inspect nginx

> docker image inspect nginx | jq '.[].RootFS.Layers[]' (apt install jq)

> docker container run --name aula_ao_vivo -d <Nome_da_Imagem>

> docker exec -it aula_ao_vivo bash

> curl http://localhost:80

**Retorna:**
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

**Mapeando porta**

> docker container run --name aula_ao_vivo -d -P <Nome_da_Imagem>

> docker container run --name aula_ao_vivo -d -p 5000:80 <Nome_da_Imagem>
