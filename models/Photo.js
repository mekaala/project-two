const mongoose = require('../db/connection.js')

const PhotoSchema = new mongoose.Schema({
  photoImg: {type: String, required: true},
  photoSource: String
})

module.exports = mongoose.model('Photo', PhotoSchema);