**Sintax dos comandos Docker:**
```
docker <comando> <sub-comando> <parâmetros>
```
Um exemplo foi o comando utilizado na instalação `docker run hello-world` que tambem pode ser escrito como `docker container run hello-world` (Utilizar esta sintax, mais atual e verbosa)

**Para rodar um container o comando deve ser:**
```
docker container run <nome-da-imagem>:<tag>
```

**Execute o comando:**
```
docker container run ubuntu
```

Se tudo ocorrer bem deve-se receber o seguinte retorno:
```
Unable to find image &apos;ubuntu:latest&apos; locally
latest: Pulling from library/ubuntu
7b1a6ab2e44d: Pull complete 
Digest: sha256:626ffe58f6e7566e00254b638eb7e0f3b11d4da9675088f4781a50ae288f3322
Status: Downloaded newer image for ubuntu:latest
```

Observe que:

1. Caso a maquina local não tenha o registro da imagem (Unable to find image 'ubuntu:latest' locally) o Docker irá automaticamente baixar a imagem, realizando o pull (latest: Pulling from library/ubuntu).
2. Nada acontece após o download da imagem.

**Listando containers**

Container estáo ativos ==> `docker container ls`

Container estáo ativos e inativos ==> `docker container ls -a`

Visualizar o ultimo container criado ==> `docker container ls -l`

Significado de cada coluna:

    . **CONTAINER ID:** Identificador único;
    
    . **IMAGE:** O nome da imagem utilizada para a criação do container;
    
    . **COMMAND:** O comando executado/ em execução dentro do container;
    
    . **CREATED:** Quando foi criado o container;
    
    . **STATUS:** O status atual do mesmo, no nosso caso, encerrado;
    
    . **PORT:** A porta que estamos utilizando para nos comunicar com o container;
    
    . **NAMES:** O apelido do container, como não definimos nenhum, foi criado um aleatório.

**Rodando um comando adicional antes de terminar o container**

No Docker é possível executar comandos de terminal no container antes que ele seja encerrado (sobretudo se quisermos manter ele ativo por mais tempo que o normal).

Sintax:
```
docker container run <nome-da-imagem>:<tag> <comando> <argumentos-do-comando>
```

Imprimir na tela um "Hello World!" no terminal do Ubuntu, usando o comando echo do shell:
```
docker container run ubuntu echo 'Hello Tryber!'
```

**Rodando o container de forma interativa**

É só passar o parâmetro -ti ao comando run que dá acesso a esse terminal:
	
	. -t => Indica pro docker que estamos requisitando um terminal no container que consiga imprimir o retorno dos nossos comandos; 
	
	. -i => Estabelece uma interface de comunicação física com esse terminal, no caso, por meio do teclado.
	
```
docker container run -ti ubuntu
```

dentro da máquina virtual:

	. rode o comando `cat /etc/lsb-release` para obter informações da máquina virtual;
	
	. `exit` para sair da máquina virtual.
