require('dotenv').config();
const express = require('express');
const cep = require('./controllers/cepController');

const PORT = process.env.PORT || 3000

const app = express();

app.get('/ping', cep.pong);

app.get('/cep/:cep', cep.findIt);

app.listen(PORT, console.log(`Exercicio rodando na porta ${PORT}`));