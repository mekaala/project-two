const express = require('express')
const homeRouter = express.Router()

// =========
// HOME PAGE
// =========

homeRouter.get('/', (req,res) => {
    res.render('home/home')
})

module.exports = homeRouter;