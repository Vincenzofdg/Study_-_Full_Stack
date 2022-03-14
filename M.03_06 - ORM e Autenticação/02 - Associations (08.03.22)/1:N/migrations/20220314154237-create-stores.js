'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    const StoresTable = queryInterface.createTable('Stores', {
      id: { 
        allowNull: false,       // Não pode ser nulo
        autoIncrement: true,    // Auto incrementavel
        primaryKey: true,       // Chave Primária
        type: Sequelize.INTEGER,
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      description: {
        allowNull:  false,
        type: Sequelize.STRING,
      }
    });

    // Para retornar a criação da tabela
    return StoresTable;
  },

  async down (queryInterface, Sequelize) {
    queryInterface.dropTable('Stores');
  }
};