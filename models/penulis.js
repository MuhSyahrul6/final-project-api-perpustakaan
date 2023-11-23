'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Penulis extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Penulis.init({
    nama_penulis: DataTypes.STRING,
    tanggal_lahir: DataTypes.STRING,
    negara_asal: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Penulis',
  });
  return Penulis;
};