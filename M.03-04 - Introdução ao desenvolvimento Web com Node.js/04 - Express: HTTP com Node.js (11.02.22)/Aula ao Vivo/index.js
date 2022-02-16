const express = require('express');
const fs = require('fs/promises');
// const rescue = require('express-rescue');

const bodyParser = require('body-parser');

const nameRouter = require('./nameRouter');
const auth = require('./auth');

const app = express();

app.use(bodyParser.json());

const logger = (req, _res, next) => {
  console.log(`Requisição ${req.method} - ${req.path}`);
  next();
};

const pipeLine = [auth, logger];

app.post('/login', (req, res) => {
  let token = Array.from({ length: 10 });
  token = token.map((e) => String.fromCharCode(64 + Math.random() * 23));
  console.log(token);
  res.status(200).json({ token: token.join('') });
});

app.get('/secure/hello', pipeLine, (_req, res) => {
  return res.status(200).send({ msg: 'Hello world!' });
});

app.get('/hello', logger, (_req, res, next) => {
  return res.status(200).send({ msg: 'Hello world!' });
});

app.use('/names', nameRouter);

app.use((error, req, res, next) => {
  res.status(500).send({ message: error.message });
});

app.listen(3000, () => {
  console.log('Turma 15 na porta 3000');
});
