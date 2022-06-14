'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Reservas extends Model {
   
    static associate(models) {
      Reservas.hasMany(models.Pessoas, {
        foreignKey: 'pessoa_id'
      }),
      Reservas.hasMany(models.Mesas, {
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