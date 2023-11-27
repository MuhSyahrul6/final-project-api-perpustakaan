'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Buku extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Buku.init({
    judul: DataTypes.STRING,
    id_penulis: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Penulis',
        key: 'id'
      }
    },
    penerbit: DataTypes.STRING,
    tahun_terbit: DataTypes.INTEGER,
    jumlah_salinan: DataTypes.INTEGER,
    id_kategori: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Kategoris',
        key: 'id'
      }
    },
  }, {
    sequelize,
    modelName: 'Buku',
  });
  return Buku;
};