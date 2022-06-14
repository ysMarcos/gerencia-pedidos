'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Itens extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Itens.init({
    nome: DataTypes.STRING,
    valor: DataTypes.FLOAT,
    categoria: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Itens',
  });
  return Itens;
};