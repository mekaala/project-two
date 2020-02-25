const express = require('express')
const Atlanta = require('../models/atlanta.js');
const Region = require('../models/Region.js');
const Area = require('../models/Area.js');
const photoRouter = express.Router()



photoRouter.get('/', (req, res) => {
  Area.find().then(atlanta => {
      res.render('photos/atlanta', { atlanta });
  });
});

photoRouter.get('/:regionId', (req, res) => {
  Area.find({region: req.params.regionId}).then(areas => {
    console.log(areas);
    res.render('photos/region', { areas });
  })
  });

photoRouter.get('/area/:areaId', (req, res) => {
  Area.findById(req.params.areaId).then(area => {
    res.render('photos/area', { area })
  })
})

photoRouter.get('/new', (req, res) => {
  res.render('photos/newRegionForm');
});
photoRouter.post('/', (req, res) => {
  Area.create(req.body).then(() => {
      res.redirect('/atlanta');
  });
});

// photoRouter.get('/:atlantaId/new', (req, res) => {
//   res.render('photos/newAreaForm');
// });
// photoRouter.post('/', (req, res) => {
//   Atlanta.create(req.body).then(() => {
//       res.redirect('/atlanta');
//   });
// });


// photoRouter.get('/:atlantaId', (req, res) => {
//   Atlanta.findById(req.params.atlantaId).populate('area').then(area => {
//     res.send(area)
//       // res.render('photos/area', { area });
//   });
// });


// photoRouter.get('/:atlantaId', (req, res) => {
//   Area.find({region: req.params.atlantaId}).then(areas => {
//     res.render(areas)
//   }
// })
module.exports = photoRouter;