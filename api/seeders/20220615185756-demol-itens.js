'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Itens', [{
    nome: 'Coca Cola 600ml',
    valor: '4.50',
    categoria: 'Bebida'
  },
  {
    nome: 'Cerveja skoll lata',
    valor: '3.50',
    categoria: 'Bebida'
  },
  {
    nome: 'Agua sem gas',
    valor: '2.00',
    categoria: 'Bebida'
  },
  {
    nome: 'Agua com gas',
    valor: '2.50',
    categoria: 'Bebida'
  },
  {
    nome: 'X-Burguer',
    valor: '15.00',
    categoria: 'Lanche'
  },
  {
    nome: 'X-Bacon',
    valor: '20.00',
    categoria: 'Lanche'
  },
  {
    nome: 'X-Salada',
    valor: '18.00',
    categoria: 'Lanche'
  },
  {
    nome: 'Bombom Sonho de Valsa',
    valor: '2.50',
    categoria: 'Doce'
  },
  {
    nome: 'Plutonita',
    valor: '0.75',
    categoria: 'Doce'
  },
  ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Itens', null, {});
  }
};
