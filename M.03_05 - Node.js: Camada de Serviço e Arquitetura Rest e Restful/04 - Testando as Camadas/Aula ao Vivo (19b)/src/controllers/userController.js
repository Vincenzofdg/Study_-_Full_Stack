const userService = require('../services/userService');

const userController = {
  async listWithoutPassword(_req, res) {
    const items = await userService.listWithoutPassword();
    res.json(items);
  },

  async getWithoutPassword(req, res) {
    const { id } = await userService.validateParamsId(req.params);
    await userService.checkNotExists(id);
    const item = await userService.getWithoutPassword(id);
    res.json(item);
  },

  async add(req, res) {
    const data = await userService.validateBodyAdd(req.body);
    await userService.checkEmailExists(data.email);
    const id = await userService.add(data);
    const item = await userService.getWithoutPassword(id);
    res.status(201).json(item);
  },

  async edit(req, res) {
    const [{ id }, changes] = await Promise.all([
      userService.validateParamsId(req.params),
      userService.validateBodyEdit(req.body),
    ]);
    await userService.checkNotExists(id);
    if (changes.email) {
      await userService.checkEmailExists(changes.email);
    }
    await userService.edit(id, changes);
    const item = await userService.getWithoutPassword(id);
    res.json(item);
  },

  async remove(req, res) {
    const { id } = await userService.validateParamsId(req.params);
    await userService.checkNotExists(id);
    await userService.remove(id);
    res.sendStatus(204);
  },
};

module.exports = userController;