const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const AreaSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

AreaSchema.plugin(mongoosePaginate);
mongoose.model('Area', AreaSchema);