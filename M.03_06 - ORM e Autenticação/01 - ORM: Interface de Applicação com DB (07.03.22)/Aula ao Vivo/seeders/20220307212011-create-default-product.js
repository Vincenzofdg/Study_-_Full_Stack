'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert(
      'Products',
      [
        {
          name: 'iPhone',
          description: 'iPhone X novo',
          price: 15000,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    );
  },

  async down(queryInterface, _Sequelize) {
    return queryInterface.bulkDelete('Products', null, {});
  },
};
