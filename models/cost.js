// Moshe Dego 315044511
// Peleg Vadbeker 209485838
// Eden Blau 208571927
import mongoose, { Types } from "mongoose";

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
    id: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    sum: {
        type: Number,
        required: true
    },
});

export default mongoose.model('Cost', cost);