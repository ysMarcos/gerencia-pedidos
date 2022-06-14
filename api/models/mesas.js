'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Mesas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Mesas.belongsToMany(models.Pedidos);
    }
  }
  Mesas.init({
    ocupado: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Mesas',
  });
  return Mesas;
};