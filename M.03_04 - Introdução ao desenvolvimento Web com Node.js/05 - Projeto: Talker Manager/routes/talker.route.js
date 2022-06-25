const express = require('express');

const Router = express.Router();

const { 
  nameVerify: name,
  ageVerify: age,
  talkVerify: talk,
  watchedAtVerify: watchedAt,
  rateVerify: rate,
  tokenVerify: token,
  searchTermVerify: searchTerm,
} = require('../validation');

const { getAll, getById, add, remove, search, edit } = require('../middleware');

const verify = [name, age, talk, watchedAt, rate];

Router
  .route('/search')
    .get(token, searchTerm, search);

Router
  .route('/')
    .get(getAll)
    .post(token, verify, add);

Router
  .route('/:id')
    .get(getById)
    .put(token, verify, edit)
    .delete(token, remove);

module.exports = Router;