const { Kategori } = require("../models")
const kategoriController = {}

/*
    this is auto generate example, you can continue 

*/
kategoriController.index = async (req, res) => {
    res.json({
        message: "Hello kategoriController"
    })
}

kategoriController.create = async (req, res) => {
    const { nama_kategori } = req.body
    try {
        const createKategori = await Kategori.create({
            nama_kategori: nama_kategori
        })
        return res.status(201).json({
            message: 'Data Berhasil Ditambahkan !'
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            message: error
        })
    }
}

kategoriController.getAll = async (req, res) => {
    try {
        const getKategori = await Kategori.findAll({
            order: [["createdAt", "DESC"]]
        })
        return res.status(200).json({
            data: getKategori
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            message: error
        })
    }
}

kategoriController.getById = async (req, res) => {
    const { id } = req.params
    try {
        const getDetailKategori = await Kategori.findOne({
            where: {
                id: id
            }
        })
        return res.status(200).json({
            data: getDetailKategori
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            message: error
        })
    }
}

module.exports = kategoriController

