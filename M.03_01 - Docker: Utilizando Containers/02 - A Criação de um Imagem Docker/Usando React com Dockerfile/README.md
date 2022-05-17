## Criaçao do Projeto
1. `npx create-react-app docker-with-react`
2. `cd docker-with-react`
3. `touch Dockerfile`

## Gerando a Imagem e Criando o Container
1. `docker image build -t react-image .`
2. `docker run -dit -p 3000:80 --name react-container react-image`