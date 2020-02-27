const mongoose = require('../db/connection.js')

/* Step 2
 *
 * TODO: create model schema 
 *
 */

const RegionSchema = new mongoose.Schema({
  name: {type: String, required: true},
  about: String,
  img: String
}) 


module.exports = mongoose.model('Region', RegionSchema);