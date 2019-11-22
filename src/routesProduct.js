const express = require('express');
const routes = express.Router();
const productController = require('./controllers/ProductController');

routes.get('/products', productController.findAll);
routes.get('/products/:id', productController.findById);
routes.post('/products', productController.create);
routes.put('/products/:id', productController.update);
routes.delete('/products/:id', productController.delete);

module.exports = routes;