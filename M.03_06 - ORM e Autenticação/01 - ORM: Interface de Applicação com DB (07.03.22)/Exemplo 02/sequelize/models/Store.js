const Store = (Sequelize, DataTypes) => {
    const Store = Sequelize.define('Store', {
        name: DataTypes.STRING,
        description: DataTypes.STRING,
    }, {
        // Como neste caso nao usaremos os campos createdAt e updatedAt iremos definilos como false:
        timestamps: false,
    })

    return Store;
}

module.exports = Store;