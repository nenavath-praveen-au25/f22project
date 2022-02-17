const mongoose = require("mongoose");

const detailSchema = new mongoose.Schema({
    userId: { type: String, required: true },
    companyName: {
        type: String,
        required: true
    },
    day: {
        type: Date,
        required: true
    },
    workingHour: {
        type: Number,
    },

}, { timestamps: true });

module.exports = mongoose.model("details", detailSchema);