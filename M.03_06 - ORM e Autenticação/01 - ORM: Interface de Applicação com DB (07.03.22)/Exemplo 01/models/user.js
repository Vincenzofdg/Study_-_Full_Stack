const User = (sequelize, DataTypes) => {
  const User = sequelize.define("User", {
    fullName: DataTypes.STRING,
    email: DataTypes.STRING, // Coluna adicionada
	phone_num: DataTypes.STRING, //  Inserindo a tabela criada na migration
  });

  return User;
};

module.exports = User;
