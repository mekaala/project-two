const mongoose = require('../db/connection.js')

// const PhotoSchema = new mongoose.Schema({
//   region: {type: mongoose.Schema.Types.ObjectId, ref: 'Region' },
//   place: {type: mongoose.Schema.Types.ObjectId, ref: 'Area' },
//   imgOne: String
// })

const AreaSchema = new mongoose.Schema({
  region: {type: mongoose.Schema.Types.ObjectId, ref: 'Region' },
  name: String,
  place: String, 
  description: String, 
  rules: String, 
  img: String, 
}) 


module.exports = mongoose.model('Area', AreaSchema);