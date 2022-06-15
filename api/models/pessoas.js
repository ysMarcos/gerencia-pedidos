'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pessoas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Pessoas.hasMany(models.Pedidos,{
        foreignKey: 'cliente_id'
      }),
      Pessoas.hasMany(models.Pedidos,{
        foreignKey: 'funcionario_id'
      }),
      Pessoas.hasMany(models.Reservas,{
        foreignKey: 'cliente_id'
      })
    }
  }
  Pessoas.init({
    nome: DataTypes.STRING,
    cargo: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Pessoas',
  });
  return Pessoas;
};