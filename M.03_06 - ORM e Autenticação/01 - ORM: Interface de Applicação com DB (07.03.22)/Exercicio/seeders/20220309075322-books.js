'use strict';

module.exports = {
  async up (queryInterface, _Sequelize) {
    queryInterface.bulkInsert('Books', [
      { title: 'Livro 01', author: 'Autor 01', pageQuantity: 100, createdAt: new Date(), updatedAt: new Date() },
      { title: 'Livro 02', author: 'Autor 02', pageQuantity: 200, createdAt: new Date(), updatedAt: new Date() },
      { title: 'Livro 03', author: 'Autor 03', pageQuantity: 300, createdAt: new Date(), updatedAt: new Date() },
      { title: 'Livro 04', author: 'Autor 04', pageQuantity: 400, createdAt: new Date(), updatedAt: new Date() },
      { title: 'Livro 05', author: 'Autor 05', pageQuantity: 500, createdAt: new Date(), updatedAt: new Date() },
    ])
  },

  async down (queryInterface, _Sequelize) {
    queryInterface.bulkDelete('Books', null, {});
  }
};
