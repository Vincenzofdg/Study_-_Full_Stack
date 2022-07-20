## Antes de começar

01. Inciando o Exercicio:
```
npm init -y
npm install express body-parser
npm install sequelize mysql2
```

02. Crie o arquivo index.js;

03. Instale o sequelize-cli:
```
npm install --save-dev sequelize-cli nodemon
````

04. Inicie o sequelize:
```
npx sequelize-cli init
```

05.  Criar a migration para books usando:
```
npx sequelize migration:generate --name create-books
```

06. Dentro do up , crie uma tabela Books com os atributos: id (nossa chave primária), title (string e não pode ser nulo), author (string e não pode ser nulo), pageQuantity (integer e pode ser nulo), createdAt (date e não pode ser nulo) e updatedAt (date e não pode ser nulo);

07. Dentro do down, remova a tabela Books;

08. Crie seu banco de dados e coloque todas as configurações dentro do arquivo config/config.js;
    - CREATE DATABASE exercicioDB;
09. Crie seu banco de dados e coloque todas as configurações dentro do arquivo config/config.js;

10. Rode as migrations:
```
npx sequelize db:migrate
```

11. Crie um arquivo Book.js dentro da pasta models e crie seu modelo lá dentro, respeitando os atributos que definimos nas migrations.

## Crie os controllers do seu projeto com as seguintes rotas:

01. GET /books - lista todos os livros;
02. GET /book/:id - pega o livro com o id especificado;
03. POST /book - cria um novo livro;
04. POST /book/:id - sobrescreve o livro com ID selecionado;
05. DELETE /book/:id - deleta um livro;

- Em caso de erro, os endpoints devem retornar status code 500 com a mensagem: 'Algo deu errado'.

06. Crie um seeder usando o Sequelize-CLI, populando a sua base com pelo menos um livro;
07. Crie um endpoint para buscar o livro por author (pode adaptar algum que já exista);
08. Crie uma ordenação no endpoint GET /books para ordenar por ordem alfabética e por data de criação;
09. Adicione, também, uma data de update nos atributos do livro que se altera sempre que o livro for atualizado;
10. Escreva um teste unitário para o model criado;
11. Escreva testes para o controller do seu projeto isolando a camada de models.
