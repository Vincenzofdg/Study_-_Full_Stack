const express = require('express');

const Router = express.Router();

const { newLogin } = require('../middleware');

Router
  .route('/')
    .post(newLogin);

module.exports = Router;