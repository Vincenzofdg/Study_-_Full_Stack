require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const peopleController = require('./controllers/peopleController');
const app = express();
app.use(bodyParser.json());

const PORT = process.env.PORT || 3000;

app.get('/', (_req, res) => res.send('Olá Mundo!'));

app.use('/people', peopleController);

app.listen(PORT, console.log(`Aula ao Vivo na Porta ${PORT}`))