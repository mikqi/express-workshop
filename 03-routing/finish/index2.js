const express = require('express')
const bodyParser = require('body-parser')

const routeAPI = require('./api')

const app = express()

app.use(bodyParser.urlencoded())

app.use('/api', routeAPI)

app.listen(3001, () => {
  console.log('app run on http://localhost:3001')
})
