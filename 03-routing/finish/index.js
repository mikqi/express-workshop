const express = require('express')
const bodyParser = require('body-parser')
const app = express()

let persons = [
  {
    id: 1,
    name: 'Yayu',
    age: 20
  },
  {
    id: 2,
    name: 'Guyu',
    age: 19
  }
]
const dataIdIsEqual = id => data => Number(data.id) === Number(id)

app.use(bodyParser.urlencoded())

app.get('/api/user', (req, res) => {
  res.status(200).json(persons)
})

app.post('/api/user', (req, res) => {
  console.log(req.body)
  const { name, age } = req.body
  const id = persons.length + 1
  persons = [...persons, { name, age, id }]

  res.status(200).json({
    data: {
      name,
      id,
      age: Number(age)
    },
    message: `Success add ${name} to storage`
  })
})

app.get('/api/user/:id', (req, res) => {
  const id = req.params.id
  const filteredPerson = persons.filter(dataIdIsEqual(id))[0]
  if (filteredPerson) {
    res.status(200).json(filteredPerson)
  }

  res.status(422).json({
    message: `user with id ${id} not found`
  })
})

app.delete('/api/user/:id', (req, res) => {
  const id = req.params.id
  const personIndex = persons.findIndex(dataIdIsEqual(id))
  persons = [...persons.slice(0, personIndex), ...persons.slice(personIndex + 1)]

  res.status(200).json({
    message: `successful delete person with id ${id}`
  })
})

app.put('/api/user/:id', (req, res) => {
  const id = req.params.id
  const personIndex = persons.findIndex(dataIdIsEqual(id))

  if (personIndex > 0) {
    const { name, age } = req.body
    persons[personIndex] = {
      name: name || persons[personIndex].name,
      age: Number(age) || persons[personIndex].age
    }

    res.json(persons[personIndex])
  }

  res.status(404).json({
    message: `user with id ${id} not found`
  })
})

app.listen(3001, () => {
  console.log('app run on http://localhost:3001')
})
