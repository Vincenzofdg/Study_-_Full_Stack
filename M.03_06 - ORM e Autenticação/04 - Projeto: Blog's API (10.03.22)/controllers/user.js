const { User } = require('../sequelize/models');

const { token } = require('../utils');

const getAll = async (_req, res, _next) => {
    try {
        const users = await User.findAll({ attributes: { exclude: ['password'] } });
        return res.status(200).json(users);
    } catch (e) {
        console.log(e);
        return res.status(500).json({ message: 'Server Error' });
    }
};

const getById = async (req, res, _res) => {
  const { id } = req.params;
  try {
    const user = await User.findByPk(id, { attributes: { exclude: ['password'] } });
    
    if (user === null) return res.status(404).json({ message: 'User does not exist' });

    return res.status(200).json(user);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: 'Server Error' });
  }
};

const create = async (req, res, _next) => {
  const { displayName, email, password, image } = req.body;
  const infos = { displayName, email, password, image };
  try {
      const isReal = await User.findOne({ where: { email } });

      if (isReal) return res.status(409).json({ message: 'User already registered' });

      const newUser = await User.create(infos);
      const newToken = token.create(newUser);

      return res.status(201).json({ token: newToken });
  } catch (e) {
      console.log(e);
      return res.status(500).json({ message: 'Server Error' });
  }
};

module.exports = {
  getAll,
  getById,
  create,
};