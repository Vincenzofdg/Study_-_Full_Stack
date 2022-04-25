Como entrar **dentro** do container que já está em execução?

Neste exercício, vamos entender como usar o comando **docker exec** para executar um comando dentro de um container que já está em execução.

**Para Criar a Imagem:** docker build . -t exercicio05

**Para Criar o Container e Remove ao Sair:** docker run --rm -p 3003:3000 --name meu-container exercicio05

**Executar um Comando Dentro do Container:** docker exec meu-container pwd

**Executar e Continuar Dentro do Container:** docker exec -ti meu-container sh