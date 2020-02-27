const mongoose = require('../db/connection.js')
const Schema = mongoose.Schema;

const AreaSchema = new mongoose.Schema({
  name: {type: String, required: true},
  place: {type: String, required: true},
  description: {type: String, required: true}, 
  rules: {type: String, required: true}, 
  img: {type: String, required: true},
  imgSource: String,
  photos: [{type: Schema.Types.ObjectId, ref: 'Photo'}]
})

module.exports = mongoose.model('Area', AreaSchema);
