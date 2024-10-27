const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const loterySchema = new mongoose.Schema({
  number: { type: Number, required: true, unique: true }
}, { timestamps: true });



module.exports = mongoose.model('Lotery', loterySchema);