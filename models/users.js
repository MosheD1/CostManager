// Moshe Dego 315044511
// Peleg Vadbeker 209485838
// Eden Blau 208571927
const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    id: {
        type: Number,
        required: true,
        unique: true,
    },
    first_name: {
        type: String,
        required: true,
    },
    last_name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    }
});

module.exports = mongoose.model('Users', userSchema);