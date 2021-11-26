Imagens Docker são arquivos que funcionam como espécies de fotos de programas, bibliotecas, frameworks ou mesmo sistemas operacionais, a partir das quais construimos containers e executamos códigos dentro do Docker.
```
docker images
```

A partir de uma imagem, podemos ter vários containers. Então se rodarmos `docker container run <nome da imagem>`, iniciaremos um novo container.

**Para Remover uma Imagem:** `docker rmi -f <ID da Imagem>`
