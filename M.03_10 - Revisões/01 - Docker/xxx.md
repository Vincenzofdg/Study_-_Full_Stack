# Revisão

## Exercício 01
1. Faça uma imagem docker que, ao executá-la como um container, mostre na tela a seguinte mensagem:
> Sou pessoa estudante da Trybe!

<p><samp>Dockerfile</samp></p>

```
FROM alpine:3.14				# Imagem base mínima (5.59MB)
CMD ["echo", "Sou pessoa estudante da Trybe!"]	# Executa comando "echo"
```

## Exercício 02
1. Crie uma página HTML simples chamada "exercicio.html":

```
<html>
    <head>
        <title>Minha incrível página em HTML</title>
    </head>
    <body>
        <h1>Olá mundo!</h1>
        <p>Este site estava dentro de uma imagem Docker. Que agora foi executada como um container.</p>
        <img id="dog" style="max-height: 500px;" src="" alt="Carregando...">
    </body>
    <script>
        fetch("https://dog.ceo/api/breeds/image/random")
        .then((resp) => resp.json())
        .then((data) => {
            console.log(data)
            document.getElementById('dog').src = data.message
        })
    </script>
</html>
```

2. Faça uma imagem docker que, ao executá-la como um container, sirva o arquivo HTML "index.html" usando o programa **thttpd**.

<p><samp>Dockerfile</samp></p>

```
# Imagem base mínima (5.59MB)
FROM alpine:3.14

# Instala o programa thttpd.
RUN apk add thttpd

# Cria um novo usuário simples que não tem permissões de root
RUN adduser -D static
USER static

# Cria-se um nova pasta dentro da imagem
WORKDIR /home/static

# Copia arquivo HTML para dentro da imagem
COPY index.html index.html

# Executa o programa thttpd para entregar arquivos HTML na pasta "/home/static"
CMD ["thttpd", "-D", "-h", "0.0.0.0", "-p", "3000", "-d", "/home/static", "-u", "static", "-l", "-"]
```


## Exercício 03

## Exercício 04

## Exercício 05

## Exercício 06

