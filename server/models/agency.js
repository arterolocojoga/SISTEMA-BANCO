const mongoose = require('mongoose');

const SCHEMA_AGENCY = new mongoose.Schema({
    number:{
        type: Number,
        required: [true, 'O número da agência é obrigatório'],
    },
    accounts: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'accounts',
    }]
});

module.exports = mongoose.model('agencies', SCHEMA_AGENCY);