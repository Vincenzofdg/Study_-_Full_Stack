#### 1. Crie um novo container de modo interativo sem roda-lo nomeando-o como `01container` e utilizando a imagem `alpine` usando a versão `3.12`

  - **Observações técnicas:** 
    - O container **não deve ser inicializado**, somente criado;
    - O container deve estar preparado para acesso interativo;

  - **Dica:** 
    - Lembre-se aqui, que um parâmetro não é necessariamente aplicável a apenas um comando.

  - **O que será testado:** 
    - O container vai ter o `name`: `01container`;
    - O container vai estar uzando a imagem `alpine` na versão `3.12`.

#### 2. Inicie o container `01container`

  - **Observações técnicas:** 
    - O container que está parado, deve ser iniciado;
    - Se o container tiver sido iniciado de modo interativo, ele deve se manter ativo ao inicia-lo.

  - **O que será testado:** 
    - O avaliador verificará se o container está parado;
    - O avaliador rodará o comando;
    - O avaliador verificará se o container está rodando.

#### 3. Liste os containers filtrando pelo nome `01container`

  - **Dica:** 
    - Praticamente todo comando de listagem no Docker possui uma forma de filtragem.

  - **O que será testado:** 
    - Que o comando retornará uma lista com os dados corretos.

#### 4. Execute o comando `cat /etc/os-release` no container `01container` sem se acoplar a ele

  - **Observações técnicas:**
    - O container deve estar rodando, e você deve ser capaz de **executar um comando** nesse container.
  
  - **Dica:** 
    -  É possível fazer isso sem usar o comando `attach`.

  - **O que será testado:** 
    - Que o comando retornará os dados corretos da `distro` no container.

#### 5. Remova o container `01container` que está em andamento.

  - **O que será testado:** 
    - O avaliador rodará o comando 5;
    - O avaliador validará o processo com o comando 3.

#### 6. Faça o download da imagem `nginx` com a versão `1.21.3-alpine` sem criar ou rodar um container.

  - **O que será testado:** 
    - Que a imagem correta foi baixada;
    - Que nenhum container foi iniciado para isso.

#### 7. Rode um novo container com a imagem  `nginx` com a versão `1.21.3-alpine` em segundo plano nomeando-o como `02images` e mapeando sua porta padrão de acesso para porta `3000` do sistema hospedeiro.

  - **O que será testado:** 
    - Que o container foi iniciado corretamente;
    - Que é possível ter acesso ao container pelo endereço `localhost:3000`;
    - Que a página retorna o valor esperado.

#### 8. Pare o container `02images` que está em andamento.

  - **O que será testado:** 
    - Que não há nenhum container ativo após seu comando.

#### 9. Gere uma build a partir do Dockerfile do `back-end` do `todo-app` nomeando a imagem para `todobackend`.

  **Dica:** O comando `ADD` do Dockerfile, também pode ser utilizado para descompactar arquivos dentro do container.

   - **O que será testado:** 
    - Se existe um arquivo `Dockerfile` em `./docker/todo-app/back-end/`:
      - O Dockerfile deve rodar uma imagem `node` utilizando a versão `14` ou mais;
        - Recomenda-se o uso da variante `-alpine`, pois ela é otimizada para desempenho;
        - Lembre-se de consultar o README do `todo-app` para validar os requisitos da aplicação.  
      - Deve estar com a porta `3001` exposta;
      - Deve adicionar o arquivo `node_modules.tar.gz` a imagem;
      - Deve copiar todos os arquivos da pasta `back-end` para a imagem;
      - Ao iniciar a imagem deve rodar o comando `npm start`.
    - Se ao *buildar* o Dockerfile o nome da imagem gerada é igual a `todobackend`.

#### 10. Gere uma build a partir do Dockerfile do `front-end` do `todo-app` nomeando a imagem para `todofrontend`.

  **Dica:** O comando `ADD` do Dockerfile, também pode ser utilizado para descompactar arquivos dentro do container.
 
  - **O que será testado:** 
    - Se existe um arquivo `Dockerfile` em `./docker/todo-app/front-end/`:
      - O `Dockerfile` pode rodar uma imagem `node` utilizando a versão `14` ou mais;
        - Recomenda-se o uso da variante `-alpine`, pois ela é otimizada para desempenho;
        - Lembre-se de consultar o README do `todo-app` para validar os requisitos da aplicação. 
      - Deve estar com a porta `3000` exposta;
      - Deve adicionar o arquivo `node_modules.tar.gz` a imagem, de maneira que ele seja extraído dentro do `container`;
      - Deve copiar todos os arquivos da pasta `front-end` para a imagem;
      - Ao iniciar a imagem deve rodar o comando `npm start`;
    - Se ao *buildar* o `Dockerfile` o nome da imagem gerada é igual a `todofrontend`.

#### 11.Gere uma build a partir do Dockerfile dos `testes` do `todo-app` nomeando a imagem para `todotests`.

  **Dica:** O comando `ADD` do Dockerfile, também pode ser utilizado para descompactar arquivos dentro do container.
  
  **Observação**: A aplicação `todotests` só funciona corretamente se estiver dockerizada e dentro de uma rede docker configurada corretamente.

  - **O que será testado:** 
      - Se existe um arquivo `Dockerfile` em `./docker/todo-app/tests/`:
        - O Dockerfile deve rodar a imagem `mjgargani/puppeteer:trybe1.0` para que os testes funcionem;
        - Deve adicionar o arquivo `node_modules.tar.gz` a imagem;
        - Deve copiar todos os arquivos da pasta `tests` para a imagem;
        - Ao iniciar a imagem deve rodar o comando `npm test`;
      - Se ao *buildar* o Dockerfile o nome da imagem gerada é igual a `todotests`.

#### 12. Suba uma orquestração em segundo plano com o docker-compose de forma que `backend`, `frontend` e `tests` consigam se comunicar.

  **Dica:** use as imagens já **"buildadas"** que foram executadas nos requisitos 9,10 e 11 para a criação do compose.

  - **O que será testado:** 
      - Se existe um arquivo `docker-compose.yml` na pasta `./docker/`:
        - O docker-compose deve rodar na versão 3.

      - **tests**
        - O container de `todotests` deve ter como dependencia os containers `frontend` e `backend`;
        - O nome do _service_ deverá ser `todotests`;
        - Deve ter uma variável de ambiente `FRONT_HOST` que recebe como valor o nome do container do `frontend`
          - Lembrando que, dentro de uma rede docker, o host de um container é indentificado pelo seu nome.

      - **front-end**
        - O container de `todofrontend` deve rodar na porta `3000`;
        - O nome do _service_ deverá ser `todofront`;
        - Deve ter como dependencia o container `backend`;
        - Deve ter uma variável de ambiente `REACT_APP_API_HOST` que recebe como valor o nome do container do `backend`.
          - Lembrando que, dentro de uma rede docker, o host de um container é indentificado pelo seu nome.

      - **back-end**
        - O container de `todobackend` deve rodar na porta `3001`;
        - O nome do _service_ deverá ser `todoback`;

  - **Dica:**
    - Consulte a documentação em `./docker/todo-app/README.md`;
    - É possível adicionar e extrair arquivos `.tar.gz` no `Dockerfile` com apenas um comando.


