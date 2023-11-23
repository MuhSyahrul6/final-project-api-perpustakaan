'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Peminjaman extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Peminjaman.init({
    id_anggota: DataTypes.INTEGER,
    id_buku: DataTypes.INTEGER,
    tanggal_peminjaman: DataTypes.DATE,
    tanggal_pengembalian: DataTypes.DATE,
    denda: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
  }, {
    sequelize,
    modelName: 'Peminjaman',
  });
  return Peminjaman;
};