const express = require('express');
const routes = express.Router();

const cargoController = require('../controllers/CargoController');

routes.get('/cargos', cargoController.findAll);
routes.get('/cargos/:id', cargoController.findById);
routes.post('/cargos', cargoController.create);
routes.put('/cargos/:id', cargoController.update);
routes.delete('/cargos/:id', cargoController.delete);


module.exports = routes;