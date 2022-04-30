const express = require('express');

const user = require('./controllers/userController');

const app = express();
const PORT = 3000;

app.use(express.json());

app.use('/user', user);

app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}!`));

//-------------------
module.exports = app;
//-------------------