const express = require('express');
const bodyParser = require('body-parser');

const { talker, login } = require('./routes');

const app = express();
app.use(bodyParser.json());

const PORT = 3000;

app.get('/', (_request, response) => response.status(200).send());

// Rotas
app.use('/talker', talker);
app.use('/login', login);

app.listen(PORT, () => console.log(`Projeto rodando na porta ${PORT}`));