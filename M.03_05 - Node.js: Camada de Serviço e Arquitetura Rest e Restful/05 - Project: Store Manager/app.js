const express = require('express');
require('dotenv').config();

const error = require('./middlewares/error');

const app = express();
app.use(express.json());

const { products, sales } = require('./routes');

app.get('/', (_request, response) => {
  response.send();
});

// Adicionado
app.use('/products', products);
app.use('/sales', sales);
app.use(error);
// -----------

module.exports = app;