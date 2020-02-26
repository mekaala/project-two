const mongoose = require('../db/connection.js')

const PhotoSchema = new mongoose.Schema({
  place: {type: String, required: true}, 
  description: {type: String, required: true}, 
  rules: {type: String, required: true}, 
  img: {type: String, required: true},
  imgOne: String,
  imgTwo: String,
  imgThree: String
}) 


module.exports = mongoose.model('Area', PhotoSchema);