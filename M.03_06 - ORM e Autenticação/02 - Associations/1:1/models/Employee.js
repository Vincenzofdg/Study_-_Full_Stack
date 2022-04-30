module.exports = (Sequelize, DataTypes) => {
    const Employee = Sequelize.define('Employee', {
      id: { 
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      age: DataTypes.INTEGER,
    },
    {
      timestamps: false, // remove a obrigatoriedade de utilizar os campos `createdAt` e `updatedAt`
      tableName: 'Employees',
      underscored: true,
    });
  
    // Dizendo que tabela Employees possui um Address, referenciado pela foreign key employee_id,
    // e que o model Employee deve chamar de addresses (note a letra minúscula), como definido na propriedade as.
    // hasOne
    // belongsTo
    // hasMany
    // belongsToMany
    Employee.associate = (models) => {
      Employee.hasOne(models.Address, {
          foreignKey: 'employee_id',
          as: 'addresses'
        }
      );
    };
  
    return Employee;
  };