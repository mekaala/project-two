const mongoose = require('../db/connection.js')

// const PhotoSchema = new mongoose.Schema({
//   region: {type: mongoose.Schema.Types.ObjectId, ref: 'Region' },
//   place: {type: mongoose.Schema.Types.ObjectId, ref: 'Area' },
//   imgOne: String
// })

const AreaSchema = new mongoose.Schema({
  region: {type: mongoose.Schema.Types.ObjectId, ref: 'Region'},
  place: {type: String, required: true},
  description: {type: String, required: true}, 
  rules: {type: String, required: true}, 
  img: {type: String, required: true}
  // photo: [PhotoSchema]
}) 


module.exports = mongoose.model('Area', AreaSchema);