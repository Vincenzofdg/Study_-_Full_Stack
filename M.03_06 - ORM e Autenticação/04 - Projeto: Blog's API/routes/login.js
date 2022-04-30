const express = require('express');

const Router = express.Router();

const { login } = require('../controllers');
const { email, password } = require('../middleware');

const validation = [email, password];

Router
  .route('/')
    .post(validation, login);

module.exports = Router;