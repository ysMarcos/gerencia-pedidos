'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {

  await queryInterface.bulkInsert('Pessoas', [
    {
      nome: "Kevin",
      cargo: "cliente",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      nome: "Marcos",
      cargo: "garcom",
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ], {});
  },

  async down (queryInterface, Sequelize) {

    await queryInterface.bulkDelete('Pessoas', null, {});
  }
};
