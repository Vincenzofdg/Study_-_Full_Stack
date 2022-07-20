const errors = {
  ValidationError: 400,
  NotFoundError: 404,
};

/**
 * @param {Error} err 
 * @param {import('express').Request} req 
 * @param {import('express').Response} res 
 * @param {import('express').NextFunction} next 
 */
const errorHandlerMiddleware = ({ name, message }, _req, res, _next) => {
  const status = errors[name];
  if (!status) return res.sendStatus(500);
  res.status(status).json({ message });
};

module.exports = errorHandlerMiddleware;