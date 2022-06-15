'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.bulkInsert('Mesas', [{
    ocupado: false
    },
    {
      ocupado: false
    },
    {
      ocupado: false
    },
    {
      ocupado: false
    },
    {
      ocupado: false
    },
    {
      ocupado: false
    }
    ], {});
    
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Mesas', null, {});
  }
};
