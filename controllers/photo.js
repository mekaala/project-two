const express = require('express')
const PhotoModel = require('../models/photo.js')
const photoRouter = express.Router()

/* Step 4
 * 
 * TODO: Put all request handlers here
 */

/* Step 5
 *
 * TODO: delete this handler; it's just a sample
 */ 
photoRouter.get('/', (req, res) => {
  res.send('hello, world');
})

/* Step 6
 *
 * Export the router from the file.
 *
 */
module.exports = photoRouter;
