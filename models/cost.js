// Moshe Dego 315044511
// Peleg Vadbeker 209485838
// Eden Blau 208571927
const mongoose = require("mongoose");
const categories = require('../constants/categories.js');

const cost = new mongoose.Schema({
    user_id: {
        type: Number,
        required: true
    },
    year: {
        type: Number,
        required: true
    },
    month: {
        type: Number,
        required: true
    },
    day: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true,
        enum:  categories
    },
    sum: {
        type: Number,
        required: true
    },
});

module.exports = mongoose.model('Cost', cost);