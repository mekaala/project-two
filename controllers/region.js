const express = require('express')
const Region = require('../models/Region.js');
const regionRouter = express.Router()

// ================
// INDEX OF REGIONS
// ================

regionRouter.get('/', (req, res) => {
  Region.find().then(regions => {
      res.render('regions/regions', { regions });
  });
});

// =================
// CREATE NEW REGION
// =================

regionRouter.get('/new', (req, res) => {
  res.render('regions/newRegionForm');
});
regionRouter.post('/', (req, res) => {
  Region.create(req.body).then(() => {
    res.redirect('/atlanta');
  });
});

// ==================
// SHOW SINGLE REGION
// ==================

regionRouter.get('/:regionId', (req, res) => {
  Region.findById(req.params.regionId).then(region => {
    res.render('regions/region', { region })
  })
})

module.exports = regionRouter;