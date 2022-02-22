const express = require('express');
const bodyParser = require('body-parser');

// Importações:
const getAllTalkers = require('./middleware/getAllTalkers');
const getTalkerById = require('./middleware/getTalkerById');
const login = require('./middleware/login');
const checkToken = require('./middleware/checkToken');
const nameCheck = require('./middleware/checkName');
const ageCheck = require('./middleware/checkAge');
const { talkerCheck } = require('./middleware/checkTalker');
const { rateCheck } = require('./middleware/checkTalker');
const { watchedAtCheck } = require('./middleware/checkTalker');
const createTalker = require('./middleware/createTalker');
const editTalker = require('./middleware/editTalker');
const deleteTalker = require('./middleware/deleteTalker');
const searchTalker = require('./middleware/searchTalker');

const secureSet = [
  checkToken,
  nameCheck,
  ageCheck,
  talkerCheck,
  rateCheck,
  watchedAtCheck,
];

//---------------------------------------------------
const app = express();
app.use(bodyParser.json());

const HTTP_OK_STATUS = 200;
const PORT = '3000';

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.status(HTTP_OK_STATUS).send();
});

app.listen(PORT, () => {
  console.log('Online');
});
//----------------------------------------------------

// Requisito 07:
app.get('/talker/search', checkToken, searchTalker);

// Requisito 01:
app.get('/talker', getAllTalkers);

// Requisito 02:
app.get('/talker/:id', getTalkerById);

// Requisito 03:
app.post('/login', login);

// Requisito 04:
app.post('/talker', secureSet, createTalker);

// Requisito 05:
app.put('/talker/:id', secureSet, editTalker);

// Requisito 06:
app.delete('/talker/:id', checkToken, deleteTalker);

// Quando algum erro acontecer o App irá usar esta função:
app.use((error, _req, res, _next) => res.status(500).send({ message: error.message }));
