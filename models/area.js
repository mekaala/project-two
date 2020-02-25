const mongoose = require('../db/connection.js')

const PhotoSchema = new mongoose.Schema({
  name: String,
})

const AreaSchema = new mongoose.Schema({
  region: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Region'
  },
  name: {
    type: String,
    required: true,
},
  description: {
    type: String,
    required: true,
},  
rules: String,
img: [PhotoSchema]
})



module.exports = mongoose.model('Area', AreaSchema);