O Dockerfile nada mais é do que um arquivo de configuração usado pelo Docker com a descrição passo a passo do que você deseja que aconteça.

**Criando e rodando uma aplicação React com Dockerfile**

1. `npx create-react-app react-dockerized`

2. `cd react-dockerized`

3. `touch Dockerfile`

## FROM

Ao criarmos uma nova imagem, sempre devemos baseá-la em uma outra, para isso utilizamos o FROM. Por exemplo, para criar uma nova imagem que rodará sob um ubuntu: `FROM ubuntu:latest`

É recomendado utilizar sempre uma versão específica de nossa imagem base em nossas imagens de produção, por exemplo `ubuntu:8` ao invés de `ubuntu:latest`

## WORKDIR

Definir um "diretório de trabalho", que será utilizado como base para a execução dos comandos. ==> `WORKDIR <DIRETORIO UTILIZADO>`

**Exermplo:** `WORKDIR /app`

## COPY

Vimos que conseguimos preparar nossa imagem para executar por exemplo, uma aplicação dentro do container, porém, precisamos do código fonte para rodá-lo.

Para isso utilizamos o COPY (Copiar em português) , com ele conseguimos copiar diretórios e arquivos para dentro da nossa imagem:
```
COPY ["<ARQUIVO_1>","<ARQUIVO_2>",...,"<ARQUIVO_X>", "<PASTA-DESTINO>"]
```
Imagine que estamos em um diretório que possui uma pasta app com o código fonte de uma aplicação, para copiá-la para dentro da imagem e conseguirmos executá-la, basta aplicar:
```
COPY ["./app", "/usr/src/app"]
```
Com o comando COPY conseguimos montar nossa estrutura do código fonte dentro da imagem, porém, para executá-la precisaríamos apontar para o diretório que definimos anteriormente como nosso diretório de trabalho (WORKDIR).
```
# FROM node:14-alpine AS build
# WORKDIR /app
COPY package*.json ./
```
