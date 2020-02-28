const express = require('express')
const app = express()
const methodOverride = require('method-override')

const homeRouter = require('./controllers/home')
const regionRouter = require('./controllers/region')
const areaRouter = require('./controllers/area')
const photographerRouter = require('./controllers/photographer')

app.use(express.urlencoded({extended: true}))

app.use(express.json())

app.use(methodOverride('_method'))

app.use(express.static(__dirname+"/public"))

app.set('view engine', 'hbs')

app.use('/', homeRouter)
app.use('/regions', regionRouter)
app.use('/areas', areaRouter)
app.use('/photographers', photographerRouter)

const PORT = process.env.PORT || 3000 

app.listen(PORT, () => {
    console.log(`App is listening on PORT ${PORT}`)
})