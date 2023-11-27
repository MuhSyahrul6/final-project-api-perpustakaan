const express = require("express");
const exampleController = require("../controller/exampleController");
const routeKategori = require("./kategori");
const routePenulis = require("./penulis");
const routeBuku = require("./buku");
const route = express.Router()

route.get('/', exampleController.index)
route.use('/kategori-buku', routeKategori)
route.use('/penulis-buku', routePenulis)
route.use('/buku', routeBuku)

module.exports = route
