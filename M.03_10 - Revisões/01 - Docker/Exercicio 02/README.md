- Crie uma página HTML simples chamada "exercicio.html":
- Faça uma imagem docker que, ao executá-la como um container, sirva o arquivo HTML "index.html" usando o programa **thttpd**.

**Para Criar a Imagem:** docker build . -t exercicio02

**Para Criar o Container e Remove ao Sair:** docker run --rm -p 3003:3000 exercicio02
