**Listar Imagens:** `docker images`

**Para Remover uma Imagem:** `docker rmi <ID da Imagem>`

## Mapeando Portas de Acesso
**Porta Aleatoria**: `docker run -d -P <imagem>`

**Porta Definida**: `docker run -d -p 3000:3000 <imagem>`

**Exemplo**: HTTP Apache roda na porta 80 ==> `docker container run -d -p 3000:80 httpd:2.4`

## Linux Alphine
Muito utilizada em imagens do Docker por ser uma distribuição que possui somente o essencial para seu funcionamento, o que torna ela uma opção leve, rápida, simples e segura. Se dermos o comando `docker pull alpine:3.13` baixando a versão 3.13 dessa distribuição e, logo após, dermos o comando `docker pull node:alpine3.13`, veremos que a imagem do node, deve reaproveitar uma camada que já foi baixada em outro momento.

## Dockerfile Dicionário
### Essenciais:
- `WORKDIR`: Diretorio onde iremos trabalhar dentro do container (Ex.: WORKDIR /app);
- `COPY`: Arquivos que serão copiados para dentro do container (Ex.: COPY ["<file_01>","<file_02>",...,"<file_N>", "<destino>"])
- `RUN`: Executa um comando durante a build da imagem (Ex.: RUN ["<sudo>", "<apt>", "<update>", "<-y>"])
- `EXPOSE`: Expoem a porta na qual a aplicação rodará no container (Ex.: EXPOSE 3000))
- `CMD`: Executa um comando quando o container é iniciado (Ex.: CMD ["/bin/echo", "Hello World"])
- `ENTRYPOINT`: CMD pode ser sobrescrito ja o ENTRYPOINT não.
  - Exemplo:

    | ENTRYPOINT ["/bin/echo"]
    
    | CMD ["Hello World"]

### Adicionais:
- `LABEL`: Cria uma Label na Imagem (LABEL <key>=<valor>, use `docker inspect image-name` para visualizar a label);
- `ENV`: Cria variavel de ambiente dentro do container (ENV <nome> <valor>);
- `USER`: Define qual o usuario sera usado no container, caso não haja o usuário usado será o root (USER <nome>)
