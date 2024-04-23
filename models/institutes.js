const mongoose = require('mongoose');


const instituteSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true, 
  },
  password: {
    type: String,
    required: true,
  },
});


const Institute = mongoose.model('Institute', instituteSchema);

module.exports = Institute;
