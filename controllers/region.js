const express = require('express')
const Region = require('../models/Region.js');
const regionRouter = express.Router()

regionRouter.get('/', (req, res) => {
    Region.find().then(regions => {
        res.render('regions/regions', { regions });
    });
  });
  
  regionRouter.get('/new', (req, res) => {
    res.render('regions/newRegionForm');
  });
  regionRouter.post('/', (req, res) => {
    Region.create(req.body).then(() => {
        res.redirect('/atlanta');
    });
  });


module.exports = regionRouter;