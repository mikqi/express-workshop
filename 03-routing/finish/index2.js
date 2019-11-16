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

app.use('/api', routeAPI)

// Can handle req.body form-data
app.post('/upload', upload.any(), (req, res) => {
  console.log(req.body)
  res.json({
    image: req.files[0]
  })
})

app.listen(3001, () => {
  console.log('app run on http://localhost:3001')
})
