const mongoose = require('../db/connection.js')

/* Step 2
 *
 * TODO: create model schema 
 *
 */
const PhotoSchema = new mongoose.Schema({
  name: String
})

module.exports = mongoose.model('Photo', PhotoSchema);