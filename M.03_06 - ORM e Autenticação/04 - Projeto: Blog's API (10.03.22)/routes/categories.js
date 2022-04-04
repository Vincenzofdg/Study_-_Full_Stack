const express = require('express');

const Router = express.Router();

const { category: { getAll, create } } = require('../controllers');
const { token, categoryName } = require('../middleware');

const validation = [categoryName, token];

Router
  .route('/')
    .get(token, getAll)
    .post(validation, create);

module.exports = Router;