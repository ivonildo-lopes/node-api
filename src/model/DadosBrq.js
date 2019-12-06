const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const Area = require('./Area');
const Cargo = require('./Cargo')


// var Nivel = new Enum({'basico': {id: 1, nome: 'Básico'}}, 
//                      {'intermediario':  {id: 2, nome: 'Intermediario'}},
//                      {'avancado':  {id: 3, nome: 'Avançado'}}
//                     );

const DadosBRQSchema = new mongoose.Schema({
    cpf: {
        type: String,
        required: true
    },
    area: Area,
    cargo: Cargo,
    tipoAlocacaoCliente: String,
    nivel: String,
    salarioBruto: {
        type: Number,
        required: true
    },
    beneficios: {
        type: Number,
        required: true
    },
    horaVendaValor: {
        type: Number,
        required: true
    },
    horaMes: {
        type: Number,
        required: true
    },
    tipoAlocacao: String,
    createdAt: {
        type: Date,
        default: Date.now
    }
});

DadosBRQSchema.plugin(mongoosePaginate);
mongoose.model('DadosBRQ', DadosBRQSchema);