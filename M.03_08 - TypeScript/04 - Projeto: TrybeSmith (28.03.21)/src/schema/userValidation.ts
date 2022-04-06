import joi from 'joi';

export default joi.object({
  username: joi.string().min(3).required().messages({
    'string.base': '422|Username must be a string',
    'string.min': '422|Username must be longer than 2 characters',
    'any.required': '400|Username is required',
  }),
  classe: joi.string().min(3).required().messages({
    'string.base': '422|Classe must be a string',
    'string.min': '422|Classe must be longer than 2 characters',
    'any.required': '400|Classe is required',
  }),
  password: joi.string().min(8).required().messages({
    'string.base': '422|Password must be a string',
    'string.min': '422|Password must be longer than 7 characters',
    'any.required': '400|Password is required',
  }),
  level: joi.number().integer().positive().strict()
    .required()
    .messages({
      'number.base': '422|Level must be a number',
      'number.positive': '422|Level must be greater than 0',
      'any.required': '400|Level is required',
    }),
});