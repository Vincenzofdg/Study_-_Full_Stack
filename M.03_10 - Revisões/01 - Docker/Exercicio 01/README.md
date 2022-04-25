Faça uma imagem docker que, ao executá-la como um container, mostre na tela a seguinte mensagem:
> Sou pessoa estudante da Trybe!

**Para Criar a Imagem:** docker build . -t exercicio01

**Para Criar o Container e Remove ao Sair:** docker run --rm exercicio01

**Para usar novamente o Container:** docker start -a nome_do_container