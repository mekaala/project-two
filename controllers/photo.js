const express = require('express')
const Atlanta = require('../models/atlanta.js');
const Region = require('../models/region.js');
const Area = require('../models/area.js');
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
  Atlanta.find().then(atlanta => {
      res.render('photos/atlanta', { atlanta });
  });
});

/* Step 6
 *
 * Export the router from the file.
 *
 */
module.exports = photoRouter;
