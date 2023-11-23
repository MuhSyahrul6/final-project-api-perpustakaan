const express = require("express");
const exampleController = require("../controller/exampleController");
const routeKategori = require("./kategori");
const route = express.Router()

route.get('/', exampleController.index)
route.use('/kategori-buku', routeKategori)

module.exports = route