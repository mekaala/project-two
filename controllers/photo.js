const express = require('express')
const Atlanta = require('../models/atlanta.js');
const Region = require('../models/region.js');
const Area = require('../models/area.js');
const photoRouter = express.Router()



photoRouter.get('/', (req, res) => {
  Atlanta.find().then(atlanta => {
      res.render('photos/atlanta', { atlanta });
  });
});

photoRouter.get('/atlanta/:atlantaId', (req, res) => {
  Region.findById(req.params.atlantaId).then(region => {
      res.render('photos/region', { region });
  });
});

module.exports = photoRouter;