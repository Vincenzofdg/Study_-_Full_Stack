## Criar e rodar um container

**criar um novo container e roda-lo logo em seguida:** `docker container run <parâmetros> <imagem>:<tag>`

**--name define um <nome-da-sua-escolha> para aquele container (ao invés de um nome aleatório):** `docker container run --name <nome-da-sua-escolha> <imagem>:<tag>`

**--rm deve garantir que o container seja removido ao final da execução (útil para testar imagens):** `docker container run --rm <imagem>:<tag>`

**-d (--detach) rodará esse container em segundo plano:** `docker container run -d <imagem>:<tag>`

## Criar um container sem executá-lo

**imagem de referência, mas não o executa imediatamente:** `docker container create <parâmetros> <imagem>:<tag>`

**-it nesse contexto, ele se mantenha ativo e disponha de um terminal de acesso:** `docker container create -it <imagem>:<tag>`

## Listar containers

**containers ativos:** `docker container ls`

**containers ativos e inativos:** `docker container ls -a`

**último container criado (independente do seu estado):** `docker container ls -l`

## Iniciar, reiniciar, pausar, resumir e parar um container

**inicia o container que já havia sido criado:** `docker container start <CONTAINER ID || NAMES>`

**reinicia um container:** `docker container restart <CONTAINER ID || NAMES>`

**pausa um container:** `docker container pause <CONTAINER ID || NAMES>`

**tira um container do modo de pausa:** `docker container unpause <CONTAINER ID || NAMES>`

**encerra um container:** `docker container stop <CONTAINER ID || NAMES>`

## Retomando o acesso a um container interativo rodando em segundo plano

**você pode acessar um container ativo rodando o comando attach:** `docker container attach <CONTAINER ID || NAMES>`

## Excluindo containers específicos

**container não estiver ativo:** `docker container rm <CONTAINER ID || NAMES>`

**container estiver ativo:** `docker container rm -f <CONTAINER ID || NAMES>`

**deleta todos os container (Cuidado):** `docker container prune`

## Monitorando os processos dentro de um container

`docker container top <CONTAINER ID || NAMES>`

## Removendo:

**Contêineres:** `docker container rm $(docker container ls -a -q)`
     
**Imagens:** `docker image rm $(docker image ls -a -q)`
     
**Volumes:** `docker volume rm $(docker volume ls -q)`
     
**Networks:** `docker network rm $(docker network ls -q)`


