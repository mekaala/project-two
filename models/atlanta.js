const mongoose = require('../db/connection.js')


const AtlantaSchema = new mongoose.Schema({
  region: { type: String, required: true },
  area: [ { place: String, description: String, rules: String, img: String } ]
}) 

module.exports = mongoose.model('Atlanta', AtlantaSchema);
