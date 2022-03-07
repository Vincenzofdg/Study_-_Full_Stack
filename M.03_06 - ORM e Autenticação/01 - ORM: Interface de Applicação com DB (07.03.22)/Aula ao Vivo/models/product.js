module.exports = (sequelize, DataTypes) => {
  const product = sequelize.define(
    'Product',
    {
      name: DataTypes.STRING,
      description: DataTypes.STRING,
      price: DataTypes.FLOAT
    },
  );
  return product;
};
