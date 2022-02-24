const express = require('express');
const app = express();

// process.env.PORT => Qualquer porta que esteja na variável glocal PORT, caso não haja nada adotar 3000
const PORT = process.env.PORT || 3000;
const OK = 200;

const Author = require('./models/Author');

app.get('/authors', async (_req, res) => {
    const authors = await Author.getAll();

    return res.status(OK).json(authors);
});

app.get('/authors/:id', async (req, res) => {
    const { id } = req.params;
    const author = await Author.findById(Number(id));
    
    if (!author) return res.status(404).json({ msg: 'Not Found' });
    return res.status(200).json(author);
})

app.listen(PORT, () => console.log(`Exemplo de Modulo na porta ${PORT}`));
