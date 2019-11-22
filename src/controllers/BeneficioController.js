const mongoose = require('mongoose');

const BeneficioDao = mongoose.model('Beneficio');

module.exports = {
    async findAll(req, res) {
        const Beneficios = await BeneficioDao.find()

        const { page = 1 } = req.query;
        // const Beneficios = await BeneficioDao.paginate({},{page, limit: 2})

        return res.json(Beneficios)
    },
 
    async create(req, res) {
        const Beneficio = await BeneficioDao.create(req.body)

        return res.json(Beneficio)
    },

    async findById(req, res) {
        const Beneficio = await BeneficioDao.findById(req.params.id)

        return res.json(Beneficio)
    },

    async update(req, res) {
        const Beneficio = await BeneficioDao.findByIdAndUpdate(req.params.id,req.body, { new: true})

        return res.json(Beneficio)
    },

    async delete(req, res) {
        await BeneficioDao.findByIdAndDelete(req.params.id)

        return res.send()
    },
}