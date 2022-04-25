O Docker Compose é uma ferramenta que ajuda a gente a subir vários containers de uma vez!

**Para Subir um Compose:** docker-compose up

**Para Eliminar um Compose:** docker-compose down

**Executar e Continuar Dentro do Container:** docker exec -ti meu-container sh

`docker exec -it exercicio06_web1_1 sh`

dentro do container:

`wget -O- http://localhost:3000`

ou

`wget -O- http://web1:3000`