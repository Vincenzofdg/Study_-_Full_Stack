const Joi = require('joi');

const schema = Joi.array().items(Joi.object({
  productId: Joi.number().required(),
  quantity: Joi.number().min(1).required(),
}));

module.exports = schema;