Utilizar um volume significa mapear uma pasta do nosso Sistema Hospedeiro (Docker Host), para o Sistema Convidado (o container).
Assim, ela é vinculada ao container e mesmo que esse container seja removido, essa pasta permanecerá. Isso faz com que os dados não sejam perdidos.

### Exemplo:

**Situação:** Queremos desenvolver nossa página HTML de forma que ela rode dentro do servidor http Apache, que não está instalado em nossa máquina.

Queremos desenvolver nossa página HTML de forma que ela rode dentro do servidor http Apache , que não está instalado em nossa máquin

1. Fazer a página html e salvar com o seguinte nome `primeiro-teste.html` (salve a página em um local de facil acesso):
```
<!DOCTYPE html>
   <html>
      <head>
      <title>Docker é muito bom!</title>
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
   </head>
   <body>
      <h1>Minha primeira página rodando em Docker.</h1>
      <p>Estou começando minha primeira página em HTML.</p>
   </body>
</html>
```
2. Criar o container vinculando a pagina criada:
```
docker run -d --name <Nome_Container> -p 8881:80 -v "/home/$USER/site-exemplo/:/usr/local/apache2/htdocs/" httpd:2.4
```
> -v (volume) ==> `-v <PASTA-LOCAL>:<PASTA-CONTAINER>`

**Verificando se o volume realmente foi mantido**

> `docker inspect <Nome_Container>`

**Resultado:**
```
"Mounts": [
   {
      "Type": "bind",
      "Source": "/home/trybe/meu-site",
      "Destination": "/usr/local/apache2/htdocs",
      "Mode": "",
      "RW": true,
      "Propagation": "rprivate"
   }
]
```

**Volume no Dockerfile:** `VOLUME ["/data"]`

**Limpar os Volumes do nosso sistema:**

> docker volume ls

> docker volume rm <Nome_Volume>

ou 

> docker volume prune

**Removendo Containers juntamente ao Volume:** `docker container rm -v <Container_ID>`
