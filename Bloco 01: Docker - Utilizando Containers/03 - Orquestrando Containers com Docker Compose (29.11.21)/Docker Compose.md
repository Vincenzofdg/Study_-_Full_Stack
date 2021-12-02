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

**Version:** Todo arquivo docker-compose.yaml deve iniciar com a tag version. Evita que fique incompatível com versões mais recentes do compose (ex: `version: 3`).

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

**Restart:** No Docker, existem as políticas de reinicialização, que servem para gerenciar se seus containers reiniciarão automaticamente quando o docker for reiniciado ou quando ocorrer algum erro, por exemplo.

`no`: Este é o valor padrão assumido pelo Docker e define que o container não irá restartar automaticamente;

`on-failure`: Define que o container será reiniciado caso ocorra alguma falha (apontado pelo exit code diferente de zero);

`always`: Especifica que sempre que o serviço parar, seja por um falha ou porque ele finalizou sua execução, ele irá ser reiniciado;

`unless-stopped`: Define que o container sempre seja reiniciado, a menos que o Docker em si seja parado (manualmente ou não). No caso de ser interrompido, ele não reinicia nem depois que o daemon do Docker seja reiniciado.
```
version: '3'
services:
  frontend:
    image: mjgargani/compose-example:frontend-trybe1.0
    restart: always
  backend:
    image: mjgargani/compose-example:backend-trybe1.0
    restart: always
  database:
    image: mjgargani/compose-example:database-trybe1.0
    restart: always
```
<hr />

**Ports:** Se comporta da mesma maneira que o `-p` do docker container run.
```
version: '3'
services:
  frontend:
    image: mjgargani/compose-example:frontend-1.0
    restart: always
    ports:
      - 3000:3000
  backend:
    image: mjgargani/compose-example:backend-1.0
    restart: always
    ports:
      - 3001:3001
  database:
    image: mjgargani/compose-example:database-1.0
    restart: always
```

<hr />

**Environment:** Outro parâmetro importante é o environment. Com ele, conseguimos configurar as variáveis de ambiente de nossos containers.
Imagine que em nosso exemplo, precisamos passar para nosso back-end uma parte da URL onde o banco de dados irá rodar, em uma variável chamada DB_HOST. Nosso exemplo ficaria assim
```
version: '3'
services:
  frontend:
    image: mjgargani/compose-example:frontend-trybe1.0
    restart: always
    ports:
      - 3000:3000
  backend:
    image: mjgargani/compose-example:backend-trybe1.0
    restart: always
    ports:
      - 3001:3001
    environment:
      - DB_HOST=database
  database:
    image: mjgargani/compose-example:database-trybe1.0
    restart: always
```

<hr />

**Depends On:** Conseguimos estabelecer dependências entre os serviços.
```
version: "3.8"
services:
  frontend:
    image: mjgargani/compose-example:frontend-trybe1.0
    restart: always
    ports:
      - 3000:3000
    depends_on:
      - "backend"
  backend:
    image: mjgargani/compose-example:backend-trybe1.0
    restart: always
    ports:
      - 3001:3001
    environment:
      - DB_HOST=database
    depends_on:
      - "database"
  database:
    image: mjgargani/compose-example:database-trybe1.0
    restart: always
```
