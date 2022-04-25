# Imagem base mínima (5.59MB)
FROM alpine:3.14

# Instala o programa thttpd. O RUN execulta durante a Contrução da Imagem
  # alpine usa apk ... como se fosse apt install thttpd
RUN apk add thttpd

  # Cria um novo usuário simples que não tem permissões de root
RUN adduser -D estudante
USER estudante

# Criando um local onde os arquivos quando copiados ficará
# Caso o diretorio do WORKDIR não exista... ele irá criar automaticamente (mkdir dir_name)
WORKDIR /home/estudante

# Copia arquivo HTML para dentro da imagem
COPY index.html index.html

# Executa o programa thttpd para entregar arquivos HTML na pasta "/home/estudante"
CMD ["thttpd", "-D", "-h", "0.0.0.0", "-p", "3000", "-d", "/home/estudante", "-u", "estudante", "-l", "-"]