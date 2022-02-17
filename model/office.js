const mongoose = require("mongoose");

const companySchema = new mongoose.Schema({
    companyName: { type: String, required: true, unique: true },
    address: { type: String, required: true },
    companyType: { type: String, required: true },
    password: { type: String, required: true }
}, { timestamps: true });

module.exports = mongoose.model("office", companySchema);