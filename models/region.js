const mongoose = require('../db/connection.js')

/* Step 2
 *
 * TODO: create model schema 
 *
 */

const RegionSchema = new mongoose.Schema({
  region: String,
  name: String
}) 


module.exports = mongoose.model('Region', RegionSchema);