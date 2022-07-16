const model = require('../models/productsModel');

module.exports = async (id) => {
  const check = await model.findById(id);
  if (!check) {
    const error = new Error('Product not found');
    error.code = 'notFound';
    error.status = 404;
    throw error;
  }
};