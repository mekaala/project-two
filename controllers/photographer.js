const express = require('express')
const Photographer = require('../models/Photographer')
const photographerRouter = express.Router()

// ======================
// INDEX OF PHOTOGRAPHERS
// ======================

photographerRouter.get('/roster', (req, res) => {
  Photographer.find().then(photographers => {
      res.render('photographers/photographers', { photographers });
  });
});

// =================
// SHOW PHOTOGRAPHER
// =================

photographerRouter.get('/:photographerId', (req, res) => {
    Photographer.findById(req.params.photographerId).then(photographer => {
      res.render('photographers/photographer', { photographer })
    })
  })

// =======================
// CREATE NEW PHOTOGRAPHER
// =======================

photographerRouter.get('/add/new', (req, res) => {
  res.render('photographers/newPhotographerForm');
});
photographerRouter.post('/', (req, res) => {
  Photographer.create(req.body).then(() => {
    res.redirect('/photographers/roster');
  });
});

// =============================
// EDIT PHOTOGRAPHER INFORMATION
// =============================

photographerRouter.get('/:photographerId/edit', (req, res) => {
    Photographer.findById(req.params.photographerId).then(photographer => {
      res.render('photographers/editPhotographerForm', { photographer })
    })
  })
  photographerRouter.put('/:photographerId', (req, res) => {
    Photographer.findByIdAndUpdate(req.params.photographerId, req.body).then(photographer => {
      res.redirect('/photographers/' + req.params.photographerId)
    })
  })

// ===================
// DELETE PHOTOGRAPHER
// ===================

photographerRouter.delete('/:photographerId', (req, res) => {
  Photographer.findByIdAndRemove(req.params.photographerId).then(() => {
      res.redirect('/photographers/roster');
  });
});

module.exports = photographerRouter;