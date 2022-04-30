const { Category } = require('../sequelize/models');

const getAll = async (_req, res, _next) => {
  try {
      const categories = await Category.findAll();
      return res.status(200).json(categories);
  } catch (e) {
      console.log(e);
      return res.status(500).json({ message: 'Server Error' });
  }
};

const create = async (req, res, _next) => {
  const { name } = req.body;
  try {
    const newCategory = await Category.create({ name });    
    return res.status(201).json(newCategory);
  } catch (e) {
      console.log(e);
      return res.status(500).json({ message: 'Server Error' });
  }
};

module.exports = {
  getAll,
  create,
};
