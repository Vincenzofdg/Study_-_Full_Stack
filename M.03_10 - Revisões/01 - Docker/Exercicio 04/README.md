**Vamos usar o Registry!**

Neste exercício, vamos aproveitar a imagem Docker feita no exercício 2 (Mini servidor de página HTML) e vamos enviar essa imagem para o DockerHub!

E o melhor, qualquer pessoa dessa sala poderá baixar essa imagem e executar essa imagem como um container em sua máquina! Bora tentar?

**Para Criar a Imagem e Ser Capaz de Mandar Para o Registry:** 

docker login

docker build . -t usuario_dockerhub/exercicio04

docker push usuario_dockerhub/exercicio04

**Para Criar o Container e Remove ao Sair:** docker run --rm -p 3000:3000 usuario_dockerhub/exercicio04