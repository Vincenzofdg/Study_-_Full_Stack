O objetivo da imagem Docker da pessoa é executar um script simples na linguagem Python, porém ao executar o container, nada acontece!

**Para Criar a Imagem:** docker build . -t exercicio03

**Para Criar o Container e Remove ao Sair:** docker run --rm exercicio03

`docker run --rm exercicio03`

`docker run --rm exercicio03 hello_2.py`
