const express = require('express');
const bodyParser = require('body-parser');

const productController = require('./controllers/productController');
const userController = require('./controllers/usersController');
const sellOffsController = require('./controllers/selloffsController');

const app = express();

app.use(bodyParser.json());

app.use('/products', productController);
app.use('/users', userController);
app.use('/selloffs', sellOffsController);

app.listen(3000, () => {
  console.log('App ouvindo a porta 3000!');
});
