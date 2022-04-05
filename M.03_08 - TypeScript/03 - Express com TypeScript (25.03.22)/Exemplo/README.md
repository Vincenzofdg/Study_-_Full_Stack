### Primeiramente Rodar o Script `Start_GRUD_Application_With_TypeScript.sh`

<hr />

1. Criar uma interface para representar um livro no sistema;
- **id:** A chave primária da tabela. Como é um campo que não será obrigatório, vamos adicioná-la como um atributo opcional;
- **title:** O título do livro;
- **price:** O preço de venda do livro;
- **author:** O nome do autor do livro;
- **isbn:** O registro ISBN do livro.
2. Criar a estrutura do arquivo de rotas para livros;
3. Importar BooksRoutes no `index.ts`
- `import BooksRoutes from './routes/books.routes';`
4. Colocar Antes do middleware de erro:
- app.use(BooksRoutes);
5. Adicionar o banco de dados `db.sql`
6. Criar a connection `./models/connection.ts`:
- instalar o `mysql2` `dotenv`.
7. Crie `./models/book.model.ts`