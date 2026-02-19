const mongoose = require('mongoose');

const SCHEMA_POSITION = new mongoose.Schema({
    nome:{
        type: String,
        required: [true, 'O nome é obrigatório'],
        minlength: [4, 'O nome deve conter no mínimo 4 caracteres'],
    },
    payment:{
        type: Number,
        required: [true, 'O pagamento é obrigatório'],
    },
    rules: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'rules',
    }],
    people: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'people',
    }]
});

module.exports = mongoose.model('positions', SCHEMA_POSITION);