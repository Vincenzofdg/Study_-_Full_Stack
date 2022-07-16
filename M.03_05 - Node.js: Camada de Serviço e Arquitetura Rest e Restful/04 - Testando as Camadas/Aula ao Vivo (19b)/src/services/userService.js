const Joi = require('joi');
const userModel = require('../models/userModel');
const NotFoundError = require('../errors/NotFoundError');
const ConflitError = require('../errors/ConflitError');
const { runSchema } = require('./validators');

const userService = {
  async listWithoutPassword() {
    const items = await userModel.list();
    const itemsWithoutPassword = items.map((item) => ({
      id: item.id,
      name: item.name,
      email: item.email,
    }));
    return itemsWithoutPassword;
  },

  async getWithoutPassword(id) {
    const item = await userModel.get(id);
    const itemWithoutPassword = {
      id: item.id,
      name: item.name,
      email: item.email,
    };
    return itemWithoutPassword;
  },

  validateParamsId: runSchema(Joi.object({
    id: Joi.number().required().positive().integer(),
  }).required()),

  validateBodyAdd: runSchema(Joi.object({
    name: Joi.string(),
    email: Joi.string().required().email(),
    password: Joi.string().required().min(6),
  }).required()),

  validateBodyEdit: runSchema(
    Joi.object({
      name: Joi.string(),
      email: Joi.string().email(),
      password: Joi.string().min(6),
    }).required().min(1),
  ),

  /*
  async validateParamsId(value) {
    const paramsIdSchema = Joi.object({
      id: Joi.number().required().positive().integer(),
    }).required()
    const result = await paramsIdSchema.validateAsync(value);
    return result;
  },

  async validateBodyAdd(value) {
    const result = await bodyAddSchema.validateAsync(value);
    return result;
  },

  async validateBodyEdit(value) {
    const result = await bodyEditSchema.validateAsync(value);
    return result;
  },
  */

  async checkNotExists(id) {
    const exists = await userModel.exists(id);
    if (!exists) throw new NotFoundError('"user" not found.');
  },

  async checkEmailExists(email) {
    const exists = await userModel.existsByEmail(email);
    if (exists) throw new ConflitError('"user.email" in use.');
  },

  async add(data) {
    const id = await userModel.add(data);
    return id;
  },

  async edit(id, changes) {
    await userModel.edit(id, changes);
  },

  async remove(id) {
    await userModel.remove(id);
  },
};

module.exports = userService;