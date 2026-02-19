const mongoose = require('mongoose');

const SCHEMA_RULE = new mongoose.Schema({
    description:{
        type: String,
        required: [true, 'A descrição é obrigatória'],
    },
    allowed:{
        type: Boolean,
        required: [true, 'A permissão é obrigatória'],
    },
    positions:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'positions',
    }]
});

module.exports = mongoose.model('rules', SCHEMA_RULE);