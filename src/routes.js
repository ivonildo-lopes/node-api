const express = require('express');
const routes = express.Router();
const productController = require('./controllers/ProductController');

routes.get('/products', productController.findAll);
routes.get('/products/:id', productController.findById);
routes.post('/products', productController.create);
routes.put('/products/:id', productController.update);
routes.delete('/products/:id', productController.delete);

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