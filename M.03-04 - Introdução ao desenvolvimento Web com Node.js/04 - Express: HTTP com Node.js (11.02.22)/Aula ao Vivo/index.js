const express = require('express');
const fs = require('fs/promises');
// const rescue = require('express-rescue');
// envelopa a funcao dentro de rescue(funcao)

const bodyParser = require('body-parser');
const nameRouter = require('./nameRouter');

const auth = require('./auth');

const app = express();

// caso a versao do express seja superior a 4.16 body-parse pode ser substituida pelo proprio express
// app.use.(express.json());
app.use(bodyParser.json());

const logger = (req, _res, next) => {
  console.log(`Requisição ${req.method} - ${req.path}`);
  next();
};

const pipeLine = [auth, logger];

app.post('/login', (req, res) => {
  let token = Array.from({ length: 10 });
  token = token.map((e) => String.fromCharCode(64 + Math.random() * 23));
  res.status(200).json({ token: token.join('') });
});

app.get('/secure/hello', pipeLine, (_req, res) => res.status(200).send({ msg: 'Hello world!' }));

app.get('/hello', logger, (_req, res, next) => res.status(200).send({ msg: 'Hello world!' }));

app.use('/names', nameRouter);

// Quando algum erro acontecer o App irá usar esta função
app.use((error, _req, res, _next) => res.status(500).send({ message: error.message }));

// Opcional: Indicador para saber que iniciou corretamente
app.listen(3000, () => console.log('Turma 15 na porta 3000'));
