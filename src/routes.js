const express = require('express');
const routes = express.Router();
const productController = require('./controllers/ProductController');
const areaController = require('./controllers/AreaController');
const cargoController = require('./controllers/CargoController');

routes.get('/products', productController.findAll);
routes.get('/products/:id', productController.findById);
routes.post('/products', productController.create);
routes.put('/products/:id', productController.update);
routes.delete('/products/:id', productController.delete);


routes.get('/areas', areaController.findAll);
routes.get('/areas/:id', areaController.findById);
routes.post('/areas', areaController.create);
routes.put('/areas/:id', areaController.update);
routes.delete('/areas/:id', areaController.delete);

routes.get('/cargos', cargoController.findAll);
routes.get('/cargos/:id', cargoController.findById);
routes.post('/cargos', cargoController.create);
routes.put('/cargos/:id', cargoController.update);
routes.delete('/cargos/:id', cargoController.delete);

// const ProductDao = mongoose.model('Product')
// criando rota raiz
routes.get('/', (req, res) => {

    // ProductDao.create({
    //     title: 'Node API',
    //     description: 'primeira api node',
    //     url: 'www.google.com'
    // })

    return res.send('Hello teste')
});


module.exports = routes;