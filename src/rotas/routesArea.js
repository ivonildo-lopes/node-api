const express = require('express');
const routes = express.Router();
const areaController = require('../controllers/AreaController');

routes.get('/areas', areaController.findAll);
routes.get('/areas/:id', areaController.findById);
routes.post('/areas', areaController.create);
routes.put('/areas/:id', areaController.update);
routes.delete('/areas/:id', areaController.delete);

module.exports = routes;