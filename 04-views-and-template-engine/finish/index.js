const express = require('express')
const app = express()

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

app.listen(1234, () => {
  console.log('app listen on port http://localhost:1234')
})
