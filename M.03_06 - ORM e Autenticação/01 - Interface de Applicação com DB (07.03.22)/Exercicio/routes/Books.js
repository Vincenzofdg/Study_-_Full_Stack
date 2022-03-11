const express = require('express');

const Router = express.Router();
const { books: {
    getAll,
}} = require('../controllers');

Router
  .route('/')
    .get(getAll)

module.exports = Router;