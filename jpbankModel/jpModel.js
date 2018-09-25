const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const bankSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    accountBalance: {
        type: Number,
        required: true
    },
});

module.exports = mongoose.model('bank', bankSchema);