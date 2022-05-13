**Listar Imagens:** `docker images`

**Para Remover uma Imagem:** `docker rmi <ID da Imagem>`

## Mapeando Portas de Acesso

**Porta Aleatoria**: `docker run -d -P <imagem>`

**Porta Definida**: `docker run -d -p 3000:3000 <imagem>`

Exemplo:

HTTP Apache roda na porta 80 ==> `docker container run -d -p 3000:80 httpd:2.4`

## Linux Alphine
Muito utilizada em imagens do Docker por ser uma distribuição que possui somente o essencial para seu funcionamento, o que torna ela uma opção leve, rápida, simples e segura. Se dermos o comando `docker pull alpine:3.13` baixando a versão 3.13 dessa distribuição e, logo após, dermos o comando `docker pull node:alpine3.13`, veremos que a imagem do node, deve reaproveitar uma camada que já foi baixada em outro momento: 