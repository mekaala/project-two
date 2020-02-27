const mongoose = require('../db/connection.js')

/* Step 2
 *
 * TODO: create model schema 
 *
 */

const RegionSchema = new mongoose.Schema({
  name: {type: String, required: true},
  about: {type: String, required: true},
  img: {type: String, required: true},
  imgSource: {type: String, required: true},
  
}) 


module.exports = mongoose.model('Region', RegionSchema);