const express = require('express');

const Router = express.Router();

const { user: { getAll, getById, create } } = require('../controllers');
const { name, email, password, token } = require('../middleware');

const validation = [name, email, password];

Router
  .route('/')
    .get(token, getAll)
    .post(validation, create);

Router
  .route('/:id')
    .get(token, getById);

module.exports = Router;