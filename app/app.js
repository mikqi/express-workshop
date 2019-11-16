const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const routes = require('./routes')

const app = express()

mongoose.connect('mongodb://localhost:27017/expressmongo', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
mongoose.connection.on('error', () => {
  console.log('Please make sure that MongoDB is running.')
  process.exit(1)
})

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true
  })
)
app.set('view engine', 'pug')
app.set('views', __dirname + '/views')
app.use(routes)

module.exports = app
