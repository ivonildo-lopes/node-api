const mongoose = require('mongoose');

const productDao = mongoose.model('Product');

module.exports = {
    async findAll(req, res) {
        // const products = await productDao.find()

        const { page = 1 } = req.query;
        const products = await productDao.paginate({},{page, limit: 2})

        return res.json(products)
    },
 
    async create(req, res) {
        const product = await productDao.create(req.body)

        return res.json(product)
    },

    async findById(req, res) {
        const product = await productDao.findById(req.params.id)

        return res.json(product)
    },

    async update(req, res) {
        const product = await productDao.findByIdAndUpdate(req.params.id,req.body, { new: true})

        return res.json(product)
    },

    async delete(req, res) {
        await productDao.findByIdAndDelete(req.params.id)

        return res.send()
    },
}