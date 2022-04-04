require('dotenv').config();
const express = require('express');

const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const { user, login, categories, post } = require('./routes'); // Importando minhas rotas:

const PORT = 3000;

app.use('/user', user);
app.use('/login', login);
app.use('/categories', categories);
app.use('/post', post);

app.listen(PORT, () => console.log(`ouvindo porta ${PORT}!`));

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => response.send());
// ------------------------------------------------------