const mongoose = require('../db/connection.js')

/* Step 2
 *
 * TODO: create model schema 
 *
 */
const AreaSchema = new mongoose.Schema({
  name: String,
  description: String,
  rules: String,
  photo: String
})

module.exports = mongoose.model('Area', AreaSchema);