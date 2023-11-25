const express = require("express");
const exampleController = require("../controller/exampleController");
const routePenulis = require("./penulis");
const route = express.Router()

route.get('/',exampleController.index)
route.use('/penulis-buku',routePenulis)

module.exports = route