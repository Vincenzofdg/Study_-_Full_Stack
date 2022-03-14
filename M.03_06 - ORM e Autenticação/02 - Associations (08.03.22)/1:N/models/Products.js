const Products = (Sequelize, DataTypes) => {
    const Products = Sequelize.define('Products', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
        },
        name: DataTypes.STRING,
        description: DataTypes.STRING,
        amount: DataTypes.FLOAT,
    },
    {
        timestamps: false,
    });

    // hasOne ==> possui um
    // hasMany ==> possui varios
    // belongsTo ==> pertence a um
    // belongsMany ==> pertence a varios
    Products.associate = (models) => {
        Products.belongsTo(models.Store, {
            foreignKey: 'store_id',
            as: 'store'
        });
    }

    return Products;
}

module.exports = Products;