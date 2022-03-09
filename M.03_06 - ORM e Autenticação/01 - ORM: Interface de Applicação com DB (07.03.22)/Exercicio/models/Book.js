module.exports = (Sequelize, DataTypes) => {
    const book = Sequelize.define('Book', {
        title: DataTypes.STRING,
        author: DataTypes.STRING,
        pageQuantity: DataTypes.INTEGER,
    });
    return book;
};
