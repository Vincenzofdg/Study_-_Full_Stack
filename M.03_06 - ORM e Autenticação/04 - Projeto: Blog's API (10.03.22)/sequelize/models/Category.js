module.exports = (sequelize, DataTypes) => {
  const category = sequelize.define('Category', {
    name: DataTypes.STRING, 
  },
  { 
    timestamps: false, tableName: 'Categories',
  });

  category.associate = (models) => {
    category.belongsToMany(models.BlogPost, {
      as: 'posts', foreignKey: 'categoryId', through: 'PostsCategories',
    });
  };

  return category;
};