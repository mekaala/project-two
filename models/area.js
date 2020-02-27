const mongoose = require('../db/connection.js')

const PhotoSchema = new mongoose.Schema({
  photoImg: String
}) 

module.exports = mongoose.model('Photo', PhotoSchema);
const AreaSchema = new mongoose.Schema({
  name: {type: String, required: true},
  place: {type: String, required: true},
  description: {type: String, required: true}, 
  rules: {type: String, required: true}, 
  img: {type: String, required: true},
  photos: [PhotoSchema]
}) 


module.exports = mongoose.model('Area', AreaSchema);
