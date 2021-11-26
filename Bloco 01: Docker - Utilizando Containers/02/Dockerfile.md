O Dockerfile nada mais é do que um arquivo de configuração usado pelo Docker com a descrição passo a passo do que você deseja que aconteça.

**Criando e rodando uma aplicação React com Dockerfile**

1. `npx create-react-app react-dockerized`

2. `cd react-dockerized`

3. `touch Dockerfile`

## FROM

Ao criarmos uma nova imagem, sempre devemos baseá-la em uma outra, para isso utilizamos o FROM. Por exemplo, para criar uma nova imagem que rodará sob um ubuntu: `FROM ubuntu:latest`

É recomendado utilizar sempre uma versão específica de nossa imagem base em nossas imagens de produção, por exemplo `ubuntu:8` ao invés de `ubuntu:latest`

## WORKDIR

Definir um "diretório de trabalho", que será utilizado como base para a execução dos comandos. ==> `WORKDIR <DIRETORIO UTILIZADO>'`

**Exermplo:** `WORKDIR /app`

## COPY


