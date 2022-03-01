require('dotenv').config();
const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res, next) => res.send('Olá Mundo!'))

app.listen(PORT, console.log(`Aula ao Vivo na Porta ${PORT}`))