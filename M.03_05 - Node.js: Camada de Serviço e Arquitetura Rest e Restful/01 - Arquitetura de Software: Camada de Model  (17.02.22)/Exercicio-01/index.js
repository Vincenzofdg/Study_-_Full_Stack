const bodyParser = require('body-parser');
const express = require('express');

const app = express();
app.use(bodyParser.json())

// process.env.PORT => Qualquer porta que esteja na variável glocal PORT, caso não haja nada adotar 3000
const PORT = process.env.PORT || 3000;
const OK = 200;
const CREATED = 201;
const BAD = 400;
const NOT_FOUND = 404;

const Author = require('./models/Author');
const Books = require('./models/Books');

// Rota: '/authors'
app.get('/authors', async (_req, res) => {
    const authors = await Author.getAll();

    return res.status(OK).json(authors);
});

app.get('/authors/:id', async (req, res) => {
    const { id } = req.params;
    const author = await Author.getById(Number(id));
    
    if (!author) return res.status(404).json({ msg: 'Not Found' });
    return res.status(OK).json(author);
})

app.post('/authors', async (req, res) => {
    const { firstName, middleName, lastName } = req.body;

    if (!Author.isValid(firstName, lastName)) return res.status(400).json({ msg: 'Dados Invalidos' });
    await Author.create(firstName, middleName, lastName);

    return res.status(CREATED).json({ msg: 'Autor Criado com Sucesso' })
})

// Rota: '/books'
app.get('/books', async (_req, res) => {
    const allBooks = await Books.getAll();
    return res.status(OK).json(allBooks);
})

app.get('/books/:id', async (req, res) => {
    const { id } = req.params;
    const selectedBook = await Books.getById(Number(id));

    if (!selectedBook) return res.status(NOT_FOUND).json({ msg: 'Not Found' });
    return res.status(OK).json(selectedBook);
})

app.post('/books', async (req, res) => {
    const { title, author_id } = req.body;
    console.log(title, author_id)
    if (!await Books.isValid(title, author_id)) {
        return res.status(BAD).json({ msg: 'Dados invalidos' });
    }
    await Books.create(title, author_id);

    return res.status(CREATED).json({ msg: 'Livro criado com sucesso!' })
})


app.listen(PORT, () => console.log(`Rodando na Porta: ${PORT}`));
