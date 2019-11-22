const mongoose = require('mongoose');

const AreaDao = mongoose.model('Area');

module.exports = {
    async findAll(req, res) {
        // const Areas = await AreaDao.find()

        const { page = 1 } = req.query;
        const Areas = await AreaDao.paginate({},{page, limit: 2})

        return res.json(Areas)
    },
 
    async create(req, res) {
        const Area = await AreaDao.create(req.body)

        return res.json(Area)
    },

    async findById(req, res) {
        const Area = await AreaDao.findById(req.params.id)

        return res.json(Area)
    },

    async update(req, res) {
        const Area = await AreaDao.findByIdAndUpdate(req.params.id,req.body, { new: true})

        return res.json(Area)
    },

    async delete(req, res) {
        await AreaDao.findByIdAndDelete(req.params.id)

        return res.send()
    },
}