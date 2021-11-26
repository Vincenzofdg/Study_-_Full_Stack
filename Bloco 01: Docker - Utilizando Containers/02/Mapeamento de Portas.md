## Criando um container para manter um servidor HTTP Apache

`tag -P ==> Gera uma porta aleatoria`

`tag -p ==> Gera uma porta especifica (<PORTA-SO-HOSPEDEIRO>:<PORTA-SO-CONVIDADO>)`

**Para baixar a imagem do servidor:** `docker container run -d -P httpd:2.4`

**Listar a imagem baixada:** `docker conteiner ls`

Observar que na coluna PORTS temos a porta criada, exemplo: `0.0.0.0:49153->80/tcp`

Estamos na porta padrão (80) e podemos acessar a hospedagem em `http://localhost:49153`

**Gerar e dar um nome:** `docker run -d -P --name site-novo httpd:2.4`

**Parar o container:** `docker stop site-novo`

**Iniciar o container:** `docker start site-novo`

**Gerando container com um porta especifica:** `docker container run -d -p 54321:80 httpd:2.4`
