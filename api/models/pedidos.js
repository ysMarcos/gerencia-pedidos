'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pedidos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Pedidos.hasMany(Pessoas, {
        foreignKey: 'pessoa_id'
      });
      Pedidos.hasMany(Mesas, {
        foreignKey: 'mesa_id'
      });
      Pedidos.hasMany(Itens, {
        foreignKey: 'itens_id'
      });
    }
  }
  Pedidos.init({
    dataPedido: DataTypes.DATEONLY,
    valorTotal: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'Pedidos',
  });
  return Pedidos;
};