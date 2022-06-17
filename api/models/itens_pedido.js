'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class itens_pedido extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      itens_pedido.belongsTo(models.Itens, {
        foreignKey: 'itens_id'
      });
      itens_pedido.belongsTo(models.Pedidos, {
        foreignKey: 'pedidos_id'
      });
    }
  }
  itens_pedido.init({
    quantidade: DataTypes.INTEGER,
    valor_itens: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'itens_pedido',
  });
  return itens_pedido;
};