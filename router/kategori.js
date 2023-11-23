const express = require("express")
const kategoriController = require("../controller/kategoriController")
const routeKategori = express()

routeKategori.post('/', kategoriController.create)
routeKategori.get('/get', kategoriController.getAll)
routeKategori.get('/get/:id', kategoriController.getById)

module.exports = routeKategori