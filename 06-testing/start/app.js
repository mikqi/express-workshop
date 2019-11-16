const express = require('express')
const bodyParser = require('body-parser')
const multer = require('multer')

const upload = multer()

const routeAPI = require('./api')

const app = express()

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true
  })
)
app.set('view engine', 'pug')
app.set('views', __dirname + '/views')

app.get('/', (req, res) => {
  res.render('index')
})

app.get('/user/:name', (req, res) => {
  res.render('profile', {
    name: req.params.name
  })
})

app.use('/api', routeAPI)

// Can handle req.body form-data
app.post('/upload', upload.any(), (req, res) => {
  console.log(req.body)
  res.json({
    image: req.files[0]
  })
})

module.exports = app