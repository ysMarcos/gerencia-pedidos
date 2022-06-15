'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Reservas extends Model {
   
    static associate(models) {
      Reservas.belongsTo(models.Pessoas, {
        foreignKey: 'cliente_id'
      }),
      Reservas.belongsTo(models.Mesas, {
        foreignKey: 'mesa_id'
      }); 
    }
  }
  Reservas.init({
    nome: DataTypes.STRING,
    valor: DataTypes.FLOAT,
    categoria: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Reservas',
  });
  return Reservas;
};