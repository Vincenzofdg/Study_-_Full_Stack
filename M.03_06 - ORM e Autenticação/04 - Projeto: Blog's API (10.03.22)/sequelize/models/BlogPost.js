module.exports = (sequelize, DataTypes) => {
  const blogPost = sequelize.define('BlogPost', {
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    published: DataTypes.DATE,
    updated: DataTypes.DATE,
  },
  { 
    timestamps: true, tableName: 'BlogPosts', createdAt: 'published', updatedAt: 'updated',
  });

  blogPost.associate = (models) => {
    blogPost.belongsTo(models.User, { as: 'user', foreignKey: 'userId' });

    blogPost.belongsToMany(models.Category, {
      as: 'categories', through: 'PostsCategories', foreignKey: 'postId', 
    });
  };

  return blogPost;
};