const usersService = require('../services/usersService');

const usersController = {
  /** @type {import('express').RequestHandler} */
  async list(_req, res) {
    const users = await usersService.list();
    res.json(users);
  },

  /** @type {import('express').RequestHandler} */
  async add(req, res) {
    const data = await usersService.validateBodyAdd(req.body);
    const user = await usersService.add(data);
    res.status(201).json(user);
  },
};

module.exports = usersController;