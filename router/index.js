const express = require("express");
const exampleController = require("../controller/exampleController");
const routeAnggota = require("./anggota");
const route = express.Router()

route.get('/',exampleController.index)
route.use('/anggota', routeAnggota)

module.exports = route
