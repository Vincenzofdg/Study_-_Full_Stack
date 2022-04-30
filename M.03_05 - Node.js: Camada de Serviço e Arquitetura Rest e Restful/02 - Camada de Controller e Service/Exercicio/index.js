require('dotenv').config();
const express = require('express');
const cep = require('./controllers/cepController');

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000


app.get('/ping', cep.pong);

app.get('/cep/:cep', cep.findIt);

app.post('/cep', cep.add)

app.listen(PORT, console.log(`Exercicio rodando na porta ${PORT}`));