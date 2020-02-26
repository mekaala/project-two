const express = require('express')
const app = express()
const methodOverride = require('method-override')

const areaRouter = require('./controllers/area.js')
const regionRouter = require('./controllers/region.js')
// const photoRouter = require('./controllers/photo.js')



app.use(express.urlencoded({extended: true}))

app.use(express.json())

app.use(methodOverride('_method'))

app.use(express.static(__dirname+"/public"))

app.set('view engine', 'hbs')


app.use('/atlanta', regionRouter)
app.use('/atlanta/areas', areaRouter)
// app.use('/atlanta/photos', photoRouter)

const PORT = process.env.PORT || 3000 

app.listen(PORT, () => {
    console.log(`App is listening on PORT ${PORT}`)
})