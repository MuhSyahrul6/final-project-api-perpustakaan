const express = require("express");
const exampleController = require("../controller/exampleController");
const routeKategori = require("./kategori");
const routePenulis = require("./penulis");
const route = express.Router()

route.get('/', exampleController.index)
route.use('/kategori-buku', routeKategori)
route.use('/penulis-buku', routePenulis)

module.exports = route