O Dockerfile nada mais é do que um arquivo de configuração usado pelo Docker com a descrição passo a passo do que você deseja que aconteça.

**Criando e rodando uma aplicação React com Dockerfile**

1. `npx create-react-app react-dockerized`

2. `cd react-dockerized`

3. `touch Dockerfile`

**FROM:** Ao criarmos uma nova imagem, sempre devemos baseá-la em uma outra, para isso utilizamos o FROM. Por exemplo, para criar uma nova imagem que rodará sob um ubuntu: `FROM ubuntu:latest`

É recomendado utilizar sempre uma versão específica de nossa imagem base em nossas imagens de produção, por exemplo `ubuntu:8` ao invés de `ubuntu:latest`

**WORKDIR:** Definir um "diretório de trabalho", que será utilizado como base para a execução dos comandos. ==> `WORKDIR <DIRETORIO UTILIZADO>`. **Exermplo:** `WORKDIR /app`

**COPY:** Vimos que conseguimos preparar nossa imagem para executar por exemplo, uma aplicação dentro do container, porém, precisamos do código fonte para rodá-lo. Para isso utilizamos o COPY (Copiar em português) , com ele conseguimos copiar diretórios e arquivos para dentro da nossa imagem:
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

**RUN:** Executa uma lista de comandos durante a criação da imagem
```
RUN ["<COMANDO>", "<SUBCOMANDO>", "<PARAMETRO-1>", ... , "<PARAMETRO-N>"]
```

No caso do `RUN npm install`. É interessante criarmos um arquivo chamado dockerignore para adicionarmos lá a node_modules, de modo que ela não seja copiada. 

**EXPOSE:** Indica a porta que será utilizada dentro do nosso container
```
EXPOSE <PORTA-DO-APP-NO-CONTAINER>
```
```
EXPOSE 3000
```

**CMD:** Sempre é executado quando o container é iniciado

O primeiro argumento é o executável e os demais são seus parâmetros:
```
CMD ["/bin/echo", "Hello World"]
```

**ENTRYPOINT:**  Vimos que podemos utilizar o CMD para iniciarmos um comando ao executarmos nossos containers , como por exemplo para iniciarmos um app .
Porém, para esse fim recomendamos utilizar ENTRYPOINT (Ponto de entrada em português) , pois, diferentemente do CMD , o comando não será sobrescrito pelo passado no run ao executarmos o container . 
```
ENTRYPOINT [ "/bin/echo" ]
CMD [ "Hello World" ]
```
## Gerando a Imagem

Dockerfile esta:
```
FROM node:14-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx:1.16.0-alpine AS prod
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
ENTRYPOINT ["nginx", "-g", "daemon off;"]
```

Para que possamos consolidar as instruções em uma imagem, devemos rodar o comando:
```
docker image build -t <name:tag> <origem_docker_file>
```
```
docker image build -t react-dockerized:v1 .
```

Digite `docker images` para verificar se a imagem foi gerada.

Para gerar o container em modo background no modo interativo e nomear o container (reactdockerized):
```
docker run -dit -p 8000:80 --name reactdockerized react-dockerized:v1
```

