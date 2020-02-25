const express = require('express')
const app = express()
const methodOverride = require('method-override')

const photoRouter = require('./controllers/photo.js')
// const regionRouter = require('./controllers/region.js')
// const areaRouter = require('./controllers/area.js')



app.use(express.urlencoded({extended: true}))

app.use(express.json())

app.use(methodOverride('_method'))

app.use(express.static(__dirname+"/public"))

app.set('view engine', 'hbs')


app.use('/atlanta', photoRouter)

// app.use('/area', areaRouter)
// app.use('/region', regionRouter)

const PORT = process.env.PORT || 3000 

app.listen(PORT, () => {
    console.log(`App is listening on PORT ${PORT}`)
})