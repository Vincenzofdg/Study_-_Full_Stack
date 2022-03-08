'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    queryInterface.bulkInsert('Stores', [
      { name: 'Magazine', description: 'Primeira Loja do seed.'},
      { name: 'Americanas', description: 'Segunda Loja do seed.'},
      { name: 'Amazon', description: 'Terceira Loja do seed.'},
    ])
  },

  async down (queryInterface, Sequelize) {
    queryInterface.bulkDelete('Stores', null, {});
  }
};
