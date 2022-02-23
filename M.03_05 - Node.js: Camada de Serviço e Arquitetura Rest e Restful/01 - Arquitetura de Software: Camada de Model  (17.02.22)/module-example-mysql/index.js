const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

const PORT = 3000;
const OK = 200;

const Author = require('./models/Author');

app.get('/authors', async (_req, res) => {
    const authors = await Author.getAll();

    res.status(OK).json(authors);
});

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}`));
