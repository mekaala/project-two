const express = require('express')
const Atlanta = require('../models/atlanta.js');
const Region = require('../models/Region.js');
const Area = require('../models/Area.js');
const photoRouter = express.Router()



photoRouter.get('/', (req, res) => {
  Atlanta.find().then(atlanta => {
      res.render('photos/atlanta', { atlanta });
  });
});

photoRouter.get('/:atlantaId', (req, res) => {
  Atlanta.findById(req.params.atlantaId).then(region => {
      res.render('photos/region', { region });
  });
});

photoRouter.get('/new', (req, res) => {
  res.render('photos/newRegionForm');
});
photoRouter.post('/', (req, res) => {
  Atlanta.create(req.body).then(() => {
      res.redirect('/atlanta');
  });
});
module.exports = photoRouter;