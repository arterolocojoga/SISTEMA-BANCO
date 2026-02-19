const mongoose = require('mongoose');
const Account = require('../controllers/accounts');
const { index } = require('../controllers/people');

const SCHEMA_PERSON = new mongoose.Schema({
    name:{
        type: String,
        required: [true, 'O nome é obrigatório'],
        minlength: [4, 'O nome deve conter no mínimo 4 caracteres'],
    },
    CPF:{
        type: String,
        required: [true, 'O CPF é obrigatório'],
    },
    birtday:{
        type: Date,
        required: [true, 'A data de nascimento é obrigatória'],
    },
    cellfone:{
        type: String,
        required: [true, 'O número de celular é obrigatório'],
    },
    Email:{
        type: String,
        required: [true, 'O E-mail é obrigatório'],
    },
    password:{
        type: String,
        required: [true, 'A senha é obrigatória'],
        select: false,
    },
    type:{
        type: String,
        required: [true, 'O tipo é obrigatório'],
    },
    accounts: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'accounts',
    }],
    addresses: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'addresses',
    }],
    position:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'positions',
    }
});


module.exports = mongoose.model('people', SCHEMA_PERSON);