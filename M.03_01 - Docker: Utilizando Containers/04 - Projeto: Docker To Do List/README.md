## Requisito 01
Crie um container em modo interativo, sem rodá-lo, nomeando-o como 01container e utilizando a imagem alpine na versão 3.12.

- O container não deve ser inicializado, somente criado;
- O container deve estar preparado para acesso interativo.

**Resposta**: `docker container create --name 01container -it alpine:3.12`

## Requisito 02
Inicie o container 01container.

- O container 01container, que acabou de ser criado e está parado, deve ser iniciado;
- Se o container tiver sido iniciado de modo interativo, ele deve se manter ativo ao iniciá-lo.

**Resposta**: `docker container start 01container` 

## Requisito 03
Liste os containers filtrando pelo nome 01container.

**Resposta**: `docker container ls -a --filter name=01container`

## Requisito 04
Execute o comando cat /etc/os-release no container 01container sem se acoplar a ele.

- O container deve estar rodando e você deve ser capaz de executar um comando nesse container.

**Resposta**: `docker container exec 01container cat /etc/os-release`

## Requisito 05
Remova o container 01container.

**Resposta**: `docker container ls -a --filter name=01container`

## Requisito 06
Faça o download da imagem nginx com a versão 1.21.3-alpine sem criar ou rodar um container.

**Resposta**: `docker pull nginx:1.21.3-alpine`

## Requisito 07
Rode um novo container com a imagem nginx com a versão _1.21.3-alpine_ em segundo plano nomeando-o como 02images e mapeando sua porta padrão de acesso para porta 3000 do sistema hospedeiro.

**Resposta**: `docker container run --name 02images -p 3000:80 -d nginx:1.21.3-alpine`

## Requisito 08
Pare o container 02images que está em andamento.

**Resposta**: `docker container stop 02images`

## Requisito 09
Gere uma build a partir do Dockerfile do back-end nomeando a imagem para backend.

**Resposta**: `docker image build --tag backend ./back-end/`

## Requisito 10
Gere uma build a partir do Dockerfile do back-end nomeando a imagem para frontend.

**Resposta**: `docker image build --tag frontend ./front-end/`

## Requisito 11
Gere uma build a partir do Dockerfile do back-end nomeando a imagem para tests.

**Resposta**: `docker image build --tag tests ./tests/`

## Requisito 12
Suba uma orquestração em segundo plano com o docker-compose de forma que backend, frontend e tests consigam se comunicar.

- O docker-compose deve rodar na versão 3 ou superior.

**Resposta**: `docker-compose up -d`