'use strict';

const bcrypt = require('bcrypt')

module.exports = {
  /**
   * @param {import('sequelize').QueryInterface} queryInterface 
   * @param {import('sequelize').Sequelize} Sequelize 
   */
  async up(queryInterface, Sequelize) {
    const password_hash = await bcrypt.hash('123456', 10)
    await queryInterface.bulkInsert('users', [{
      email: 'leandro.gomes@betrybe.com',
      password_hash, // Utilizando o pacote bcrypt
      name: 'Leandro',
      phone: '(31)1 1111 1111',
      created_at: new Date(),
      updated_at: new Date(),
    }], {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
