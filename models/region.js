const mongoose = require('../db/connection.js')

/* Step 2
 *
 * TODO: create model schema 
 *
 */
const RegionSchema = new mongoose.Schema({
  area: {
    type: String,
    required: true,
  },
  photo: String
})

module.exports = mongoose.model('Region', RegionSchema);