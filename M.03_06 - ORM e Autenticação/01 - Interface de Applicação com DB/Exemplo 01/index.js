const express = require('express');
const bodyParser = require("body-parser");

const user = require('./controllers/userController');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

app.use('/user', user);

app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}!`));
