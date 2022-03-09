const express = require('express');
const bodyParser = require('body-parser');

const { books, book } = require('./routes');
const app = express();
const PORT = 3000;

app.use(bodyParser.json());

app.use('/books', books);
app.use('/book', book);

app.listen(PORT, () => console.log(`Aplicacao rodando na porta ${PORT}`));