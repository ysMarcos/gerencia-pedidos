'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('itens_pedidos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      itens_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {model: 'Itens', key: 'id'}
      },
      pedido_id: {
        type: Sequelize.INTEGER,
        type: Sequelize.INTEGER,
        references: {model: 'Pedidos', key: 'id'}
      },
      quantidade: {
        type: Sequelize.INTEGER
      },
      valor_itens: {
        type: Sequelize.FLOAT
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('itens_pedidos');
  }
};