const mongoose = require('../db/connection.js')

/* Step 2
 *
 * TODO: create model schema 
 *
 */
const AtlantaSchema = new mongoose.Schema({
  region: String,
  location: String,
})

module.exports = mongoose.model('Atlanta', AtlantaSchema);