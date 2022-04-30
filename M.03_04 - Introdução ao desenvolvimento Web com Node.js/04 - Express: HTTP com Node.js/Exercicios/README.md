### Crie uma aplicação node para executar os exercicios

1. Crie uma rota GET /ping;
- Sua rota deve retornar o seguinte JSON:
    ```
    { 
        msg: 'pong'
    }
    ```
2. Crie uma rota POST /hello;
- Sua rota deve receber, no body da requisição, o seguinte JSON:
    ```
    { 
        "name": "<nome do usuário>"
    }
    ```
- Sua rota deve retornar o seguinte JSON:
    ```
    { 
        "msg": "Hello, <nome do usuário>!"
    }
    ```

3. Crie uma rota POST /greetings;
- Sua rota deve receber o seguinte JSON:
    ```
    { 
        "name": "<nome do usuário>",
        "age": <idade do usuário>
    }
    ```
- Caso a pessoa usuária tenha idade superior a 17 anos, devolva o JSON com o status code 200 - OK:
    ```
    { 
        "msg": "Hello, <nome do usuário>!"
    }
    ```
- Caso a pessoa usuária tenha 17 anos ou menos, devolva o JSON com o status code 401 - Unauthorized:
    ```
    { 
        "msg": "Unauthorized"
    }
    ```
4. Crie uma rota PUT /users/:name/:age;
- Sua rota deve retornar o seguinte JSON: 
    ```
    { 
        "msg": "Seu nome é <name> e você tem <age> anos de idade"
    }
    ```
5. Crie uma API de dados das personagens de Simpsons;
- Crie um arquivo chamado simpsons.json e popule com os seguintes dados:
    ```
    [
        { "id": "1", "name": "Homer Simpson" },
        { "id": "2", "name": "Marge Simpson" },
        { "id": "3", "name": "Bart Simpson" },
        { "id": "4", "name": "Lisa Simpson" },
        { "id": "5", "name": "Maggie Simpson" },
        { "id": "6", "name": "Ned Flanders" },
        { "id": "7", "name": "Montgomery Burns" },
        { "id": "8", "name": "Nelson Muntz" },
        { "id": "9", "name": "Krusty" },
        { "id": "10","name": "Milhouse Van Houten" }
    ]
    ```
- Utilize o modulo fs do Node para ler/escrever arquivos;
- Caso algum erro ocorra, deve ser retornado um código 500 (Internal Server Error);
- Caso dê tudo certo, a resposta deve voltar com status 200 OK;
- Para testar sua API durante o desenvolvimento, utilize ferramentas que permitemfazer requisições HTTP (Postman, Insomnia ou httpie).
6. Crie um endpoint GET /simpsons;
- O endpoint deve retornar um array com todos os simpsons.
7. Crie um endpoint GET /simpsons/:id;
- O endpoint deve retornar o personagem com o id informado na URL da requisição.
- Caso não exista nenhum personagem com o id especificado, retorne o JSON com o status 404 - Not Found:
    ```
    { 
        message: 'simpson not found'
    }
    ```
8. Crie um endpoint POST /simpsons;
- Este endpoint deve cadastrar novos personagens;
- O corpo da requisição deve receber o seguinte JSON: 
    ```
    { 
        id: <id-da-personagem>,
        name: '<nome-da-personagem>'
    }
    ```
- Caso já exista uma personagem com o id informado, devolva o JSON com o status 409 - Conflict
    ```
    { 
        message: 'id already exists'
    } 
    ```
- Caso a personagem ainda não exista, adicione-a ao arquivo simpsons.json e devolva um body vazio com o status 204 - No Content. Para encerrar a request sem enviar nenhum dado, você pode utilizar **res.status(204).end()**.

9. Adicione autenticação a todos os endpoints;
- O token deve ser enviado através do header Authorization .
- O token deve ter exatamente 16 caracteres.
- Caso o token seja inválido ou inexistente, a resposta deve possuir o status 401 - Unauthorized e o JSON:
    ```
    { 
        message: 'Token inválido!'
    }
    ```
10. Crie uma rota POST /signup.

- A rota deve receber, no body da requisição, os campos email , password , firstName e phone;
- Caso algum dos campos não esteja preenchido, a response deve possuir status 401 - Unauthorized e o JSON:
    ```
    { 
        message: 'missing fields'
    }
    ```
- Caso todos os parâmetros estejam presentes, a rota deve gerar um token aleatório válido, e a resposta deve conter o status 200 - OK, e o JSON:
    ```
    {
        token: '<token-aleatorio>'
    }
    ```