const express = require("express")
const dendaController = require("../controller/dendaController")
const routeDenda = express.Router()

routeDenda.post('/', dendaController.create)
routeDenda.get('/get', dendaController.getAll)
routeDenda.get('/get/:id', dendaController.getById)
routeDenda.put('/update/:id', dendaController.update)
routeDenda.delete('/delete/:id', dendaController.delete)

module.exports = routeDenda