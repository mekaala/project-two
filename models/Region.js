const mongoose = require('../db/connection.js')

const RegionSchema = new mongoose.Schema({
  name: {type: String, required: true},
  about: String,
  img: String,
  imgSource: String
}) 


module.exports = mongoose.model('Region', RegionSchema);