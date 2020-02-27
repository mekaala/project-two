const mongoose = require('../db/connection.js')

const PhotoSchema = new mongoose.Schema({
  photoImg: String
}) 

const AreaSchema = new mongoose.Schema({
  // region: {type: mongoose.Schema.Types.ObjectId, ref: 'Region'},
  name: {type: String, required: true},
  place: {type: String, required: true},
  description: {type: String, required: true}, 
  rules: {type: String, required: true}, 
  img: {type: String, required: true},
  photos: [PhotoSchema]
}) 


module.exports = mongoose.model('Area', AreaSchema);
