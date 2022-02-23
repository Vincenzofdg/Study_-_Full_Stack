const express = require('express');
const app = express();

// process.env.PORT => Qualquer porta que esteja na variável glocal PORT, caso não haja nada adotar 3000
const PORT = process.env.PORT || 3000;
const OK = 200;

const Author = require('./models/Author');

app.get('/authors', async (_req, res) => {
    const authors = await Author.getAll();

    res.status(OK).json(authors);
});

app.listen(PORT, () => console.log(`Exemplo de Modulo na porta ${PORT}`));
