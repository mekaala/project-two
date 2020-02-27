const express = require('express')
const Area = require('../models/Area')
const areaRouter = express.Router()

areaRouter.get('/index', (req, res) => {
  Area.find().then(places => {
    res.render('areas/index', { places });
  })
});

// =============================
// INDEX OF AREAS BY REGION NAME
// =============================

areaRouter.get('/:name', (req, res) => {
  Area.find({name: req.params.name}).then(areas => {
    console.log(areas);
    res.render('areas/areas', { areas });
  })
});

// ================
// SHOW SINGLE AREA
// ================

areaRouter.get('/area/:areaId', (req, res) => {
  Area.findById(req.params.areaId).then(area => {
    res.render('areas/area', { area })
  })
})

// ===============
// CREATE NEW AREA
// ===============

areaRouter.get('/create/new', (req, res) => {
  res.render('areas/newAreaForm');
});
areaRouter.post('/', (req, res) => {
  Area.create(req.body).then(() => {
      res.redirect('/atlanta/areas/index')
  });
});

// =========
// EDIT AREA
// =========

// areaRouter.get('/area/:areaId/edit', (req, res) => {
//   let area = null;
//   Area.findById(req.params.areaId).then(foundArea => {
//       area = foundArea;
//       return Region.find();
//   }).then(regions => {
//       res.render('areas/editAreaForm', { area, regions });
//   }).catch(e => {
//       // If we get an error in any of the "then" callbacks,
//       // this code will run.
//       console.log(e);
//   })
// })
// areaRouter.put('/area/:areaId', (req, res) => {
//   Area.findByIdAndUpdate(req.params.areaId, req.body).then(area => {
//     res.redirect('/atlanta/areas/area/' + req.params.areaId)
//   })
// })

areaRouter.get('/area/:areaId/edit', (req, res) => {
  Area.findById(req.params.areaId)
  // Photo.findById(req.params.photoId)
  .then(area => {
    res.render('areas/editAreaForm', { area })
  })
})
areaRouter.put('/area/:areaId', (req, res) => {
  Area.findByIdAndUpdate(req.params.areaId, req.body).then(area => {
    res.redirect('/atlanta/areas/area/' + req.params.areaId)
  })
})

// ===========
// DELETE AREA
// ===========

areaRouter.delete('/area/:areaId', (req, res) => {
  Area.findByIdAndRemove(req.params.areaId).then(() => {
    Area.find({name: req.params.name}).then(() => {
      res.redirect('/atlanta/areas/index');
    });
  });
});

module.exports = areaRouter;