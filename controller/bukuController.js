const { Penulis, Kategori, Buku } = require('../models');

const bukuController = {};

/*
    this is auto generate example, you can continue 

*/
bukuController.index = async (req, res) => {
  res.json({
    message: 'Hello bukuController',
  });
};

bukuController.create = async (req, res) => {
  const { judul, id_penulis, penerbit, tahun_terbit, jumlah_salinan, id_kategori } = req.body;
  try {
    const getPenulis = await Penulis.findOne({
      where: {
        id: id_penulis,
      },
    });
    const getKategori = await Kategori.findOne({
      where: {
        id: id_kategori,
      },
    });
    if (getPenulis === null || getKategori === null) {
      throw Error('Data Tidak ditemukan !');
    } else {
      const createBuku = await Buku.create({
        judul,
        id_penulis,
        penerbit,
        tahun_terbit,
        jumlah_salinan,
        id_kategori,
      });
      return res.status(201).json({
        message: 'Data berhasil ditambahkan !',
      });
    }
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

bukuController.getAll = async (req, res) => {
  try {
    const getBuku = await Buku.findAll({
      include: [
        {
          model: Penulis,
          as: 'Penulis Buku',
        },
        {
          model: Kategori,
          as: 'Kategori Buku',
        },
      ],
    });
    return res.status(200).json({
      data: getBuku,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

bukuController.getById = async (req, res) => {
  const { id } = req.params;

  try {
    const getBuku = await Buku.findOne({
      include: [
        {
          model: Penulis,
          as: 'Penulis Buku',
        },
        {
          model: Kategori,
          as: 'Kategori Buku',
        },
      ],
      where: {
        id: id,
      },
    });
    return res.status(200).json({
      data: getBuku,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

bukuController.update = async (req, res) => {
  const { judul, id_penulis, penerbit, tahun_terbit, jumlah_salinan, id_kategori } = req.body;
  const { id } = req.params;

  try {
    const getBuku = await Buku.findOne({
      where: {
        id,
      },
    });
    const getPenulis = await Penulis.findOne({
      where: {
        id: id_penulis,
      },
    });
    const getKategori = await Kategori.findOne({
      where: {
        id: id_kategori,
      },
    });
    const createBuku = await Buku.update(
      {
        judul,
        id_penulis,
        penerbit,
        tahun_terbit,
        jumlah_salinan,
        id_kategori,
      },
      {
        where: {
          id,
        },
      }
    );
    return res.status(201).json({
      message: 'Data berhasil diubah !',
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

bukuController.delete = async (req, res) => {
  const { id } = req.params;

  try {
    const deleteBuku = await Buku.destroy({
      where: {
        id,
      },
    });
    return res.status(200).json({
      message: 'Data berhasil dihapus !',
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = bukuController;
