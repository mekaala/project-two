const mongoose = require('../db/connection.js')

const PhotoSchema = new mongoose.Schema({
  photoImg: {type: String, required: true},
  photoSource: {type: String, required: true}
}) 

const AreaSchema = new mongoose.Schema({
  // region: {type: mongoose.Schema.Types.ObjectId, ref: 'Region'},
  name: {type: String, required: true},
  place: {type: String, required: true},
  description: {type: String, required: true}, 
  rules: {type: String, required: true}, 
  img: {type: String, required: true},
  imgSource: {type: String, required: true},
  photos: [PhotoSchema]
}) 


module.exports = mongoose.model('Area', AreaSchema);
