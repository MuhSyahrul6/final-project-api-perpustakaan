const {Penulis} = require("../models")

const penulisController = {}

/*
    this is auto generate example, you can continue 

*/
penulisController.index = async(req,res) => {
    res.json({
        message : "Hello penulisController"
    })
}

//tambah data penulis
penulisController.create = async (req,res) => {
    const {nama_penulis,tanggal_lahir,negara_asal} = req.body
    if (typeof nama_penulis !== 'string' || nama_penulis.trim() == '') {
        return res.status(400).json({
            error: 'Nama Kategori harus berupa huruf dan wajib diisi !'
        })
    }
    try {
        const createPenulis = await Penulis.create({
            nama_penulis     : nama_penulis,
            tanggal_lahir   : tanggal_lahir,
            negara_asal     : negara_asal
        })
        return res.status(201).json({
            message: 'Data Berhasil Ditambahkan!'
        })
    } catch (error) {
        return res.status(500).json({
            message: error
        })
    }
}

//menampilkan semua penulis
penulisController.getAll = async (req,res) => {
    try {
        const getPenulis = await Penulis.findAll({
            order : [["createdAt","DESC"]]
        })
        return res.status(200).json({
            data: getPenulis
        })
    } catch (error) {
        return res.status(500).json({
            message: error
        })
    }
}

//menampilkan penulis by id
penulisController.getById = async (req,res) => {
    const {id} = req.params
    try {
        const getDetailPnl = await Penulis.findOne({
            where: {
                id: id
            }
        })
        return res.status(200).json({
            data: getDetailPnl
        })
    } catch (error) {
        return res.status(500).json({
            message: error
        })
    }
}

//update data penulis
penulisController.update = async (req,res) => {
    const {nama_penulis,tanggal_lahir,negara_asal} = req.body
    const id = req.params.id
    if (typeof nama_penulis !== 'string' || nama_penulis.trim() == '') {
        return res.status(400).json({
            error: 'Nama Kategori harus berupa huruf dan wajib diisi !'
        })
    }
    try {
        const getDetailPnl = await Penulis.findOne({
            where: {
                id: id
            }
        })
        if (getDetailPnl === null) {
            return res.status(404).json({
                message: 'Data Tidak Ditemukan!'
            })
        }

        const updatePenulis = await Penulis.update({
            nama_penulis     : nama_penulis,
            tanggal_lahir   : tanggal_lahir,
            negara_asal     : negara_asal
        },{
            where: {
                id: id
            }
        })
        return res.status(200).json({
            message: 'Data Berhasil Diubah!'
        })
    } catch (error) {
        return res.status(500).json({
            message: error
        })
    }
}

//hapus data penulis
penulisController.delete = async (req,res) => {
    const {id} = req.params
    try {
        const deletePnl = await Penulis.destroy({
            where: {
                id: id
            }
        })
        return res.status(200).json({
            message: 'Data Berhasil Dihapus!'
        })
    } catch (error) {
        return res.status(500).json({
            message: error
        })
    }
}

module.exports = penulisController