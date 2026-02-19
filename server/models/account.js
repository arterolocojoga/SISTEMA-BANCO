const mongoose = require('mongoose');

const SCHEMA_ACCOUNT = new mongoose.Schema({
    number:{
        type: Number,
        required: [true, 'O número da conta é obrigatório'],
    },
    balance:{
        type: Number,
        required: [true, 'O saldo é obrigatório'],
    },
    date:{
        type: Date,
        required: [true, 'A data de criação é obrigatória'],
    },
    person:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'people',
    }
});

module.exports = mongoose.model('accounts', SCHEMA_ACCOUNT);