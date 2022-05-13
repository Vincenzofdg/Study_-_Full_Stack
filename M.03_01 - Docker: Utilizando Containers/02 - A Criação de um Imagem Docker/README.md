**Listar Imagens:** `docker images`

**Para Remover uma Imagem:** `docker rmi -f <ID da Imagem>`

## Mapeando Portas de Acesso

**Porta Aleatoria**: `docker run -d -P <imagem>`

**Porta Definida**: `docker run -d -p 3000:3000 <imagem>`

Exemplo:

HTTP Apache roda na porta 80 ==> `docker container run -d -p 3000:80 httpd:2.4`