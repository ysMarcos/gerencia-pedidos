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
      Pessoas.belongsTo(models.Pedidos,{
        foreignKey: 'pessoa_id'
      }),
      Pessoas.belongsTo(models.Reservas,{
        foreignKey: 'pessoa_id'
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