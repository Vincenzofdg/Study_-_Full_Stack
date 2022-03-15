'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.createTable('SelloffProducts', {
      productId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Products',
          key: 'id'
        },
        onDelete: 'CASCADE',
        primaryKey: true
      },
      selloffId:{
        type: Sequelize.INTEGER,
        references: {
          model: 'Selloffs',
          key: 'id'
        },
        onDelete: 'CASCADE',
        primaryKey: true
      }
    })
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.dropTable('SelloffProducts')
  }
};
