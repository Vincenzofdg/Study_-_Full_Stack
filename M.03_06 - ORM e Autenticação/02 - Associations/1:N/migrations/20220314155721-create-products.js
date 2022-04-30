'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    const ProductsTable = queryInterface.createTable('Products', {
      id: { 
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      description: {
        allowNull:  false,
        type: Sequelize.STRING,
      },
      amount: {
        allowNull: false,
        type: Sequelize.FLOAT,
      },

      store_id: {
        type: Sequelize.INTERGER,
        allowNull: false,
        // Caso esse produto esteja relacionado a uma determinada loja e esta loja seja deletada.
        // Esse produto deve ser deletado em cascata juntamente com a loja
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
        // Qual a referencia do nosso store_id com outra tabela?
        references: {
          model: "Store",
          key: "id",
        }
      }

    });

    return ProductsTable;
  },

  async down (queryInterface, _Sequelize) {
    queryInterface.dropTable('Products');
  }
};