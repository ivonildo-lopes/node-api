const mongoose = require('mongoose');

const CargoDao = mongoose.model('Cargo');

module.exports = {
    async findAll(req, res) {
        const Cargos = await CargoDao.find()
        return res.json(Cargos)
    }, 
    async create(req, res) {
        const Cargo = await CargoDao.create(req.body)
        return res.json(Cargo)
    },

    async findById(req, res) {
        const Cargo = await CargoDao.findById(req.params.id)
        return res.json(Cargo)
    },

    async update(req, res) {
        const Cargo = await CargoDao.findByIdAndUpdate(req.params.id,req.body, { new: true})
        return res.json(Cargo)
    },

    async delete(req, res) {
        await CargoDao.findByIdAndDelete(req.params.id)
        return res.send()
    },
}