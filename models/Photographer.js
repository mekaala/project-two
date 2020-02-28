const mongoose = require('../db/connection.js')

const PhotographerSchema = new mongoose.Schema({
  name: {type: String, required: true},
  insta: String,
  username: String,
  faceImg: String,
  about: String
}) 


module.exports = mongoose.model('Photographer', PhotographerSchema);