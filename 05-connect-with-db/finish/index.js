const express = require('express')
const mongoose = require('mongoose')

const app = express()

mongoose.connect('mongodb://localhost:27017/expressmongo', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

app.set('view engine', 'pug')
app.set('views', __dirname + '/views')

const User = mongoose.model('User', { name: String, age: Number })

app.get('/', (req, res) => {
  User.find((err, docs) => {
    if (err) {
      res.send(err)
    }

    res.render('home', {
      data: docs
    })
  })
})

app.get('/add', (req, res) => {
  const newUser = new User({
    name: 'Yayu',
    age: 12
  })

  newUser.save((err, doc) => {
    if (err) res.send(err)
    res.json(doc)
  })
})

app.listen(1234, () => {
  console.log('app listen on http://localhost:1234')
})
