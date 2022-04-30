const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize({
  host: 'localhost',
  username: 'root',
  password: '123456',
  database: 'lecture_24_1',
  dialect: 'mysql',
});

const Product = sequelize.define(
  'Product',
  {
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    price: DataTypes.DECIMAL,
  },
  {
    timestamps: false,
    tableName: 'products',
  },
);

// Product.create({name: "Detergente", description: "produto de limpeza", price: 14.50})
(async () => {
  const products = await Product.findAll();
  Product.upda
  console.log(products.map(p=> p.dataValues));
})();
