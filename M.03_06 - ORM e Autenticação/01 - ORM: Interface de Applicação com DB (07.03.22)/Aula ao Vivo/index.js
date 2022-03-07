const express = require('express');
const bodyParser = require('body-parser');

const productController = require('./controllers/productController');

const app = express();

app.use(bodyParser.json());

app.use('/product', productController);

app.listen(3000, () => {
  console.log('App ouvindo a porta 3000!');
});
