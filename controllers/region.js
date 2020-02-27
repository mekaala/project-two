const express = require('express')
const Region = require('../models/Region')
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

// ===========
// EDIT REGION
// ===========

regionRouter.get('/:regionId/edit', (req, res) => {
  Region.findById(req.params.regionId).then(region => {
    res.render('regions/editRegionForm', { region })
  })
})
regionRouter.put('/:regionId', (req, res) => {
  Region.findByIdAndUpdate(req.params.regionId, req.body).then(region => {
    res.redirect('/atlanta/' + req.params.regionId)
  })
})

// =============
// DELETE REGION
// =============

regionRouter.delete('/:regionId', (req, res) => {
  Region.findByIdAndRemove(req.params.regionId).then(() => {
    Region.find({name: req.params.name}).then(() => {
      res.redirect('/atlanta');
    });
  });
});

// ===========
// SHOW REGION
// ===========

regionRouter.get('/:regionId', (req, res) => {
  Region.findById(req.params.regionId).then(region => {
    res.render('regions/region', { region })
  })
})

module.exports = regionRouter;