const express = require("express");
const penulisController = require("../controller/penulisController");
const routePenulis = express.Router();

routePenulis.post('/create',penulisController.create)
routePenulis.get('/get',penulisController.getAll)
routePenulis.get('/get/:id',penulisController.getById)
routePenulis.put('/update/:id',penulisController.update)
routePenulis.delete('/delete/:id',penulisController.delete)

module.exports = routePenulis