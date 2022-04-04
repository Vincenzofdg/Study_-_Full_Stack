const express = require('express');

const Router = express.Router();

const { post: { getAll, create, getById, edit } } = require('../controllers');
const { token, title, content, categoryIds, userToken } = require('../middleware');

const toCreate = [token, title, content, categoryIds];
const toEdit = [token, title, content, userToken];

Router
  .route('/')
    .get(token, getAll)
    .post(toCreate, create);

Router
  .route('/:id')
    .get(token, getById)
    .put(toEdit, edit);

module.exports = Router;