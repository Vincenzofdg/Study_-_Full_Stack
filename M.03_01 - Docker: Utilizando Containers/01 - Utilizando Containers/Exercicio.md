1. No Docker Hub, utilizando a caixa de busca, busque pela imagem da Distribuição Linux Debian.

R: [Link](https://hub.docker.com/_/debian) | debian:stable

2. Baixe a imagem, com a tag stable-slim,  localmente sem ter que criar um container para isso.

R: docker pull debian:stable-slim

3. Execute um container no modo interativo utilizando essa imagem como referência.
 
R: docker container run -it debian:stable-slim

4. No terminal, execute o comando cat /etc/*-release. Qual o retorno?

R:
```sh
PRETTY_NAME="Debian GNU/Linux 11 (bullseye)"
NAME="Debian GNU/Linux"
VERSION_ID="11"
VERSION="11 (bullseye)"
VERSION_CODENAME=bullseye
ID=debian
HOME_URL="https://www.debian.org/"
SUPPORT_URL="https://www.debian.org/support"
BUG_REPORT_URL="https://bugs.debian.org/"
```

5. Encerre o terminal.

R: exit

6. Verifique na lista de o container criado.

R: docker ps -a

7. Liste o ultimo container criado.

R: docker ps -l

8. Inicie o mesmo container novamente, sem criar outro. Valide se ele está ativo na lista de containers.

R: docker container start <container_ID> (Container Iniciará e logo parará)

9. Retome o container que foi criado anteriormente nesse exercício.

R: docker container attach <container_ID> (Entrará no Container)

10.  Remova o container criado;

R: docker container rm <container_ID>

11. Crie um Container com a latest image do Ubuntu e deixe rodando em segundo plano.

R: docker container run -dit ubuntu

12.  Crie e rode no modo interativo e depois exclua o container (Cleanup), a imagem _andrius/ascii-patrol_.

R: docker container run -ti --rm andrius/ascii-patrol (ctrl + c para encerrar)
