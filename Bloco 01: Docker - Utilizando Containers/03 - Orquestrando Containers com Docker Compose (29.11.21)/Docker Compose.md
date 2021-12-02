É uma ferramenta para definir e executar aplicativos Docker de vários containers.
Toda a configuração é feita por meio de um arquivo `yaml`. O nome padrão que utilizamos é `docker-compose.yaml`, porém, pode ser utilizado qualquer outro nome de nossa escolha. 

**Instalação:**
```
sudo curl -L "https://github.com/docker/compose/releases/download/1.25.5/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
```
```
sudo chmod +x /usr/local/bin/docker-compose
```
```
docker-compose --version
```

**exemplo docker-compose.yaml:**
```
version: "<VERSÃO-DO-COMPOSE>"
services:
  # Definição dos containers
  <MEU-CONTAINER-1>:
    image: <MINHA-IMAGEM:VERSÃO> # Exemplo carregando uma imagem já _buildada_
    # ... outras configurações
  <MEU-CONTAINER-2>:
    build: <CAMINHO-DO-DOCKERFILE> # Exemplo gerando uma build a partir de um `Dockerfile`
    # ... outras configurações
  <MEU-CONTAINER-N>:
    image: <MINHA-IMAGEM:VERSÃO>
    # ... outras configurações
```
<hr />
**Version** Todo arquivo docker-compose.yaml deve iniciar com a tag version. Evita que fique incompatível com versões mais recentes do compose (ex: `version: 3`).
<hr />

**Services:** Para o Compose, há o conceito de services, que são os "tipos" dos containers que iremos rodar. Por exemplo, se vamos executar uma API, dizemos que ela é um service. Isso porque com o Compose, podemos escalar nossos apps em vários containers.
Podemos, por exemplo, escalar nossa API em 4 containers diferentes, de forma que teremos um service que é a nossa API, porém com 4 containers em execução. 
```
version: '3'
services:
  frontend:

  backend:

  database:
```
Executando instrução em cada serviço:
```
version: '3'
services:
  frontend:
    image: mjgargani/compose-example:frontend-trybe1.0
  backend:
    image: mjgargani/compose-example:backend-trybe1.0
  database:
    image: mjgargani/compose-example:database-trybe1.0
```
<hr />



**Restart:**

**Ports:**

**Environment:**

**Depends On:**
