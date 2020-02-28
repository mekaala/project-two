const mongoose = require('../db/connection.js')

const AreaSchema = new mongoose.Schema({
  name: {type: String, required: true},
  place: {type: String, required: true},
  description: {type: String, required: true}, 
  rules: {type: String, required: true}, 
  img: {type: String, required: true},
  imgSource: String,
  imgOne: String,
  sourceOne: String,
  imgTwo: String,
  sourceTwo: String,
  imgThree: String,
  sourceThree: String
})

module.exports = mongoose.model('Area', AreaSchema);
