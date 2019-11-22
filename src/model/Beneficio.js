const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const BeneficioSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true
    },
    valor: {
        type: Number,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

BeneficioSchema.plugin(mongoosePaginate);
mongoose.model('Beneficio', BeneficioSchema);