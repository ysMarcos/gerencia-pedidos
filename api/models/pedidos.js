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
      Pedidos.belongsTo(models.Pessoas, {
        foreignKey: 'funcionario_id'
      });
      Pedidos.belongsTo(models.Pessoas, {
        foreignKey: 'cliente_id'
      });
      Pedidos.belongsTo(models.Mesas, {
        foreignKey: 'mesa_id'
      });
      Pedidos.belongsTo(models.itens_pedido, {
        foreignKey: 'pedido_id'
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