const express = require('express');
const bukuController = require('../controller/bukuController');
const routeBuku = express.Router();

routeBuku.post('/', bukuController.create);
routeBuku.get('/get', bukuController.getAll);
routeBuku.get('/get/:id', bukuController.getById);
routeBuku.put('/update/:id', bukuController.update);
routeBuku.delete('/delete/:id', bukuController.delete);

module.exports = routeBuku;
