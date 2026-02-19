const mongoose = require('mongoose');

const SCHEMA_ADDRESS = new mongoose.Schema({
    country:{
        type: String,
        required: [true, 'O país é obrigatório'],
    },
    CEP:{
        type: String,
        required: [true, 'O CEP é obrigatório'],
    },
    city:{
        type: String,
        required: [true, 'A cidade é obrigatória'],
    },
    UF:{
        type: String,
        required: [true, 'A UF é obrigatória'],
    },
    street:{
        type: String,
        required: [true, 'A rua é obrigatória'],
    },
    number:{
        type: String,
        required: [true, 'O número é obrigatório'],
    },
    complement:{
        type: String,
    },
    neighborhood:{
        type: String,
        required: [true, 'O bairro é obrigatório'],
    },
    person:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'people',
    }
});

module.exports = mongoose.model('addresses', SCHEMA_ADDRESS);