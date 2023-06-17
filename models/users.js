// Moshe Dego 315044511
// Peleg Vadbeker 209485838
// Eden Blau 208571927
import mongoose from "mongoose";

const userSchema = {
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
}

export default mongoose.model('Users', userSchema);