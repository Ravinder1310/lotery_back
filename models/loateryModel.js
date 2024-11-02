const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const loterySchema = new mongoose.Schema({
  number1: { type: Number},
  number2: { type: Number},
  number3: { type: Number},
  number4: { type: Number},
  number5: { type: Number},
  number6: { type: Number},
}, { timestamps: true });



module.exports = mongoose.model('Lotery', loterySchema);