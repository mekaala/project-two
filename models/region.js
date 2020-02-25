const mongoose = require('../db/connection.js')

/* Step 2
 *
 * TODO: create model schema 
 *
 */
const RegionSchema = new mongoose.Schema({
  atlanta: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Atlanta'
  },
  name: {
    type: String,
    required: true
  },
})

module.exports = mongoose.model('Region', RegionSchema);