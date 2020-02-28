const express = require('express')
const app = express()
const methodOverride = require('method-override')

const areaRouter = require('./controllers/area')
const regionRouter = require('./controllers/region')
const photographerRouter = require('./controllers/photographer')



app.use(express.urlencoded({extended: true}))

app.use(express.json())

app.use(methodOverride('_method'))

app.use(express.static(__dirname+"/public"))

app.set('view engine', 'hbs')


app.use('/', regionRouter)
app.use('/areas', areaRouter)
app.use('/photographers', photographerRouter)

const PORT = process.env.PORT || 3000 

app.listen(PORT, () => {
    console.log(`App is listening on PORT ${PORT}`)
})