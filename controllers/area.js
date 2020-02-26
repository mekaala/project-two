const express = require('express')
const Area = require('../models/Area.js')
const areaRouter = express.Router()

areaRouter.get('/:name', (req, res) => {
  Area.find({name: req.params.name}).then(areas => {
    console.log(areas);
    res.render('areas/areas', { areas });
  })
  });

areaRouter.get('/area/:areaId', (req, res) => {
  Area.findById(req.params.areaId).then(area => {
    res.render('areas/area', { area })
  })
})

areaRouter.get('/create/new', (req, res) => {
  res.render('areas/newAreaForm');
});
areaRouter.post('/', (req, res) => {
  Area.create(req.body).then(() => {
      res.redirect('/atlanta/areas' + area.name)
  });
});

areaRouter.get('/area/:areaId/edit', (req, res) => {
  let area = null;
  Area.findById(req.params.areaId).then(foundArea => {
    area = foundArea;
  }).then(area => {
    res.render('areas/editAreaForm')
  })
})
areaRouter.put('/area/:areaId', (req, res) => {
  Area.findByIdAndUpdate(req.params.areaId, req.body).then(area => {
    res.redirect('/atlanta/areas/area' + area.id);
  })
})

areaRouter.delete('/area/:areaId', (req, res) => {
  Area.findByIdAndRemove(req.params.areaId).then(() => {
    Area.find({name: req.params.name}).then(() => {
      res.redirect('/atlanta/areas/:name');
    });
  });
});




// areaRouter.post('/', (req, res) => {
//   const regionName = req.params.name;
//   console.log(req.body);
//   const newArea = new Area(req.body)
//   console.log(newArea)
//   Area.findById(req.params.areaId)
//   .then(())
//   Area.create(req.body).then(() => {
//       res.redirect('/atlanta/areas');
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
module.exports = areaRouter;