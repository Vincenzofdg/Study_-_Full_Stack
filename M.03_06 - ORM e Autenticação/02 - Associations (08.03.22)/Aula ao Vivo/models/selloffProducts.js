const SelloffProduct = (sequelize, DataTypes) => {
  const SelloffProduct = sequelize.define(
    'SelloffProduct',
    {},
    { timestamps: false },
  );

  SelloffProduct.associate = (models)=> {
    models.Product.belongsToMany(models.Selloff, {
      as: 'selloffs',
      through: SelloffProduct,
      foreignKey: 'productId',
      otherKey: 'selloffId'
    })
    models.Selloff.belongsToMany(models.Product, {
      as: 'products',
      through: SelloffProduct,
      foreignKey: 'selloffId',
      otherKey: 'productId'
    })

  }

  return SelloffProduct
};

module.exports = SelloffProduct