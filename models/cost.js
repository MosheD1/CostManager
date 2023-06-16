import mongoose from "mongoose";

const cost = new mongoose.Schema({
    user_id: Number,
    year: Number,
    month: Number,
    day: Number,
    id: Number,
    description: String,
    category: String,
    sum: Number,
});

export default mongoose.model('Cost', cost);