const express = require("express")
const kategoriController = require("../controller/kategoriController")
const routeKategori = express()

routeKategori.post('/', kategoriController.create)

module.exports = routeKategori