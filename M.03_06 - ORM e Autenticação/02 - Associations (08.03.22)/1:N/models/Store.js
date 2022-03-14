const Store = (Sequelize, DataTypes) => {
    const Store = Sequelize.define('Store', {
        name: DataTypes.STRING,
        description: DataTypes.STRING,
    }, {
        // Como neste caso nao usaremos os campos createdAt e updatedAt iremos definilos como false:
        timestamps: false,
    })

    Store.associate = (models) => {
        Store.hasMany(models.Product, {
            foreignKey: 'store_id',
            as: 'products'
        });
    }

    return Store;
}

module.exports = Store;