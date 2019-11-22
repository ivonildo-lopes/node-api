const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');
const Area = require('./Area')

const CargoSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true
    },
    area: Area,
    custoOnSiteBasico: {
        type: Number,
        required: true
    },
    custoOnSiteIntermediario: {
        type: Number,
        required: true
    },
    custoOnSiteAvancado: {
        type: Number,
        required: true
    },
    custoOffSiteBasico: {
        type: Number,
        required: true
    },
    custoOffSiteIntermediario: {
        type: Number,
        required: true
    },
    custoOffSiteAvancado: {
        type: Number,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

CargoSchema.plugin(mongoosePaginate);
mongoose.model('Cargo', CargoSchema);