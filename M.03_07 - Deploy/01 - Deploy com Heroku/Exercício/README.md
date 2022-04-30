### Exercício 1:
Crie uma API simples no node utilizando express. No arquivo index.js, crie uma rota do tipo get com o endereço raiz '/' que entregue como resposta o texto "Está vivo!!!". Faça o deploy no Heroku utilizando o CLI.

<hr />
### Exercício 2:
Agora, modifique a API para responder a uma nova mensagem:

01. Crie uma nova variável de ambiente com um texto qualquer;
02. Modifique o código da sua API para que ela responda na rota get '/' com o mesmo texto contido na variável criada no passo anterior.

<hr />
### Exercício 3:
Simule o deploy em multi-ambientes (produção e homologação). Para isso:

01. Renomeie o remote do deploy dos exercícios anteriores para homolog;
  - git remote rename heroku homelog
02. Crie um novo remote a partir do mesmo projeto. Dessa vez, o remote deverá se chamar prod;
  - heroku create --remote prod 
03. Em seguida, configure as variáveis de ambiente para terem valores diferentes por ambiente.
  - heroku config:set MSG='Renomeando Variável' --app nome_do_app_em_prod

<hr />
### Exercício 4:
Faça deploy de uma aplicação React.

01. Crie uma aplicação React utilizando create-react-app;
  - 
02.  Crie um novo app utilizando o buildpack mars/create-react-app;
  - 
03.   Então, faça o deploy do app no Heroku.
