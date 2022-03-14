module.exports = (sequelize, DataTypes) => {
    const Address = sequelize.define('Address', {
      id: { 
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
      city: DataTypes.STRING,
      street: DataTypes.STRING,
      number: DataTypes.INTEGER,
      // A declaração da Foreign Key é opcional no model
      employeeId: {
        type: DataTypes.INTEGER,
        foreignKey: true
      },
    },
    {
      timestamps: false,
      underscored: true,
      tableName: 'Addresses',
    });
  
    Address.associate = (models) => {
      Address.belongsTo(models.Employee, {
        foreignKey: 'employee_id',
        as: 'employees'
      });
    };
  
    return Address;
  };