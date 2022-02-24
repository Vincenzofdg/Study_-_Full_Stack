const express = require('express');
const {
    getAll,
    getById
} = require('./models/Books');

const PORT = 3000;
const OK = 200;
const app = express();


app.get('/books', async (_req, res) => {
    const allBooks = await getAll();
    return res.status(OK).json(allBooks);
})

app.get('/books/:id', async (req, res) => {
    const { id } = req.params;
    const selectedBook = await getById(Number(id));

    return res.status(OK).json(selectedBook);
})

app.listen(PORT, () => console.log(`Rodando na Porta: ${PORT}`));
