const mongoose = require('../db/connection.js')

const PhotoSchema = new mongoose.Schema({
  photoImg: String
}) 


module.exports = mongoose.model('Photo', PhotoSchema);