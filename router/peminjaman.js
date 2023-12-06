const express = require("express")
const peminjamanController = require("../controller/peminjamanController")
const routePeminjaman = express.Router()

routePeminjaman.post('/', peminjamanController.create)
routePeminjaman.get('/get', peminjamanController.getAll)
routePeminjaman.get('/get/:id', peminjamanController.getById)
routePeminjaman.put('/update/:id', peminjamanController.update)
routePeminjaman.post('/pengembalian/:id', peminjamanController.pengembalianBuku);
routePeminjaman.delete('/delete/:id', peminjamanController.delete)

module.exports = routePeminjaman
