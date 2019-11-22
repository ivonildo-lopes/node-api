const express = require('express');
const routes = express.Router();

const beneficioController = require('../controllers/BeneficioController');

routes.get('/beneficios', beneficioController.findAll);
routes.get('/beneficios/:id', beneficioController.findById);
routes.post('/beneficios', beneficioController.create);
routes.put('/beneficios/:id', beneficioController.update);
routes.delete('/beneficios/:id', beneficioController.delete);

module.exports = routes;